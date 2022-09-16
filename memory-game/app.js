//Global Variables
let counter = 0;
let lives = 5;
let matched = 0;
let memoryScore = 0;
let firstCardSelection = "";
let secondCardSelection = "";
let firstCardId = 0;
let secondCardId = 0;
let cardsContainer = document.getElementById("cards");
let livesContainer = document.getElementById("lives");
let scoreSpan = document.getElementById("score");

//Array for level 2
const carNames = [
  { name: "Red Bull", src: "./images/f1/Redbull.png" },
  { name: "Mercedes", src: "./images/f1/Mercedes.png" },
  { name: "Ferrari", src: "./images/f1/Ferrari.png" },
  { name: "Mclaren", src: "./images/f1/Mclaren.png" },
  { name: "Alpha Tauri", src: "./images/f1/Alphatauri.png" },
  { name: "Aston Martin ", src: "./images/f1/Astonmartin.png" },
  { name: "Alpine", src: "./images/f1/Alpine.png" },
  { name: "Alfa Romeo", src: "./images/f1/Alfaromeo.png" },
  { name: "Haas", src: "./images/f1/Haas.png" },
  { name: "Williams", src: "./images/f1/Williams.png" },
];
//Array for level 1
const cryptoCoins = [
  { name: "Bitcoin", src: "./images/coins/btc.png" },
  { name: "Ethereum", src: "./images/coins/eth.png" },
  { name: "Solana", src: "./images/coins/solana.png" },
  { name: "Avalanche", src: "./images/coins/avax.png" },
  { name: "Polygon", src: "./images/coins/polygon.png" },
  { name: "USDC", src: "./images/coins/usdc.png" },
  { name: "XRP", src: "./images/coins/xrp.png" },
  { name: "Shiba", src: "./images/coins/shiba.png" },
  { name: "Dogecoin", src: "./images/coins/dogecoin.png" },
  { name: "Near", src: "./images/coins/near.png" },
];
// Constructor for the cards
function Card(src, name, id) {
  this.src = src;
  this.name = name;
  this.id = id;
  // Card.allCars.push(this);
  Card.allCards.push(this);
}
// Prototype render function which is creating all the elements and adding classes to them, then appending to the page
Card.prototype.render = function () {
  let flipBox = document.createElement("div");
  flipBox.classList.add("flipbox");
  flipBox.id = this.id;

  let flipBoxInner = document.createElement("div");
  flipBoxInner.classList.add("flip-box-inner");
  flipBox.appendChild(flipBoxInner);

  let flipBoxFront = document.createElement("div");
  flipBoxFront.classList.add("flip-box-front");
  flipBoxInner.appendChild(flipBoxFront);

  let flipBoxBack = document.createElement("div");
  flipBoxBack.classList.add("flip-box-back");
  flipBoxInner.appendChild(flipBoxBack);

  let carImg = document.createElement("img");
  carImg.src = this.src;
  carImg.alt = this.name;
  flipBoxBack.appendChild(carImg);

  let logoImg = document.createElement("img");
  logoImg.src = "./images/f1/bobagaminglogonobg.png";
  logoImg.alt = "Boba Gaming Logo";
  flipBoxFront.appendChild(logoImg);

  // Declared a variable called myObj with the value of this because the eventlistener is looking for 'this' but its not in the scoppe
  const myObj = this;

  // Adding an event listener with the click type
  flipBox.addEventListener("click", function () {
    flipBox.classList.add("clicked");
    console.log(myObj);
    if (counter === 0) {
      firstCardSelection = myObj.name;
      counter++;
      firstCardId = myObj.id;
    } else {
      secondCardSelection = myObj.name;
      counter = 0;
      secondCardId = myObj.id;

      let firstCard = document.getElementById(firstCardId);

      // if else statement to say, if the first statement is true, then console log snap and add the matched classes
      if (
        firstCardSelection === secondCardSelection &&
        firstCardId != secondCardId
      ) {
        flipBox.classList.add("matched");
        firstCard.classList.add("matched");
        matched++;
        console.log(matched);
        if (matched === 10) {
          alert("You've won the game! Congratulations!");
          setLocalStorage();
        }
        // else statment if true, will add a timer for 2 secs and then removed the clicked class
      } else {
        setTimeout(function () {
          flipBox.classList.remove("clicked");
          firstCard.classList.remove("clicked");
        }, 2000);
        // lives-- will reduce the lives counter by 1 at a time if the if statement is false
        lives--;
        livesContainer.textContent = lives;
      }

      firstCardSelection = "";
      secondCardSelection = "";
      firstCardId = 0;
      secondCardId = 0;
    }
    // if statement to say, if lives is not true then alert them and run the flipallcardsend function and then resets the lives to 5
    if (!lives) {
      alert("You have ran out of guesses, better luck next time!");
      flipAllCardsEnd();
      setLocalStorage();
      lives = 5;
      matched = 0;
      livesContainer.textContent = lives;
    }
  });

  cardsContainer.appendChild(flipBox);
};
// setting an empty array called allCards
Card.allCards = [];

// function to start the game and populate the allCards array with names & images
function start(gameItems) {
  let currentId = 1;
  Card.allCards = [];
  cardsContainer.textContent = "";

  for (let i = 0; i < gameItems.length; i++) {
    new Card(gameItems[i].src, gameItems[i].name, currentId);
    currentId++;
    new Card(gameItems[i].src, gameItems[i].name, currentId);
    currentId++;
  }
  // calling the shuffle function to randomise the array
  shuffle(Card.allCards);
  // for loop to loop through the allCards array length and render them
  for (let i = 0; i < Card.allCards.length; i++) {
    Card.allCards[i].render();
  }
  flipAllCards();
}

// console.log(Card.allCards);
// console.log(counter);
// console.log(firstCardSelection);
// console.log(secondCardSelection);

// function to shuffle the array
function shuffle(array) {
  array.sort(() => Math.random() - 0.5);
}
// function to flip all the cards and add the finished class at the end
function flipAllCardsEnd() {
  const flipped = document.querySelectorAll(".flipbox");

  for (const flipbox of flipped) {
    flipbox.classList.add("finished");
  }
}
// function to flip the cards when you click on them
function flipAllCards() {
  const flipped = document.querySelectorAll(".flipbox");

  for (const flipbox of flipped) {
    flipbox.classList.add("clicked");
    setTimeout(function () {
      flipbox.classList.remove("clicked");
    }, 5000);
  }
}
// to start level 1
let startcrypto = document.getElementById("start-crypto");
startcrypto.addEventListener("click", function () {
  start(cryptoCoins);
});
// to start level 2
let startf1 = document.getElementById("start-f1");
startf1.addEventListener("click", function () {
  start(carNames);
  lives = 5;
  livesContainer.textContent = lives;
});

// local storage

const setLocalStorage = () => {
  if (memoryScore < matched) {
    localStorage.setItem("memoryScore", matched);
    scoreSpan.textContent = matched;
  }
};

const scoresFromLocalStorage = JSON.parse(localStorage.getItem("memoryScore"));
if (scoresFromLocalStorage) {
  memoryScore = scoresFromLocalStorage;
} else {
  localStorage.setItem("memoryScore", 0);
  memoryScore = 0;
}

scoreSpan.textContent = memoryScore;
