import React, { Component } from 'react';
import { getUsers } from '../service'
import UserName from "./UserName"
import HighscoreTable from './HighscoreTable';
// import GameBoard from './GameBoard';

class StartPage extends Component {
    state = { users: [], msg: "Haetaan dataa" }
    componentDidMount() {  //haetaan tietokannasta ajankohtainen tuloslista komponentin latauduttua. -jaska
        this.getList();
    }

    getList = () => {
        getUsers()
            .then(res => {
                console.log(res.data)
                this.setState({ users: res.data })
            });
    }
    render() {
        return (
            <div>
                <h1>Memory game</h1>
                <p>The objective of the game is to find all the pairs as quickly as possible. 
                A stopwatch will show you how much time you have spent to find all the pairs</p>
                <UserName />
                <HighscoreTable users={this.state.users} />
            </div>
        );
    }
}

export default StartPage;