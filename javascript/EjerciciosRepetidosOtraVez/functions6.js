/*					 FUNCTIONS 6
**Iteración #6: Valores únicos**
Crea una función que reciba por parámetro un array y compruebe si existen elementos duplicados, en caso que 
existan los elimina para retornar un array sin los elementos duplicados. Puedes usar este array para probar tu función:*/

const duplicates = [
  "sushi",
  "pizza",
  "burger",
  "potatoe",
  "pasta",
  "ice-cream",
  "pizza",
  "chicken",
  "onion Rings",
  "pasta",
  "soda",
];

//let noDuplicates = [];

const noDuplicates = duplicates.filter((element) =>
  duplicates.includes(element)
);

console.log(noDuplicates);
