let guessWhoScore = [];

const scoresFromLocalStorage = JSON.parse(
  localStorage.getItem("guessWhoScore")
);
if (scoresFromLocalStorage) {
  guessWhoScore = scoresFromLocalStorage;
}

const scoreContainer = document.getElementById("score-container");

let headingWin = document.createElement("h5");

function renderGWPlayerScore() {
  let guessWhoWin = 0;
  let guessWhoTotal = 0;
  for (let i = 0; i < guessWhoScore.length; i++) {
    guessWhoTotal++;
    if (guessWhoScore[i] === "win") {
      guessWhoWin++;
    }
  }
  headingWin.style.lineHeight = 1.6;
  headingWin.style.color = "rgb(250, 165, 73)";
  headingWin.innerHTML = `Your Score <br /> ${guessWhoWin} / ${guessWhoTotal}`;
  scoreContainer.appendChild(headingWin);
}

const characterContainer = document.getElementById("characterContainer");
const question = document.getElementById("clue");
const answerHeading = document.getElementById("answer-heading");
const selectGuess = document.getElementById("guess");
const guessResponse = document.getElementById("guessResponse");
const responseText = document.getElementById("response");
const resetBtn = document.getElementById("reset-btn");
resetBtn.addEventListener("click", resetGame);

const maxGuessesAllowed = 3;
let guesses = 0;

function Character(charObj) {
  this.name = charObj.name;
  this.src = charObj.src;
  this.shadow = charObj.shadow;
  this.emotion = charObj.emotion;
  this.skin = charObj.skin;
  this.hair = charObj.hair;
  this.nose = charObj.nose;
  this.eyes = charObj.eyes;
  this.lips = charObj.lips;
  this.facialHair = charObj.facialHair;
  this.headWear = charObj.headWear;
  this.hide = charObj.hide;
  this.show = charObj.show;

  Character.allCharactersArray.push(this);
}

Character.prototype.render = function () {
  let imgContainer = document.createElement("div");
  imgContainer.classList.add("img-container");
  let image = document.createElement("img");
  image.classList.add("img-char");
  image.src = this.src;
  let heading = document.createElement("h3");
  heading.classList.add("name-heading");
  heading.textContent = this.name;
  let buttonX = document.createElement("button");
  buttonX.classList.add("hide-btn");
  buttonX.textContent = "x";
  let buttonTick = document.createElement("button");
  buttonTick.classList.add("tick-btn");
  buttonTick.innerHTML = "&#10003";
  characterContainer.appendChild(imgContainer);
  imgContainer.appendChild(image);
  imgContainer.appendChild(heading);
  imgContainer.appendChild(buttonX);
  imgContainer.appendChild(buttonTick);

  const myObj = this;

  buttonX.addEventListener("click", () => {
    image.src = myObj.shadow;
  });

  buttonTick.addEventListener("click", () => {
    image.src = myObj.src;
  });
};

Character.allCharactersArray = [];

