import { fetchMemes, ENDPOINT } from './api';
import { selectData, biggerThan, byAscendingId } from './utils';

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
