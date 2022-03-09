import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

export default function PokemonDetailPage() {
  const route_parameters = useParams();
  const [poke, set_poke] = useState(null);

  useEffect(async () => {
    async function getPokeData() {
      const pokeResp = await axios.get(
        `https://pokeapi.co/api/v2/pokemon/${route_parameters.poke_name}`
      );
      set_poke(pokeResp.data);
    }
    getPokeData();
  }, []);

  return poke ? (
    <div>
      <h2>{poke.name}</h2>
      <img src={poke.sprites.front_shiny} />
      <p>
        Types:{" "}
        {poke.types.map((t) => (
          <span>{t.type.name}</span>
        ))}
      </p>
      <p>Weight: {poke.weight} hectograms</p>
      <img src={poke.sprites.back_default} />
    </div>
  ) : (
    <p>Loading...</p>
  );
}
