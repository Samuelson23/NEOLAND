/*
**Iteración #4: Calcular el promedio**

Calcular un promedio es una tarea extremadamente común. Puedes usar este array para probar tu función:
*/
const numbers = [12, 21, 38, 5, 45, 37, 6];
function average(param) {
    let sumatorio=0
    param.forEach(num => {
        sumatorio+=num
    })
    return (sumatorio/param.length)
}

console.log(average(numbers))