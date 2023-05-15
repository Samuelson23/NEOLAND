import { dataGlobal } from "./dataGlobal";

export const dataExport = async () => {
  const dataGlobalPok = await dataGlobal(); //--->cargamos los datos asyncronos de la pokeapi en este paso (previo a la llamada a printPokemon)
  const { dataPokemon } = dataGlobalPok;
};
