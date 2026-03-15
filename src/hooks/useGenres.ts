import { useEffect, useState } from "react";
import axiosClient from "../services/axiosClient";
/* import GenreList.types for type definitions related to the GenreList component. This is a common 
   practice in TypeScript projects to keep type definitions in a separate file for better 
   organization and maintainability. By importing GenreList.types, you can use the defined types 
   for props, state, or any other relevant data structures within the GenreList component, 
   ensuring type safety and improving code readability. 
*/
import { CanceledError } from "axios";
import { Genre, GenresResponse } from "../components/GenreList/GenreList.types";

const useGenres = () => {
  const [genres, setGenres] = useState<Genre[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>("");

  useEffect(() => {
    const controller = new AbortController();

    setLoading(true);
    axiosClient
      .get<GenresResponse>("/genres", {
        signal: controller.signal,
      })
      .then((response) => {
        setGenres(response.data.results);
        setLoading(false);
      })
      .catch((error) => {
        if (error instanceof CanceledError) return;
        setError(error instanceof Error ? error.message : "Unknown error");
        setLoading(false);
      })
      .finally(() => {
        setLoading(false);
      });

    return () => {
      controller.abort();
    };
  }, []);

  return { genres, loading, error };
};

export default useGenres;
