import "./App.css";
import { Routes, Route, NavLink } from "react-router-dom";

import PokemonDiscoveryPage from "./Components/PokemonDiscoveryPage";
import PokemonDetailPage from "./Components/PokemonDetailPage";

function App() {
  return (
    <div className="App">
      <h1>Meet the amazing Pokes!</h1>

      <div className="AppNav">
        <NavLink className="NavElement" end to="/">
          Home
        </NavLink>
      </div>

      <Routes>
        <Route path="/" element={<PokemonDiscoveryPage />} />

        <Route path="/details/:poke_name" element={<PokemonDetailPage />} />
      </Routes>
    </div>
  );
}

export default App;
