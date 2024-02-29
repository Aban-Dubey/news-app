import React, { useState, useEffect } from 'react';
import Headline from './Headline';
import { Header } from './Header';
import { Footer } from './Footer';


const Home = () => {
  const [headlines, setHeadlines] = useState([]);
  const [error, setError] = useState(null);
  

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`https://newsapi.org/v2/top-headlines?country=in&apiKey={Your API Key here}`);
        const data = await response.json();
        setHeadlines(data.articles);
      } catch (error) {
        console.error('Error fetching headlines:', error);
        setError('Error fetching headlines. Please try again later.');
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <Header />
      <h1>Top Headlines</h1>
      {error && <p>{error}</p>}
      {headlines.slice(0, 5).map((headline) => (
        <Headline key={headline.id} title={headline.title} source={headline.source.name} date={headline.publishedAt} url={headline.url} />
      ))}
      <Footer />
    </div>
  );
};

export default Home;
