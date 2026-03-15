import { Badge } from "react-bootstrap";
import { CriticScoreProps } from "./CriticScore.types";

const getScoreColor = (score: number): string => {
  if (score > 80) return "success";
  if (score > 50) return "warning-dark";
  return "danger";
};

const CriticScore = ({ score }: CriticScoreProps) => {
  return <Badge bg={getScoreColor(score)}>{score}</Badge>;
};

export default CriticScore;
