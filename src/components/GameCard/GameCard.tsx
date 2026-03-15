import { Card } from "react-bootstrap";
import { GameCardProps } from "./GameCard.types";
import styles from "./GameCard.module.css";
import PlatformIconList from "../PlatformIconList/PlatformIconList";
import CriticScore from "../CriticScore/CriticScore";

const GameCard = ({ game }: GameCardProps) => {
  return (
    <Card>
      <Card.Img variant="top" src={game.background_image} />
      <Card.Body>
        <Card.Title className={styles.title}>{game.name}</Card.Title>
        <div className="d-flex justify-content-between">
          <PlatformIconList platforms={game.platforms} />
          <CriticScore score={game.metacritic} />
        </div>
        <Card.Text>Released: {game.released}</Card.Text>
      </Card.Body>
    </Card>
  );
};

export default GameCard;
