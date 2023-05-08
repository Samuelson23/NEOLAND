import { getButtons } from "../../utils/utilsPokemon/getBotones";
import { getPokemons } from "../../utils/utilsPokemon/getPokemons";

import "./pokemon.css";

const template = () => ` 
<div class="divBusqueda">
<label><input placeholder="  Buscar Pokemon..."></input></label>
<div class="botonesPok"></div>
</div>
<div class="galleryPokemon"></div>`;

// ----> 2) Eventos de nuestros elementos html
/* const dataService = async () => {
  const getData = await dataPokemon();
  getData.map((pokemon) => {
    const templateFigure = `
      <figure class="figurePokemon">
        <img src=${pokemon.image} alt=${pokemon.name} />
        <h2>${pokemon.name}</h2>
      </figure>
    `;

    document.querySelector(".galleryPokemon").innerHTML += templateFigure;
  });
};

const addListeners = () => {};

// ----> 3) Pintar */

export const printPokemon = () => {
  document.querySelector("main").innerHTML = template();
  getPokemons();
  getButtons();
};
