import useGames from "../../hooks/useGames";
import { Alert, Col, Container, Row } from "react-bootstrap";
import GameCard from "../GameCard";

const GameGrid = () => {
  const { apiData, loading, error } = useGames();

  return (
    <>
      {error && <Alert variant="danger">Error: {error}</Alert>}
      <Container fluid>
        {loading && <Alert variant="info">Loading games...</Alert>}
        <Row className="g-3">
          {apiData.map((g) => (
            /* Each game is rendered inside a responsive column. The column sizes adjust based on the screen size:
               - xs={12}: On extra small screens, the column takes up the full width (12 out of 12 columns).
               - sm={6}: On small screens, the column takes up half the width (6 out of 12 columns).    
                - md={4}: On medium screens, the column takes up one-third of the width (4 out of 12 columns).
                - lg={3}: On large screens, the column takes up one-quarter of the width (3 out of 12 columns).
                The "d-flex" class is added to make sure all Cards are the same height.
            */
            <Col key={g.id} className="d-flex" xs={12} sm={6} md={4} lg={3}>
              <GameCard game={g} />
            </Col>
          ))}
        </Row>
      </Container>
    </>
  );
};

export default GameGrid;
