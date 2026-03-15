import { Container, Row, Col } from "react-bootstrap";
import NavBar from "./components/NavBar";
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

      {/* Row 2: Aside + Main (Aside hidden on small screens) */}
      <Row>
        {/* Aside (hidden below lg) */}
        <Col md={2} lg={2} className="d-none d-lg-block">
          <GenreList />
        </Col>

        {/* Main */}
        <Col className="p-3" md={10} lg={10}>
          <GameGrid />
        </Col>
      </Row>
    </Container>
  );
}
