// Creamos el servidor web y lo conectamos a la DB mediante el puerto 8080

const { connect } = require("./api/utils/db");
const express = require("express");
const dotenv = require("dotenv");
const mongoose = require("mongoose");

const PORT = process.env.PORT;
const server = express();

server.listen(PORT, () => {
  console.log(`Escuchando en el puerto ${PORT}`);
});

connect();
