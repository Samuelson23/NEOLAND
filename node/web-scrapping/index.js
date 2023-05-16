//importamos las LIBRERIAS fs (para escribir texto plano) y puppeteer (para hacer web scrapping)
const fs = require("fs");
const puppeteer = require("puppeteer");

//creamos una variable para la url base. Puede ir en mayusculas porque no va a cambiar nunca
const BASE_URL = "https://www.sinhumo.net/s-1/sabores_de_liquidos-bebidas";

//creamos la funcion que hará web scrapping. Al ser una función que se ejecuta en internet DEBE DE SER asincrona
const scrapping = async () => {
  //creamos el navegador para que la funcion lo abra en una ventana al inicializar

  const browser = await puppeteer.launch({
    headless: false, //---> para que lo abra maximizado
    defaultViewport: null, //---> para que se mantenga maximizado
    args: ["--start-maximized"],
  });

  const page = await browser.newPage(); //abrimos el navegador
  await page.goto(BASE_URL); //metemos la URL al navegador mediante el metodo "goto"
  await page.waitForTimeout(30000); //le decimos al navegador que se espere 4seg para cargar bien toda la info

  //ahora habria que hacer scroll o clickar a la siguiente pagina
  //pero no lo vamos a hacer xD

  //con "waitForSelector" le decimos que espere a que los elementos esten pintados
  await page.waitForSelector("#wrapper");

  // hay que hacer click en esta clase que es la del boton del ser mayor de edad --- class=cn_element cn_html id-d3ed81c8-2a1c-4650-be6f-26c4451467a5

  //guardamos los datos cuando esten disponibles
  const tittle = await page.$$eval("h3 product-title", (nodes) =>
    //$$eval --> evalua que exista esa clase y la callback evalua todos los nodos
    //recorremos todos los nodos y los mapeamos para quedarnos con los datos que nos interesan
    //en la variable "tittle" nos va a guardar todos los innerText de los elementos que encuentre
    nodes.map((n) => n.innerText)
  );
  const image = await page.$$eval("product-img", (nodes) =>
    nodes.map((n) => n.src)
  );
  const price = await page.$$eval("price", (nodes) =>
    nodes.map((n) => n.innerText)
  );
  console.log(tittle);
  //creamos un objeto para almacenar todos los datos recogidos

  const productos = tittle.map((item, index) => ({
    name: tittle[index],
    img: image[index],
    price: price[index],
  }));

  //para borrar el ultimo elemento ya que al mapearlo sale un elemento vacio
  productos.pop();
  console.log(productos);
  const stProducts = JSON.stringify(productos);
  fs.writeFile("liquidosBebidas.json", stProducts, () => {
    console.log("copiado");
  });

  await browser.close();
};

scrapping();
