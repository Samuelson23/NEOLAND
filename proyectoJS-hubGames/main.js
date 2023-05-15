import { printFooter } from "./components/Footer/Footer";
import { changeLogin, printHeader } from "./components/Header/Header";

import "./style.css";
import { initBody } from "./utils/initBody";
import { initController } from "./utils/route";
//import { dataExport } from "./utils/utilsPokemon/dataExport";

initBody();

printFooter();

initController("undefined");
printHeader();
changeLogin();
//dataExport();
