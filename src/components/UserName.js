import React, { Component } from 'react';
import GameBoard from "./GameBoard";

class UserName extends Component {
    constructor(props) {
        super(props);
        this.state = {
          users: [],
          showComponent: false,

          username: ""
        };
        this.startGame = this.startGame.bind(this);
    }

    newUser = (e) => {
        this.setState({username: e.target.value});

    }
    startGame = (e) => {
        // e.preventDefault();
        if(this.state.username == "")   {
            alert('Username required')
        } else {
        this.setState({ showComponent: true });
    }}
    
    
    render() {
        return (
            <form>
                <div>
                {this.state.showComponent ? <GameBoard user={this.state.username} newgame={this.startGame}/>: <p><b>Username</b>
                <input className="input" onChange={this.newUser}/>
                <input value="Start Game" type="button" onClick={this.startGame}/>
                </p>}
                </div>
            </form>
        );
    }
}
export default UserName;