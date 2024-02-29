import React, { useState, useEffect } from 'react';
import Headline from './Headline';
import { Header } from './Header';
import { Footer } from './Footer';

const Fashion = () => {
  const [fashionNews, setFashionNews] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://newsapi.org/v2/everything?q=Fashion&sortBy=popularity&apiKey={Your API Key here}');
        const data = await response.json();
        setFashionNews(data.articles);
      } catch (error) {
        console.error('Error fetching fashion news:', error);
        setError('Error fetching fashion news. Please try again later.');
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <Header />
      <h1>Fashion News</h1>
      {error && <p>{error}</p>}
      {fashionNews.slice(0, 5).map((headline) => (
        <Headline key={headline.id} title={headline.title} source={headline.source.name} date={headline.publishedAt} url={headline.url} />
      ))}
        <Footer />
    </div>
  );
};

export default Fashion;
