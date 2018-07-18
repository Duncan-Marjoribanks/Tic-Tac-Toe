import React from 'react';

const Tile = (props) => {

  return(
    <img src={`./images/${props.condition}_Tile.jpg`} alt="tile hasn't loaded" width='200px' height='auto' onClick={props.handleClick}/>
  )



};


export default Tile;
