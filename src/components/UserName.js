import React, { Component } from 'react';
import GameBoard from "./GameBoard";
class UserName extends Component {
    constructor(props) {
        super(props);
        this.state = {
          showComponent: false,
          UserName: true
        };
        this.startGame = this.startGame.bind(this);
    }
    startGame = (e) => {
        e.preventDefault();
        this.setState({ showComponent: true})
        this.setState({ UserName: false});
    }
    
    render() {
        return (
            <form>
                <div id="username">
                
                
                {this.state.showComponent ? <GameBoard  /> :<p><b>Username</b> <br></br><input /><br/><br></br> <input value="Start Game" type="submit" onClick={this.startGame}/></p>}
                
                </div>
                
            </form>
        );
    }
}
export default UserName;