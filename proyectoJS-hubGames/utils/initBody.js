//inicializamos el body (en este caso el div #app)
export const initBody = () => {
  const main = document.createElement("main");
  const header = document.createElement("header");
  const footer = document.createElement("footer");
  document.querySelector("#app").append(header, main, footer);
};
