import React from 'react';
import moonIcon from '../assets/moon.png';
import sunIcon from '../assets/sun.png';

function ThemeToggle({ isDark, onToggle }) {
  return (
    <button
      className="theme-button"
      type="button"
      onClick={onToggle}
      aria-label="Toggle dark and light mode"
      title="Toggle dark and light mode"
    >
      <img className="theme-icon" src={isDark ? sunIcon : moonIcon} alt="" aria-hidden="true" />
    </button>
  );
}

export default ThemeToggle;
