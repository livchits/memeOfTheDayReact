import * as React from 'react';
import PropTypes from 'prop-types';
import './ChangeMemeButton.css';

function ChangeMemeButton({ handleClick }) {
  return (
    <button className="btn-get-random-meme glow-on-hover" onClick={handleClick}>
      Get random meme!
    </button>
  );
}

ChangeMemeButton.propTypes = {
  handleClick: PropTypes.func.isRequired,
};

export default ChangeMemeButton;
