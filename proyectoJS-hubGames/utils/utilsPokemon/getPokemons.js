import { mapeoPokemon } from "./mapeoPokemons";
import { printCard } from "./printCards";

export const getPokemons = async () => {
  let arrayTodos = await mapeoPokemon();
  printCard(arrayTodos);
  console.log(arrayTodos);
};
