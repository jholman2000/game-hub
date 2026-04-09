import { Container, Row, Col } from "react-bootstrap";
import NavBar from "./components/NavBar/NavBar";
import GameGrid from "./components/GameGrid";
import GenreList from "./components/GenreList/GenreList";
import { useState } from "react";
import { Genre } from "./components/GenreList/GenreList.types";
import PlatformSelector, { Platform } from "./components/PlatformSelector";
import SortSelector from "./components/SortSelector";

export interface GameQuery {
  // Define any props that App might need here
  genre: Genre | null; // Example prop for passing a selected genre to the App component
  platform: Platform | null; // Example prop for passing a selected platform to the App component
  sortOrder: string; // Example prop for passing a selected sort order to the App component
  searchText: string;
}

export default function App() {
  const [gameQuery, setGameQuery] = useState<GameQuery>({} as GameQuery);

  const setSelectedGenre = (genre: Genre | null) => {
    setGameQuery((prev) => ({ ...prev, genre }));
  };

  return (
    <Container fluid>
      {/* Row 1: Nav (full width on all screens) */}
      <Row>
        <Col className="p-0">
          <NavBar onSearch={(searchText) => {
              console.log("Search:", searchText);
              setGameQuery((prev) => ({ ...prev, searchText }));
            }} />
        </Col>
      </Row>

      {/* Row 2: Aside + Main (Aside hidden on phones - always show on ≥ 576px) */}
      <Row>
        {/* Aside (hidden below lg) */}
        <Col
          className="d-none d-sm-block bg-dark text-white"
          sm={2} // phones (landscape)
          md={3} // Small tablets, large phones
          lg={2} // Tablets and small laptops
          xl={2} // Desktops and large laptops
        >
          {/* setSelectedGenre is passed as a prop to GenreList. When a genre is
          selected in GenreList, it will call setSelectedGenre to update the
          selectedGenre state in App. This allows App to keep track of which
          genre is currently selected and potentially pass that information down
          to other components like GameGrid to filter the displayed games based
          on the selected genre. */}
          <GenreList
            onSelectGenre={setSelectedGenre}
            selectedGenre={gameQuery.genre}
          />
        </Col>

        {/* Main */}
        <Col className="bg-dark p-3" sm={10} md={9} lg={10} xl={10}>
          <div className="d-flex ms-2 mb-3 gap-2">
            <PlatformSelector
              onSelectPlatform={(platform) =>
                setGameQuery((prev) => ({ ...prev, platform }))
              }
              selectedPlatform={gameQuery.platform}
            />
            <SortSelector
              currentSort={gameQuery.sortOrder}
              onSelectSort={(sortOrder) =>
                setGameQuery({ ...gameQuery, sortOrder })
              }
            />
          </div>
          <GameGrid gameQuery={gameQuery} />
        </Col>
      </Row>
    </Container>
  );
}
