/* 					FUNCTIONS 8
**Iteration #8: Contador de repeticiones**

Crea una función que nos devuelva el número de veces que 
se repite cada una de las palabras que lo conforma.  Puedes usar este array para probar tu función:*/
const counterWords = [
  "code",
  "repeat",
  "eat",
  "sleep",
  "code",
  "enjoy",
  "sleep",
  "code",
  "enjoy",
  "upgrade",
  "code",
];

const noRepetidas = {};

const repetidas = counterWords.map((elem) => {
  /*   console.log(`La palabra ${elem} se repite ${counterWords.reduce((acc, nom) => {
      elem == nom && acc++;
      return acc;
    }, 0)}`); */
  //!noRepetidas.includes(elem) && (noRepetidas.palabra = elem);
});

console.log(noRepetidas);
