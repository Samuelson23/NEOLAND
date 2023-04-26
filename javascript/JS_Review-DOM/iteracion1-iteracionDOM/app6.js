/*
  1.6 Basandote en el ejercicio anterior. Crea un botón para cada uno de los 
  divs que elimine ese mismo elemento del html.
  */
const countries2 = [
  { title: "Random title", imgUrl: "https://picsum.photos/300/200?random=1" },
  { title: "Random title", imgUrl: "https://picsum.photos/300/200?random=2" },
  { title: "Random title", imgUrl: "https://picsum.photos/300/200?random=3" },
  { title: "Random title", imgUrl: "https://picsum.photos/300/200?random=4" },
  { title: "Random title", imgUrl: "https://picsum.photos/300/200?random=5" },
];
const creaFotos = () => {
  for (const p of countries2) {
    const div = document.createElement("div");
    const h4 = document.createElement("h4");
    const img = document.createElement("img");
    const boton = document.createElement("button");

    h4.innerText = p.title;
    img.setAttribute("src", p.imgUrl);
    div.setAttribute("class", "foto");
    div.appendChild(h4);
    div.appendChild(img);
    div.appendChild(boton);
    document.body.appendChild(div);
  }
};
creaFotos();

const bot = document.querySelectorAll("button");
console.log(bot);
for (const boton of bot) {
  boton.addEventListener("click", (ev) => {
    const parent = boton.parentNode;
    parent.remove();
  });
}
