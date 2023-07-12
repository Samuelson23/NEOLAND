"use strict";
/*
Crear una funion que reciba un parametro. Primero le ponemos tipo string para comprobar que no se puede llamar a la funcion enviando
un number. Despues hacemos una union de tipos para poder pasarle tanto string como number
*/
function displayAlert(message) {
    alert('The message is ' + message);
}
displayAlert(1);
/*
La función sum suma los números de una matriz y devuelve el resultado.
Establezca el tipo del parámetro input en una matriz de valores number, luego, el tipo de valor devuelto de la función en number
y establezca el tipo de la variable total en number.
*/
function sum(input) {
    let total = 0;
    for (let count = 0; count < input.length; count++) {
        if (isNaN(input[count])) {
            continue;
        }
        total += Number(input[count]);
    }
    return total;
}
console.log(sum([5, 6]));
//interface Calculator {(x:number, y:number):number}
let sumaNum = (x, y) => x + y;
let restaNum = (x, y) => x - y;
console.log(restaNum(2, 3));
let doCalculation = (operation) => {
    if (operation === "add") {
        return sumaNum;
    }
    else {
        return restaNum;
    }
};
console.log(doCalculation("add")(2, 3));
