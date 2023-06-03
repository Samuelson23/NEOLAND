import Axios from "axios";
import { useState } from "react";
import PrintCard from "../components/PrintCard/PrintCard";

const searchPokemon = (name) => {
  const [pokemon, setPokemon] = useState({
    name: "",
    number: "",
    image: "",
    type: "",
    abilities: "",
    hp: "",
    attack: "",
    defense: "",
  });

  Axios.get(`https://pokeapi.co/api/v2/pokemon/${name}`).then((res) => {
    setPokemon({
      name: res.data.name,
      number: res.data.id,
      image: res.data.sprites.front_default,
      hp: res.data.stats[0].base_stat,
      attack: res.data.stats[1].base_stat,
      defense: res.data.stats[2].base_stat,
      type: res.data.types[0].type.name,
    });
  });

  return pokemon
};

export default searchPokemon;
