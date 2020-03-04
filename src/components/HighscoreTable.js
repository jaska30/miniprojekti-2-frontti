import React, { Component } from 'react';
import User from './User';

class HighscoreTable extends Component {
    render() {

        var all = this.props.users
            .sort(function (s1, s2) {  // käännetään järjestys, pienin arvo ensimmäiseksi. -jaska
                return s1.score - s2.score;
            })
            .map(function (username) {
                return (<User user={username} key={username.id} />) //mäpätään tietokannan tulokset ja luodaan lista parhaimmista pelaajista. -jaska
            }.bind(this));
        return (
            <div>
                <ul className="userlist">
                    {all}
                </ul>
            </div>
        );
    }
}

export default HighscoreTable;