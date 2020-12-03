function selectData({ id, name, width, height, url }) {
  return { id, name, width, height, url };
}

function biggerThan({ height, width }, size) {
  return height >= size || width >= size;
}

function byAscendingId(firstMeme, nextMeme) {
  return parseInt(firstMeme.id) - parseInt(nextMeme.id);
}

function getMemeOfTheDay(memes) {
  const todayDate = new Date().getDate();
  return memes[todayDate - 1];
}

export { selectData, biggerThan, byAscendingId, getMemeOfTheDay };
