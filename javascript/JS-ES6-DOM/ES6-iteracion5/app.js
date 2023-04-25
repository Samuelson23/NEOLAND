/* 5.6 Dado el siguiente html y javascript, utiliza .filter() para mostrar por consola 
los streamers que incluyan la palabra introducida en el input. De esta forma, si 
introduzco 'Ru' me deberia de mostrar solo el streamer 'Rubius'. Si
introduzco 'i', me deberia de mostrar el streamer 'Rubius' e 'Ibai'.*/

const streamers = [
  { name: "Rubius", age: 32, gameMorePlayed: "Minecraft" },
  { name: "Ibai", age: 25, gameMorePlayed: "League of Legends" },
  { name: "Reven", age: 43, gameMorePlayed: "League of Legends" },
  { name: "AuronPlay", age: 33, gameMorePlayed: "Among Us" },
];

const input = document.querySelector("[data-function='toFilterStreamers']"); //recogemos el input de html
let letra = "";
//creamos un eventListener  para ver que se está introduciendo en el input
input.addEventListener("input", (event) => {
  //cada vez que introduzca algo limpiamos la consola y mostramos el resultado
  console.clear();
  //filtramos el array de streamers buscando la coincidencia
  const filtrar = streamers.filter((elem) => {
    //convertimos tanto el nombre del streamer como el valor introducido en minusculas
    nameStr = elem.name.toLowerCase();
    letra = event.target.value;
    //condicion de si el nombre incluye lo introducido
    nameStr.includes(letra.toLowerCase()) && console.log(elem.name);
  });
});
