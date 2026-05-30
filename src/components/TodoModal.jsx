import React, { useState } from 'react';

function TodoModal({ editingTodo, onCancel, onSubmit }) {
  const [draft, setDraft] = useState(editingTodo?.text ?? '');

  const handleSubmit = (event) => {
    event.preventDefault();

    const text = draft.trim();
    if (!text) return;

    onSubmit(text);
  };

  return (
    <div className="modal-backdrop" role="presentation">
      <form className="modal" onSubmit={handleSubmit} aria-label={editingTodo ? 'Edit note' : 'New note'}>
        <h2>{editingTodo ? 'EDIT NOTE' : 'NEW NOTE'}</h2>
        <input
          autoFocus
          value={draft}
          onChange={(event) => setDraft(event.target.value)}
          placeholder="Input your note..."
          aria-label="Note text"
        />
        <div className="modal-actions">
          <button className="secondary-button" type="button" onClick={onCancel}>
            CANCEL
          </button>
          <button className="primary-button" type="submit">
            APPLY
          </button>
        </div>
      </form>
    </div>
  );
}

export default TodoModal;
