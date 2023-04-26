/*1.5 Basandote en el ejercicio anterior. Crea un botón que elimine el último 
  elemento de la serie de divs.*/
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

    h4.innerText = p.title;
    img.setAttribute("src", p.imgUrl);
    div.setAttribute("class", "foto");
    div.appendChild(h4);
    div.appendChild(img);
    document.body.appendChild(div);
  }
};
creaFotos();

const body = document.querySelector("body");
const boton = document.createElement("button");
document.body.appendChild(boton);

boton.addEventListener("click", (ev) => {
  const div = document.querySelectorAll(".foto");
  for (i = 0; i < div.length; i++) {
    if (i == div.length - 1) {
      div[i].remove();
    }
  }
});
