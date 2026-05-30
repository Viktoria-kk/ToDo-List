import React from 'react';
import emptyImage from '../assets/detective-empty.png';

function EmptyState() {
  return (
    <div className="empty-state">
      <img className="empty-image" src={emptyImage} alt="" aria-hidden="true" />
      <p>Empty...</p>
    </div>
  );
}

export default EmptyState;
