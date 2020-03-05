import React, { Component } from 'react';

class Cards extends Component {


//Tässä rendereöidään div-elementti jokaisesta images-arrayn kuvan nimestä.-jaska
    render() {
        return (
            <div>
                <div>
                <img src={require('../pics/'+ this.props.card.nimi)} alt={"memory pics"} style={{width:'100px', height:'100px'}} />
                </div>
            </div>
        );
    }
}

export default Cards;