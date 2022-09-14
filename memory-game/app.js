let counter = 0;
let lives = 5;
let firstCardSelection = "";
let secondCardSelection = "";
let firstCardId = 0;
let secondCardId = 0;
let cardsContainer = document.getElementById("cards");
let livesContainer = document.getElementById("lives");

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

const cryptoCoins = [
  { name: "Bitcoin", src: "./images/coins/btc.jpeg" },
  { name: "Ethereum", src: "./images/coins/eth.jpeg" },
  { name: "Solana", src: "./images/coins/solana.png" },
  { name: "Avalanche", src: "./images/coins/avax.png" },
  { name: "Polygon", src: "./images/coins/polygon.png" },
  { name: "USDC", src: "./images/coins/usdc.jpeg" },
  { name: "XRP", src: "./images/coins/xrp.png" },
  { name: "Shiba", src: "./images/coins/shiba.png" },
  { name: "Dogecoin", src: "./images/coins/dogecoin.png" },
  { name: "Near", src: "./images/coins/near.png" },
];

function Card(src, name, id) {
  this.src = src;
  this.name = name;
  this.id = id;
  Card.allCars.push(this);
}

Card.prototype.render = function () {
  let flipBox = document.createElement("div");
  flipBox.classList.add("flip-box");
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

  const myObj = this;

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

      if (
        firstCardSelection === secondCardSelection &&
        firstCardId != secondCardId
      ) {
        console.log("snap");
        flipBox.classList.add("matched");
        firstCard.classList.add("matched");
      } else {
        setTimeout(function () {
          flipBox.classList.remove("clicked");
          firstCard.classList.remove("clicked");
        }, 2000);
        lives--;
        livesContainer.textContent = lives;
      }

      firstCardSelection = "";
      secondCardSelection = "";
      firstCardId = 0;
      secondCardId = 0;
    }
    if (!lives) {
      alert("You have ran out of guesses, better luck next time!");
      location.reload();
    }
  });

  cardsContainer.appendChild(flipBox);
};

Card.allCars = [];

// function to make the car arrays
function start() {
  let currentId = 1;

  for (let i = 0; i < carNames.length; i++) {
    new Card(carNames[i].src, carNames[i].name, currentId);
    currentId++;
    new Card(carNames[i].src, carNames[i].name, currentId);
    currentId++;
  }
  shuffle(Card.allCars);
  // for loop to loop through the all cars array and render them
  for (let i = 0; i < Card.allCars.length; i++) {
    Card.allCars[i].render();
  }
}

console.log(Card.allCars);
console.log(counter);
console.log(firstCardSelection);
console.log(secondCardSelection);

// function to shuffle the array
function shuffle(array) {
  array.sort(() => Math.random() - 0.5);
}

start();
