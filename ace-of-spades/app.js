let buttonStart = document.getElementById("start-btn");
let buttonHigher = document.getElementById("higher");
let buttonLower = document.getElementById("lower");
let buttonReset = document.getElementById("reset");
let timer = document.getElementById("timer");
let correct = document.getElementById("correct"); // if they get it correct
let playerScore = document.getElementById("score");
let livesContainer = document.getElementById("count");
let display = document.getElementById("displayAnswer");

let suit = ["♠", "♦️", "♥️", "♣️"];
let cardNum = [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14];

let aceScore = [];
let playerDeck = [];
let lives = 5;
let score = 0;
let timerInterval;
let timerCount = 5;

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
  console.log(Card.houseDeck);
  console.log(playerDeck);
  console.log("showTopCards");
  const houseCardObj = Card.houseDeck[Card.houseDeck.length - 1]; // getting the last item from each array
  const playerCardObj = playerDeck[playerDeck.length - 1];
  const playerCard = document.getElementById("new-card2"); // Getting obj
  const houseCard = document.getElementById("new-card1");
  let houseCardValue = ""; // Empty string
  let playerCardValue = "";

  if (houseCardObj.value === 11) {
    // This changes the number to J,Q,K,A
    houseCardValue = "J";
  } else if (houseCardObj.value === 12) {
    houseCardValue = "Q";
  } else if (houseCardObj.value === 13) {
    houseCardValue = "K";
  } else if (houseCardObj.value === 14) {
    houseCardValue = "A";
  } else {
    houseCardValue = houseCardObj.value;
  }
  console.log(houseCardValue);

  if (playerCardObj.value === 11) {
    // This changes the number to J,Q,K,A
    playerCardValue = "J";
  } else if (playerCardObj.value === 12) {
    playerCardValue = "Q";
  } else if (playerCardObj.value === 13) {
    playerCardValue = "K";
  } else if (playerCardObj.value === 14) {
    playerCardValue = "A";
  } else {
    playerCardValue = playerCardObj.value;
  }
  console.log(playerCardValue);

  houseCard.textContent = houseCardValue + houseCardObj.suit; // Puts number and suit together

  playerCard.textContent = playerCardValue + playerCardObj.suit;
}

function moveTopCard() {
  console.log("moveTopCard");
  // remove last item from Card.houseDeck and save in variable
  let currentHouse = Card.houseDeck.pop();

  // add last card from house to player deck
  playerDeck.push(currentHouse);
  leftCard.classList.remove("flipped");
}

function shuffle(array) {
  array.sort(() => Math.random() - 0.5);
}

function startTimer() {
  timerInterval = setInterval(timertickDown, 1000);
}

function timertickDown() {
  timerCount--;
  timer.textContent = timerCount;
  console.log("timer");
  if (timerCount === 0) {
    alert("You have run out of time. You scored " + score);
    timer.textContent = "Out of time";
    buttonStart.className = "start";
    clearInterval(timerInterval);
    setTimeout(location.reload, 1000);
  }
}

function guessCard(highLowGuess) {
  let correctCard = false;
  let playerCard = playerDeck[playerDeck.length - 1].value; //
  let houseCard = Card.houseDeck[Card.houseDeck.length - 1].value; //

  leftCard.classList.add("flipped"); //
  console.log("highLowGuess", highLowGuess);
  console.log("playerCard", playerCard);
  console.log("housecard", houseCard);
  if (highLowGuess === "higher" && playerCard <= houseCard) {
    score++;
    correctCard = true;
    playerScore.textContent = score;
    correct.textContent = "Correct";
    console.log("high Correct");
  }
  if (highLowGuess === "lower" && playerCard >= houseCard) {
    score++;
    playerScore.textContent = score;
    correctCard = true;
    correct.textContent = "Correct";
    console.log("Lower correct");
  }

  if (correctCard === false) {
    lives--;
    livesContainer.textContent = lives;
    correct.textContent = "Wrong";
    console.log("wrong");
  }

  if (lives === 0) {
    alert("You have run out of trys. You scored " + score);
    console.log("Dead");
    clearInterval(timerInterval); // Stop clock
    setTimeout(() => {
      location.reload();
    }, 2000);
  }

  setTimeout(() => {
    // Moving the top card and then showing the card after 3 seconds
    moveTopCard();
    correct.textContent = "";
    setTimeout(showTopCards, 500); // This stops the flip of the player card showing.
  }, 1500);
}

function startGame() {
  checkLocalStorage();
  timerCount = 30;
  console.log("startGame");
  newDeck();
  startTimer();
  showTopCards();
  buttonStart.className = "hide";
  rightCard.classList.add("flipped");
}

buttonStart.addEventListener("click", startGame);

buttonHigher.addEventListener("click", () => {
  guessCard("higher");
});

buttonLower.addEventListener("click", () => {
  guessCard("lower");
});

buttonReset.addEventListener("click", function () {
  location.reload();
});

// Flip card
const leftCard = document.getElementById("card-one");
const rightCard = document.getElementById("card-two");

/// LEFT CARD IS HouseDeck CARD
/// RIGHT CARD IS PlayerDeckCARD

//local storage

function setLocalStorage() {
  localStorage.setItem("aceScore", JSON.stringify());
}

function checkLocalStorage() {
  const localData = JSON.parse(localStorage.getItem("aceScore"));
}
