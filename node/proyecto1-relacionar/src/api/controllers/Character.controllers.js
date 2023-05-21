const { deleteImgCloudinary } = require("../../middleware/files.middleware");
const Character = require("../models/Character.model");
const Movie = require("../models/Movie.model");

//-----POST-----
const create = async (req, res, next) => {
  let image = req.file?.path;
  try {
    //await Character.syncIndexes(); //actualizamos los indexes para limpiarlos de la DB

    const filterBody = {
      name: req.body.name,
      gender: req.body.name,
    };

    const newCharacter = new Character(filterBody);

    const { movies } = req.body;
    const arraymovies = movies.split(",");
    console.log(arraymovies);
    arraymovies.forEach((item) => {
      newCharacter.movies.push(item);
    });

    if (req.file) {
      newCharacter.image = image;
    } else {
      newCharacter.image =
        "https://res.cloudinary.com/dy25vd1yu/image/upload/v1684685173/png-clipart-user-profile-computer-icons-login-user-avatars-monochrome-black-thumbnail_qxkkqj.png";
    }

    const saveCharacter = await newCharacter.save();

    if (saveCharacter) {
      arraymovie.forEach(async (itemId) => {
        const movieById = await Movie.findById(itemId);
        await movieById.updateOne({
          $push: { characters: saveCharacter._id },
        });
      });
      const testMovie = await Movie.find({ character: saveCharacter._id });
      return res.status(200).json({
        newCharacter: saveCharacter,
        movieUpdate:
          testMovie.length == arraymovie.length
            ? "peliculas actualizadas"
            : "peliculas no actualizadas",
      });
    } else {
      return res.status(404).json("No se ha podido subir el character");
    }
  } catch (error) {
    //deleteImgCloudinary(image);
    next(error);
  }
};

//------ GET ALL -----

const getAll = async (req, res, next) => {
  try {
    const allCharacters = await Character.find().populate("movie"); //usamos populate para que nos muestre el objeto completo de la pelicula, sino mostraria el id

    if (allCharacters) {
      return res.status(200).json(allCharacters);
    } else {
      return res.status(404).json("No se han encontrado");
    }
  } catch (error) {
    next(error);
  }
};

//----- GET BY ID -----
const getById = async (req, res, next) => {
  try {
    const { id } = req.params;
    const characterById = await Character.find(id);
    if (characterById) {
      return res.status(200).json(characterById);
    } else {
      return res
        .status(404)
        .json("No se ha encontrado ningun character con esa ID");
    }
  } catch (error) {
    return next(error);
  }
};

//----- GET BY NAME -----

const getByName = async (req, res, next) => {
  try {
    const { name } = req.params;
    const characterByName = await Character.find({ name });

    if (characterByName) {
      return res.status(200).json(characterByName);
    } else {
      return res
        .status(404)
        .json("No se ha encontrado ningun character con ese nombre");
    }
  } catch (error) {
    return next(error);
  }
};

//----- UPDATE -----

const updateCharacter = async (req, res, next) => {
  let image = req.file?.path;
  try {
    const { id } = req.params;
    const characterById = await Character.find(id);
    const oldImg = characterById.image;

    if (characterById) {
      const updatedCharacter = new Character(req.body);
      updateCharacter._id = id;
      if (req.file) {
        updateCharacter.image = req.file.path;
      } else {
        updateCharacter.image = oldImage;
      }

      const saveCharacter = await Character.findByIdAndUpdate(
        id,
        updatedCharacter
      );
      if (saveCharacter) {
        //deleteImgCloudinary(oldImg);
        return res.status(200).json(saveCharacter);
      } else {
        return res.status(404).json("No se ha podido actualizar");
      }
    } else {
      return res
        .status(404)
        .json("No se ha encontrado ningun character con esa ID");
    }
  } catch (error) {
    //req.file && deleteImgCloudinary(image);
    return next(error);
  }
};

//----- DELETE -----

const deleteCharacter = async (req, res, next) => {
  try {
    const { id } = req.params;
    const deleteCharacter = await Character.findByIdAndDelete(id);
    if (deleteCharacter) {
      if (await Character.findById(id)) {
        next("Error en el borrado (imagen no borrada)");
      } else {
        //deleteImgCloudinary(deleteCharacter.image);
        await Movie.updateMany(
          { characters: id },
          { $pull: { characters: id } }
        );
      }
      return res.status(200).json({
        deleteChar: deleteCharacter,
        test: (await Character.findById(id))
          ? "no se ha borrado bien"
          : "borrado bien",
      });
    } else {
      return res.status(404).json("No se ha encontrado el personaje");
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
  updateCharacter,
  deleteCharacter,
};
