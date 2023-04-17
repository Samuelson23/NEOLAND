/*					 FUNCTIONS 2
**Iteración #2: Buscar la palabra más larga**
Completa la función que tomando un array de strings como argumento devuelva el más largo, en caso de que dos strings tenga 
la misma longitud deberá devolver el primero.
Puedes usar este array para probar tu función:*/
const avengers = [
  "Hulk",
  "Thor",
  "IronMan",
  "Captain A.",
  "Spiderman",
  "Captain M.",
];

let palabraLarga = "";

const largo = avengers.map((heroe) => {
  heroe.length > palabraLarga.length && (palabraLarga = heroe);
  return palabraLarga;
});

console.log(largo); //devuelve el array con el resultado de las comparaciones, posicion a posicion
console.log(palabraLarga); //devuelve el heroe con el string mas largo
