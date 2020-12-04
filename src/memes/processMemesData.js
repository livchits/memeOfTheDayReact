import { selectData, biggerThan, byAscendingId } from '../utils';

import { fetchMemes, ENDPOINT } from './api';

async function processMemesData() {
  const memes = await fetchMemes(ENDPOINT);
  const selectedData = memes.map(selectData);
  const filteredData = selectedData.filter((memeData) =>
    biggerThan(memeData, 500),
  );
  const sortedMemesData = [...filteredData.sort(byAscendingId)];
  return sortedMemesData;
}

export default processMemesData;
