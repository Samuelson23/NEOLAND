//1º requerimos dotenv para traernos la url y el puerto
const dotenv = require("dotenv");
//2º hay que configurar dotenv siempre
dotenv.config();
//3º requerimos mongoose que es quien controla la DDBB de MongoDB
const mongoose = require("mongoose");
//4º nos traemos la MONGO_URI del archivo .env
//para traer datos de dotenv se usa "process.env.DATO", tanto la url como el puerto van en mayusculas
const MONGO_URI = process.env.MONGO_URI;
//5º creamos la funcion que se exporta que conecta mongoDB

const connect = async () => {
  try {
    const db = await mongoose.connect(MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    const { name, host } = db.connection;

    console.log(`Conectada la DDBB 👍 host: ${host} nombre: ${name}`);
  } catch (error) {
    console.log("No se ha podido conectar la DDBB ❌");
    console.log(error);
  }
};

module.exports = { connect };
