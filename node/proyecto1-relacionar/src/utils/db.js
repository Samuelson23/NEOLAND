// NOS TRAEMOS LAS LIBRERIAS DE dotenv y mongoose. CONFIGURAMOS dotenv Y OBTENEMOS LA MONGO_URI.
//DESPUES CREAMOS LA FUNCIÓN connect() QUE SERÁ LA ENCARGADA DE CONECTAR LA DB AL SERVIDOR

const dotenv = require("dotenv");
const mongoose = require("mongoose");
dotenv.config();

const MONGO_URI = process.env.MONGO_URI;

const connect = async () => {
  try {
    const db = await mongoose.connect(MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    const { name, host } = db.connection;
    console.log(`✅ DB connected ✅ name: ${name} port: ${host}`);
  } catch (error) {
    console.log(error);
    console.log("❌ DB is not connected ❌");
  }
};

module.exports = { connect };
