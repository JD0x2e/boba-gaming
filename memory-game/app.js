let counter = 0;
let lives = 5;
let firstCardSelection = "";
let secondCardSelection = "";
let firstCardId = 0;
let secondCardId = 0;
let cardsContainer = document.getElementById("cards");
let livesContainer = document.getElementById("lives");

const carNames = [
  { name: "Red Bull", src: "./images/Redbull.png" },
  { name: "Mercedes", src: "./images/Mercedes.png" },
  { name: "Ferrari", src: "./images/Ferrari.png" },
  { name: "Mclaren", src: "./images/Mclaren.png" },
  { name: "Alpha Tauri", src: "./images/Alphatauri.png" },
  { name: "Aston Martin ", src: "./images/Astonmartin.png" },
  { name: "Alpine", src: "./images/Alpine.png" },
  { name: "Alfa Romeo", src: "./images/Alfaromeo.png" },
  { name: "Haas", src: "./images/Haas.png" },
  { name: "Williams", src: "./images/Williams.png" },
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
  logoImg.src = "./images/bobagaminglogonobg.png";
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
        // set time out so classes get removed after 2seconds
      }

      firstCardSelection = "";
      secondCardSelection = "";
      firstCardId = 0;
      secondCardId = 0;
    }
  });

  cardsContainer.appendChild(flipBox);
};

Card.allCars = [];

function start() {
  let currentId = 1;

  for (let i = 0; i < carNames.length; i++) {
    new Card(carNames[i].src, carNames[i].name, currentId);
    currentId++;
    new Card(carNames[i].src, carNames[i].name, currentId);
    currentId++;
  }

  shuffle(Card.allCars);
  for (let i = 0; i < Card.allCars.length; i++) {
    Card.allCars[i].render();
  }
}

console.log(Card.allCars);
console.log(counter);
console.log(firstCardSelection);
console.log(secondCardSelection);

function shuffle(array) {
  array.sort(() => Math.random() - 0.5);
}
// make another function which loops through the allcars array and then render the cards in that

// for loop needs to be in a function, remove the renders, seperate for loop for the all cars array
//between these two loops, need to randomise the array
start();
