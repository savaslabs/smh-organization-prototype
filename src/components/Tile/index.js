import React from "react";
import PropTypes from "prop-types";

const Tile = props => (
  <div className={"tile " + props.className} onClick={props.onClick}>
    {props.children}
  </div>
);

Tile.propTypes = {
  className: PropTypes.string,
  onCLick: PropTypes.func
};

export default Tile;
