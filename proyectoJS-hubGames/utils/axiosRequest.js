import axios from "axios";

/* export const axiosUtil = async (options) => {
  return await axios.request(options).then((res) => res.data);
};
 */
export const axiosPokemon = async (id) => {
  return await axios
    .get(`https://pokeapi.co/api/v2/pokemon/${id}`)
    .then((res) => {
      return res;
    });
};
