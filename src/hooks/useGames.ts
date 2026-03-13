import { useEffect, useState } from "react";
import axiosClient from "../services/axiosClient";
/* import GameGrid.types for type definitions related to the GameGrid component. This is a common 
   practice in TypeScript projects to keep type definitions in a separate file for better 
   organization and maintainability. By importing GameGrid.types, you can use the defined types 
   for props, state, or any other relevant data structures within the GameGrid component, 
   ensuring type safety and improving code readability. 
*/
import { Game, GameResponse } from "../components/GameGrid/GameGrid.types";
import { CanceledError } from "axios";

const useGames = () => {
  const [games, setGames] = useState<Game[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>("");

  useEffect(() => {
    const controller = new AbortController();

    setLoading(true);
    axiosClient
      .get<GameResponse>("/games", {
        signal: controller.signal,
      })
      .then((response) => {
        setGames(response.data.results);
      })
      .catch((error) => {
        if (error instanceof CanceledError) return;
        setError(error instanceof Error ? error.message : "Unknown error");
      })
      .finally(() => {
        setLoading(false);
      });

    return () => {
      controller.abort();
    };
  }, []);

  return { games, loading, error };
};

export default useGames;
