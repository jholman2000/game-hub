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
    <>
      <h2 className="text-white">Genres</h2>
      <ListGroup variant="flush" className="bg-dark">
        {apiData.map((genre) => {
          const isSelected = selectedGenre?.id === genre.id;
          return (
            <ListGroup.Item
              key={genre.id}
              action
              onClick={() => onSelectGenre?.(genre)}
              className={`d-flex align-items-center gap-2 border-0 ${styles["no-underline"]} ${
                isSelected
                  ? "bg-primary text-white fw-bold"
                  : "bg-dark text-white"
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
    </>
  );
};

export default GenreList;
