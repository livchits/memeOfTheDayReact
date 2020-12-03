import * as React from 'react';
import { useEffect, useState } from 'react';

import processMemesData from '../../memes/processMemesData';
import Title from '../Title/Title';
import './Meme.css';

function Meme() {
  const [memesData, setMemesData] = useState([]);
  const [isRandomMeme, setIsRandomMeme] = useState(false);

  useEffect(() => {
    const getMemesData = async () => {
      const memes = await processMemesData();
      setMemesData(memes);
    };
    getMemesData();
  }, []);

  return (
    <main className="container">
      <Title isRandomMeme={isRandomMeme} />
    </main>
  );
}

export default Meme;
