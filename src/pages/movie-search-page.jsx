import { useEffect, useState } from 'react';
import './movie-search-page.css';
import SearchBar from '../components/SearchBar/SearchBar';
import ResultsTable from '../components/ResultsTable/ResultsTable';
import useSearch from '../hooks/useSearch';
import Footer from '../components/ResultsTable/Footer/Footer';
import Message from '../components/Message/Message';

const MovieSearchPage = () => {
  const [searchText, setSearchText] = useState();
  const [movies, setMovies] = useState();
  const [currentPage, setCurrentPage] = useState(1);

  const { data, loading, error } = useSearch(searchText, currentPage);

  useEffect(() => {
    if (error) alert(error);
  }, [error]);

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
      <div className="tableContainer">
        {loading ? (
          <Message messageText="Loading...please wait." />
        ) : (
          <ResultsTable movies={movies} />
        )}
      </div>
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
