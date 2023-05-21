// IMPORTAMOS LA LIBRERIA mongoose PARA PODER HACER EL CONSTRUCTOR .Schema
// CREAMOS LA ARQUITECTURA DE DATOS QUE TIENE QUE TENER EL OBJETO HEROE

const mongoose = require("mongoose");

const MovieSchema = new mongoose.Schema(
  {
    name: { type: String, required: true, unique: true },
    year: { type: Number, required: true },
    characters: { type: mongoose.Schema.Types.ObjectId, ref: "Character" },
    //users: [{ type: mongoose.Schema.Types.ObjectId, ref: "User" }],
  },
  {
    timestamps: true,
  }
);

const Movie = mongoose.model("Movie", MovieSchema);

module.exports = Movie;
