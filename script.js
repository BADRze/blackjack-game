// ----------------------------------blackjack game------------------------------
let cards = []
let hasBlackJack = true;
let isAlive = false;
let message ;
let messageEl = document.getElementById('message-el'); //<p id="message-el">want to play round ?</p>
let sumEl = document.querySelector('#sum-el');         //<p>Sum:</p>
let cardEl = document.getElementById('cards-el'); //<p id="cards-el">Cards:</p>
let sum = 0;
console.log(cards)

function startGame() {
    isAlive = true;
    let firstCard = getRandomCard(); 
    let secondCard = getRandomCard() ;
    cards = [firstCard, secondCard];
    sum = cards[0] + cards[1]
    renderGame()
}

function renderGame() {
    if (sum < 21) {
        message = 'do you want to draw a new card'
        hasBlackJack = false
    }else if (sum === 21) {
        message = "you've got blackjack !"
    }else{
        message = 'you are out of the game !'
        isAlive = false;
    }
    messageEl.textContent = message;
    cardEl.textContent = "Cards :";
    sumEl.textContent = "Sum : " + sum
    for (let i = 0 ; i < cards.length ; i++) {
        cardEl.textContent += cards[i] + " "  
    }
}   

function newCard() {
    if (isAlive === true && hasBlackJack === false) {
        let thirdCard = getRandomCard() 
        sum = sum + thirdCard
        cards.push(thirdCard) 
        renderGame()
    }
}


function getRandomCard() {
    let randomNumber = Math.floor(Math.random() * 13) + 1
    if (randomNumber > 10) {
        return 10
    } else if (randomNumber === 1) {
        return 11
    } else {
        return randomNumber
    }
}