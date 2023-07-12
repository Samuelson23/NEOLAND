/*
Crear una funion que reciba un parametro. Primero le ponemos tipo string para comprobar que no se puede llamar a la funcion enviando
un number. Despues hacemos una union de tipos para poder pasarle tanto string como number
*/

function displayAlert(message:string|number) {
    alert('The message is ' + message);
}

displayAlert(1)

/*
La función sum suma los números de una matriz y devuelve el resultado.
Establezca el tipo del parámetro input en una matriz de valores number, luego, el tipo de valor devuelto de la función en number 
y establezca el tipo de la variable total en number.
*/

function sum(input:number[]): number {
    let total:number =  0;
    for(let count = 0; count < input.length; count++) {
        if(isNaN(input[count])){
            continue;
        }
        total += Number(input[count]);
    }
    return total;
}

console.log(sum([5,6]))

/*
TIPO DE FUNCION
1) Declaramos un nuevo type o una interfaz (segun queramos) y lo utilizamos para firmar el tipo de la funcion
2) Creamos unas variables a las que le pones el tipo que acabamos de crear, que en este caso son 2 parametros tipo number que devuelven un number
3) Creamos una funcion a la que le pasamos parametros de otra funcion. -> doCalculation("parametro")(parametros de la otra funcion)
*/

type calculator = (x:number, y: number) => number
//interface Calculator {(x:number, y:number):number}

let sumaNum: calculator = (x:number, y: number): number => x+y
let restaNum: calculator = (x:number, y:number): number=>x-y

console.log(restaNum(2,3))

let doCalculation = (operation:"add"|"subtract"): calculator =>{
    if(operation==="add"){
        return sumaNum
    }else{
        return restaNum
    }
}

console.log(doCalculation("add")(2,3))

