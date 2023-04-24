//2.1 Inserta dinamicamente en un html un div vacio con javascript.
const divVacio = document.createElement("div");
console.log(divVacio);

document.body.appendChild(divVacio);

//2.2 Inserta dinamicamente en un html un div que contenga una p con javascript.
const parrafoDiv = document.createElement("div");
const parParrafo = document.createElement("p");
console.log(parrafoDiv);
parrafoDiv.appendChild(parParrafo);
document.body.appendChild(parrafoDiv);

//2.3 Inserta dinamicamente en un html un div que contenga 6 p utilizando un loop con javascript.
const div = document.createElement("div");

for (let i = 0; i < 6; i++) {
  const parr = document.createElement("p");
  div.appendChild(parr);
}
document.body.appendChild(div);
console.log(div);

//2.4 Inserta dinamicamente con javascript en un html una p con el texto 'Soy dinámico!'.
const parrafo = document.createElement("p");
const texto = document.createTextNode("Hola soy dinámico!");
parrafo.appendChild(texto);
document.body.appendChild(parrafo);

console.log(parrafo);

//2.5 Inserta en el h2 con la clase .fn-insert-here el texto 'Wubba Lubba dub dub'.
const h2texto = document.querySelectorAll(".fn-insert-here");
const texto2 = "Wubba Lubba dub dub";

h2texto.forEach((element) => {
  element.innerText = texto2;
});

//2.6 Basandote en el siguiente array crea una lista ul > li con los textos del array.
const apps = ["Facebook", "Netflix", "Instagram", "Snapchat", "Twitter"];

const lista = document.createElement("ul");

for (let app of apps) {
  const li = document.createElement("li");
  li.innerText = app;
  lista.appendChild(li);
}
document.body.appendChild(lista);
console.log(lista);

//2.7 Elimina todos los nodos que tengan la clase .fn-remove-me
const eliminados = document.querySelectorAll(".fn-remove-me");

console.log(eliminados);
eliminados.forEach((elem) => {
  elem.remove();
});

//2.8 Inserta una p con el texto 'Voy en medio!' entre los dos div.
//Recuerda que no solo puedes insertar elementos con .appendChild.
const despuesDiv = document.querySelector("div");
const parrafo2 = document.createElement("p");
parrafo2.innerText = "Voy en medio!";

const nodoPadre = despuesDiv.parentNode;
nodoPadre.insertBefore(parrafo2, despuesDiv);

//2.9 Inserta p con el texto 'Voy dentro!', dentro de todos los div con la clase .fn-insert-here

const divsInsertar = document.querySelectorAll(".fn-insert-here");

divsInsertar.forEach((elem) => {
  const parr = document.createElement("p");
  parr.innerText = "Voy dentro!";
  elem.appendChild(parr);
});

console.log(divsInsertar);
