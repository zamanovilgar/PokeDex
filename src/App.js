import pokemonData from "./data/pokemon.json";
import { PokeHead } from "./component/PokeHead";
import { PokeDexContent } from "./component/PokeDexContent";
import { Counter } from "./component/Counter";
import { Button } from "./component/Button";
function App() {
  console.log("pokemonDAta", pokemonData);
  return (
    <>
      <PokeHead />
      <Button color="success" size="small" weight="bold" >
        Gonder
      </Button>
      <PokeDexContent />
      <PokeDexContent />
      <Counter />
    </>
  );
}

export default App;
