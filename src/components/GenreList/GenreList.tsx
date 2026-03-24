/* import GenreList.types for type definitions related to the GenreList component. This is a common 
   practice in TypeScript projects to keep type definitions in a separate file for better 
*/
import {
  ListGroup,
  ListGroupItem,
  Button,
  Image,
  Spinner,
} from "react-bootstrap";
import styles from "./GenreList.module.css";
import useGenres from "../../hooks/useGenres";
import { GenreListProps } from "./GenreList.types";

const GenreList = ({ onSelectGenre, selectedGenre }: GenreListProps) => {
  const { apiData, isLoading } = useGenres();

  if (isLoading)
    return (
      <Spinner animation="border" role="status">
        <span className="visually-hidden">Loading...</span>
      </Spinner>
    );

  return (
    <ListGroup variant="flush" className="bg-dark">
      {apiData.map((genre) => {
        const isSelected = selectedGenre?.id === genre.id;

        return (
          <ListGroup.Item
            key={genre.id}
            action
            onClick={() => onSelectGenre?.(genre)}
            className={`d-flex align-items-center gap-2 border-0 ${
              isSelected
                ? "bg-primary text-white"
                : "bg-dark text-white fw-bold"
            }`}
            style={{ cursor: "pointer" }}
          >
            <Image
              src={genre.image_background}
              width={48}
              height={48}
              rounded
              style={{ objectFit: "cover" }}
            />

            {genre.name}
          </ListGroup.Item>
        );
      })}
    </ListGroup>
  );
};

export default GenreList;
