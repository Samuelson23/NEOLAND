/*
**Iteración #7: Buscador de nombres**

Crea una función que reciba por parámetro un array y el valor que desea comprobar que existe dentro de dicho array - 
comprueba si existe el elemento, en caso que existan nos devuelve un true y la posición de dicho elemento 
y por la contra un false. Puedes usar este array para probar tu función:
*/
const nameFinder = [
    'Peter',
    'Steve',
    'Tony',
    'Natasha',
    'Clint',
    'Logan',
    'Xabier',
    'Bruce',
    'Peggy',
    'Jessica',
    'Marc'
  ];
  function finderName(param,nombre) {
    let acc=0;                                              //creo un contador para almacenar el nº de veces que no encuentra la palabra
    for(i=0;i<param.length;i++){
        (param[i]===nombre) ? console.log("True",i) : acc++
    }
    if(acc++==param.length) console.log("False")            //si el contador coincide con el largo del array es que no ha encontrado
  }                                                         //ninguna coincidencia

  finderName(nameFinder,"Tony")