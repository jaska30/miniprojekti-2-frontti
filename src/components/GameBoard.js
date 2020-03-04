import React, { Component } from 'react';
import { getPics } from '../service';
import Cards from "./Cards"

class GameBoard extends Component {
    state = { images: [], msg: "Haetaan kuvia" }
    componentDidMount() {
        this.picList();
    }
    picList = () => {
        getPics()
            .then(res => {
                console.log(res.data)
                this.setState({ images: res.data })
            });
    }
    render() {
        return (
            <div>
                <Cards info={this.state.images}/>
                <p>{this.props.user}</p>
                <p>Score</p>
                <input value="New Game" type="button" onClick={this.props.newgame}/>
                </div>
        );
    }
}

export default GameBoard;