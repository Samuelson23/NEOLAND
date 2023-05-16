const mongoose = require("mongoose");

//Una vez importada la libreria mongoose tenemos que crear el esquema de los datos.

const Schema = mongoose.Schema;

//Este es el esquema que tienen que tener los datos. El "caracter" tiene que tener un nombre y un genero obligatorio (debido el required:true)
const characterSchema = new Schema(
  {
    name: { type: String, required: true },
    gender: { type: String, enum: ["male", "female"], required: true },
    age: { type: Number },
  },
  {
    timestamps: true,
  }
);

//Una vez creado el esquema de datos, debemos crear el modelo. En el modelo le metemos el nombre y su deficinicion (el esquema creado con la clase Schema)

const Character = mongoose.model("Character", characterSchema);
module.exports = Character;

//Los modelos los importan los controllers