const characterDetails = [
  {
    name: "anita",
    src: "/images/anita.png",
    shadow: "/images/anita-shadow.png",
    emotion: "happy",
    skin: "light",
    hair: "blonde",
    nose: "small",
    eyes: "blue",
    lips: "small",
    facialHair: false,
    headWear: true,
  },
  {
    name: "robert",
    src: "/images/robert.png",
    shadow: "/images/robert-shadow.png",
    emotion: "sad",
    skin: "light",
    hair: "brown",
    nose: "big",
    eyes: "blue",
    lips: "big",
    facialHair: false,
    headWear: false,
  },
  {
    name: "george",
    src: "/images/george.png",
    shadow: "/images/george-shadow.png",
    emotion: "sad",
    skin: "light",
    hair: "grey",
    nose: "small",
    eyes: "brown",
    lips: "big",
    facialHair: false,
    headWear: true,
  },
  {
    name: "alex",
    src: "/images/alex.png",
    shadow: "/images/alex-shadow.png",
    emotion: "happy",
    skin: "dark",
    hair: "brown",
    nose: "small",
    eyes: "brown",
    lips: "big",
    facialHair: true,
    headWear: false,
  },
  {
    name: "alfred",
    src: "/images/alfred.png",
    shadow: "/images/alfred-shadow.png",
    emotion: "happy",
    skin: "light",
    hair: "ginger",
    nose: "big",
    eyes: "blue",
    lips: "small",
    facialHair: true,
    headWear: false,
  },
  {
    name: "anne",
    src: "/images/anne.png",
    shadow: "/images/anne-shadow.png",
    emotion: "happy",
    skin: "light",
    hair: "brown",
    nose: "big",
    eyes: "blue",
    lips: "small",
    facialHair: false,
    headWear: true,
  },
  {
    name: "bernard",
    src: "/images/bernard.png",
    shadow: "/images/bernard-shadow.png",
    emotion: "happy",
    skin: "light",
    hair: "brown",
    nose: "big",
    eyes: "brown",
    lips: "small",
    facialHair: false,
    headWear: true,
  },
  {
    name: "bill",
    src: "/images/bill.png",
    shadow: "/images/bill-shadow.png",
    emotion: "happy",
    skin: "light",
    hair: "ginger",
    nose: "small",
    eyes: "blue",
    lips: "small",
    facialHair: true,
    headWear: false,
  },
  {
    name: "charles",
    src: "/images/charles.png",
    shadow: "/images/charles-shadow.png",
    emotion: "happy",
    skin: "dark",
    hair: "blonde",
    nose: "small",
    eyes: "blue",
    lips: "big",
    facialHair: true,
    headWear: false,
  },
  {
    name: "david",
    src: "/images/david.png",
    shadow: "/images/david-shadow.png",
    emotion: "happy",
    skin: "light",
    hair: "blonde",
    nose: "small",
    eyes: "brown",
    lips: "big",
    facialHair: true,
    headWear: false,
  },
  {
    name: "eric",
    src: "/images/eric.png",
    shadow: "/images/eric-shadow.png",
    emotion: "happy",
    skin: "light",
    hair: "blonde",
    nose: "small",
    eyes: "blue",
    lips: "big",
    facialHair: false,
    headWear: true,
  },
  {
    name: "claire",
    src: "/images/claire.png",
    shadow: "/images/claire-shadow.png",
    emotion: "happy",
    skin: "light",
    hair: "ginger",
    nose: "small",
    eyes: "blue",
    lips: "big",
    facialHair: false,
    headWear: true,
  },
  {
    name: "frans",
    src: "/images/frans.png",
    shadow: "/images/frans-shadow.png",
    emotion: "happy",
    skin: "light",
    hair: "ginger",
    nose: "small",
    eyes: "blue",
    lips: "small",
    facialHair: false,
    headWear: false,
  },
  {
    name: "herman",
    src: "/images/herman.png",
    shadow: "/images/herman-shadow.png",
    emotion: "happy",
    skin: "dark",
    hair: "ginger",
    nose: "big",
    eyes: "brown",
    lips: "big",
    facialHair: false,
    headWear: false,
  },
  {
    name: "joe",
    src: "/images/joe.png",
    shadow: "/images/joe-shadow.png",
    emotion: "happy",
    skin: "light",
    hair: "blonde",
    nose: "small",
    eyes: "brown",
    lips: "small",
    facialHair: false,
    headWear: true,
  },
  {
    name: "maria",
    src: "/images/maria.png",
    shadow: "/images/maria-shadow.png",
    emotion: "happy",
    skin: "light",
    hair: "brown",
    nose: "small",
    eyes: "blue",
    lips: "lips",
    facialHair: false,
    headWear: true,
  },
  {
    name: "max",
    src: "/images/max.png",
    shadow: "/images/max-shadow.png",
    emotion: "happy",
    skin: "dark",
    hair: "brown",
    nose: "big",
    eyes: "brown",
    lips: "big",
    facialHair: true,
    headWear: false,
  },
  {
    name: "paul",
    src: "/images/paul.png",
    shadow: "/images/paul-shadow.png",
    emotion: "happy",
    skin: "light",
    hair: "grey",
    nose: "small",
    eyes: "blue",
    lips: "small",
    facialHair: false,
    headWear: false,
  },
  {
    name: "peter",
    src: "/images/peter.png",
    shadow: "/images/peter-shadow.png",
    emotion: "happy",
    skin: "light",
    hair: "grey",
    nose: "big",
    eyes: "blue",
    lips: "big",
    facialHair: false,
    headWear: false,
  },
  {
    name: "phillip",
    src: "/images/phillip.png",
    shadow: "/images/phillip-shadow.png",
    emotion: "happy",
    skin: "dark",
    hair: "brown",
    nose: "small",
    eyes: "blue",
    lips: "big",
    facialHair: true,
    headWear: false,
  },
  {
    name: "richard",
    src: "/images/richard.png",
    shadow: "/images/richard-shadow.png",
    emotion: "happy",
    skin: "light",
    hair: "brown",
    nose: "small",
    eyes: "brown",
    lips: "small",
    facialHair: true,
    headWear: false,
  },
  {
    name: "sam",
    src: "/images/sam.png",
    shadow: "/images/sam-shadow.png",
    emotion: "happy",
    skin: "light",
    hair: "grey",
    nose: "big",
    eyes: "blue",
    lips: "small",
    facialHair: false,
    headWear: true,
  },
  {
    name: "susan",
    src: "/images/susan.png",
    shadow: "/images/susan-shadow.png",
    emotion: "happy",
    skin: "light",
    hair: "grey",
    nose: "small",
    eyes: "blue",
    lips: "big",
    facialHair: false,
    headWear: false,
  },
  {
    name: "tom",
    src: "/images/tom.png",
    shadow: "/images/tom-shadow.png",
    emotion: "happy",
    skin: "light",
    hair: "brown",
    nose: "small",
    eyes: "blue",
    lips: "small",
    facialHair: false,
    headWear: false,
  },
];

