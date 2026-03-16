/* import GenreList.types for type definitions related to the GenreList component. This is a common 
   practice in TypeScript projects to keep type definitions in a separate file for better 
*/
import useGenres from "../../hooks/useGenres";

const GenreList = () => {
  const { apiData, apiResponse } = useGenres();
  return (
    <>
      <span>{apiResponse?.count} items</span>
      <ul>
        {apiData.map((genre) => (
          <li key={genre.id}>{genre.name}</li>
        ))}
      </ul>
    </>
  );
};

export default GenreList;
