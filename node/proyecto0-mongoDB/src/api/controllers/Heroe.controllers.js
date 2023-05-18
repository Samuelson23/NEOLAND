const { deleteImgCloudinary } = require("../../middleware/files.middleware");
const Heroe = require("../models/Heroe.models");

//----------------METODO POST

const create = async (req, res, next) => {
  //Heroe.syncIndexes();
  console.log(req.body);
  try {
    await Heroe.syncIndexes(); //actualiza los indexes por el tema de los valores unicos
    const newHeroe = new Heroe(req.body); // Creamos un newHeroe en base al model Heroe que hemos importado (nombre,raza,faccion,imagen...etc)
    newHeroe.image = req.file.path; // Esta es la ruta para la imagen, sino cogeria el objeto entero de file y no la URL en sí
    const saveHeroe = await newHeroe.save(); // Guardamos el newHeroe

    //controlamos que el newHeroe se haya guardado, de ser asi sera una res 200 y sino es una res 404 (not found)
    saveHeroe
      ? res.status(200).json(saveHeroe)
      : res.status(404).json("No se ha podido guardar el heroe");
  } catch (error) {
    deleteImgCloudinary(req.file.path); //si nos da error igualmente sube la imagen, con esto la borramos de cloudinary para no petarlo de imagenes que se han subido mal
    return next(error); // Si hubiera un error next(error) nos lo guardaria en el log pero no se interrumpe la ejecucion
  }
};

const getAll = async (req, res, next) => {
  //el metodo .find() nos va a traer TODOS los elementos que haya en Heroe
  try {
    const allHeroe = await Heroe.find();
    if (allHeroe) {
      return res.status(200).json(allHeroe);
    } else {
      return res.status(404).json("no se ha encontrado ningun heroe");
    }
  } catch (error) {
    return next(error);
  }
};

const getById = async (req, res, next) => {
  try {
    const { id } = req.params;
    const heroeById = await Heroe.findById(id);

    if (heroeById) {
      return res.status(200).json(heroeById);
    } else {
      return res.status(404).json("No se ha encontrado la id");
    }
  } catch (error) {
    return next(error);
  }
};

const getByName = async (req, res, next) => {
  try {
    const { name } = req.params;
    const heroeByName = await Heroe.find(name);
    if (heroeByName) {
      return res.status(200).json(heroeByName);
    } else {
      return res.status(404).json("No se ha encontrado a nadie con ese nombre");
    }
  } catch (error) {
    return next(error);
  }
};

const updateHeroe = async (req, res, next) => {
  try {
    const { id } = req.params;
    const heroeById = await Heroe.findById(id);
    const oldImg = heroeById.image;

    if (heroeById) {
      const updatedHeroe = new Heroe(req.body);
      updatedHeroe._id = id;

      if (req.file) {
        updatedHeroe.image = req.file.path;
      } else {
        updatedHeroe.image = oldImg;
      }

      const saveHeroe = await Heroe.findByIdAndUpdate(id, updatedHeroe);

      if (saveHeroe) {
        deleteImgCloudinary(oldImg);
        return res.status(200).json(await Heroe.findById(id));
      } else {
        return res.status(404).json("No se han actualizado los datos");
      }
    } else {
      return res.status(404).json("No se ha encontrado el heroe con esa ID");
    }
  } catch (error) {
    return next(error);
  }
};

const deleteHeroe = async (req, res, next) => {
  try {
    const { id } = req.params;
    const deleteHeroe = await Heroe.findByIdAndDelete(id);

    if (deleteHeroe) {
      (await Heroe.findById(id))
        ? next("Error en el borrado de la imagen")
        : deleteImgCloudinary(deleteHeroe.image);
      return res.status(200).json({
        deleteObject: deleteHeroe,
        test: (await Heroe.findById(id))
          ? "No se ha podido borrar el heroe"
          : "Borrado",
      });
    } else {
      return res.status(404).json("No se ha encontrado el heroe");
    }
  } catch (error) {
    return next(error);
  }
};
module.exports = {
  create,
  getAll,
  getById,
  getByName,
  updateHeroe,
  deleteHeroe,
};
