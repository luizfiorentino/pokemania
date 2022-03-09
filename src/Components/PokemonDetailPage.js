import { NavLink, useParams } from "react-router-dom";

export default function PokemonDetailPage() {
  const route_parameters = useParams();

  return <p>{route_parameters.poke_name}</p>;
}
