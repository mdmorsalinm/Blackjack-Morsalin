// Build a BlackJack Game

// variables representing two cards 
let firstCard = 0;
let secondCard = 0;
let cards = [];
let hasBlackjack;
let isAlive;
let message = "";
let messageEl = document.getElementById("message-el");
let sumEl = document.getElementById("sum-el");
let cardsEl = document.getElementById("cards-el");
//challenge #1
//create a new variable and set it to the sum of the two cards 
let sum = 0;

function renderGame() {
    sum = 0;
    cardsEl.textContent = "Cards: ";
    for (let i = 0; i < cards.length; i++) {
        sum += cards[i];
        cardsEl.textContent += cards[i] + " ";
    }
    sumEl.textContent = "Sum: " + sum;

    if (sum < 21) {
        message = "Do you want to draw a new card? 🙂"
    } else if (sum == 21) {
        hasBlackjack = true;
        message = "Wohoo! You've got Blackjack! 🥳"
    } else {
        isAlive = false;
        message = "You're out of the game! 😭"
    }    
    console.log(message)
    messageEl.textContent = message;
}

function getRandomCard() {
    var randomNumber = Math.floor(Math.random()*14) + 1;
    if (randomNumber == 1) {
        return 11;
    } else if (randomNumber > 9) {
        return 10;
    } 
    return randomNumber;


}

function newCard() {
    if (isAlive) {
        let newCard = getRandomCard();
        sum += newCard;
        cards.push(newCard);
        renderGame();
    } else {
        message = "You're out of the game! 😭  You Can't Draw New Cards"
        messageEl.textContent = message;
    }
}
//chalenge #2 
// code the statements below based on the conditions shown in blackjack.png from the images folder
// your output should work in the browser's console based on changing the values assigned to the cards
function startGame() {
    isAlive = true;
    cards = [];
    firstCard = newCard();
    secondCard = newCard();
    renderGame();
}
