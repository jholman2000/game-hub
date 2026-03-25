import { Genre } from "../GenreList/GenreList.types";
import { Platform } from "../PlatformSelector";

export interface GameGridProps {
  // Define any props that GameGrid might need here
  selectedPlatform?: Platform | null; // Example prop for filtering games by selected platform
  selectedGenre?: Genre | null; // Example prop for filtering games by selected genre
}
