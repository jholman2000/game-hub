import React from "react";
import { Container } from "react-bootstrap";
import useGames from "../../hooks/useGames";
import GameCard from "../GameCard";
import { GameGridProps } from "./GameGrid.types";

// Animated Searching Icon component
const AnimatedSearchingIcon = ({ size = 120 }: { size?: number }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 100 100"
    xmlns="http://www.w3.org/2000/svg"
    style={{ display: "block" }}
  >
    {/* Pulsing circle */}
    <circle
      cx="50"
      cy="50"
      r="20"
      fill="none"
      stroke="#0d6efd"
      strokeWidth="6"
      strokeLinecap="round"
    >
      <animate
        attributeName="r"
        values="15;25;15"
        dur="1.2s"
        repeatCount="indefinite"
      />
      <animate
        attributeName="stroke-opacity"
        values="1;0.3;1"
        dur="1.2s"
        repeatCount="indefinite"
      />
    </circle>

    {/* Magnifying glass handle */}
    <line
      x1="65"
      y1="65"
      x2="80"
      y2="80"
      stroke="#0d6efd"
      strokeWidth="6"
      strokeLinecap="round"
    >
      <animateTransform
        attributeName="transform"
        type="rotate"
        from="0 50 50"
        to="360 50 50"
        dur="2s"
        repeatCount="indefinite"
      />
    </line>
  </svg>
);

const GameGrid = ({ selectedGenre = null }: GameGridProps) => {
  const { apiData, isLoading, error } = useGames(selectedGenre);

  // Full-screen animated loading
  if (isLoading) {
    return (
      <Container
        fluid
        className="d-flex flex-column align-items-center justify-content-center"
        style={{ height: "80vh" }}
      >
        <AnimatedSearchingIcon size={120} />
        <div className="mt-3 text-center">
          <strong>Searching for games...</strong>
        </div>
      </Container>
    );
  }

  // Error state
  if (error) {
    return (
      <Container fluid className="my-3">
        <div className="text-center">
          <strong>Error: {error}</strong>
        </div>
      </Container>
    );
  }

  // Grid view
  return (
    <Container fluid className="my-3">
      <div className="row g-3">
        {apiData.map((game) => (
          <div
            key={game.id}
            className="col-12 col-sm-6 col-md-4 col-lg-3 d-flex"
          >
            <GameCard game={game} />
          </div>
        ))}
      </div>
    </Container>
  );
};

export default GameGrid;
