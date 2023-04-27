/*
1.2 Dado el siguiente javascript y html. Añade la funcionalidad necesaria usando 
fetch() para hacer una consulta a la api cuando se haga click en el botón, 
pasando como parametro de la api, el valor del input.
*/
const baseUrl = "https://api.nationalize.io";
const boton = document.querySelector("button");
const input = document.querySelector("input");

const getData = (valor) => {
  fetch(`https://api.nationalize.io?name=${valor}`)
    .then((res) => res.json())
    .then((res) => {
      console.log(res);
    });
};

boton.addEventListener("click", (ev) => {
  input.addEventListener("input", (ev) => {});
  getData(input.value);
});
