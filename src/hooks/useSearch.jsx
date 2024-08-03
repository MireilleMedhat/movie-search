import { useEffect, useState } from 'react';
import axios from 'axios';
import API_KEY from '../constants';

const useSearch = (searchText, currentPage) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState();

  useEffect(() => {
    if (searchText) {
      setLoading(true);
      axios
        .get(
          `https://api.themoviedb.org/3/search/movie?include_adult=false&language=en-US&page=${currentPage}&api_key=${API_KEY}&query=${searchText}`
        )
        .then(function (response) {
          // handle success
          console.log(response);
          setData(response?.data);
        })
        .catch(function (error) {
          // handle error
          console.log(error);
          setError(error);
        })
        .finally(function () {
          // always executed
          setLoading(false);
        });
    }
  }, [searchText, currentPage]);

  return { data, loading, error };
};

export default useSearch;
