import { pokemonLimpio } from "./dataPokemon";
import { mapeoPokemon, todosPokemon } from "./mapeoPokemons";

export let arrayTipos = [];
//mapeamos los tipos para guardarlos en un array con los tipos unicos
export const mapeoTipos = () => {
  const arrayPokemon = todosPokemon;

  arrayPokemon.filter((elem) => {
    elem.types.forEach((type) => {
      !arrayTipos.includes(type.type.name) && arrayTipos.push(type.type.name);
    });
  });
  console.log("array2", arrayTipos);
  return arrayPokemon;
};
