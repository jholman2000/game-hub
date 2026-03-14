import { Card } from "react-bootstrap";
import { GameCardProps } from "./GameCard.types";
import styles from "./GameCard.module.css";
import PlatformIconList from "../PlatformIconList/PlatformIconList";

const GameCard = ({ game }: GameCardProps) => {
  return (
    <Card>
      <Card.Img variant="top" src={game.background_image} />
      <Card.Body>
        <Card.Title className={styles.title}>{game.name}</Card.Title>
        <PlatformIconList platforms={game.platforms} />
        <Card.Text>Released: {game.released}</Card.Text>
      </Card.Body>
    </Card>
  );
};

export default GameCard;
