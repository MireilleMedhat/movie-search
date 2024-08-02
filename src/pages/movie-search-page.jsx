import { useEffect, useState } from 'react';
import './movie-search-page.css';
import SearchBar from '../components/SearchBar/SearchBar';
import ResultsTable from '../components/ResultsTable/ResultsTable';
// https://api.themoviedb.org/3/search/movie?include_adult=false&language=en-US&page=1&api_key=d87ddb182bccb4667d3e292553ab2caa&query=abc

const MovieSearchPage = () => {
  const [searchText, setSearchText] = useState();

  return (
    <div className="container">
      <h1 className="header">Movie Search</h1>
      <SearchBar />
      <ResultsTable />
    </div>
  );
};

export default MovieSearchPage;
