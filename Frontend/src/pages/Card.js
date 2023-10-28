import React from 'react';
import './Style.css'

function Card({ title, content,link }) {
  return (
    <div className="card">
      <h3 className="card-title">{title}</h3>
      <p className="card-content">{content}</p>
      { link && (
        <a href={link} className="card-link">
          Learn More
        </a>
      )}
    </div>
  );
}

export default Card;
