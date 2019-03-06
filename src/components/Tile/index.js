import React from 'react';

const Tile = (props) => (
  <div className={'tile ' + props.className}>
    {props.children}
  </div>
);

export default Tile;
