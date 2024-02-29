import React from 'react';
import "./headline.css"

const Headline = ({ title, source, date, url }) => {
  return (
    <div className="headline-card">
      <h2>{title}</h2>
      <p className="source-date">{source} - {new Date(date).toLocaleString()}</p>
      <a href={url} target="_blank" rel="noopener noreferrer" className="full-news-button">
        Full News
      </a>
    </div>
  );
};

export default Headline;
