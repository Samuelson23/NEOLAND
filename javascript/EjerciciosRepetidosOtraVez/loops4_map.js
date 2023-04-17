/* 					LOOPS 4
**Iteración #4: Probando For...in**
Usa un **for...in** para imprimir por consola los datos del alienígena.. Puedes usar este objeto:*/
const aliens = [
  {
    name: "Wormuck",
    race: "Cucusumusu",
    planet: "Eden",
    weight: "259kg",
  },
  {
    name: "E.T.",
    race: "Lagarto",
    planet: "Luna",
    weight: "15kg",
  },
  {
    name: "Predator",
    race: "Asaber",
    planet: "Mulejos",
    weight: "1823kg",
  },
];

const propiedades = aliens.map((alien) => {
  //`El alien ${alien.name} viene del planeta ${alien.planet}`);
  //
  return `El alien ${alien.name} viene del planeta ${alien.planet}`;
});

console.log(propiedades);
