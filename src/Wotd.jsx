import React, { useEffect, useState } from 'react';

const words = ["apple", "banana", "cherry", "date", "elderberry", "fig", "grape", "honeydew"];

const getRandomWord = () => {
  return words[Math.floor(Math.random() * words.length)];
};

const getTodayDate = () => {
  const today = new Date();
  return today.toISOString().split('T')[0];
};

const RandomWordOfTheDay = () => {
  const [word, setWord] = useState('');

  useEffect(() => {
    const storedDate = localStorage.getItem('wordDate');
    const storedWord = localStorage.getItem('wordOfDay');
    const today = getTodayDate();

    if (storedDate === today && storedWord) {
      setWord(storedWord);
    } else {
      const newWord = getRandomWord();
      localStorage.setItem('wordOfDay', newWord);
      localStorage.setItem('wordDate', today);
      setWord(newWord);
    }
  }, []);

  return (
    <div style={styles.container}>
      <p>Word of the Day:</p>
      <p style={styles.word}>{word}</p>
    </div>
  );
};

const styles = {
  container: {
    fontFamily: 'Arial, sans-serif',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
    margin: 0,
    backgroundColor: '#f0f0f0',
    textAlign: 'center'
  },
  word: {
    fontSize: '2em',
    fontWeight: 'bold'
  }
};

export default RandomWordOfTheDay;
