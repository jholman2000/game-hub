import { Platform } from "../components/PlatformSelector/PlatformSelector.types";
import useApiData from "./useApiData";

const usePlatforms = () => useApiData<Platform>(`/platforms/lists/parents`);

export default usePlatforms;
