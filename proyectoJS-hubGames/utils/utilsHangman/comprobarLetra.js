import { arrayAhorcado } from "../../components/hangman/arrayAhorcado";

export const comprobarLetra = (palabra, fallos, palabraOculta) => {
  const pal = palabra.split("");
  console.log("entro palabra", pal);
  console.log("oculta", palabraOculta);
  const imgArc = document.querySelector(".imgAhorcado");
  const input = document.querySelector("input");
  const p = document.querySelectorAll("p");
  const divPalabraOculta = document.querySelector(".palabraOculta");
  //console.log(p);
  p.forEach((elem, index) => {
    if (elem.className == input.value.toLowerCase()) {
      console.log(index - 5);
      elem.innerText = input.value.toUpperCase();
      console.log("pal index", palabraOculta[index - 5]);
      palabraOculta[index - 5] = input.value.toUpperCase();
      console.log("post index", palabraOculta);
    }

    /*  if (p[index].className === input.value.toLowerCase())
      p[index].innerHTML = input.value.toUpperCase(); */
  });

  console.log("fallo", fallos);
  imgArc.setAttribute("src", arrayAhorcado[fallos]);
  /* if (p[index].className == input.value.toLowerCase()) {
      console.log(p[index]);
      p[index].innerHTML = input.value;
      divPalabraOculta[index] = input.value;
    } else {
      imgArc.setAttribute("src", arrayAhorcado[fallos]);
    } */
  //});
  //console.log(divPalabraOculta);
};
