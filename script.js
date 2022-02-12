const FRONT = "card_front"
const BACK = "card_back"
const CARD = "card"
const ICON = "icon"


let games = [

    'bootstrap',
    'css',
    'electron',
    'firebase',
    'html',
    'javascript',
    'jquery',
    'mongo',
    'node',
    'react'
]
startGame()

function startGame(){
    cards = createCards(games)
    shuffleCards(cards);
    createDivs(cards)
}


function createDivs(cards){

    let gameBoard = document.getElementById("gameBoard")

    for(let card of cards){

        let cardElement = document.createElement('div');
        cardElement.id = card.id;
        cardElement.classList.add(CARD);
        cardElement.dataset.icon = card.icon;

        createCardContent(card, cardElement)

        cardElement.addEventListener('click', flipCard)
        gameBoard.appendChild(cardElement)
    }
}

function createCardContent(card, cardElement){

    createCardFace(FRONT, card, cardElement);
    createCardFace(BACK, card, cardElement);
}


function createCardFace(face, card, cardElemnte){

    let cardElementFace = document.createElement('div');
    cardElementFace.classList.add(face);
    if(face == FRONT){
       let iconElement = document.createElement('img');
       iconElement.classList.add(ICON)
       iconElement.src = "./images/"+ card.icon + ".png"
       cardElementFace.appendChild(iconElement)
    }else{
        cardElementFace.innerHTML = "&lt/&gt"
    }

    cardElemnte.appendChild(cardElementFace)
}



function shuffleCards(cards){
    let currentIndex = cards.length;
    let randomIndex = 0;

    while (currentIndex !== 0){

        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;

        //inverter valores no java script
        [cards[randomIndex], cards[currentIndex]] = [cards[currentIndex], cards[randomIndex]]
    }

}


function createCards(games){
    let pairs = []
    let cards = []

    for(let game of games){
       pairs.push( createPair(game))
    }

 
    cards = pairs.flatMap(p => p)
    return cards
}

function createPair(game){

    return [{
        id: createIdWithGame(game),
        icon: game,
        flipped: false
    }, {
        id: createIdWithGame(game),
        icon: game,
        flipped: false
    }]

}

function createIdWithGame(game){

    return game + parseInt(Math.random() * 1000)
}

function restart(){

    let gameOver = document.getElementById("gameOver") 
    let cardsFliped = document.getElementsByClassName("card")
    let gameBoard = document.getElementById("gameBoard")

    gameOver.style.display = "none"


   
    for(let i = 0; i < cardsFliped.length; i++){

        console.log(cardsFliped[i])

        cardsFliped[i].classList = "card"
    }


    gameBoard.innerHTML = ''
    startGame()

    //cardsFliped.forEach(card => console.log(card.classList)  )
}

