import "./hangman.css";

const template = () => {
  return `
    <p>pagina del juego hangman</p>
    `;
};

//listeners

export const printHangman = () => {
  document.querySelector("main").innerHTML = template();
  //listeners
};
