import * as React from 'react';

function MemeInfo({ name, url }) {
  return (
    <figure className="image-container">
      <img alt={name} className="meme" src={url} />
      <figcaption className="meme-text-container">
        <div className="meme-text">{name}</div>
      </figcaption>
    </figure>
  );
}

export default MemeInfo;
