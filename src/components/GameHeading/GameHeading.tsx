import React from "react";
import { GameHeadingProps } from "./GameHeading.types";
import styles from "./GameHeading.module.css";

const GameHeading: React.FC<GameHeadingProps> = ({ className, ...rest }) => {
  //const Component = "&lt;h1&gt;" as any; // allow dynamic component type
  const { genre, platform } = rest.gameQuery || {};
  const heading =
    genre || platform
      ? `${genre?.name || ""} ${platform?.name || ""} Games`.trim()
      : "All Games";
  return <h1 className={styles.gameHeading}>{heading}</h1>;
};

export default GameHeading;
