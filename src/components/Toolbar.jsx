import React from 'react';
import FilterDropdown from './FilterDropdown.jsx';
import SearchBar from './SearchBar.jsx';
import ThemeToggle from './ThemeToggle.jsx';

function Toolbar({ filter, isDark, search, onFilterChange, onSearchChange, onThemeToggle }) {
  return (
    <div className="toolbar">
      <SearchBar isDark={isDark} value={search} onChange={onSearchChange} />
      <FilterDropdown value={filter} onChange={onFilterChange} />
      <ThemeToggle isDark={isDark} onToggle={onThemeToggle} />
    </div>
  );
}

export default Toolbar;
