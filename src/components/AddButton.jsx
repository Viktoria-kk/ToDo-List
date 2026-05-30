import React from 'react';

function AddButton({ onClick }) {
  return (
    <button
      className="add-button"
      type="button"
      onClick={onClick}
      aria-label="Add new note"
      title="Add note"
    >
      <span aria-hidden="true">+</span>
    </button>
  );
}

export default AddButton;
