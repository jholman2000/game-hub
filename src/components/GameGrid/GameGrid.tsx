import useGames from "../../hooks/useGames";

import { Alert } from "react-bootstrap";

const GameGrid = () => {
  const { games, loading, error } = useGames();

  return (
    <>
      {error && <Alert variant="danger">Error: {error}</Alert>}
      <ul>
        {games.map((game) => (
          <li key={game.id}>{game.name}</li>
        ))}
      </ul>
    </>
  );
};

export default GameGrid;
