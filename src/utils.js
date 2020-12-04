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

function getRandomMeme(memes) {
  const randomIndex = Math.floor(Math.random() * memes.length);
  const randomMeme = memes[randomIndex];
  return randomMeme;
}

export {
  selectData,
  biggerThan,
  byAscendingId,
  getMemeOfTheDay,
  getRandomMeme,
};
