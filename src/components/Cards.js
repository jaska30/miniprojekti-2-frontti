import React, { Component } from 'react';

class Cards extends Component {

state={klikattu: true}

funktio = () => {
    this.setState({klikattu: !this.state.klikattu})
}
//Tässä rendereöidään div-elementti jokaisesta images-arrayn kuvan nimestä.-jaska
    render() {
        if (!this.state.klikattu) {
            return (
            
                <div>
                    <div onClick={this.funktio}>
                    <img src={require('../pics/'+ this.props.card.nimi)} alt={"memory pics"} style={{width:'100px', height:'100px'}} />
                    </div>
                </div>
            );
        }
        else {
            return( <div>
                <div onClick={this.funktio} style={{width:'100px', height:'100px', backgroundColor:'blue'}} >
                    </div>
                    </div>) 
        }
        
    }
}

export default Cards;