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
                <h1>Memory game</h1>
                <p>Train your brain! Play this game every day. Keep your brain in shape!</p>
                <UserName />
                <HighscoreTable users={this.state.users} />
            </div>
        );
    }
}

export default StartPage;