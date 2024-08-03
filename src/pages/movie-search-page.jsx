import { useEffect, useState } from 'react';
import './movie-search-page.css';
import SearchBar from '../components/SearchBar/SearchBar';
import ResultsTable from '../components/ResultsTable/ResultsTable';
import useSearch from '../hooks/useSearch';
import Footer from '../components/ResultsTable/Footer/Footer';
// https://api.themoviedb.org/3/search/movie?include_adult=false&language=en-US&page=1&api_key=d87ddb182bccb4667d3e292553ab2caa&query=abc

const MovieSearchPage = () => {
  const [searchText, setSearchText] = useState();
  const [movies, setMovies] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);

  const { data, loading, error } = useSearch(searchText, currentPage);
  console.log('data', data);

  useEffect(() => {
    if (data && data.results) setMovies(data?.results);
  }, [data]);

  return (
    <div className="container">
      <h1 className="header">Movie Search</h1>
      <SearchBar
        setSearchText={setSearchText}
        setCurrentPage={setCurrentPage}
      />
      <ResultsTable movies={movies} />
      <Footer
        resultsCount={data?.total_results}
        currentPage={data?.page}
        totalPages={data?.total_pages}
        setCurrentPage={setCurrentPage}
      />
    </div>
  );
};

export default MovieSearchPage;
