import { NavLink } from "react-router-dom";
export default function PokeVisitCard({ name }) {
  return (
    <div>
      <p></p>
      <p></p>
      <NavLink to={`/details/${name}`}>{name}</NavLink>
    </div>
  );
}
