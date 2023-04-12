/*
Crea una función llamada swap que reciba un array y dos parametros que sean indices del array. La función deberá intercambiar 
la posición de los valores de los indices que hayamos enviado como parametro. Retorna el array resultante.

Sugerencia de array:
*/
const fantasticFour = [
  "La antorcha humana",
  "Mr. Fantástico",
  "La mujer invisible",
  "La cosa",
];

console.log(fantasticFour)
const swap = (array,posX,posY) => {
  let posAux="";
  posAux=array[posX]
  array[posX]=array[posY]
  array[posY]=posAux

  return array

}

swap(fantasticFour,1,3)
console.log(fantasticFour)
