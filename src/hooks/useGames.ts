import { Game } from "../components/GameCard/GameCard.types";
import useApiData from "./useApiData";

const useGames = () => useApiData<Game>(`/games`);

export default useGames;
