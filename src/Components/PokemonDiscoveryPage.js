import axios from "axios";
import { useEffect, useState } from "react";
import PokeVisitCard from "./PokeVisitCard";

export default function PokemonDiscoveryPage() {
  const [pokes, set_pokes] = useState(null);

  useEffect(() => {
    async function pokesPopping() {
      const popinPokes = await axios.get(
        "https://pokeapi.co/api/v2/pokemon?limit=151"
      );
      set_pokes(popinPokes.data.results);
    }
    pokesPopping();
  }, []);

  return (
    <div>
      {pokes ? (
        pokes.map((p) => <PokeVisitCard name={p.name} />)
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}
