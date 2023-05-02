import "./tresenraya.css";

const template = () => {
  return `
    <p>pagina del juego tres en raya</p>
    `;
};

//listeners

export const printTresenraya = () => {
  document.querySelector("main").innerHTML = template();
  //listeners
};
