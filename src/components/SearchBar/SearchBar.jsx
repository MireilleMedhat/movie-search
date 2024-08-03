import { useEffect, useState } from 'react';
import './SearchBar.css';
import useSearch from '../../hooks/useSearch';

const SearchBar = ({ setSearchText, setCurrentPage }) => {
  const [text, setText] = useState();
  // const { data, loading, error } = useSearch(searchText);
  console.log('text', text);
  // console.log('loading', loading);
  // console.log('error', error);
  // useEffect(() => {
  //   if (data && data.length > 0) setMovies(data?.results);
  // }, [data]);
  const search = () => {
    setCurrentPage(1);
    setSearchText(text);
  };

  const enterKeyPress = (e) => {
    if (e.key === 'Enter') {
      search();
    }
  };
  useEffect(() => {
    addEventListener('keypress', enterKeyPress);
    return () => removeEventListener('keypress', enterKeyPress);
  }, [text]);

  return (
    <div className="searchBar">
      <input
        type="text"
        onChange={(e) => setText(e.target.value)}
        className="searchField"
      />
      <button className="searchButton" onClick={() => search()}>
        🔍
      </button>
    </div>
  );
};

export default SearchBar;
