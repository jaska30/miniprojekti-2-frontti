import React, { Component } from 'react';

class Cards extends Component {



funktio = () => {
   // this.setState({klikattu: !this.state.klikattu})
   this.props.klikattu(this.props.indeksi);
}
//Tässä rendereöidään div-elementti jokaisesta images-arrayn kuvan nimestä.-jaska
    render() {
        if (this.props.card.kaannetty) {
            
            return (
                
                <div onClick={this.funktio}>
                    <div>
                    <img src={require('../pics/'+ this.props.card.nimi)} alt={"memory pics"} style={{width:'100px', height:'100px'} } />
                    </div>
                </div>
            );
        }
        else {
           
            return( <div>
                <div onClick={this.funktio} style={{width:'100px', height:'100px', backgroundColor:'black'}} >
                    </div>
                    </div>) 
        }
        
    }
}



export default Cards;