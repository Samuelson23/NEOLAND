import { axiosPokemon } from "../../utils/axiosRequest";

export const pokemonLimpio = async () => {
  const todosPokemons = [];
  for (let i = 1; i < 151; i++) {
    todosPokemons.push(await axiosPokemon(i));
  }
  return todosPokemons;
};
