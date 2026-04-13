import { Game } from "../components/GameCard/GameCard.types";
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
        search: gameQuery.searchText,
        search_precise: true, // Enable precise search to match the exact search term
      },
    },
    [gameQuery],
  );
};

export default useGames;
