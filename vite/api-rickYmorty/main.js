import "./style.css";

const main = document.querySelector("main");

const getData = async () => {
  const data = await fetch("https://rickandmortyapi.com/api/character");
  const dataJson = await data.json();
  console.log(dataJson);
  const ul = document.createElement("ul");

  for (const pj of dataJson.results) {
    const li = document.createElement("li");
    li.innerHTML = `
    <figure>
    <img src="${pj.image}" alt="${pj.name}"/>
    <h3>${pj.name}</h3>
    <p>Género: ${pj.gender}</p>
    <p>Estado: ${pj.status}
    <p>Localización: ${pj.location.name}
    </figure>
    `;
    ul.appendChild(li);
  }
  main.appendChild(ul);
};

getData();
