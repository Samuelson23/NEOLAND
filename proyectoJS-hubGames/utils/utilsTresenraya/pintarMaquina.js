import { printTresenraya } from "../../pages/tresenraya/tresenraya";

function getRandom(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min);
}

export const pintaMaq = () => {
  const a1 = document.querySelector(".a1");
  const a2 = document.querySelector(".a2");
  const a3 = document.querySelector(".a3");
  const b1 = document.querySelector(".b1");
  const b2 = document.querySelector(".b2");
  const b3 = document.querySelector(".b3");
  const c1 = document.querySelector(".c1");
  const c2 = document.querySelector(".c2");
  const c3 = document.querySelector(".c3");
  let arrayCasillas = [a1, a2, a3, b1, b2, b3, c1, c2, c3];
  let casDisp = [];
  console.log(casDisp);
  for (const casilla of arrayCasillas) {
    if (casilla.innerText == "") {
      casDisp.push(casilla);
    }
  }
  if (casDisp.length == 0) {
    alert("TABLAS");
    printTresenraya();
  }
  const numRandom = getRandom(0, casDisp.length - 1);
  console.log(numRandom);
  casDisp[numRandom].innerText = "O";
};
