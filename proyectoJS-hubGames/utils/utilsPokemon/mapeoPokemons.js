import { pokemonLimpio } from "./dataPokemon";

/*export const mapeoPokemon = async () => {
  const resp = await axiosPokemon();
  console.log(resp);
};*/

export const mapeoPokemon = async () => {
  /* const todosPokemons = [];
  for (let i = 1; i < 151; i++) {
    todosPokemons.push(await axiosPokemon(i));
  } */
  //console.log(todosPokemons);
  const arrayPok = await pokemonLimpio();
  let dataPokemons = arrayPok.map((elem) => {
    let idCompleto = "";
    if (elem.data.id < 10) {
      idCompleto = `00${elem.data.id}`;
    } else if (elem.data.id < 100) {
      idCompleto = `0${elem.data.id}`;
    } else {
      idCompleto = `${elem.data.id}`;
    }
    return {
      id: idCompleto,
      name: elem.data.name,
      img: elem.data.sprites.other.dream_world.front_default,
      types: elem.data.types, //[0].type.name,
      //type2: elem.data.types[1].type.name,
      altura: elem.data.height * 10,
      peso: elem.data.weight / 10,
    };
  });
  return dataPokemons;
};
