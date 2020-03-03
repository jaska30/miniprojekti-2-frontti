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
            </div>
        );
    }
}

export default GameBoard;