import * as React from 'react';
import { useEffect, useState } from 'react';

import processMemesData from '../../memes/processMemesData';
import MemeInfo from '../MemeInfo/MemeInfo';
import Title from '../Title/Title';
import ChangeMemeButton from '../ChangeMemeButton/ChangeMemeButton';
import { getMemeOfTheDay, getRandomMeme } from '../../utils';
import './Meme.css';

function Meme() {
  const [memesData, setMemesData] = useState([]);
  const [isRandomMeme, setIsRandomMeme] = useState(false);
  const [actualMeme, setActualMeme] = useState(null);

  useEffect(() => {
    const getMemesData = async () => {
      const memes = await processMemesData();
      setMemesData(memes);
      const { name, url } = getMemeOfTheDay(memes);
      setActualMeme({ name, url });
    };
    getMemesData();
  }, []);

  const changeMeme = () => {
    const randomMeme = getRandomMeme(memesData);
    setActualMeme(randomMeme);
    setIsRandomMeme(true);
  };

  return (
    <main className="container">
      <Title isRandomMeme={isRandomMeme} />
      {actualMeme && (
        <MemeInfo imageUrl={actualMeme.url} name={actualMeme.name} />
      )}
      <ChangeMemeButton handleClick={changeMeme} />
    </main>
  );
}

export default Meme;
