import React, { Component } from 'react';
import Cards from "./Cards";
// import Timer from './Timer';
import {addUsers, getUsers} from '../service';



class GameBoard extends Component {

    //Images-arrayssä kuvien nimet kahteen kertaan. -jaska
    constructor(props) {
        super(props);
        const images= [
            // { nimi: "bear.png" },
            // { nimi: 'bunny.png' },
            // { nimi: 'cat.png' },
            // { nimi: 'deer.png' },
            // { nimi: 'dog.png' }, 
            // { nimi: 'duck.png' }, 
            // { nimi: 'eagle.png' }, 
            // { nimi: 'giraffe.png' }, 
            // { nimi: 'hedgehog.png' }, 
            // { nimi: 'kangaroo.png' }, 
            // { nimi: 'lion.png' }, 
            // { nimi: 'llama.png' }, 
            // { nimi: 'mouse.png' }, 
            { nimi: 'owl.png' }, { nimi: 'piggy.png' }, { nimi: 'puppy.png' }, { nimi: 'snake.png' }, { nimi: 'squirrel.png' },
            // { nimi: "bear.png" }, 
            // { nimi: 'bunny.png' }, 
            // { nimi: 'cat.png' }, 
            // { nimi: 'deer.png' }, 
            // { nimi: 'dog.png' }, 
            // { nimi: 'duck.png' }, 
            // { nimi: 'eagle.png' }, 
            // { nimi: 'giraffe.png' }, 
            // { nimi: 'hedgehog.png' }, 
            // { nimi: 'kangaroo.png' }, 
            // { nimi: 'lion.png' }, 
            // { nimi: 'llama.png' }, 
            // { nimi: 'mouse.png' }, 
            { nimi: 'owl.png' }, { nimi: 'piggy.png' }, { nimi: 'puppy.png' }, { nimi: 'snake.png' }, { nimi: 'squirrel.png' }]
        this.state = {
            images: images.map(i=>{return {nimi: i.nimi, lukittu: false, kaannetty: false}}),
            count: 0,
            lasku: 0,
            score: 0,
            tarkistaa: false,
            // info:[{username:"", score:0}]
            username:this.props.user,
            
        }

    }
    //GameBoard-komponentin latauduttua kutsutaan shuffleImages-funktiota, mikä sekoittaa Images-arrayn järjestyksen. -jaska

    componentDidMount() {
        console.log(this.props.user);
        
        this.shuffleImages();
    }

    shuffleImages = () => {
        var shuffled = this.state.images.sort((a, b) => .5 - Math.random());
        this.setState({ images: shuffled })
        console.log(this.state.images);
    }

    resetoiTaulukko = (callback) => {
        const indeksit = [];
        for(let i = 0 ; i < this.state.images.length ; ++i) {
            const kuva = this.state.images[i];
            if (kuva.kaannetty && !kuva.lukittu) {
                console.log("Takaisin", i)
                indeksit.push(i)
                console.log(indeksit)
            }
        }
        if (indeksit.length === 2) {
            const kuva1 = this.state.images[indeksit[0]];
            const kuva2 = this.state.images[indeksit[1]];
            if(kuva1.nimi === kuva2.nimi) {
                kuva1.lukittu = kuva2.lukittu = true;
                this.setState({lasku: this.state.lasku+1})
                console.log('lasku'+this.state.lasku)
                if(this.state.lasku === 17) {
                    
                    alert('HIHHIHHIII, VOITIT PELIN!!')
                    this.newUsers()
                }
                
                callback();
            } else {
                kuva1.kaannetty = kuva2.kaannetty = false;
                setTimeout(()=>{callback()}, 1000);
            }
            
        } else if (indeksit.length !== 0) {
            console.error("Virhe", indeksit);
        }
    }

    clicks = (id) => {
        if(this.state.tarkistaa) return;
        console.group("clicks");
        console.log("id", id);
        this.state.images[id].kaannetty = !this.state.images[id].kaannetty
        console.log("kaannetty", this.state.count);
        this.setState({tarkistaa: true}, () => {
        if (this.state.count === 1) {
            console.log('kaksi käännetty')
            
            this.resetoiTaulukko(()=>{
                this.setState({score: this.state.score+1})
                console.log('pisteet' + this.state.score)
                this.setState({count: 0, tarkistaa: false})
            })
        } else {
            this.setState({count: this.state.count+1, tarkistaa: false})
        }
        })
        console.groupEnd();
    }

    newUsers = (e) => {
        e.preventDefault()
        console.log(this.state)
        addUsers(this.state).then(res=>{
            getUsers()
            .then(res => {
                this.setState({ username: "", score: 0 })
            });
            }
            
        )}
    
    // getList = () => {
    //     getUsers()
    //         .then(res => {
    //             console.log(res.data)
    //             this.setState({ users: res.data })
    //         });
    //     }

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
                <form>
                <p style={{ fontSize: '30px' }}><b>Player: {this.props.user}</b></p>
                {/* <Timer /> */}
        <p>Your score: {this.state.score}</p>
        <button type="submit" onClick={this.newUsers}>submit</button>
        </form>
                <div className="gameboard">

                    <div className="images">
                        {nodes}
                    </div>
                    <p className="score">Score</p>
                    <input value="New Game" type="button" onClick={this.props.newgame} />
                </div>
            </div>
        );
    }
}

export default GameBoard;