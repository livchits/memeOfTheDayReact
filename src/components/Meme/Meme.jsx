import * as React from 'react';

import useMemes from '../../memes/useMemes';
import MemeInfo from '../MemeInfo/MemeInfo';
import Title from '../Title/Title';
import ChangeMemeButton from '../ChangeMemeButton/ChangeMemeButton';

import './Meme.css';

function Meme() {
  const [isRandomMeme, actualMeme, changeMeme] = useMemes();

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
