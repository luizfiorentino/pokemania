import "./App.css";
import { Routes, Route, NavLink } from "react-router-dom";

import PokemonDiscoveryPage from "./Components/PokemonDiscoveryPage";

function App() {
  return (
    <div className="App">
      <h1>Meet the amazing Pokes!</h1>
      <div className="AppNav">
        <NavLink className="NavElement" end to="/">
          Home
        </NavLink>
      </div>
      /* Add a nice clickable link to the App.js file, so that we can always get
      back to the homepage (we need it later).*/
      <Routes>
        <Route path="/" element={<PokemonDiscoveryPage />} />
      </Routes>
    </div>
  );
}

export default App;
