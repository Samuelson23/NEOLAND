/* 3.1 Dado el siguiente array, crea una copia usando spread operators.*/
const pointsList = [32, 54, 21, 64, 75, 43]

const copiaArray =[...pointsList]
console.log(copiaArray)


/* 3.2 Dado el siguiente objeto, crea una copia usando spread operators.*/
const toy = {name: 'Bus laiyiar', date: '20-30-1995', color: 'multicolor'};

const copiaToy = {...toy}
console.log(copiaToy)

/* 3.3 Dado los siguientes arrays, crea un nuevo array juntandolos usando 
spread operatos.*/
const pointsLis = [32, 54, 21, 64, 75, 43];
const pointsLis2 = [54,87,99,65,32];

const arrayComb = [...pointsLis,...pointsLis2]
console.log(arrayComb)


/* 3.4 Dado los siguientes objetos. Crea un nuevo objeto fusionando los dos 
con spread operators.*/
const toys = {name: 'Bus laiyiar', date: '20-30-1995', color: 'multicolor'};
const toyUpdate = {lights: 'rgb', power: ['Volar like a dragon', 'MoonWalk']}

const combinado = {...toys,...toyUpdate}
console.log(combinado)


/* 3.5 Dado el siguiente array. Crear una copia de él eliminando la posición 2 
pero sin editar el array inicial. De nuevo, usando spread operatos.*/
const colors = ['rojo', 'azul', 'amarillo', 'verde', 'naranja'];

const arrayColor = [...colors]
arrayColor.splice(1,1)                          //para eliminar la posicion X usando un spreedOperator no la se, asique 
console.log(arrayColor)                         //utilizo un .splice() pora especificar la posicion del nuevo array
