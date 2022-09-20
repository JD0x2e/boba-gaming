let buttonStart = document.getElementById("start-btn");
let buttonReset = document.getElementById("reset");
let buttonHigher = document.getElementById("higher");
let buttonLower = document.getElementById("lower");
let timer = document.getElementById("timer");
let liveCount = document.getElementById("live");
let playerScore = document.getElementById("score");
let houseDeckCount = document.getElementById("houseDeckCount");
let playerDeckCount = document.getElementById("playerDeckCount");
let highScore = document.getElementById("highScore");
let correct = document.getElementById("correct");
let timeName = document.getElementById("timeName");

let cardNum = [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14];
let suit = ["♠", "♦️", "♥️", "♣️"];

let aceScore = 0;
let playerDeck = [];
let lives = 5;
let score = 0;
let timeInterval;
let timerCount = 5;

Card.houseDeck = [];

function Card(value, suit) {
  this.value = value;
  this.suit = suit;

  Card.houseDeck.push(this);
}

// Create newDeck that puts Suit and cardNum together and push to Array.
const newDeck = () => {
  for (let i = 0; i < suit.length; i++) {
    for (let a = 0; a < cardNum.length; a++) {
      new Card(cardNum[a], suit[i]);
      console.log("newDeck");
    }
  }
  shuffle(Card.houseDeck);
  moveTopCard();
};

const displayDeckCount = () => {
  houseDeckCount.textContent = Card.houseDeck.length;
  playerDeckCount.textContent = playerDeck.length;
};

const showTopCard = () => {
  console.log(Card.houseDeck);
  console.log(playerDeck);
  console.log("showTopCards");
  const houseCardObj = Card.houseDeck[Card.houseDeck.length - 1]; //Getting the last item from the array.
  const playerCardObj = playerDeck[playerDeck.length - 1];
  const houseCard = document.getElementById("newCard2");
  const playerCard = document.getElementById("newCard1");

  let houseCardValue = "";
  let playerCardValue = "";

  if (houseCardObj.value === 11) {
    houseCardValue = "J";
  } else if (houseCardObj.value === 12) {
    houseCardValue = "Q";
  } else if (houseCardObj.value === 13) {
    houseCardValue = "k";
  } else if (houseCardObj.value === 14) {
    houseCardValue = "A";
  } else {
    houseCardValue = houseCardObj.value;
  }
  console.log(houseCardValue);

  if (playerCardObj.value === 11) {
    playerCardValue = "J";
  } else if (playerCardObj.value === 12) {
    playerCardValue = "Q";
  } else if (playerCardObj.value === 13) {
    playerCardValue = "k";
  } else if (playerCardObj.value === 14) {
    playerCardValue = "A";
  } else {
    playerCardValue = playerCardObj.value;
  }
  console.log(playerCardValue);
  console.log(playerCardObj);

  houseCard.textContent = houseCardValue + houseCardObj.suit; // Puts number with Suit

  playerCard.textContent = playerCardValue + playerCardObj.suit;
};

const moveTopCard = () => {
  //remove last item from Card.houseDeck and save in variable.
  let currentHouse = Card.houseDeck.pop();

  //add last card from house to player deck.

  playerDeck.push(currentHouse);
  leftCard.classList.remove("flipped");
  displayDeckCount();
  console.log("MovetopCard");
};

const shuffle = (array) => {
  array.sort(() => Math.random() - 0.5);
  console.log("shuffle");
};

const startTimer = () => {
  timeInterval = setInterval(timerTickDown, 500);
};

const timerTickDown = () => {
  timerCount--;
  timer.textContent = timerCount;

  if (timerCount === 0) {
    alert("You have run out of time. Your score is " + score);
    timer.textContent = "Game over";
    timeName.classList.add("timeNameRemove");
    setLocalStorage();
    buttonStart.className = "start";
    clearInterval(timeInterval);
    setTimeout(() => {
      location.reload();
    }, 1000);
  }
};

function guessCard(highLowGuess) {
  let correctCard = false;
  let playerCard = playerDeck[playerDeck.length - 1].value;
  let houseCard = Card.houseDeck[Card.houseDeck.length - 1].value;

  leftCard.classList.add("flipped");

  console.log("highLowGuess", highLowGuess);
  console.log("playerCard", playerCard);
  console.log("housecard", houseCard);

  if (highLowGuess === "higher" && playerCard <= houseCard) {
    score++;
    correctCard = true;
    playerScore.textContent = score;
    correct.textContent = "Correct"; // Printing to page
    console.log("High Correct");
  }
  if (highLowGuess === "lower" && playerCard >= houseCard) {
    score++;
    correctCard = true;
    playerScore.textContent = score;
    correct.textContent = "Correct";
    console.log("Lower Corret");
  }

  if (correctCard === false) {
    lives--;
    liveCount.textContent = lives;
    correct.textContent = "Wrong";
    console.log("wrong");
  }
  if (lives === 0) {
    alert("You have run out of trys. You scored " + score);
    console.log("Dead");
    setLocalStorage();
    clearInterval(timeInterval);
    setTimeout(() => {
      location.reload();
    }, 1500);
  }

  setTimeout(() => {
    moveTopCard();
    correct.textContent = "";
    setTimeout(showTopCard, 500);
  }, 1500);
}

function startGame() {
  timerCount = 30;
  console.log("start Game");
  newDeck();
  startTimer();
  showTopCard();
  buttonStart.className = "hide";
  rightCard.classList.add("flipped");
  console.log("Check");
}

buttonStart.addEventListener("click", startGame);

buttonHigher.addEventListener("click", () => {
  guessCard("higher");
});

buttonLower.addEventListener("click", () => {
  guessCard("lower");
});

buttonReset.addEventListener("click", () => {
  location.reload();
});

const rightCard = document.getElementById("card-two");
const leftCard = document.getElementById("card-one");

const setLocalStorage = () => {
  if (aceScore < score) {
    localStorage.setItem("acescore", score);
  }
};

const playerScoreCard = JSON.parse(localStorage.getItem("acescore"));

if (playerScoreCard) {
  aceScore = playerScoreCard;
} else {
  localStorage.setItem("acescore", 0);
  aceScore = 0;

  window.localStorage.href = "./index.html";
}
highScore.textContent = aceScore;
