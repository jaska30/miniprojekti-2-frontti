import React, { Component } from 'react';
import User from './User';
class HighscoreTable extends Component {
    render() {
        var all = this.props.users
            .map(function (username) {
                return (<User user={username} key={username.id} />) //mäpätään tietokannan tulokset ja luodaan lista parhaimmista pelaajista. -jaska
            });
        return (
            <div>
                <div className="userlist">
                    <h2>TOP 10 ALL TIME</h2>
                    {all}
                </div>
            </div>
        );
    }
}
export default HighscoreTable;





