// 1.1 Usa querySelector para mostrar por consola el botón con la clase .showme
const enseñame = document.querySelector(".showme");
console.log(enseñame);

//1.2 Usa querySelector para mostrar por consola el h1 con el id #pillado
const pillado = document.querySelector("#pillado");
console.log(pillado);

//1.3 Usa querySelector para mostrar por consola todos los p
const parrafos = document.querySelectorAll("p");
console.log(parrafos);

//1.4 Usa querySelector para mostrar por consola todos los elementos con la clase.pokemon
const pokemons = document.querySelectorAll(".pokemon");
console.log(pokemons);

//1.5 Usa querySelector para mostrar por consola todos los elementos con el atributo
//data-function="testMe".
const atrTestMe = document.querySelectorAll("[data-function='testMe']");
for (const elem of atrTestMe) {
  console.log(elem);
}
console.log(atrTestMe);

//1.6 Usa querySelector para mostrar por consola el 3 personaje con el atributo
//data-function="testMe".
console.log(atrTestMe[2]);
