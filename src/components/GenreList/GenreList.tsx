import useGenres from "../../hooks/useGenres";
/* import GenreList.types for type definitions related to the GenreList component. This is a common 
   practice in TypeScript projects to keep type definitions in a separate file for better 
*/
import React from "react";

const GenreList = () => {
  const { genres } = useGenres();
  return (
    <ul>
      {genres.map((genre) => (
        <li key={genre.id}>{genre.name}</li>
      ))}
    </ul>
  );
};

export default GenreList;
