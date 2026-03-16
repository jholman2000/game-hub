import { Container, Row, Col } from "react-bootstrap";
import NavBar from "./components/NavBar/NavBar";
import GameGrid from "./components/GameGrid";
import GenreList from "./components/GenreList/GenreList";

export default function App() {
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
          <GenreList />
        </Col>

        {/* Main */}
        <Col className="p-3" sm={10} md={9} lg={8} xl={10

        }>
          <GameGrid />
        </Col>
      </Row>
    </Container>
  );
}
