import { Genre } from "../components/GenreList/GenreList.types";
import { Game, Platform } from "../components/GameCard/GameCard.types";
import useApiData from "./useApiData";
import { GameQuery } from "@/App";

const useGames = (gameQuery: GameQuery) => {
  return useApiData<Game>(
    "/games",
    {
      params: {
        genres: gameQuery.genre?.id,
        parent_platforms: gameQuery.platform?.id,
        ordering: gameQuery.sortOrder,
      },
    },
    [gameQuery],
  );
};

export default useGames;
