import React, { Component } from 'react';
import { getPics } from '../service';
import Cards from "./Cards"

class GameBoard extends Component {
    // state = { images: [], msg: "Haetaan kuvia" }
    // componentDidMount() {
    //     this.picList();
    // }
    // picList = () => {
    //     getPics()
    //         .then(res => {
    //             console.log(res.data)
    //             this.setState({ images: res.data })
    //         });
    // }
    state = { images: [{nimi:"bear.png"}, {nimi:'bunny.png'}, {nimi:'cat.png'}, {nimi:'deer.png'}, {nimi:'dog.png'}, {nimi:'duck.png'}, {nimi:'eagle.png'}, {nimi:'giraffe.png'}, {nimi:'hedgehog.png'}, {nimi:'kangaroo.png'}, {nimi:'lion.png'}, {nimi:'llama.png'}, {nimi:'mouse.png'}, {nimi:'owl.png'}, {nimi:'piggy.png'}, {nimi:'puppy.png'}, {nimi:'snake.png'}, {nimi:'squirrel.png'},
    {nimi:"bear.png"}, {nimi:'bunny.png'}, {nimi:'cat.png'}, {nimi:'deer.png'}, {nimi:'dog.png'}, {nimi:'duck.png'}, {nimi:'eagle.png'}, {nimi:'giraffe.png'}, {nimi:'hedgehog.png'}, {nimi:'kangaroo.png'}, {nimi:'lion.png'}, {nimi:'llama.png'}, {nimi:'mouse.png'}, {nimi:'owl.png'}, {nimi:'piggy.png'}, {nimi:'puppy.png'}, {nimi:'snake.png'}, {nimi:'squirrel.png'}]}

    componentDidMount() {
        this.shuffleImages();
    }

     shuffleImages = () => {
         var shuffled = this.state.images.sort((a, b) => .5- Math.random());
         this.setState({images: shuffled })
         console.log(this.state.images);
    }
        
    

    render() {
        var nodes = 
         this.state.images.map(function(card) {
            return ( <Cards  card={card}/>
                )})
        return (
            
            <div className="gameboard">
                <div className="images">
                    {nodes}
            </div>
            <p>Score</p>
                <input value="New Game" type="button" onClick={this.props.newgame}/>
            </div>
        );
    }
}

export default GameBoard;