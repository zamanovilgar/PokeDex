import React from "react";
import styles from "./PokeHead.module.css";

export const PokeCard = (props) => {
  const pokemonImg = (id) => {
    let newId = id.toString();

    // let resultId =
    //   newId.length == 1 ? "00" + newId : newId.length == 2 ? "0" + newId : id;
    let resultId = id;
    if (newId.length == 1) {
      resultId = "00" + id;
    }
    if (newId.length == 2) {
      resultId = "0" + id;
    }
    return resultId;
  };
  return (
    <div className={styles.card}>
      <p className={styles.card_title}>{props.name}</p>
      <img
        src={` https://assets.pokemon.com/assets/cms2/img/pokedex/detail/${pokemonImg(
          props.id
        )}.png`}
      />
      <p className={styles.card_info}>Type:{props.type}</p>
      <p className={styles.card_info}>Exp:{props.base_experience}</p>
    </div>
  );
};
