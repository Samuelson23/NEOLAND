import { printTresenraya } from "./tresenraya";

export const comprobarWin = (userCount) => {
  const a1 = document.querySelector(".a1");
  const a2 = document.querySelector(".a2");
  const a3 = document.querySelector(".a3");
  const b1 = document.querySelector(".b1");
  const b2 = document.querySelector(".b2");
  const b3 = document.querySelector(".b3");
  const c1 = document.querySelector(".c1");
  const c2 = document.querySelector(".c2");
  const c3 = document.querySelector(".c3");

  const fila1 =
    (a1.innerText == "X" && a2.innerText == "X" && a3.innerText == "X") ||
    (a1.innerText == "O" && a2.innerText == "O" && a3.innerText == "O");
  const fila2 =
    (b1.innerText == "X" && b2.innerText == "X" && b3.innerText == "X") ||
    (b1.innerText == "O" && b2.innerText == "O" && b3.innerText == "O");
  const fila3 =
    (c1.innerText == "X" && c2.innerText == "X" && c3.innerText == "X") ||
    (c1.innerText == "O" && c2.innerText == "O" && c3.innerText == "O");
  const col1 =
    (a1.innerText == "X" && b1.innerText == "X" && c1.innerText == "X") ||
    (a1.innerText == "O" && b1.innerText == "O" && c1.innerText == "O");
  const col2 =
    (a2.innerText == "X" && b2.innerText == "X" && c2.innerText == "X") ||
    (a2.innerText == "O" && b2.innerText == "O" && c2.innerText == "O");
  const col3 =
    (a3.innerText == "X" && b3.innerText == "X" && c3.innerText == "X") ||
    (a3.innerText == "O" && b3.innerText == "O" && c3.innerText == "O");
  const diag1 =
    (a1.innerText == "X" && b2.innerText == "X" && c3.innerText == "X") ||
    (a1.innerText == "O" && b2.innerText == "O" && c3.innerText == "O");
  const diag2 =
    (a3.innerText == "X" && b2.innerText == "X" && c1.innerText == "X") ||
    (a3.innerText == "O" && b2.innerText == "O" && c1.innerText == "O");

  if (fila1 == true) {
    return true;
  } else if (fila2 == true) {
    return true;
  } else if (fila3 == true) {
    return true;
  } else if (col1 == true) {
    return true;
  } else if (col2 == true) {
    return true;
  } else if (col3 == true) {
    return true;
  } else if (diag1 == true) {
    return true;
  } else if (diag2 == true) {
    return true;
  } else {
    return false;
  }
};
