/*					 FUNCTIONS 4
**Iteración #4: Calcular el promedio**
Calcular un promedio es una tarea extremadamente común. Puedes usar este array para probar tu función:*/
const numbers = [12, 21, 38, 5, 45, 37, 6];

const promedio = numbers.reduce((acc, num) => (acc += num / numbers.length), 0);
const promedio2 = numbers.reduce((acc, num) => (acc += num), 0);

console.log(promedio);
console.log(promedio2 / numbers.length);
