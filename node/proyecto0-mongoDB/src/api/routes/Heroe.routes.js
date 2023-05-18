const { upload } = require("../../middleware/files.middleware");
const {
  create,
  getAll,
  getById,
  getByName,
  updateHeroe,
  deleteHeroe,
} = require("../controllers/Heroe.controllers");
const Heroe = require("../models/Heroe.models");
const HeroeRoutes = require("express").Router();

HeroeRoutes.post("/", upload.single("image"), create);
HeroeRoutes.get("/", getAll);
HeroeRoutes.get("/:id", getById);
HeroeRoutes.get("/name/:name", getByName);
HeroeRoutes.patch("/:id", upload.single("image"), updateHeroe);
HeroeRoutes.delete("/:id", deleteHeroe);
module.exports = HeroeRoutes;
