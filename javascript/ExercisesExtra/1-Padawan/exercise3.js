/*
Usa un bucle para crear 3 arrays de peliculas filtrados por categorias. Pelicula pequeña, menos de 100 minutos, 
pelicula mediana, mas de 100 minutos y menos de 200 y pelicula grande, mas de 200 minutos. Imprime cada array en por consola.
*/
const movies = [
    { name: "Titan A.E.", durationInMinutes: 130 },
    { name: "Nightmare before Christmas", durationInMinutes: 225 },
    { name: "Inception", durationInMinutes: 165 },
    { name: "The Lord of the Rings", durationInMinutes: 967 },
    { name: "Star Wars: A New Hope", durationInMinutes: 214 },
    { name: "Terminator", durationInMinutes: 140 },
  ];
  let peliculaPeq=[]
  let peliculaMed=[]
  let peliculaGran=[]

  movies.forEach(pelicula=>{
    if(pelicula.durationInMinutes>=200){
        peliculaGran.push(pelicula.name)
    }else if(pelicula.durationInMinutes<200 && pelicula.durationInMinutes>=100){
        peliculaMed.push(pelicula.name)
    }else peliculaPeq.push(pelicula.name)
  })

  console.log("Peliculas pequeñas: ", peliculaPeq)
  console.log("Peliculas medianas: ", peliculaMed)
  console.log("peliculas grandes: ", peliculaGran)