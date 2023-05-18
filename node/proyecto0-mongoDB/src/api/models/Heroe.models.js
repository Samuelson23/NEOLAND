// IMPORTAMOS LA LIBRERIA mongoose PARA PODER HACER EL CONSTRUCTOR .Schema
// CREAMOS LA ARQUITECTURA DE DATOS QUE TIENE QUE TENER EL OBJETO HEROE

const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const heroeSchema = new Schema(
  {
    name: { type: String, required: true },
    race: { type: String, required: true },
    gender: { type: String, enum: ["Male", "Female"], required: true },
    faction: { type: String, required: true },
    description: { type: String, required: true },
    habilities: { type: String },
    image: { type: String, required: true },
  },
  {
    timestamps: true,
  }
);

const Heroe = mongoose.model("Heroe", heroeSchema);
module.exports = Heroe;
