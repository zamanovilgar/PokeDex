import React from "react";
import styles from "./Button.module.css";

export const Button = (props) => {
  const {
    color = "danger",
    size = "medium",
    children,
    fullwitdh,
    title = "Button",
    weight = "regular",
    onClick,
  } = props;
  return (
    <button
      onClick={onClick}
      className={`${styles[color]} ${styles.btn} ${styles[size]} ${
        fullwitdh ? styles.full : ""
      } ${styles[weight]}`}
    >
      {children || title}
    </button>
  );
};
