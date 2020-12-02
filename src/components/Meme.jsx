import * as React from 'react';
import { useEffect, useState } from 'react';

import processMemesData from '../memes/processMemesData';

function Meme() {
  const [memesData, setMemesData] = useState([]);

  useEffect(() => {
    const getMemesData = async () => {
      const memes = await processMemesData();
      setMemesData(memes);
    };
    getMemesData();
  }, []);

  return <main />;
}

export default Meme;
