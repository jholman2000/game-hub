import { Genre } from "../components/GenreList/GenreList.types";
import { Game, Platform } from "../components/GameCard/GameCard.types";
import useApiData from "./useApiData";

const useGames = (
  selectedGenre: Genre | null,
  selectedPlatform: Platform | null,
) => {
  return useApiData<Game>(
    "/games",
    {
      params: {
        genres: selectedGenre?.id,
        parent_platforms: selectedPlatform?.id,
      },
    },
    [selectedGenre?.id, selectedPlatform?.id],
  );
};

export default useGames;
