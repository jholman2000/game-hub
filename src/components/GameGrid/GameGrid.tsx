import { useEffect } from "react";
import React, { useState } from "react";
import axiosClient from "../../services/axiosClient";

/* import GameGrid.types for type definitions related to the GameGrid component. This is a common 
   practice in TypeScript projects to keep type definitions in a separate file for better 
   organization and maintainability. By importing GameGrid.types, you can use the defined types 
   for props, state, or any other relevant data structures within the GameGrid component, 
   ensuring type safety and improving code readability. */
import { GameResponse, Game } from "./GameGrid.types";
import { Alert } from "react-bootstrap";

const GameGrid = () => {
  const [games, setGames] = useState<Game[]>([]);
  const [error, setError] = useState("");

  useEffect(() => {
    axiosClient
      .get<GameResponse>("/games")
      .then((response) => {
        setGames(response.data.results);
      })
      .catch((error) => {
        setError(error.message);
      });
  }, []);

  return (
    <>
      {error && <Alert variant="danger">Error: {error}</Alert>}
      <ul>
        {games.map((game) => (
          <li key={game.id}>{game.name}</li>
        ))}
      </ul>
    </>
  );
};

export default GameGrid;
