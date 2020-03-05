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
    startGame = (e) => {  //aloittaa pelin, vaatii kuitenkin käyttäjänimen syöttämisen ennen pelin aloitusta. -jaska
        if(this.state.username === "")    {
            alert('Username required')
        }   else {
            this.setState({ showComponent: true });
        }
    }

    clickHandler = () => {
        this.setState({ showComponent: false });
        console.log('klikattu')
    }
    
    
    render() {
        return (
            <form>
                <div>
                {this.state.showComponent ? <GameBoard user={this.state.username} newgame={this.clickHandler} username={this.state.username}/> : <p><b>Username</b>
                <input className="input" onChange={this.newUser}/>
                <input value="Start Game" type="button" onClick={this.startGame}/>
                </p>}
                </div>
            </form>
        );
    }
}
export default UserName;