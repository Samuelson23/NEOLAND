/* Ejercicio de ordenar un array numerico, ya que el metodo .sort() organiza alfabeticamente y trata a los numeros como caracteres
y no como integers.*/

const arrayNumeros = [2, 33, 1, 5, 99, 23, 4];

let auxiliar = 0;

// Mi logica me decia de hacer dos bucles for y en el segundo intercambiar los valores con 3 variables,
// teniendo una de auxiliar para guardar el menor.
// Pero aun asi me ha tocado buscar ayuda en internet pq me he metido en varios bucles infinitos y ni forma de salir de ahi xD

/* const ordenadorArrays = (array) => {
  for (i = 0; i < array.length - 1; i++) {
    for (x = 1; x < array.length; x++) {
      if (array[x] < array[x - 1]) {
        auxiliar = array[x];
        array[x] = array[x - 1]; 
        array[x - 1] = auxiliar;
      }
    }
  }
  return array;
}
 
console.log(ordenadorArrays(arrayNumeros));
*/

// usando forEach

const orderArrays = (array) => {
  array.forEach((elem,i) => {
    array.forEach((element,index)=>{
      
      if(array[index]<array[index-1]){
        auxiliar=array[index]
        array[index]=array[index-1]
        array[index-1]=auxiliar
      }
    })
  })
  return array
}

//orderArrays(arrayNumeros)
console.log(orderArrays(arrayNumeros))