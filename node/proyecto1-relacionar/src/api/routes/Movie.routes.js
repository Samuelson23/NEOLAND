const express = require("express");
const {
  create,
  getAll,
  getById,
  getByName,
  deleteMovie,
  updateMovie,
} = require("../controllers/Movie.controllers");
const Movie = require("../models/Movie.model");

const MovieRoutes = express.Router();

MovieRoutes.post("/", create);
MovieRoutes.get("/", getAll);
MovieRoutes.get("/:id", getById);
MovieRoutes.get("/name/:name", getByName);
MovieRoutes.delete("/:id", deleteMovie);
MovieRoutes.patch("/:id", updateMovie);

module.exports = MovieRoutes;
