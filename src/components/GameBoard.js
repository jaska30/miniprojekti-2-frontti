import React, { Component } from 'react';
import Cards from "./Cards";
import Timer from './Timer';
import { addUsers } from '../service';
import UserName from './UserName';
class GameBoard extends Component {

    //Images-arrayssä kuvien nimet kahteen kertaan. -jaska
    constructor(props) {
        super(props);
        const images = [
            { nimi: "bear.png" },
            { nimi: 'bunny.png' },
            { nimi: 'cat.png' },
            { nimi: 'deer.png' },
            { nimi: 'dog.png' },
            { nimi: 'duck.png' },
            { nimi: 'eagle.png' },
            { nimi: 'giraffe.png' },
            { nimi: 'hedgehog.png' },
            { nimi: 'kangaroo.png' },
            { nimi: 'lion.png' },
            { nimi: 'llama.png' },
            { nimi: 'mouse.png' },
            { nimi: 'owl.png' },
            { nimi: 'piggy.png' },
            { nimi: 'puppy.png' },
            { nimi: 'snake.png' },
            { nimi: 'squirrel.png' },
            { nimi: "bear.png" },
            { nimi: 'bunny.png' },
            { nimi: 'cat.png' },
            { nimi: 'deer.png' },
            { nimi: 'dog.png' },
            { nimi: 'duck.png' },
            { nimi: 'eagle.png' },
            { nimi: 'giraffe.png' },
            { nimi: 'hedgehog.png' },
            { nimi: 'kangaroo.png' },
            { nimi: 'lion.png' },
            { nimi: 'llama.png' },
            { nimi: 'mouse.png' },
            { nimi: 'owl.png' },
            { nimi: 'piggy.png' },
            { nimi: 'puppy.png' },
            { nimi: 'snake.png' },
            { nimi: 'squirrel.png' }
        ]
        this.state = {
            images: images.map(i => { return { nimi: i.nimi, lukittu: false, kaannetty: false } }),
            count: 0
        }

    }
    //GameBoard-komponentin latauduttua kutsutaan shuffleImages-funktiota, mikä sekoittaa Images-arrayn järjestyksen. -jaska

    componentDidMount() {
        this.shuffleImages();
    }

    shuffleImages = () => {
        var shuffled = this.state.images.sort((a, b) => .5 - Math.random());
        this.setState({ images: shuffled })
        console.log(this.state.images);
    }

    resetoiTaulukko = (callback) => {
        const indeksit = [];
        let aika;
        for (let i = 0; i < this.state.images.length; ++i) {
            const kuva = this.state.images[i];
            if (kuva.kaannetty && !kuva.lukittu) {
                console.log("Takaisin", i)
                indeksit.push(i)
            }
        }
        if (indeksit.length === 2) {
            const kuva1 = this.state.images[indeksit[0]];
            const kuva2 = this.state.images[indeksit[1]];
            if (kuva1.nimi == kuva2.nimi) {
                kuva1.lukittu = kuva2.lukittu = true;
                callback();
            } else {
                kuva1.kaannetty = kuva2.kaannetty = false;
                setTimeout(() => { callback() }, 2000);
            }
        } else if (indeksit.length !== 0) {
            console.error("Virhe", indeksit);
        }
    }

    clicks = (id) => {
        console.group("clicks");
        console.log("id", id);
        this.state.images[id].kaannetty = !this.state.images[id].kaannetty
        console.log("kaannetty", this.state.count);
        this.setState({}, () => {
            if (this.state.count === 1) {
                console.log('kaksi käännetty')
                this.resetoiTaulukko(() => {
                    this.setState({ count: 0 })
                })
            } else {
                this.setState({ count: this.state.count + 1 })
            }
        })
        console.groupEnd();
    }


    saveScore = () => {
        var un = UserName.username;
        var sc = "";
        var savescore = {un, sc};

    }



    //komponentin latauksen yhteydessä mäpätään Images-array ja luodaan itemistä oma div-elementti 
    //gameboard-gridiin. -jaska

    render() {
        var nodes =
            this.state.images.map(function (card, name) {
                return (<Cards card={card} klikattu={this.clicks} indeksi={name} key={name} />
                )
            }.bind(this))
        return (
            <div>
                <p style={{ fontSize: '30px' }}><b>Player: {this.props.username}</b></p>
                <Timer />

                <div className="gameboard">

                    <div className="images">
                        {nodes}
                    </div>
                    <h2>Score</h2>
                    {/* <input value="Save points" type="button" onClick={this.props.saveScore.username, this.props.saveScore.score} /> */}
                    <input value="New Game" type="button" onClick={this.props.newgame} />
                </div>
            </div>
        );
    }
}

export default GameBoard;