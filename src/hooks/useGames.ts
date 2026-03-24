import { Genre } from "../components/GenreList/GenreList.types";
import { Game } from "../components/GameCard/GameCard.types";
import useApiData from "./useApiData";

const useGames = (selectedGenre: Genre | null) => {
  //const endpoint = selectedGenre ? `/games?genre=${selectedGenre.id}` : `/games`;
  //const endpoint = selectedGenre ? '/games', {params: {genres: selectedGenre?.id}}, [selectedGenre.id]: `/games`;
  return useApiData<Game>("/games", { params: { genres: selectedGenre?.id } }, [
    selectedGenre?.id,
  ]);
};

export default useGames;
