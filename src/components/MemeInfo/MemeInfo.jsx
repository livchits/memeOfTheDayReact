import * as React from 'react';
import PropTypes from 'prop-types';
import './MemeInfo.css';

function MemeInfo({ name, imageUrl }) {
  return (
    <figure className="image-container">
      <img alt={name} className="meme" src={imageUrl} />
      <figcaption className="meme-text-container">
        <div className="meme-text">{name}</div>
      </figcaption>
    </figure>
  );
}

MemeInfo.propTypes = {
  name: PropTypes.string.isRequired,
  imageUrl: PropTypes.string.isRequired,
};

export default MemeInfo;
