import React from 'react';
import searchIcon from '../assets/search.svg';
import searchWhiteIcon from '../assets/search-white.png';

function SearchBar({ isDark, value, onChange }) {
  return (
    <label className="search-field">
      <span className="sr-only">Search notes</span>
      <input
        type="search"
        value={value}
        onChange={(event) => onChange(event.target.value)}
        placeholder="Search note..."
      />
      <img className="search-icon" src={isDark ? searchWhiteIcon : searchIcon} alt="" aria-hidden="true" />
    </label>
  );
}

export default SearchBar;
