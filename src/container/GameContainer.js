import React from 'react';
import Tile from '../component/Tile.js';

class GameContainer extends React.Component {

  constructor (props) {
    super(props)
    this.state = {
      grid: [
        {condition: 'Cross'},
        {condition: 'Empty'},
        {condition: 'Empty'},
        {condition: 'Empty'},
        {condition: 'Empty'},
        {condition: 'Empty'},
        {condition: 'Empty'},
        {condition: 'Circle'},
        {condition: 'Empty'}
      ]
    }
    this.handleClick = this.handleClick.bind(this);
  }

  render() {
    return(
      <div id="game-box">
        <Tile condition={this.state.grid[0].condition} id='0' key='0' handleClick={this.handleClick}/>
        <Tile condition={this.state.grid[1].condition} id='1' key='1' handleClick={this.handleClick}/>
        <Tile condition={this.state.grid[2].condition} id='2' key='2' handleClick={this.handleClick}/>
        <p></p>
        <Tile condition={this.state.grid[3].condition} id='3' key='3' handleClick={this.handleClick}/>
        <Tile condition={this.state.grid[4].condition} id='4' key='4' handleClick={this.handleClick}/>
        <Tile condition={this.state.grid[5].condition} id='5' key='5' handleClick={this.handleClick}/>
        <p></p>
        <Tile condition={this.state.grid[6].condition} id='6' key='6' handleClick={this.handleClick}/>
        <Tile condition={this.state.grid[7].condition} id='7' key='7' handleClick={this.handleClick}/>
        <Tile condition={this.state.grid[8].condition} id='8' key='8' handleClick={this.handleClick}/>
      </div>
    )
  }

  handleClick(event) {
    console.log(`click happened`, event);
    const indexPosition = event.target.value;
    console.log(indexPosition);
    const oldGrid = this.state.grid;
    console.log(`the 1st position is a`, oldGrid[0].condition);
    console.log(`the 8th position is a`, oldGrid[7].condition);

    // event.target.setState({condition: "Circle"})
    // const newGrid = oldGrid.map()
    // this.state.grid
    // however we will access this .condition=`${player}`;


    // this.setState({grid: newGrid});
  }



}


export default GameContainer;
