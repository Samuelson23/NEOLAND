import { jugarAgain } from "./initGame";

//
let accAcierto = 0;
let acc = 0;
export const printPregunta = (array, indice) => {
  const div = document.querySelector(".quizPregunta");
  const pregunta = document.createElement("h3");
  console.log(array, indice);
  pregunta.innerText = array[indice].pregunta.toUpperCase();
  div.appendChild(pregunta);
  console.log(array[indice].respuesta);
  console.log(array[indice].acierto);
  for (const resp of array[indice].respuesta) {
    const button = document.createElement("button");
    button.innerText = resp;
    if (array[indice].acierto == button.innerText) {
      button.classList.add("acierto");
    } else {
      button.classList.add("fallo");
    }
    div.appendChild(button);

    //const button = document.querySelector("button");
    button.addEventListener("click", (ev) => {
      acc++;
      if (acc < array.length) {
        if (ev.srcElement.className == "acierto") {
          button.classList.add("acertada");
          accAcierto++;
          setTimeout(() => {
            (div.innerHTML = ""), printPregunta(array, acc);
          }, 700);
          console.log(acc);
        } else {
          button.classList.add("fallada");
          setTimeout(() => {
            (div.innerHTML = ""), printPregunta(array, acc);
          }, 700);
        }
      } else {
        setTimeout(() => {
          const h2 = document.createElement("h2");
          const btAgain = document.createElement("button");
          btAgain.innerText = "Jugar de nuevo";
          btAgain.classList.add("playAgain");
          h2.innerText = `Has acertado ${accAcierto} preguntas`;
          div.innerHTML = "";
          div.appendChild(h2);
          div.appendChild(btAgain);
          jugarAgain();
        }, 1000);
      }
    });
  }
};
