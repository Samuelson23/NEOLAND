import { printFooter } from "../components/Footer/Footer";
import { changeLogin } from "../components/Header/Header";
//import { changeLogin, printHeader } from "../components/Header/Header";

import { printLogin } from "../pages/Login/Login";
import { printDashboard } from "../pages/dashboard/dashboard";
import { printHangman } from "../pages/hangman/hangman";
import { printMemorycard } from "../pages/memorycard/memorycard";
import { printPokemon } from "../pages/pokemon/pokemon";
import { printQuizgames } from "../pages/quizgames/quizgames";
import { printTresenraya } from "../pages/tresenraya/tresenraya";
import { printWhakatopo } from "../pages/whakatopo/whakatopo";

export const initController = (route) => {
  switch (route) {
    case "undefined":
      localStorage.getItem("user") ? printDashboard() : printLogin();
      break;
    case "Pokemon":
      printPokemon();
      break;
    case "Hangman":
      printHangman();
      break;
    case "Memorycard":
      printMemorycard();
      break;
    case "Quizgames":
      printQuizgames();
      break;
    case "Tresenraya":
      printTresenraya();
      break;
    case "Whakatopo":
      printWhakatopo();
      break;
    case "Dashboard":
      printDashboard();
      printFooter();
      changeLogin();
      break;
    case "Login":
      printLogin();
      changeLogin();
      break;
  }
};
