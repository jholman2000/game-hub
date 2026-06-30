import { Card } from "react-bootstrap";
import { GameCardProps } from "./GameCard.types";
import styles from "./GameCard.module.css";
import PlatformIconList from "../PlatformIconList/PlatformIconList";
import CriticScore from "../CriticScore/CriticScore";
import noImage from "../../assets/no-image-placeholder.webp";

const GameCard = ({ game }: GameCardProps) => {
  return (
    <Card>
      <Card.Img variant="top" src={game.background_image || noImage} />
      <Card.Body>
        <div className="d-flex justify-content-between mb-3">
          <PlatformIconList platforms={game.platforms} />
          <CriticScore score={game.metacritic} />
        </div>
        <Card.Title className={styles.title}>{game.name}</Card.Title>
        <Card.Text>Released: {game.released}</Card.Text>
      </Card.Body>
    </Card>
  );
};

export default GameCard;
