import React from "react";
import { GameHeadingProps } from "./GameHeading.types";
import styles from "./GameHeading.module.css";

const stripGames = (name: string) => name.replace(/\s*Games$/i, "").trim();

const GameHeading: React.FC<GameHeadingProps> = ({ gameQuery }) => {
  const { genre, platform } = gameQuery;
  const heading =
    genre || platform
      ? `${genre ? stripGames(genre.name) : ""} ${platform ? stripGames(platform.name) : ""} Games`.trim()
      : "All Games";
  return <h1 className={styles.gameHeading}>{heading}</h1>;
};

export default GameHeading;
