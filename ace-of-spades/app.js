let buttonStart = document.getElementById("start-btn");
let buttonHigher = document.getElementById("higher");
let buttonLower = document.getElementById("lower");
let buttonReset = document.getElementById("reset");

let suit = [" ♠ ", " ♦️ ", " ♥️ ", " ♣️ "];
let cardNum = [
  " 2 ",
  " 3 ",
  " 4 ",
  " 5 ",
  " 6 ",
  " 7 ",
  " 8 ",
  " 9 ",
  " 10 ",
  " J ",
  " Q ",
  " K ",
  " A ",
];

let playerDeck = [];
let counter = 0;
let maxClick = 5;
let score = 0;

function Card(value, suit) {
  this.value = value;
  this.suit = suit;
  Card.houseDeck.push(this);
}

Card.houseDeck = [];

function newDeck() {
  console.log("newDeck");
  for (let i = 0; i < suit.length; i++) {
    for (let a = 0; a < cardNum.length; a++) {
      new Card(cardNum[a], suit[i]);
    }
  }
  shuffle(Card.houseDeck);
  moveTopCard();
}

function showTopCards() {
  console.log("showTopCards");
  const houseCardObj = Card.houseDeck[Card.houseDeck.length - 1];
  const playerCardObj = playerDeck[playerDeck.length - 1];
  const houseCard = document.getElementById("card-one");
  const playerCard = document.getElementById("card-two");

  houseCard.textContent = houseCardObj.value + houseCardObj.suit;

  playerCard.textContent = playerCardObj.value + playerCardObj.suit;
}

function moveTopCard() {
  console.log("moveTopCard");
  // remove last item from Card.houseDeck and save in variable
  let currentHouse = Card.houseDeck.pop();

  // add last card from house to player deck
  playerDeck.push(currentHouse);
}

function shuffle(array) {
  array.sort(() => Math.random() - 0.5);
}

function startGame() {
  console.log("startGame");
  newDeck();
  showTopCards();
}

buttonStart.addEventListener("click", startGame);
