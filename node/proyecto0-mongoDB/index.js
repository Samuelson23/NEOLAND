const express = require("express");
const { connect } = require("./src/utils/db");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const nodemailer = require("nodemailer");
const { configCloudinary } = require("./src/middleware/files.middleware");

connect();
const PORT = process.env.PORT;
const server = express();
configCloudinary();
//metemos limite de tráfico de datos para evitar ataques y que nos jodan cloudinary o mongoDB
/* server.use(express.json({ limit: "5mb" }));
server.use(express.urlencoded({ limit: "5mb", extended: true })); */
server.use(express.json({ limit: "5mb" }));
server.use(express.urlencoded({ limit: "5mb", extended: true }));

//añadimos nodemailer
//--------------------------------------------------------
const router = express.Router();
router.get("/sendNewMail", (req, res, next) => {
  const email = process.env.EMAIL;
  const password = process.env.PASSWORD;

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: email,
      pass: password,
    },
  });
  const mailOptions = {
    from: email,
    to: "3samuelmg@gmail.com",
    subject: "prueba",
    text: "enviado correctamente",
  };
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      return next(error);
    } else {
      return res.status(200).json("Email sent: " + info.response);
    }
  });
});

server.use("/", router);
//----------------------------------------------------------------

//---------- RUTAS, CONTROLADORES Y MODELOS----------------------
const HeroeRoutes = require("./src/api/routes/Heroe.routes");

server.use("/api/v1/heroe", HeroeRoutes);

//error por si no se mete bien la ruta
server.use("*", (req, res, next) => {
  const error = new Error("Route not found");
  error.status = 404;
  return next(error);
});
//error del status 500 por si falla
server.use((error, req, res) => {
  return res
    .status(error.status || 500)
    .json(error.message || "Unexpected error");
});
server.listen(PORT, () => {
  console.log(`🎧 Escuchando en el puerto ${PORT}`);
});
