/*
Crea una función llamada rollDice() que reciba como parametro el numero de caras que queramos que tenga el dado que deberá simular el codigo dentro de la función. 
Como hemos dicho, que la función use el parametro para simular una tirada de dado y retornar el resultado. 
Si no se te ocurre como hacer un numero aleatorio no te preocupes! Busca información sobre la función de javascript Math.random()
*/

/* const rollDice = () => {
    let random =Math.round(Math.random() * 10)              // creo un numero random del 0 al 1 y lo convierto en un entero redondeado
    if (random>6){                                          //controlo que el numero no sea mayor de 6 ni menor de 0, como si fuera un dado de 6 caras
        return 6
    }else if(random<6 && random>0){
        return random
    }else return 1
} */
const rollDice = (min, max) => {
    /* min = Math.ceil(min);
    max = Math.floor(max); */
    return Math.floor(Math.random() * (max - min + 1) + min)
  }

console.log(rollDice(1,6))