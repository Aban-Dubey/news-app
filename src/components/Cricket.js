import React, { useState, useEffect } from 'react';
import Headline from './Headline';
import { Header } from './Header';
import { Footer } from './Footer';

const Cricket = () => {
  const [cricketNews, setCricketNews] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Updated API request URL with "cricket" keyword
        const response = await fetch('https://newsapi.org/v2/everything?q=cricket&sortBy=popularity&apiKey={Your API Key here}');
        const data = await response.json();
        setCricketNews(data.articles);
      } catch (error) {
        console.error('Error fetching cricket news:', error);
        setError('Error fetching cricket news. Please try again later.');
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <Header />
      <h1>Cricket News</h1>
      {error && <p>{error}</p>}
      {cricketNews.slice(0, 5).map((headline) => (
        <Headline key={headline.id} title={headline.title} source={headline.source.name} date={headline.publishedAt} url={headline.url} />
      ))}
      <Footer />
    </div>
  );
};

export default Cricket;
