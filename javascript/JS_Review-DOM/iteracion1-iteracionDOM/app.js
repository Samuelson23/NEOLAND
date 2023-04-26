/*
1.1 Basandote en el array siguiente, crea una lista ul > li 
dinámicamente en el html que imprima cada uno de los paises.
*/
const countries = ["Japón", "Nicaragua", "Suiza", "Australia", "Venezuela"];

const creaLista = () => {
  const body = document.querySelector("body");
  const ul = document.createElement("ul");

  for (const pais of countries) {
    const li = document.createElement("li");
    li.innerText = pais;
    ul.appendChild(li);
  }

  document.body.appendChild(ul);
};

creaLista();

// 1.2 Elimina el elemento que tenga la clase .fn-remove-me.
const claseRemove = document.querySelector(".fn-remove-me");
claseRemove.remove();

/*
1.3 Utiliza el array para crear dinamicamente una lista ul > li de elementos 
en el div de html con el atributo data-function="printHere".
*/
const cars = ["Mazda 6", "Ford fiesta", "Audi A4", "Toyota corola"];

const creaLista2 = () => {
  const div = document.querySelector("[data-function='printHere']");
  const ul2 = document.createElement("ul");
  for (const coche of cars) {
    const licoche = document.createElement("li");
    licoche.innerText = coche;
    ul2.appendChild(licoche);
  }

  div.appendChild(ul2);
  document.body.appendChild(div);
};
creaLista2();

/*
1.4 Crea dinamicamente en el html una serie de divs que contenga un elemento 
h4 para el titulo y otro elemento img para la imagen.
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

    h4.innerText = p.title;
    img.setAttribute("src", p.imgUrl);
    div.appendChild(h4);
    div.appendChild(img);
    document.body.appendChild(div);
  }
};
creaFotos();
