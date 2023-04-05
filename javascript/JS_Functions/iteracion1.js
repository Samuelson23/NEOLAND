/***Iteración #1: Buscar el máximo**
Completa la función que tomando dos números como argumento devuelva el más alto.*/

function sum(numberOne , numberTwo) {
    //(numberOne>numberTwo) ? return numberOne : return numberTwo
    if(numberOne>numberTwo){
        return numberOne
    }else{
        return numberTwo
    }
  }

  prueba1=sum(2,4);
  prueba2=sum(1,2);

  console.log(prueba1);
  console.log(prueba2);
