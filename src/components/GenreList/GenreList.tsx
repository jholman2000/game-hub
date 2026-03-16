/* import GenreList.types for type definitions related to the GenreList component. This is a common 
   practice in TypeScript projects to keep type definitions in a separate file for better 
*/
import { ListGroup, ListGroupItem, Button, Image } from "react-bootstrap";
import styles from "./GenreList.module.css";
import useGenres from "../../hooks/useGenres";

const GenreList = () => {
  const { apiData, apiResponse } = useGenres();
  return (
    <>
      <ListGroup variant="flush" className="bg-dark text-white">
        {apiData.map((genre) => (
          <ListGroup.Item
            key={genre.id}
            className="p-0 border-0 bg-dark text-white"
          >
            <Button
              variant="link"
              className={
                styles["no-underline"] +
                " w-100 text-start d-flex align-items-center gap-2 px-2 py-2"
              }
              onClick={() => {
                console.log(genre);
              }}
            >
              <Image
                src={genre.image_background}
                width={48}
                height={48}
                rounded
                style={{ objectFit: "cover" }}
              />

              {genre.name}
            </Button>
          </ListGroup.Item>
        ))}
      </ListGroup>
    </>
  );
};

export default GenreList;
