const {
  updateCharacter,
  getAll,
  getById,
  getByName,
  deleteCharacter,
  create,
} = require("../controllers/Character.controllers");
const express = require("express");

const CharacterRoutes = express.Router();

CharacterRoutes.post("/", create);
CharacterRoutes.get("/", getAll);
CharacterRoutes.get("/:id", getById);
CharacterRoutes.get("/name/:name", getByName);
CharacterRoutes.patch("/:id", updateCharacter);
CharacterRoutes.delete("/:id", deleteCharacter);

module.exports = CharacterRoutes;
