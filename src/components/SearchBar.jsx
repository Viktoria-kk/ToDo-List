import React from 'react';
import searchIcon from '../assets/search.svg';

function SearchBar({ value, onChange }) {
  return (
    <label className="search-field">
      <span className="sr-only">Search notes</span>
      <input
        type="search"
        value={value}
        onChange={(event) => onChange(event.target.value)}
        placeholder="Search note..."
      />
      <img className="search-icon" src={searchIcon} alt="" aria-hidden="true" />
    </label>
  );
}

export default SearchBar;
