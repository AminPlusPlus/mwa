/**
 * CRUD-Operation of Movie
 * @author Aminjoni Abdullozoda
 */
const express = require("express");
const Joi = require("@hapi/joi");
const route = express.Router();

const dummyMovies = [
  { id: 1, name: "John Legen", rate: 3.4 },
  { id: 2, name: "Titanic", rate: 4.4 },
  { id: 3, name: "Fast Furious", rate: 4.1 },
];

/**
 * Get All Movies
 */
route.get("/", (req, res) => {
  res.send(dummyMovies);
});

/**
 * Get by id movie
 */
route.get("/:id", (req, res) => {
  console.log(req.params);

  const paramId = req.params.id;
  if (paramId) {
    const movie = dummyMovies.find((c) => c.id === parseInt(paramId));
    if (movie) res.send(movie);
    else res.status(404).send({ message: `Movie Not Found ${paramId}` });
  }
});

/**
 * Creare new Movie
 */
route.post("/", (req, res) => {
  const sceheme = Joi.object({
    name: Joi.string().min(3).required(),
    rate: Joi.number().required(),
  });

  const result = sceheme.validate(req.body);

  if (result.error) {
    return res
      .status(400)
      .send({ message: `${result.error.details[0].message}` });
  }

  const newMovie = {
    id: dummyMovies.length + 1,
    name: req.body.name,
    rate: req.body.rate,
  };

  dummyMovies.push(newMovie);

  res.send(newMovie);
});

module.exports = route;
