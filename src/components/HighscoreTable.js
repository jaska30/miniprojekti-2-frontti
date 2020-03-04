import React, { Component } from 'react';
import User from './User';

class HighscoreTable extends Component {
    render() {
        
        var all = this.props.users
        .sort(function (s1, s2) {  // käännetään järjestys, uusin ensimmäiseksi
            return s1.score - s2.score;
        })
        .map(function(username){
            return (<User user={username} key={username.id}/>)
        }.bind(this));
        return (
            <div>
                <div className="userlist">
                    <h2>ALL TIME HIGH SCORE</h2>
                    {all}
                </div>
            </div>
        );
    }
}

export default HighscoreTable;