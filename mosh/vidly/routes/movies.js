/**
 * CRUD Operation of Movie
 * @author Aminjoni Abdullozoda
 */
const express = require("express");
const route = express.Router();

const dummyMovies = [
  { id: 1, name: "John Legen", rate: 3.4 },
  { id: 2, name: "Titanic", rate: 4.4 },
  { id: 3, name: "Fast Furious", rate: 4.1 },
];

/**
 * Get All Movies
 */
route.get("/movies", (req, res) => {
  res.send(dummyMovies);
});

/**
 * Get by id movie
 */
route.get("/movies/:id", (req, res) => {
  console.log(req.params);

  const paramId = req.params.id;
  if (paramId) {
    const movie = dummyMovies.find((c) => c.id === parseInt(paramId));
    if (movie) res.send(movie);
    else res.status(404).send({ message: `Movie Not Found ${paramId}` });
  }
});

module.exports = route;
