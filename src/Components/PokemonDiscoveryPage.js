import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import PokeVisitCard from "./PokeVisitCard";

export default function PokemonDiscoveryPage() {
  const [pokes, set_pokes] = useState(null);
  const [filter, set_filter] = useState(null);

  useEffect(() => {
    async function pokesPopping() {
      const popinPokes = await axios.get(
        "https://pokeapi.co/api/v2/pokemon?limit=151"
      );
      set_pokes(popinPokes.data.results);
    }
    pokesPopping();
  }, []);

  const updateFilter = (e) => {
    set_filter(e.target.value);
  };

  return (
    <div>
      <input type="text" value={filter} onChange={updateFilter} />
      {pokes ? (
        pokes
          .filter((p) => p.name.startsWith(filter))
          .map((p, i) => <PokeVisitCard key={i} name={p.name} />)
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}
