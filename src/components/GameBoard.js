import React, { Component } from 'react';

class GameBoard extends Component {
    
    render() {
        return (
            <div>
                <p>Hello</p>
                <p>{this.props.user}</p>
                <p>Score</p>
                <input value="New Game" type="button" onClick={this.props.newgame}/>
            </div>
        );
    }
}

export default GameBoard;