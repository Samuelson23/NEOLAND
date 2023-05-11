import { axiosUtil } from "../utils/axiosRequest";

//creamos el servicio para atacar a la api. Con esta funcion metemos el metodo, la url y los parametros que queremos que utilice AXIOS
export const getPokemon = async (id) => {
  const optionsRequest = {
    method: "GET",
    url: `https://pokeapi.co/api/v2/pokemon/${id}`,
  };
  return await axiosUtil(optionsRequest);
};
