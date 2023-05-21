const mongoose = require("mongoose");

const CharacterSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    gender: { type: String, required: true },
    image: { type: String },
    movies: [{ type: mongoose.Schema.Types.ObjectId, ref: "Movie" }],
  },
  {
    timestamps: true,
  }
);

const Character = mongoose.model("Character", CharacterSchema);
module.exports = Character;