for (let i = 0; i < characterDetails.length; i++) {
  new Character(characterDetails[i]);
}

function getGuessWhoCharacter() {
  return Math.floor(Math.random() * Character.allCharactersArray.length);
}

let guessWho = getGuessWhoCharacter();

document.getElementById("question-btn").addEventListener("click", renderAnswer);

function renderAnswer() {
  if (question.value === "") {
    alert("Please select a question to ask!");
  } else if (question.value === "hair-color") {
    responseText.textContent = `The character has ${Character.allCharactersArray[guessWho].hair} hair.`;
  } else if (question.value === "headwear") {
    if (Character.allCharactersArray[guessWho].headWear) {
      responseText.textContent = `The character is wearing at least one item`;
    } else {
      responseText.textContent = `The character is not wearing any items`;
    }
  } else if (question.value === "skin") {
    responseText.textContent = `The character has ${Character.allCharactersArray[guessWho].skin} skin`;
  } else if (question.value === "nose") {
    responseText.textContent = `The character has a ${Character.allCharactersArray[guessWho].nose} nose`;
  } else if (question.value === "eyes") {
    responseText.textContent = `The character has ${Character.allCharactersArray[guessWho].eyes} eyes`;
  } else if (question.value === "facial-hair") {
    if (Character.allCharactersArray[guessWho].facialHair) {
      responseText.textContent = `${Character.allCharactersArray[guessWho].facialHair}, the character does have facial hair`;
    } else {
      responseText.textContent = `${Character.allCharactersArray[guessWho].facialHair}, the character does not have facial hair`;
    }
  } else if (question.value === "lips") {
    responseText.textContent = `The character has ${Character.allCharactersArray[guessWho].lips} lips`;
  } else if (question.value === "emotion") {
    responseText.textContent = `The character is feeling ${Character.allCharactersArray[guessWho].emotion}`;
  }
  selectGuess.value = "";
  triggerOpacity();
  hideQuestionContainer();
}

let guessOption;

function renderGuessInput() {
  let guessOption = document.createElement("option");
  guessOption.value = "";
  guessOption.setAttribute("disabled", "true");
  guessOption.setAttribute("selected", "true");
  guessOption.textContent = "Guess the character";
  selectGuess.appendChild(guessOption);
  for (let i = 0; i < Character.allCharactersArray.length; i++) {
    guessOption = document.createElement("option");
    guessOption.value = Character.allCharactersArray[i].name;
    guessOption.textContent = Character.allCharactersArray[i].name;
    selectGuess.appendChild(guessOption);
  }
}

