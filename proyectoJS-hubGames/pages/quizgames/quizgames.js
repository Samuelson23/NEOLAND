import "./quizgames.css";

const template = () => {
  return `
    <p>pagina del juego quizgame</p>
    `;
};

//listeners

export const printQuizgames = () => {
  document.querySelector("main").innerHTML = template();
  //listeners
};
