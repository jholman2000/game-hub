import { Genre} from "../components/GenreList/GenreList.types";
import useApiData from "./useApiData";

const useGenres = () => useApiData<Genre>(`/genres`);

export default useGenres;
