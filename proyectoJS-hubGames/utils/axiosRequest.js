import axios from "axios";

//funcion de AXIOS a la cual por parametro le pasamos el servicio creado, con la url y el metodo a utilizar.
export const axiosUtil = async (options) => {
  return await axios.request(options).then((res) => res.data);
};
