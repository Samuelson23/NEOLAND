import "./whakatopo.css";

const template = () => {
  return `
    <p>pagina del juego atrapa al topo</p>
    `;
};

//listeners

export const printWhakatopo = () => {
  document.querySelector("main").innerHTML = template();
  //listeners
};
