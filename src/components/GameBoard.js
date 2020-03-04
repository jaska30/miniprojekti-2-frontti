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
    render() {
        return (
            
            <div className="gameboard">
                <div className="images">
                <div>
                    <img src={require('../pics/bear.png')} style={{width:'100px', height:'100px'}} />
                </div>
                <div>
                    <img src={require('../pics/bear.png')} style={{width:'100px', height:'100px'}}/>
                </div>
                <div>
                    <img src={require('../pics/bunny.png')} style={{width:'100px', height:'100px'}}/>
                </div>
                <div>
                    <img src={require('../pics/bunny.png')} style={{width:'100px', height:'100px'}}/>
                </div>
                <div>
                    <img src={require('../pics/cat.png')} style={{width:'100px', height:'100px'}}/>
                </div>
                <div>
                    <img src={require('../pics/cat.png')} style={{width:'100px', height:'100px'}}/>
                </div>
                
                <div>
                    <img src={require('../pics/deer.png')} style={{width:'100px', height:'100px'}}/>
                </div>
                <div>
                    <img src={require('../pics/deer.png')} style={{width:'100px', height:'100px'}}/>
                </div>
                <div>
                    <img src={require('../pics/dog.png')} style={{width:'100px', height:'100px'}}/>
                </div>
                <div>
                    <img src={require('../pics/dog.png')} style={{width:'100px', height:'100px'}}/>
                </div>
                <div>
                    <img src={require('../pics/duck.png')} style={{width:'100px', height:'100px'}}/>
                </div>
                <div>
                    <img src={require('../pics/duck.png')} style={{width:'100px', height:'100px'}}/>
                </div>
                <div>
                    <img src={require('../pics/eagle.png')} style={{width:'100px', height:'100px'}}/>
                </div>
                <div>
                    <img src={require('../pics/eagle.png')} style={{width:'100px', height:'100px'}}/>
                </div>
                <div>
                    <img src={require('../pics/giraffe.png')} style={{width:'100px', height:'100px'}}/>
                </div>
                <div>
                    <img src={require('../pics/giraffe.png')} style={{width:'100px', height:'100px'}}/>
                </div>
                <div>
                    <img src={require('../pics/hedgehog.png')} style={{width:'100px', height:'100px'}}/>
                </div>
                <div>
                    <img src={require('../pics/hedgehog.png')} style={{width:'100px', height:'100px'}}/>
                </div>
                <div>
                    <img src={require('../pics/kangaroo.png')} style={{width:'100px', height:'100px'}}/>
                </div>
                <div>
                    <img src={require('../pics/kangaroo.png')} style={{width:'100px', height:'100px'}}/>
                </div>
                <div>
                    <img src={require('../pics/lion.png')} style={{width:'100px', height:'100px'}}/>
                </div>
                <div>
                    <img src={require('../pics/lion.png')} style={{width:'100px', height:'100px'}}/>
                </div>
                <div>
                    <img src={require('../pics/llama.png')} style={{width:'100px', height:'100px'}}/>
                </div>
                <div>
                    <img src={require('../pics/llama.png')} style={{width:'100px', height:'100px'}}/>
                </div>
                <div>
                    <img src={require('../pics/mouse.png')} style={{width:'100px', height:'100px'}}/>
                </div>
                <div>
                    <img src={require('../pics/mouse.png')} style={{width:'100px', height:'100px'}}/>
                </div>
                <div>
                    <img src={require('../pics/owl.png')} style={{width:'100px', height:'100px'}}/>
                </div>
                <div>
                    <img src={require('../pics/owl.png')} style={{width:'100px', height:'100px'}}/>
                </div>
                <div>
                    <img src={require('../pics/piggy.png')} style={{width:'100px', height:'100px'}}/>
                </div>
                <div>
                    <img src={require('../pics/piggy.png')} style={{width:'100px', height:'100px'}}/>
                </div>
                <div>
                    <img src={require('../pics/puppy.png')} style={{width:'100px', height:'100px'}}/>
                </div>
                <div>
                    <img src={require('../pics/puppy.png')} style={{width:'100px', height:'100px'}}/>
                </div>
                <div>
                    <img src={require('../pics/snake.png')} style={{width:'100px', height:'100px'}}/>
                </div>
                <div>
                    <img src={require('../pics/snake.png')} style={{width:'100px', height:'100px'}}/>
                </div>
                <div>
                    <img src={require('../pics/squirrel.png')} style={{width:'100px', height:'100px'}}/>
                </div>
                <div>
                    <img src={require('../pics/squirrel.png')} style={{width:'100px', height:'100px'}}/>
                </div>
                <p>{this.props.user}</p>
                <p>Score</p>
                <input value="New Game" type="button" onClick={this.props.newgame} />
            </div>
            </div>
        );
    }
}

export default GameBoard;