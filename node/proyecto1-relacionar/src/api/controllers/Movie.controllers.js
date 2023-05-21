const Character = require("../models/Character.model");
const Movie = require("../models/Movie.model");

//---------POST----------
const create = async (req, res, next) => {
  console.log(req);
  try {
    const newMovie = new Movie(req.body);
    const saveMovie = await newMovie.save();

    if (saveMovie) {
      return res.status(200).json(saveMovie);
    } else {
      return res.status(404).json("No se ha creado la pelicula");
    }
  } catch (error) {
    return next(error);
  }
};

//--------GET ALL--------
const getAll = async (req, res, next) => {
  try {
    const allMovies = await Movie.find();
    if (allMovies) {
      return res.status(200).json(allMovies);
    } else {
      return res.status(404).json("No se ha encontrado ninguna pelicula");
    }
  } catch (error) {
    return next(error);
  }
};

//--------GET BY ID------
const getById = async (req, res, next) => {
  try {
    const { id } = req.params;
    const movieById = await Movie.findById(id);
    if (movieById) {
      return res.status(200).json(movieById);
    } else {
      return res
        .status(404)
        .json("No se ha encontrado ninguna pelicula con ese ID");
    }
  } catch (error) {
    return next(error);
  }
};

//-------GET BY NAME-------
const getByName = async (req, res, next) => {
  try {
    const { name } = req.params;

    const movieByName = await Movie.find({ name });
    console.log(movieByName);
    console.log(req.params);
    console.log(name);
    if (movieByName) {
      return res.status(200).json(movieByName);
    } else {
      return res
        .status(404)
        .json("No se ha encontrado ninguna pelicula con ese nombre");
    }
  } catch (error) {
    next(error);
  }
};

//-------UPDATE-------
const updateMovie = async (req, res, next) => {
  try {
    const { id } = req.params;
    const updateMovie = await Movie.findByIdAndUpdate(id, req.body);
    if (updateMovie) {
      return res.status(200).json({
        oldMovie: updateMovie,
        newMovie: await Movie.findById(id),
      });
    } else {
      return res.status(404).json("No se ha encontrado la pelicula");
    }
  } catch (error) {
    next(error);
  }
};

//------DELETE------
const deleteMovie = async (req, res, next) => {
  try {
    const { id } = req.params;
    const movieDelete = await Movie.findByIdAndDelete(id);

    if (movieDelete) {
      return res.status(200).json(movieDelete);
    } else {
      return res.status(404).json("No se ha podido borrar la pelicula");
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
  deleteMovie,
  updateMovie,
};
