import React, { Component } from 'react';

class Cards extends Component {
    render() {
        return (
            <div>
                <div>
                <img src={require('../pics/'+ `${this.props.card.nimi}`)} style={{width:'100px', height:'100px'}} />
                </div>
            </div>
        );
    }
}

export default Cards;