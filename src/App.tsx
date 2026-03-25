import { Container, Row, Col } from "react-bootstrap";
import NavBar from "./components/NavBar/NavBar";
import GameGrid from "./components/GameGrid";
import GenreList from "./components/GenreList/GenreList";
import { useState } from "react";
import { Genre } from "./components/GenreList/GenreList.types";
import PlatformSelector, { Platform } from "./components/PlatformSelector";

export default function App() {
  const [selectedGenre, setSelectedGenre] = useState<Genre | null>(null);
  const [selectedPlatform, setSelectedPlatform] = useState<Platform | null>(
    null,
  );

  return (
    <Container fluid>
      {/* Row 1: Nav (full width on all screens) */}
      <Row>
        <Col className="p-0">
          <NavBar />
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
            selectedGenre={selectedGenre}
          />
        </Col>

        {/* Main */}
        <Col className="bg-dark p-3" sm={10} md={9} lg={8} xl={10}>
          <PlatformSelector
            onSelectPlatform={setSelectedPlatform}
            selectedPlatform={selectedPlatform}
          />
          <GameGrid
            selectedPlatform={selectedPlatform}
            selectedGenre={selectedGenre}
          />
        </Col>
      </Row>
    </Container>
  );
}
