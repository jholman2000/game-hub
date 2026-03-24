export interface GenreListProps {
  // Define any props that GenreList might need here
  onSelectGenre?: (genre: Genre) => void; // Example prop for handling genre selection
}

export interface GenresResponse {
  count: number;
  next: string | null;
  previous: string | null;
  results: Genre[];
}

export interface Genre {
  id: number;
  name: string;
  slug: string;
  games_count: number;
  image_background: string;
}
