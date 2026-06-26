import { Genre } from "../components/GenreList/GenreList.types";
import { Platform } from "../components/PlatformSelector";

export interface GameQuery {
  genre: Genre | null;
  platform: Platform | null;
  sortOrder: string;
  searchText: string;
}
