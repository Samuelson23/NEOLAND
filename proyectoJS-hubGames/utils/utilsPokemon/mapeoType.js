import { pokemonLimpio } from "./dataPokemon";
import { mapeoPokemon, todosPokemon } from "./mapeoPokemons";

//mapeamos los tipos para guardarlos en un array con los tipos unicos
export const mapeoTipos = async () => {
  const arrayTipos = [];
  const arrayPokemon = todosPokemon;

  arrayPokemon.filter((elem) => {
    elem.types.forEach((type) => {
      !arrayTipos.includes(type.type.name) && arrayTipos.push(type.type.name);
    });
  });
  return arrayTipos;
};
