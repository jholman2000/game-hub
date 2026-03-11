import { Container, Row, Col } from "react-bootstrap";
import NavBar from "./components/NavBar";

export default function App() {
  return (
    <Container fluid>
      {/* Row 1: Nav (full width on all screens) */}
      <Row>
        <Col>
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
        <Col lg={9} style={{ background: "dodgerblue" }}>
          Main
        </Col>
      </Row>
    </Container>
  );
}
