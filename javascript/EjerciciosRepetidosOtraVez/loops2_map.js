/* 					LOOPS 2
 **Iteración #2: Condicionales avanzados**
Comprueba en cada uno de los usuarios que tenga al menos dos trimestres aprobados y añade la propiedad ***isApproved*** 
a true o false en consecuencia. Una vez lo tengas compruébalo con un ***console.log***. 
Puedes usar este array para probar tu función: */
const alumns = [
  { name: "Pepe Viruela", T1: false, T2: false, T3: true },
  { name: "Lucia Aranda", T1: true, T2: false, T3: true },
  { name: "Juan Miranda", T1: false, T2: true, T3: true },
  { name: "Alfredo Blanco", T1: false, T2: false, T3: false },
  { name: "Raquel Benito", T1: true, T2: true, T3: true },
];

const [name] = alumns;

const aprobado = alumns.map((persona) =>
  persona.T1 == true && persona.T2 == true
    ? (persona.isApproved = true)
    : persona.T2 == true && persona.T3 == true
    ? (persona.isApproved = true)
    : persona.T1 == true && persona.T3 == true
    ? persona.isApproved == true
    : persona.isApproved == false
);

console.log(alumns);

console.log(aprobado);

//console.log(aprobado)
