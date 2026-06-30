export interface GameCardProps {
  game: Game;
}

export interface GameResponse {
  count: number;
  next: string | null;
  previous: string | null;
  results: Game[];
}

export interface Game {
  id: number;
  name: string;
  released: string;
  background_image: string;
  rating: number;
  metacritic: number;
  platforms: { platform: Platform }[];
  rating_top: number;
}

export interface Platform {
  id: number;
  name: string;
  slug: string;
}
