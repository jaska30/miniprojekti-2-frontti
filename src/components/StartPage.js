import React, { Component } from 'react';
import UserName from "./UserName"

class StartPage extends Component {
    render() {
        return (
            <div>
                <h1>Welcome to Memory</h1>
                <p>Train your brain! Play this game every day. Keep your brain in shape!</p>
                <UserName/>
            </div>
        );
    }
}

export default StartPage;