import * as React from 'react';
import PropTypes from 'prop-types';

function ChangeMemeButton({ handleClick }) {
  return <button onClick={handleClick}>Get random meme!</button>;
}

ChangeMemeButton.propTypes = {
  handleClick: PropTypes.func.isRequired,
};

export default ChangeMemeButton;
