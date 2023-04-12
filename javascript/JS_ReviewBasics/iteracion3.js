/*
**Iteración #3: Mix Fors**

Dado el siguiente javascript usa forof y forin para saber cuantas veces ha sido cada sonido agregado por los usuarios a favorito. 
Para ello recorre la lista de usuarios y usa forin para recoger el nombre de los sonidos que el usuario tenga como favoritos.
Una vez accedas a ellos piensa en la mejor forma de hacer un conteo de cada vez que ese sonido se repita como favorito en cada usuario.

Este ejercicio es un poco complicado con los conocimientos actuales pero...a la vez un buen reto y oportunidad para comprender 
que hay muchas formas de hacer las cosas en javascript.
*/

const users = [
    {name: 'Manolo el del bombo',
        favoritesSounds: {
            waves: {format: 'mp3', volume: 50},
            rain: {format: 'ogg', volume: 60},
            firecamp: {format: 'mp3', volume: 80},
        }
    },
    {name: 'Mortadelo',
        favoritesSounds: {
            waves: {format: 'mp3', volume: 30},
            shower: {format: 'ogg', volume: 55},
            train: {format: 'mp3', volume: 60},
        }
    },
    {name: 'Super Lopez',
        favoritesSounds: {
            shower: {format: 'mp3', volume: 50},
            train: {format: 'ogg', volume: 60},
            firecamp: {format: 'mp3', volume: 80},
        }
    },
    {name: 'El culebra',
        favoritesSounds: {
            waves: {format: 'mp3', volume: 67},
            wind: {format: 'ogg', volume: 35},
            firecamp: {format: 'mp3', volume: 60},
        }
    },
]

//EL EJERCICIO EXTRA.3 ESTA RESUELTO DE UNA FORMA MENOS COMPLEJA

//ESTE EJERCICIO ESTA RESUELTO DE UNA FORMA MÁS OPTIMA, PERO QUERÍA APLICAR OTRO TIPO DE LÓGICA Y APLICAR METODOS DIFERENTES. 
//ESTA FORMA DE HACER EL EJERCICIO OBVIAMENTE NO ES LA MEJOR

let arrayCanciones=[]                               //AQUI AGREGO LAS CANCIONES A UN ARRAY VACIO Y AL FINAL DEL BUCLE LOS ORDENA DE FORMA ALFABETICA, PARA
for(persona of users){                              //COMPROBAR LOS INDICES
    for(song in persona.favoritesSounds){
        //console.log(song)
        arrayCanciones.push(song)
    }
    arrayCanciones.sort()
}

//console.log(arrayCanciones)

let noRepetidas=[]
let numNoRepetidas=[]

for(cancion of arrayCanciones){                     //AQUI CALCULO EL NUMERO DE VECES QUE LA CANCION ESTA EN EL ARRAY EN BASE A LA DIFERENCIA DE LOS INDICES
    let repeticiones=0;
    let x=arrayCanciones.indexOf(cancion)
    let y=arrayCanciones.lastIndexOf(cancion)
    repeticiones= ((x-y) * (-1)) +1                 //OPERACION PARA QUE EL RESULTADO ESTE BIEN, YA QUE EL INDICE EMPIEZA EN 0. LUEGO LO CONVIERTO A NUMERO POSITIVO
  
    !noRepetidas.includes(cancion) && (noRepetidas.push(cancion) && numNoRepetidas.push(repeticiones))      //COMPRUEBO QUE LAS CANCIONES NO SE REPITAN Y LAS GUARDO
                                                                                                            //EN DOS ARRAYS VACIOS, UNO PARA LA CANCION Y OTRO PARA
    //console.log(noRepetidas,numNoRepetidas)                                                                 //LAS VECES QUE SE REPITE LA CANCION
}

noRepetidas.forEach((cancion,index)=>{                                                                      //COMO AMBOS ARRAYS COMPARTEN MISMOS INDICES (cancion en
    console.log(`La cancion - ${cancion} - se repite ${numNoRepetidas[index]} veces`)                       //indice 0 coincide con la repeticion en indice 0) LOS
})                                                                                                          //IMPRIMO POR CONSOLA