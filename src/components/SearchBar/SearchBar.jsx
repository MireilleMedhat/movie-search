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
