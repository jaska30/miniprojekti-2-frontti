import React, { Component } from 'react';
import '../App.css';

class GameBoard extends Component {
    
    render() {
        return (
            <div className="gameboard">
                <p>{this.props.user}</p>
                <p>Score</p>
                <input value="New Game" type="button" onClick={this.props.newgame}/>
            </div>
        );
    }
}

export default GameBoard;