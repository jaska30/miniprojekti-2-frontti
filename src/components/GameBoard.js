import React, { Component } from 'react';
import { getPics } from '../service';
import Cards from "./Cards";
import Timer from './Timer';


class GameBoard extends Component {

    //Images-arrayssä kuvien nimet kahteen kertaan. -jaska

    state = { images: [{nimi:"bear.png"}, {nimi:'bunny.png'}, {nimi:'cat.png'}, {nimi:'deer.png'}, {nimi:'dog.png'}, {nimi:'duck.png'}, {nimi:'eagle.png'}, {nimi:'giraffe.png'}, {nimi:'hedgehog.png'}, {nimi:'kangaroo.png'}, {nimi:'lion.png'}, {nimi:'llama.png'}, {nimi:'mouse.png'}, {nimi:'owl.png'}, {nimi:'piggy.png'}, {nimi:'puppy.png'}, {nimi:'snake.png'}, {nimi:'squirrel.png'},
    {nimi:"bear.png"}, {nimi:'bunny.png'}, {nimi:'cat.png'}, {nimi:'deer.png'}, {nimi:'dog.png'}, {nimi:'duck.png'}, {nimi:'eagle.png'}, {nimi:'giraffe.png'}, {nimi:'hedgehog.png'}, {nimi:'kangaroo.png'}, {nimi:'lion.png'}, {nimi:'llama.png'}, {nimi:'mouse.png'}, {nimi:'owl.png'}, {nimi:'piggy.png'}, {nimi:'puppy.png'}, {nimi:'snake.png'}, {nimi:'squirrel.png'}]}

    //GameBoard-komponentin latauduttua kutsutaan shuffleImages-funktiota, mikä sekoittaa Images-arrayn järjestyksen. -jaska

    componentDidMount() {
        this.shuffleImages();
    }

     shuffleImages = () => {
         var shuffled = this.state.images.sort((a, b) => .5- Math.random());
         this.setState({images: shuffled })
         console.log(this.state.images);
    }


        
    //komponentin latauksen yhteydessä mäpätään Images-array ja luodaan itemistä oma div-elementti 
    //gameboard-gridiin. -jaska

    render() {
        var nodes = 
         this.state.images.map(function(card, name) {
            return ( <Cards  card={card} key={name}/>
                )})
        return (
            <div>
                <p style={{fontSize: '30px'}}><b>Player: {this.props.username}</b></p>
                <Timer />
            <div className="gameboard">
                
                <div className="images">
                    {nodes}
            </div>
            <p>Score</p>
                <input value="New Game" type="button" onClick={this.props.newgame}/>
            </div>
            </div>
        );
    }
}

export default GameBoard;