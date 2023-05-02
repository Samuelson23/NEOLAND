import { printFooter } from "./components/Footer/Footer";
import { printHeader } from "./components/Header/Header";
import { printLogin } from "./pages/Login/Login";
import "./style.css";
import { initBody } from "./utils/initBody";
import { initController } from "./utils/route";

initBody();
initController("undefined");
printFooter();
printHeader();
