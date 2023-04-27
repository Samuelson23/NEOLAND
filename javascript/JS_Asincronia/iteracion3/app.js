/*
1.3 En base al ejercicio anterior. Crea dinamicamente un elemento por cada petición 
a la api que diga...'El nombre X tiene un Y porciento de ser de Z' etc etc.
EJ: El nombre Pepe tiene un 22 porciento de ser de ET.
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
        document.body.appendChild(div);
      }
    });
};

boton.addEventListener("click", (ev) => {
  input.addEventListener("input", (ev) => {});
  div.innerHTML = "";
  getData(input.value);
});
