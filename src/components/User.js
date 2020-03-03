import React, { Component } from 'react'

export default class User extends Component {
    render() {
        
        return (
            <li>
                <div>
                    <div className="borderlegend">Playerlist</div>
                    <p className="qauthor">{this.props.user.username}</p>
                    <p className="qtext">{this.props.user.score}</p>
                </div>
            </li>
        )
    }
}
