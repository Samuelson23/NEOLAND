/* **Iteración #2: Condicionales avanzados**

Comprueba en cada uno de los usuarios que tenga al menos dos trimestres aprobados y añade la propiedad ***isApproved*** 
a true o false en consecuencia. Una vez lo tengas compruébalo con un ***console.log***. 

( **Mirar abajo en pistas** ).

Puedes usar este array para probar tu función: */

const alumns = [
  { name: "Pepe Viruela", T1: false, T2: false, T3: true },
  { name: "Lucia Aranda", T1: true, T2: false, T3: true },
  { name: "Juan Miranda", T1: false, T2: true, T3: true },
  { name: "Alfredo Blanco", T1: false, T2: false, T3: false },
  { name: "Raquel Benito", T1: true, T2: true, T3: true },
];

alumns.forEach((alumno) => {
  alumno.isApproved = false;    //inicializo la propiedad isApproved para que todos los alumnos la tengan en false por defecto

  if (alumno.T1 == true && alumno.T2 == true) {
    alumno.isApproved = true;
  } else if (alumno.T1 == true && alumno.T3 == true) {
    alumno.isApproved = true;
  } else if (alumno.T2 == true && alumno.T3 == true) {
    alumno.isApproved = true;
  }
});

console.log(alumns);    //muestro por consola el array con la nueva propiedad

alumns.forEach(alum=>{  //muestro por consola sólo los alumnos que han superado 2 trimestres
    if(alum.isApproved==true){
    console.log(`${alum.name} ha superado dos trimestres`)}
}) 