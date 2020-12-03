import * as React from 'react';
import PropTypes from 'prop-types';
import './Title.css';

function Title({ isRandomMeme }) {
  return <h1>{isRandomMeme ? `Random Meme` : `Meme of the Day`}</h1>;
}

Title.propTypes = {
  isRandomMeme: PropTypes.bool.isRequired,
};

export default Title;
