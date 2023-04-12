/*
**Iteración #4: Métodos findArrayIndex**

Crea una función llamada `findArrayIndex` que reciba como parametros un array de textos y un texto y devuelve la posición del array 
cuando el valor del array sea igual al valor del texto que enviaste como parametro. Haz varios ejemplos y compruebalos.

Sugerencia de función:

function findArrayIndex(array, text) {}

Ej array:['Caracol', 'Mosquito', 'Salamandra', 'Ajolote']
*/

let animales=["perro","gato","raton","cabra","vaca","oso","leon","tigre","mono"
]
const findArrayIndex = (array,texto) => {
    let pos= array.indexOf(texto)
    console.log(`${texto} esta en la posicion ${pos}`)
    
}

findArrayIndex(animales,"perro")
findArrayIndex(animales,"cabra")
findArrayIndex(animales,"mono")