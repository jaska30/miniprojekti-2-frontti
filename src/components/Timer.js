import React, { Component } from 'react'
const ms = require('pretty-ms')

class Timer extends Component {
  constructor(props){
    super(props)
    this.state = {
      time: 0,
      isOn: true,
      start: 0
    }

  }
        //TIMER KÄYNNISTYY KUN SIVU, ELI GAMEBOARD-KOMPONENTTI ON LATAUTUNUT -jaska
  componentDidMount() {
    this.startTimer();
}
  startTimer() {
    this.setState({
      isOn: true,
      time: this.state.time,
      start: Date.now() - this.state.time
    })
    this.timer = setInterval(() => this.setState({
      time: Date.now() - this.state.start
    }), 1);
  }

  //TÄMÄ FUNKTIO SIDOTAAN PELIN LOPPUMISEEN, EN VIELÄ OSAA SANOA MITEN KÄYTÄNNÖSSÄ -jaska
  stopTimer() {
    this.setState({isOn: false})
    clearInterval(this.timer)
  }

  render() {
   
    return(
      <div>
        <h3>Your time: {ms(this.state.time)}</h3>
      </div>
    )
  }
}
export default Timer;