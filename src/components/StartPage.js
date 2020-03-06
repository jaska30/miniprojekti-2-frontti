import React, { Component } from 'react';
import { getUsers } from '../service'
import UserName from "./UserName"
import HighscoreTable from './HighscoreTable';

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

                <h1>MEMORY GAME</h1>
                <p><strong>The objective of the game is to find all the pairs as quickly as possible.</strong></p>
                <p>A stopwatch will show you how much time you have spent to find all the pairs. <br></br>
                Your score is defined by the amount of clicks. Obviously the lower the click amount, the better you did.</p>
                <UserName />
                <HighscoreTable users={this.state.users} />

            </div>

        );
    }
}

export default StartPage;