import { useState, useEffect } from 'react';

import { getMemeOfTheDay } from '../utils';

import processMemesData from './processMemesData';

function useMemes() {
  const [memesData, setMemesData] = useState([]);
  const [actualMeme, setActualMeme] = useState(null);

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

  return [memesData, actualMeme, setActualMeme];
}

export default useMemes;
