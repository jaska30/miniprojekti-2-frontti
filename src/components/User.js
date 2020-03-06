import React, { Component } from 'react'

export default class User extends Component {
    render() {
        
        return (
            <div className="scoretable">
            <table className="username" align="center">
                <tr>
                    <td>{this.props.user.username}</td>
                    <td>{this.props.user.score}
                    </td>
                </tr>
            </table>
        </div>
        )
    }
}

