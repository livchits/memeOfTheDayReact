import * as React from 'react';
import { useEffect, useState } from 'react';

import processMemesData from '../../memes/processMemesData';
import MemeInfo from '../MemeInfo/MemeInfo';
import Title from '../Title/Title';
import { getMemeOfTheDay } from '../../memes/utils';
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

  const { name, url } = actualMeme;

  return (
    <main className="container">
      <Title isRandomMeme={isRandomMeme} />
      <MemeInfo imageUrl={url} name={name} />
    </main>
  );
}

export default Meme;
