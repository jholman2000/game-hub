/* RAWG.io API types for GameGrid component */

export interface GameResponse {
  count: number;
  next: string | null;
  previous: string | null;
  results: Game[];
}

export interface Platform {
  id: number;
  name: string;
  slug: string;
}

export interface Game {
  id: number;
  name: string;
  released: string;
  background_image: string;
  rating: number;
  platforms: { platform: Platform }[];
}
