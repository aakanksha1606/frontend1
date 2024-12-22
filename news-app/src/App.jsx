import React, { useState, useEffect } from 'react';
import NewsList from './components/NewsList';
import Header from './components/Header';
import './App.css';

const App = () => {
  const [news, setNews] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [category, setCategory] = useState('general');
  const [loading, setLoading] = useState(true);

  const API_KEY = 'YOUR_NEWS_API_KEY';
  const BASE_URL = 'https://newsapi.org/v2';

  const fetchNews = async () => {
    setLoading(true);
    try {
      const response = await fetch(
        `${BASE_URL}/top-headlines?country=us&category=${category}&q=${searchTerm}&apiKey=${API_KEY}`
      );
      const data = await response.json();
      setNews(data.articles || []);
    } catch (error) {
      console.error('Error fetching news:', error);
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchNews();
  }, [category, searchTerm]);

  return (
    <div className="app">
      <Header setSearchTerm={setSearchTerm} setCategory={setCategory} />
      {loading ? (
        <p>Loading news...</p>
      ) : (
        <NewsList news={news} />
      )}
    </div>
  );
};

export default App;
