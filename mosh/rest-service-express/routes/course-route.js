const express = require("express");
const Joi = require("@hapi/joi");
const router = express.Router();

const courses = [
  { id: 1, name: "course1" },
  { id: 2, name: "course2" },
  { id: 3, name: "course3" },
];

router.get("/", (req, res) => {
  if (req.query.byId) {
    const courseById = courses.find((c) => c.id === parseInt(req.query.byId));
    if (courseById) res.send(courseById);
    else res.status(404).send("Not Found");
  }
  res.send(courses);
});

router.get("/:id", (req, res) => {
  const id = req.params.id;
  const courseById = courses.find((c) => c.id === parseInt(id));

  if (courseById) res.send(courseById);
  else res.status(404).send({ message: `Not Found ${id}` });
});

router.post("/", (req, res) => {
  const result = validateParamName(req.body);
  if (result.error) return res.send(result.error.details[0].message);

  const name = req.body.name;
  const newCourse = { id: courses.length + 1, name: name };
  courses.push(newCourse);
  res.send(newCourse);
});

router.put("/:id", (req, res) => {
  const id = req.params.id;

  const currCourse = courses.find((c) => c.id == parseInt(id));
  const body = req.body;
  if (!currCourse) return res.status(404).send("Not Found");

  const { error } = validateParamName(body);
  if (error) return res.status(400).send(result.error.details[0].message);

  currCourse.name = body.name;
  res.send(currCourse);
});

router.delete("/:id", (req, res) => {
  const id = req.params.id;

  const currCourse = courses.find((c) => c.id == parseInt(id));

  if (!currCourse) return res.status(404).send("Not Found");

  const index = courses.indexOf(currCourse);
  courses.splice(index, 1);

  res.send(currCourse);
});

function validateParamName(name) {
  const schema = Joi.object({ name: Joi.string().min(3).required() });
  return schema.validate(name);
}

module.exports = router;
