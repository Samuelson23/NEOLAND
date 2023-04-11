//Dado el siguiente javascript usa forof y forin para hacer la media del volumen de todos los sonidos favoritos que tienen los usuarios.
const users = [
  {
    name: "Alberto",
    favoritesSounds: {
      waves: { format: "mp3", volume: 50 },
      rain: { format: "ogg", volume: 60 },
      firecamp: { format: "mp3", volume: 80 },
    },
  },
  {
    name: "Antonio",
    favoritesSounds: {
      waves: { format: "mp3", volume: 30 },
      shower: { format: "ogg", volume: 55 },
      train: { format: "mp3", volume: 60 },
    },
  },
  {
    name: "Pedro",
    favoritesSounds: {
      shower: { format: "mp3", volume: 50 },
      train: { format: "ogg", volume: 60 },
      firecamp: { format: "mp3", volume: 80 },
    },
  },
  {
    name: "Cristina",
    favoritesSounds: {
      waves: { format: "mp3", volume: 67 },
      wind: { format: "ogg", volume: 35 },
      firecamp: { format: "mp3", volume: 60 },
    },
  },
];

/* let sumaVolumen=0;
let sumaCanciones=0; */
let mediaVolumen = 0;

for (persona of users) {
  let sumaVolumen = 0;
  let sumaCanciones = 0;
  let arrayDuracion = [];
  //console.log(persona.name)
  for (cancion in persona["favoritesSounds"]) {
    //console.log(cancion)
    //console.log("49",persona.favoritesSounds[cancion])
    sumaVolumen += persona.favoritesSounds[cancion].volume;
    sumaCanciones++;
    //console.log(arrayDuracion)
  }
  //console.log(sumaVolumen)
  //console.log(sumaCanciones)
  mediaVolumen = sumaVolumen / sumaCanciones;

  console.log(
    `La persona ${persona.name} tiene una media de volumen de ${mediaVolumen}`
  );
}