document.getElementById("guess-btn").addEventListener("click", renderResponse);

const questionOne = document.getElementById("optionOne");

function renderResponse() {
  guesses++;
  if (guesses === maxGuessesAllowed) {
    for (let i = 0; i < Character.allCharactersArray.length; i++) {
      if (selectGuess.value === Character.allCharactersArray[guessWho].name) {
        responseText.textContent = `Congratulations, you have guessed the who of guess who!`;
        resetBtn.classList.add("reset-btn-visible");
        // resetGame();
      } else {
        responseText.textContent = `Bad luck, that was you last attempt! The who of guess who was ${Character.allCharactersArray[guessWho].name}`;
        resetBtn.classList.add("reset-btn-visible");
        // resetGame();
      }
    }
    if (selectGuess.value === Character.allCharactersArray[guessWho].name) {
      guessWhoScore.push("win");
      localStorage.setItem("guessWhoScore", JSON.stringify(guessWhoScore));
    } else {
      guessWhoScore.push("lose");
      localStorage.setItem("guessWhoScore", JSON.stringify(guessWhoScore));
    }
  } else {
    for (let i = 0; i < Character.allCharactersArray.length; i++) {
      if (selectGuess.value === Character.allCharactersArray[guessWho].name) {
        responseText.textContent = `Congratulations, you have guessed the who of guess who!`;
        resetBtn.classList.add("reset-btn-visible");
        // resetGame();
      } else {
        responseText.textContent = `Bad luck, ask another question to be given another clue!`;
      }
    }
    if (selectGuess.value === Character.allCharactersArray[guessWho].name) {
      guessWhoScore.push("win");
      localStorage.setItem("guessWhoScore", JSON.stringify(guessWhoScore));
    }
  }
  question.value = "";
  // guessResponse.classList.add("opacity");
  triggerOpacity();
  hideGuessContainer();
}

function triggerOpacity() {
  responseText.classList.remove("opacity");
  setTimeout(() => {
    responseText.classList.add("opacity");
  }, 1000);
  hideGuessContainer();
}

const imgChar = document.getElementsByClassName("img-char");

function renderCharacter() {
  for (let i = 0; i < Character.allCharactersArray.length; i++) {
    Character.allCharactersArray[i].render();
  }
  renderGWPlayerScore();
}

const imgName = document.getElementsByClassName("name-heading");

function renderName() {
  for (let i = 0; i < Character.allCharactersArray.length; i++) {
    imgName[i].textContent = `${Character.allCharactersArray[i].name}`;
  }
}

// function hideCharacter(event) {
//   let hideButton = event.target.id;
//   for (let i = 0; i < Character.allCharactersArray.length; i++) {
//     let imgC = imgChar[i];
//     if (hideButton === Character.allCharactersArray[i].hide) {
//       imgC.src = Character.allCharactersArray[i].shadow;
//       break;
//     }
//   }
// }

// function showCharacter(event) {
//   let showButton = event.target.id;
//   for (let i = 0; i < Character.allCharactersArray.length; i++) {
//     let imgC = imgChar[i];
//     if (showButton === Character.allCharactersArray[i].show) {
//       imgC.src = Character.allCharactersArray[i].src;
//     }
//   }
// }

// function showAllImages() {
//   for (let i = 0; i < Character.allCharactersArray.length; i++) {
//     console.log(Character.render.);
//   }
// }
// showAllImages();

function hideQuestionContainer() {
  document.getElementById("questionContainer").classList.add("display-none");
  document.getElementById("guess-container").classList.remove("display-none");
}

function hideGuessContainer() {
  document.getElementById("questionContainer").classList.remove("display-none");
  document.getElementById("guess-container").classList.add("display-none");
}

resetBtn.addEventListener("click", resetGame());

function resetGame() {
  headingWin.textContent = "";
  responseText.textContent = "";
  renderGWPlayerScore();
  selectGuess.value = "";
  question.value = "";
  guesses = 0;
  guessWho = getGuessWhoCharacter();
  resetBtn.classList.remove("reset-btn-visible");
}

// home page script

console.log("hello");

renderGuessInput();
renderCharacter();
renderName();
console.log(guessWho);
