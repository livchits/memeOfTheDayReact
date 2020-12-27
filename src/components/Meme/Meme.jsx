import * as React from 'react';
import { useState } from 'react';

import useMemes from '../../memes/useMemes';
import MemeInfo from '../MemeInfo/MemeInfo';
import Title from '../Title/Title';
import ChangeMemeButton from '../ChangeMemeButton/ChangeMemeButton';
import { getRandomMeme } from '../../utils';

import './Meme.css';

function Meme() {
  const [isRandomMeme, setIsRandomMeme] = useState(false);

  const [memesData, actualMeme, setActualMeme] = useMemes();

  const changeMeme = () => {
    const randomMeme = getRandomMeme(memesData);
    setActualMeme(randomMeme);
    setIsRandomMeme(true);
  };

  return (
    <main className="container">
      <Title isRandomMeme={isRandomMeme} />
      {actualMeme ? (
        <MemeInfo imageUrl={actualMeme.url} name={actualMeme.name} />
      ) : (
        <div className="meme-text">Loading memes...</div>
      )}
      <ChangeMemeButton handleClick={changeMeme} />
    </main>
  );
}

export default Meme;
