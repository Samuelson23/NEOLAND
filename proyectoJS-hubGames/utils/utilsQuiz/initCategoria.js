import {
  preguntasDeporte,
  preguntasEconomia,
  preguntasGeografia,
  preguntasTecnologia,
} from "../../components/quizGamesPreguntas/preguntas";
import { initGame } from "./initGame";

export const initCategoria = (indice) => {
  switch (indice) {
    case 0:
      initGame(preguntasTecnologia, indice);
      break;
    case 1:
      initGame(preguntasDeporte, indice);
      break;
    case 2:
      initGame(preguntasEconomia, indice);
      break;
    case 3:
      initGame(preguntasGeografia, indice);
      break;
  }
};
