import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import PokeVisitCard from "./PokeVisitCard";

export default function PokemonDiscoveryPage() {
  const [pokes, set_pokes] = useState(null);
  const [filter, set_filter] = useState("");
  const params = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    async function pokesPopping() {
      const popinPokes = await axios.get(
        "https://pokeapi.co/api/v2/pokemon?limit=151"
      );
      set_pokes(popinPokes.data.results);
    }
    pokesPopping();
    if (params.filter) {
      set_filter(params.filter);
    } else {
      set_filter("");
    }
  }, []);

  const updateFilter = (e) => {
    set_filter(e.target.value);
    navigate(`/${e.target.value}`);
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
