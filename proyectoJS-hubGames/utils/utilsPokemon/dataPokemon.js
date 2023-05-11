import { getPokemon } from "../../services/pokemon.service";

//de todos los pokemon recogidos en la api nos quedamos con los 150 primeros
export const pokemonLimpio = async () => {
  const todosPokemons = [];
  for (let i = 1; i < 151; i++) {
    todosPokemons.push(await getPokemon(i));
  }
  return todosPokemons;
};
