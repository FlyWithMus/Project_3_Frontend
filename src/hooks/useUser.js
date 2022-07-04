import useFetch from "./useFetch";
import { getProfileEndpoint } from "../api";

const useUser = () => {
  const { data: user, loading, error } = useFetch(getProfileEndpoint());

  return { user, loading, error };
};

export default useUser;
