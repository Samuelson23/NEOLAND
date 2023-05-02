import "./pokemon.css";

const template = () => {
  return `
    <p>pagina de la poke api</p>
    `;
};

//listeners

export const printPokemon = () => {
  document.querySelector("main").innerHTML = template();
  //listeners
};
