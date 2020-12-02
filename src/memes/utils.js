function selectData({ id, name, width, height, url }) {
  return { id, name, width, height, url };
}

function biggerThan({ height, width }, size) {
  return height >= size || width >= size;
}

function byAscendingId(firstMeme, nextMeme) {
  return parseInt(firstMeme.id) - parseInt(nextMeme.id);
}

export { selectData, biggerThan, byAscendingId };
