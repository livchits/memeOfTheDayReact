import * as React from 'react';
import './Header.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithubSquare } from '@fortawesome/free-brands-svg-icons';

function Header() {
  return (
    <header>
      <a
        aria-label="Link to GitHub repository"
        href="https://github.com/livchits/memeOfTheDay"
      >
        <FontAwesomeIcon icon={faGithubSquare} size="3x" />
      </a>
    </header>
  );
}

export default Header;
