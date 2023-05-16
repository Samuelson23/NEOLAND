//Requerimos dotenv para traaer la URL y lo configuramos
const dotenv = require("dotenv");
dotenv.config();

//traemos la libreria mongoose que controlará la DB de MongoDB
const mongoose = require("mongoose");

//traemos la url de la BD de MongoDB
const MONGO_URI = process.env.MONGO_URI;

//hacemos la funcion que se exporta

const connect = async () => {
  try {
    const db = await mongoose.connect(MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    const { name, host } = db.connection;
    console.log(`Conectada la DB 👍 En el puerto: ${host} y nombre: ${name}`);
  } catch (error) {
    console.log("No se ha podido conectar la DB ❌");
  }
};

module.exports = { connect };
