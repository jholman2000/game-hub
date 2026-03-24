import { Genre } from "../GenreList/GenreList.types";

export interface GameGridProps {
  // Define any props that GameGrid might need here
  selectedGenre?: Genre | null; // Example prop for filtering games by selected genre
}
