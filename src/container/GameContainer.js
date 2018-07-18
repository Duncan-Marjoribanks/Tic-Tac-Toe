import React from 'react';
import Tile from '../component/Tile.js';

class GameContainer extends React.Component {

  constructor (props) {
    super(props)
    this.state = {
      grid: []
    }
    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount() {
    this.setState({
      grid: [
        <Tile condition='Empty' key='0' handleClick={this.handleClick}/>,
        <Tile condition='Empty' key='1' handleClick={this.handleClick}/>,
        <Tile condition='Empty' key='2' handleClick={this.handleClick}/>,
        <Tile condition='Empty' key='3' handleClick={this.handleClick}/>,
        <Tile condition='Empty' key='4' handleClick={this.handleClick}/>,
        <Tile condition='Empty' key='5' handleClick={this.handleClick}/>,
        <Tile condition='Empty' key='6' handleClick={this.handleClick}/>,
        <Tile condition='Empty' key='7' handleClick={this.handleClick}/>,
        <Tile condition='Empty' key='8' handleClick={this.handleClick}/>
      ]})
  }

  render() {
    return(
      <div id="game-box">
          {this.state.grid}
      </div>
    )
  }

  handleClick(event) {
    console.log(`click happened ${event}`);
    //whatever this thing is.condition=`Cross`;
  }



}


export default GameContainer;
