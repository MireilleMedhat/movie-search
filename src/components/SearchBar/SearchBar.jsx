import { useEffect, useState } from 'react';
import './SearchBar.css';

const SearchBar = ({ setSearchText, setCurrentPage }) => {
  const [text, setText] = useState();

  const search = () => {
    setCurrentPage(1);
    setSearchText(text);
  };

  /// Allow user to search when they click Enter key along with the Search button
  useEffect(() => {
    const enterKeyPress = (e) => {
      if (e.key === 'Enter') {
        search();
      }
    };
    addEventListener('keypress', enterKeyPress);
    return () => removeEventListener('keypress', enterKeyPress);
  }, [text]);

  return (
    <div className="searchBar" data-testid="search-bar">
      <input
        type="text"
        data-testid="search-input-text"
        onChange={(e) => setText(e.target.value)}
        className="searchField"
      />
      <button
        className="searchButton"
        onClick={() => search()}
        data-testid="search-button"
      >
        🔍
      </button>
    </div>
  );
};

export default SearchBar;
