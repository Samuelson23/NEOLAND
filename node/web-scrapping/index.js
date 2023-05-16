const fs = require("fs");
const puppeteer = require("puppeteer");

const BASE_URL = "https://www.sprintersports.com/tienda-vans";

const scrapping = async () => {
  const browser = await puppeteer.launch({
    headless: false,
    defaultViewport: null,
    args: ["--start-maximized"],
  });
  const page = await browser.newPage();
  await page.goto(BASE_URL);
  await page.waitForTimeout(3000);

  // aqui iria el clickar a la siguiente pag o que haga scroll

  await page.waitForSelector(".row");

  const tittle = await page.$$eval(".product__name", (nodes) => {
    nodes.map((n) => n.innerText);
  });
  const image = await page.$$eval(
    ".v-lazy-image v-lazy-image-loaded",
    (nodes) => {
      nodes.map((n) => n.innerText);
    }
  );

  const products = tittle.map((item, index) => {
    details: tittle[index];
    img: image[index];
  });
  console.log(products);
};

scrapping();
