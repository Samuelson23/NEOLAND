/*
Al siguiente javascript no funciona como deberia...podrias arreglarlo?

Debería mostrar por consola "Pepito Palotes".

function a() {
    const name = "Pepito Palotes";
    b(name);
  }
  
  function b() {
    console.log(name);
  }
  
  a();*/

  function a() {
    const name = "Pepito Palotes";
    b(name);
  }
  
  function b(nom) {                            //el fallo era que no se le pasa un parametro a la funcion b 
    console.log(nom);
  }
  
  a();