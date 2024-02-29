import React, { useState, useEffect } from 'react';
import Headline from './Headline';
import { Header } from './Header';
import { Footer } from './Footer';

const Politics = () => {
  const [politicsNews, setPoliticsNews] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Updated API request URL with "politics" keyword
        const response = await fetch('https://newsapi.org/v2/everything?q=politics&sortBy=popularity&apiKey={Your API Key here}');
        const data = await response.json();
        setPoliticsNews(data.articles);
      } catch (error) {
        console.error('Error fetching politics news:', error);
        setError('Error fetching politics news. Please try again later.');
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <Header />
      <h1>Politics News</h1>
      {error && <p>{error}</p>}
      {politicsNews.slice(0, 5).map((headline) => (
        <Headline key={headline.id} title={headline.title} source={headline.source.name} date={headline.publishedAt} url={headline.url} />
      ))}
      <Footer />
    </div>
  );
};

export default Politics;
