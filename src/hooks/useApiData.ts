/* useApiData is a custom React hook designed to fetch data from a specified API endpoint. It manages 
   the state of the fetched data, loading status, and any errors that may occur during the fetch process. 
   The hook uses Axios for making HTTP requests and includes error handling for canceled requests. The 
   generic type parameter <T> allows the hook to be flexible and reusable for different types of data, making 
   it a versatile tool for fetching various kinds of API data in a React application. By returning the fetched 
   data, loading status, and error message, this hook provides a convenient way to manage API data fetching 
   logic in a clean and organized manner. 
*/
import { useEffect, useState } from "react";
import axiosClient from "../services/axiosClient";
import { AxiosRequestConfig, CanceledError } from "axios";

interface UseApiDataResponse<T> {
  count: number;
  next: string | null;
  previous: string | null;
  results: T[];
  loading: boolean;
  error: string | null;
}

const useApiData = <T>(
  endpoint: string,
  requestConfig?: AxiosRequestConfig,
  deps?: any[],
) => {
  const [apiResponse, setApiResponse] = useState<UseApiDataResponse<T> | null>(
    null,
  );
  const [apiData, setApiData] = useState<T[]>([]);
  const [isLoading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>("");

  useEffect(
    () => {
      const controller = new AbortController();

      setLoading(true);
      axiosClient
        .get<UseApiDataResponse<T>>(endpoint, {
          signal: controller.signal,
          ...requestConfig,
        })
        .then((response) => {
          setApiData(response.data.results);
          setApiResponse(response.data);
          console.log("apiResponse:", response.data); // Debugging log
          console.log("apiData:", response.data.results); // Debugging log
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
    },
    deps ? [...deps] : [],
  ); // Spread deps to ensure useEffect runs when any of the dependencies change

  return { apiData, apiResponse, isLoading, error };
};

export default useApiData;
