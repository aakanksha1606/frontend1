import React from 'react';

const NewsItem = ({ article }) => {
  const { title, description, url, urlToImage } = article;

  return (
    <div className="news-item">
      {urlToImage && <img src={urlToImage} alt={title} />}
      <h2>{title}</h2>
      <p>{description}</p>
      <a href={url} target="_blank" rel="noopener noreferrer">
        Read more
      </a>
    </div>
  );
};

export default NewsItem;
