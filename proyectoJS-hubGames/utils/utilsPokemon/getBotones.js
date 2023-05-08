import { mapeoPokemon } from "./mapeoPokemons"; //FUNCION ASINCRONA QUE NOS DEVUELVE EL MAPEO DE TODOS LOS POKEMON
import { mapeoTipos } from "./mapeoType"; //FUNCION ASINCRONA QUE NOS DEVUELVE EL MAPEO DE TODOS LOS TIPOS DE POKEMON
import { printCard } from "./printCards"; //PINTAMOS LAS CARTAS EN BASE AL ARRAY QUE LE PASAMOS

//CREAMOS LOS BOTONES DE TIPO Y AÑADIMOS LOS EVENTOS PARA BUSCAR LOS TIPOS Y EL VALOR DEL INPUT Y PINTAR ESOS POKEMONS
export const getButtons = async () => {
  const arrayTipos = await mapeoTipos();
  const mapeoPok = await mapeoPokemon();

  //----- CREAMOS LOS BOTONES DE TODOS LOS TIPOS QUE EXISTEN
  const divPokemon = document.querySelector(".botonesPok");
  const input = document.querySelector("input");
  arrayTipos.forEach((elem) => {
    const button = document.createElement("button");
    button.innerText = elem;
    button.classList.add(elem);
    divPokemon.appendChild(button);

    //----- FILTRAMOS Y PINTAMOS LOS POKEMONS SEGUN EL BOTON DE TIPO QUE CLICKEMOS
    button.addEventListener("click", (ev) => {
      console.log(ev.target.className);
      const arrayFiltrado = [];
      mapeoPok.forEach((elem) => {
        if (elem.types[0].type.name == ev.target.className) {
          arrayFiltrado.push(elem);
        }
      });
      printCard(arrayFiltrado);
    });
  });

  //---FILTRAMOS Y PINTAMOS LOS POKEMONS SEGUN LO QUE PONGAMOS EN EL INPUT A TIEMPO REAL
  input.addEventListener("input", (ev) => {
    const arrayInput = [];
    mapeoPok.map((elem) => {
      elem.name.includes(input.value) && arrayInput.push(elem);
    });
    printCard(arrayInput);
  });
};
