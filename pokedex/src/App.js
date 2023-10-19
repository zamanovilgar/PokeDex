import pokemonData from "./data/pokemon.json";
import { PokeHead } from "./component/PokeHead";
import { PokeDexContent } from "./component/PokeDexContent";
function App() {
  console.log("pokemonDAta", pokemonData);
  return (
    <>
      <PokeHead />
      <PokeDexContent />
      <PokeDexContent />

    </>
  );
}

export default App;
