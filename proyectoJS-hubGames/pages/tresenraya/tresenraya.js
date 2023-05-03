import { comprobarWin } from "./comprobarWin";
import { pintaMaq } from "./pintarMaquina";
import "./tresenraya.css";

const nameUser = localStorage.getItem("user");
let userCount = 0;

const template = () => {
  return `
  <h2>${nameUser.toUpperCase()}: ${userCount}</h2>
  <h2>MAQUINA: </h2>
    <div class="tablero3enraya">
      <div id="casilla" class="a1"></div>
      <div id="casilla" class="a2"></div>
      <div id="casilla" class="a3"></div>
      <div id="casilla" class="b1"></div>
      <div id="casilla" class="b2"></div>
      <div id="casilla" class="b3"></div>
      <div id="casilla" class="c1"></div>
      <div id="casilla" class="c2"></div>
      <div id="casilla" class="c3"></div>
    </div>
    `;
};

//listeners
const listenerTresenraya = () => {
  const casilla = document.querySelectorAll("#casilla");

  for (const cas of casilla) {
    cas.addEventListener("click", (ev) => {
      if (comprobarWin(userCount) == true) {
        alert("has ganado");
        userCount++;
        console.log(userCount);
        printTresenraya();
      } else if (ev.target.innerText == "") {
        ev.target.innerText = "X";
        pintaMaq();
      } else {
      }
    });
  }
};

/*
userCount++;
    printTresenraya(userCount);
    alert("has ganado");
*/

export const printTresenraya = () => {
  document.querySelector("main").innerHTML = template();
  //listeners
  listenerTresenraya();
};
