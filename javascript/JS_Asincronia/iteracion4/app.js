/*
1.4 En base al ejercicio anterior, crea un botón con el texto 'X' para cada uno 
de los p que hayas insertado y que si el usuario hace click en este botón 
eliminemos el parrafo asociado.
*/
const baseUrl = "https://api.nationalize.io";
const boton = document.querySelector("button");
const input = document.querySelector("input");
const body = document.querySelector("body");
const div = document.createElement("div");

const getData = (valor) => {
  fetch(`https://api.nationalize.io?name=${valor}`)
    .then((res) => res.json())
    .then((res) => {
      let pais;
      let prob;
      console.log(res.country);

      for (const country in res.country) {
        const datos = res.country[country];
        console.log(datos);
        pais = datos.country_id;
        prob = datos.probability;

        const p = document.createElement("p");
        p.innerHTML = `El nombre ${valor} tiene un ${prob} de ser de ${pais}`;
        div.appendChild(p);
        const b = document.createElement("button");
        b.innerHTML = "borrar";
        b.classList.add("delete");
        div.appendChild(b);
        document.body.appendChild(div);

        b.addEventListener("click", (ev) => {
          b.previousSibling.remove();
          b.remove();
        });
      }
    });
};

boton.addEventListener("click", (ev) => {
  input.addEventListener("input", (ev) => {});
  div.innerHTML = "";
  getData(input.value);
});

const botborrador = document.querySelectorAll(".delete");

botborrador.forEach((elem) => {});
