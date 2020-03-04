import React, { Component } from 'react'

export default class User extends Component {
    render() {
        
        return (
                <div className="scoretable">
                    <p className="username">{this.props.user.username}, {this.props.user.score}</p>
                </div>
        )
    }
}
