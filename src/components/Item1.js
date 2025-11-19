import React from 'react';

function Item1(props) {
  return (
    <div className="about-section">
      <h2>{props.title}</h2> {/* Accessing the title prop */}
      <p>This is the About section where the title prop is passed from the parent component.</p>
    </div>
  );
}

export default Item1;
