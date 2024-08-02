import { useState } from 'react';
import './SearchBar.css';

const SearchBar = () => {
  const [searchText, setSearchText] = useState();
  return (
    <div className="searchBar">
      <input
        type="text"
        onChange={(e) => setSearchText(e.target.value)}
        className="searchField"
      />
      <button className="searchButton">🔍</button>
    </div>
  );
};

export default SearchBar;
