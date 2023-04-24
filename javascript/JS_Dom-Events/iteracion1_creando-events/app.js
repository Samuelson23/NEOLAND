//1.1 Añade un botón a tu html con el id btnToClick y en tu javascript añade el
//evento click que ejecute un console log con la información del evento del click

const boton = document.querySelector("#btnToClick");
console.log(boton);
boton.addEventListener("click", (evento) => {
  console.log(evento);
});

//1.2 Añade un evento 'focus' que ejecute un console.log con el valor del input.
const focus = document.querySelector(".focus");
focus.addEventListener("click", (evento) => {
  console.log(evento.target.value);
});

//1.3 Añade un evento 'input' que ejecute un console.log con el valor del input.
const value = document.querySelector(".value");
value.addEventListener("input", (evento) => {
  console.log(evento.target.value);
});
