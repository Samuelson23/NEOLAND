/* 					FUNCTIONS 5
**Iteración #5: Calcular promedio de strings**
Crea una función que reciba por parámetro un array y cuando es un valor number lo sume 
y de lo contrario cuente la longitud del string y lo sume. Puedes usar este array para probar tu función:
*/
const mixedElements = [6, 1, "Rayo", 1, "vallecano", "10", "upgrade", 8, "hub"];

const sumador = mixedElements.reduce((acc, element) =>
  typeof element === "number" ? (acc += element) : (acc += element.length)
);

console.log(sumador);
