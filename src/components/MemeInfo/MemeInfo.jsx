import * as React from 'react';

function MemeInfo({ name, url }) {
  return (
    <figure>
      <img alt={name} src={url} />
      <figcaption>
        <div>{name}</div>
      </figcaption>
    </figure>
  );
}

export default MemeInfo;
