import React, { Component } from 'react';

class UserName extends Component {
    render() {
        return (
            <form>
                <b>Username</b> <br></br><input /><br/><br></br>
                <input value="Start Game" type="submit"/>
            </form>
        );
    }
}

export default UserName;