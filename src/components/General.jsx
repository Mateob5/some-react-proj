import React, { useState, useEffect } from 'react';

export function General () {
  const [quote, setQuote] = useState('');
  const [author, setAuthor] = useState('');

  useEffect(() => {
    fetch('https://api.quotable.io/random')
      .then((response) => response.json())
      .then((data) => {
        setQuote(data.content);
        setAuthor(data.author);
      });
  }, []);

  const getNewQuote = () => {
    fetch('https://api.quotable.io/random')
      .then((response) => response.json())
      .then((data) => {
        setQuote(data.content);
        setAuthor(data.author);
      });
  };

  return (
    <div className="App">
      <div className="quote-container">
        <blockquote className="quote">{quote}</blockquote>
        <p className="author">- {author}</p>
      </div>
      <button onClick={getNewQuote} className="btn">
        New Quote
      </button>
    </div>
  );
}

