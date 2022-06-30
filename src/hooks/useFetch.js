import { useEffect, useState } from "react";

const useFetch = (url) => {
  const [data, setData] = useState([]);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(url);

        const body = await res.json();

        if (res.ok) {
          setData(body.data);
          setError("");
        } else {
          throw new Error(body.message);
        }
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [url]);

  return { data, loading, error };
};

export default useFetch;
