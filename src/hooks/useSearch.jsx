import { useEffect, useState } from 'react';
import axios from 'axios';
import { API_KEY, BASE_URL } from '../Constants';

const useSearch = (searchText, currentPage) => {
  const [data, setData] = useState();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState();

  useEffect(() => {
    if (searchText) {
      setLoading(true);
      axios
        .get(
          `${BASE_URL}&page=${currentPage}&api_key=${API_KEY}&query=${searchText}`
        )
        .then(function (response) {
          setData(response?.data);
        })
        .catch(function (error) {
          setError(error);
        })
        .finally(function () {
          setLoading(false);
        });
    }
  }, [searchText, currentPage]);

  return { data, loading, error };
};

export default useSearch;
