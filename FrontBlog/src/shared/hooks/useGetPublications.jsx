import { useState, useEffect } from 'react';

const useGetPublications = () => {
  const [publications, setPublications] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPublications = async () => {
      try {
        const response = await fetch('http://127.0.0.1:8080/ProgrammersDiary/v1/publications/getPublications');
        if (!response.ok) {
          throw new Error('Failed to fetch publications');
        }
        const data = await response.json();
        setPublications(data.publications);
        setLoading(false);
      } catch (error) {
        setError(error.message);
        setLoading(false);
      }
    };

    fetchPublications();

    return () => {

    };
  }, []);

  return { publications, loading, error };
};

export default useGetPublications;