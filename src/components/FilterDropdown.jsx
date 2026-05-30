import React, { useState } from 'react';
import { filterOptions } from '../constants/filterOptions.js';

function FilterDropdown({ value, onChange }) {
  const [isOpen, setIsOpen] = useState(false);
  const selectedFilter = filterOptions.find((option) => option.value === value) ?? filterOptions[0];

  return (
    <div
      className={`filter-dropdown filter-dropdown--${value}`}
      onBlur={(event) => {
        if (!event.currentTarget.contains(event.relatedTarget)) {
          setIsOpen(false);
        }
      }}
    >
      <button
        className="filter-trigger"
        type="button"
        aria-label="Filter notes"
        aria-expanded={isOpen}
        onClick={() => setIsOpen((currentState) => !currentState)}
      >
        <span>{selectedFilter.label}</span>
        <span className="dropdown-arrow" aria-hidden="true"></span>
      </button>

      {isOpen && (
        <div className="filter-menu" role="listbox" aria-label="Filter notes">
          {filterOptions.map((option) => (
            <button
              className="filter-option"
              type="button"
              role="option"
              aria-selected={option.value === value}
              key={option.value}
              onClick={() => {
                onChange(option.value);
                setIsOpen(false);
              }}
            >
              {option.label}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

export default FilterDropdown;
