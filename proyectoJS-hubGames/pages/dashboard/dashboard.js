import "./dashboard.css";

const template = () => {
  return `
    <p>pagina del dashboard</p>
    `;
};

//listeners

export const printDashboard = () => {
  document.querySelector("main").innerHTML = template();
  //listeners
};
