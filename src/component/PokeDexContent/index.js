import React from "react";
import { PokeCard } from "../PokeCard";
import styles from "./PokeHead.module.css";

export const PokeDexContent = (props) => {
  return (
    <div className={styles.container}>
      <p
        className={styles.title_winner}
        style={{ color: props.isWinner ? "green" : "red" }}
      >
        {props.isWinner ? "Winner" : "Lose"}
      </p>
      <p className={styles.title_power}>Power</p>
      <div className={styles.list}>
        {props.pokemons?.map((pokemon) => (
          <PokeCard key={"pokecard" + pokemon.id} {...pokemon} />
        ))}
      </div>
    </div>
  );
};
