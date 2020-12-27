import { useState, useEffect } from 'react';

import { getMemeOfTheDay, getRandomMeme } from '../utils';

import processMemesData from './processMemesData';

function useMemes() {
  const [memesData, setMemesData] = useState([]);
  const [actualMeme, setActualMeme] = useState(null);
  const [isRandomMeme, setIsRandomMeme] = useState(false);

  const changeMeme = () => {
    const randomMeme = getRandomMeme(memesData);
    setActualMeme(randomMeme);
    setIsRandomMeme(true);
  };

  useEffect(() => {
    const getMemesData = async () => {
      const memes = await processMemesData();
      setMemesData(memes);
      const { name, url } = getMemeOfTheDay(memes);
      setTimeout(() => {
        setActualMeme({ name, url });
      }, 500);
    };
    getMemesData();
  }, []);

  return [isRandomMeme, actualMeme, changeMeme];
}

export default useMemes;
