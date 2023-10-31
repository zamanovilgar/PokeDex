import pokemonData from "./data/pokemon.json";
import { PokeHead } from "./component/PokeHead";
import { PokeDexContent } from "./component/PokeDexContent";
// import { Counter } from "./component/Counter";
// import { Button } from "./component/Button";
import { useState } from "react";
function App() {
  const [firstTeam, setFirstTeam] = useState([]);
  const [secondTeam, setSecondTeam] = useState([]);

  console.log(firstTeam);
  console.log(secondTeam);

  const handleStart = () => {
    let newFirstTeam = [...pokemonData];
    let newSecondTeam = [];

    while (newSecondTeam.length < newFirstTeam.length) {
      const randomIndex = Math.floor(Math.random() * firstTeam.length);

      const rmvPokemon = firstTeam.splice(randomIndex, 1);

      newSecondTeam.push(rmvPokemon[0]);
    }

    console.log(newFirstTeam);
    console.log(newSecondTeam);

    setFirstTeam(newFirstTeam);
    setSecondTeam(newSecondTeam);

    console.log("say hello!");
  };
  const team1Power = firstTeam?.reduce(
    (sum, item) => sum + item?.base_experience,0
  );
  const team2Power = secondTeam?.reduce(
    (sum, item) => sum + item?.base_experience,0
  );

  return (
    <>
      <PokeHead sayHello={handleStart} />
      {!!secondTeam.length && (
        <>
          {" "}
          <PokeDexContent
            isWinner={team1Power>team2Power}
            power={team1Power}
            pokemons={firstTeam}
          />
          <h2
            style={{
              textAlign: "center",
              fontSize: 50,
              color: "red",
            }}
          >
            VS
          </h2>
          <PokeDexContent
            isWinner={team2Power>team1Power}
            power={team2Power}
            pokemons={secondTeam}
          />
        </>
      )}{" "}
    </>
  );
}

export default App;
