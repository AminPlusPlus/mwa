const express = require("express");
const app = express();
const Joi = require("@hapi/joi");

app.use(express.json());

const courses = [
  { id: 1, name: "course1" },
  { id: 2, name: "course2" },
  { id: 3, name: "course3" },
];

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.get("/write/:name/:surname", (req, res) => {
  res.send(req.params);
});

app.get("/courses", (req, res) => {
  if (req.query.byId) {
    console.log(req.query);

    const courseById = courses.find((c) => c.id === parseInt(req.query.byId));
    if (courseById) res.send(courseById);
    else res.status(404).send("Not Found");
  }
  res.send(courses);
});

app.post("/courses", (req, res) => {
  const result = validateParamName(req.body);
  if (result.error) return res.send(result.error.details[0].message);

  const name = req.body.name;
  const newCourse = { id: courses.length + 1, name: name };
  courses.push(newCourse);
  res.send(newCourse);
});

app.put("/courses/:id", (req, res) => {
  const id = req.params.id;

  const currCourse = courses.find((c) => c.id == parseInt(id));
  const body = req.body;
  if (!currCourse) return res.status(404).send("Not Found");

  const { error } = validateParamName(body);
  if (error) return res.status(400).send(result.error.details[0].message);

  currCourse.name = body.name;
  res.send(currCourse);
});

app.delete("/courses/:id", (req, res) => {
  const id = req.params.id;

  const currCourse = courses.find((c) => c.id == parseInt(id));
  const body = req.body;

  if (!currCourse) return res.status(404).send("Not Found");

  const index = courses.indexOf(currCourse);
  courses.splice(index, 1);

  res.send(currCourse);
});

function validateParamName(name) {
  const schema = Joi.object({ name: Joi.string().min(3).required() });
  return schema.validate(name);
}

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Listening starting at ${port}`);
});
