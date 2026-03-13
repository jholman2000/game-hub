import { Container, Row, Col } from "react-bootstrap";
import NavBar from "./components/NavBar";
import GameGrid from "./components/GameGrid";

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
        <Col
          lg={3}
          className="d-none d-lg-block"
          style={{ background: "gold", paddingLeft: 20, paddingRight: 20 }}
        >
          Aside
        </Col>

        {/* Main */}
        <Col lg={9}>
          <GameGrid />
        </Col>
      </Row>
    </Container>
  );
}
