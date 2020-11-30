import * as React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithubSquare } from '@fortawesome/free-brands-svg-icons';

function Header() {
  return (
    <header>
      <FontAwesomeIcon icon={faGithubSquare} />
    </header>
  );
}

export default Header;
