import { Container, Row, Col } from "react-bootstrap";
import NavBar from "./components/NavBar/NavBar";
import GameGrid from "./components/GameGrid";
import GenreList from "./components/GenreList/GenreList";
import { useState } from "react";
import { Genre } from "./components/GenreList/GenreList.types";
import PlatformSelector, { Platform } from "./components/PlatformSelector";
import SortSelector from "./components/SortSelector";
import GameHeading from "./components/GameHeading";
import { GameQuery } from "./types/GameQuery";
export type { GameQuery } from "./types/GameQuery";

export default function App() {
  const [gameQuery, setGameQuery] = useState<GameQuery>({
    genre: null,
    platform: null,
    sortOrder: "",
    searchText: "",
  });

  const handleSelectGenre = (genre: Genre | null) => {
    setGameQuery((prev) => ({ ...prev, genre }));
  };

  const handleSearch = (searchText: string) => {
    setGameQuery((prev) => ({ ...prev, searchText }));
  };

  const handleSelectPlatform = (platform: Platform | null) => {
    setGameQuery((prev) => ({ ...prev, platform }));
  };

  const handleSelectSort = (sortOrder: string) => {
    setGameQuery((prev) => ({ ...prev, sortOrder }));
  };

  return (
    <Container fluid>
      <Row>
        <Col className="p-0">
          <NavBar onSearch={handleSearch} />
        </Col>
      </Row>
      <Row>
        <Col
          className="d-none d-sm-block bg-dark text-white"
          sm={2}
          md={3}
          lg={2}
          xl={2}
        >
          <GenreList
            onSelectGenre={handleSelectGenre}
            selectedGenre={gameQuery.genre}
          />
        </Col>
        <Col className="bg-dark p-3" sm={10} md={9} lg={10} xl={10}>
          <GameHeading gameQuery={gameQuery} />
          <div className="d-flex ms-2 mb-3 gap-2">
            <PlatformSelector
              onSelectPlatform={handleSelectPlatform}
              selectedPlatform={gameQuery.platform}
            />
            <SortSelector
              currentSort={gameQuery.sortOrder}
              onSelectSort={handleSelectSort}
            />
          </div>
          <GameGrid gameQuery={gameQuery} />
        </Col>
      </Row>
    </Container>
  );
}
