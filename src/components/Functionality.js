let memoryArray = ['A','A','B','B','C','C','D','D']
let memoryValues = [];
let memoryIDs = [];
var turnedCards = 0;

// shuffle = () => {
// memoryArray.sort((a, b) => .5- Math.random());
// console.log(memoryArray)
// }
    
newBoard = () => {
    let output = "";
    memoryArray.sort((a, b) => .5- Math.random());
    console.log(memoryArray)
    // memoryArray.shuffle();
    for(var i = 0; i < memoryArray.length;i++) {
        output += `<div id="card_${i}" onclick="turnCard(this,memoryArray[${i}])"></div>`;
    }
    document.getElementById("memory_board").innerHTML = output;
}

turnCard = (card,val) => {  // ajetaan turnCard klikkaamalla korttia ja otetaan esimerkkinä että oli card_5 ja kirjain A
    console.log(card)   // = <div id="card_5" onclick="turnCard(this,memoryArray[5])" style="background: rgb(255, 255, 255);">A</div>  
    console.log(val)    // = A
    if (card.innerHTML == "" && memoryValues.length < 2) {  // tämä ehto jotta ei voitais klikkaa enemmän kuin 2 korttii timeoutin aikana
        console.log(memoryValues.length) // = kun avaa ekan kortin niin 0. Kun avaa toisen kortin niin 1. 
        card.style.background = "white"; // muuttaa divin style="background: white"
        card.innerHTML = val; // Laittaa An valkoiselle ruudulle
        if (memoryValues.length == 0) { // jos memoryValues.length on 0 (eli kun avaa ensimmäisen kortin)
            memoryValues.push(val); // työntää An memoryValues taulukkoon
            console.log(card.id) // card_5 
            memoryIDs.push(card.id); // työntää card_5 memoryIDs taulukkoon
        } else if ( memoryValues.length == 1) { // jos memoryValues.length on 1 (eli kun avaa toisen kortin) 
            memoryValues.push(val); // työntää toisen kortin kirjaimen memoryValues taulukkoon jossa on jo A
            memoryIDs.push(card.id); // työntää kortin card_X memoryIDs taulukkoon
            console.log(memoryValues)
            if(memoryValues[0] == memoryValues[1]) {
                turnedCards += 2;
                memoryValues = [];
                memoryIDs = [];
                if( turnedCards == memoryArray.length) {
                    card.style.background = "white"; // muuttaa divin style="background: white"
                    card.innerHTML = val; // Laittaa An valkoiselle ruudulle
                    document.getElementById("memory_board").innerHTML = "YOU DID IT"
                    turnedCards = 0;
            }    
    } else { Turn2Back = () => {
        let card_1 = document.getElementById(memoryIDs[0]);
        let card_2 = document.getElementById(memoryIDs[1]);
        card_1.style.background = "url(logo-og.png) no-repeat";
        card_2.style.background = "url(logo-og.png) no-repeat";
        card_1.innerHTML ="";
        card_2.innerHTML ="";
        memoryValues = [];
        memoryIDs = [];
        }
        setTimeout(Turn2Back, 1000)
      }
  }
}}

export default {newBoard, turnCard};