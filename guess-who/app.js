const hideBtn1 = document.getElementById("hide-btn1");
const hideBtn2 = document.getElementById("hide-btn2");
const hideBtn3 = document.getElementById("hide-btn3");
const hideBtn4 = document.getElementById("hide-btn4");
const hideBtn5 = document.getElementById("hide-btn5");
const hideBtn6 = document.getElementById("hide-btn6");
const hideBtn7 = document.getElementById("hide-btn7");
const hideBtn8 = document.getElementById("hide-btn8");
const hideBtn9 = document.getElementById("hide-btn9");
const hideBtn10 = document.getElementById("hide-btn10");
const hideBtn11 = document.getElementById("hide-btn11");
const hideBtn12 = document.getElementById("hide-btn12");
const showBtn1 = document.getElementById("show-btn1");
const showBtn2 = document.getElementById("show-btn2");
const showBtn3 = document.getElementById("show-btn3");
const showBtn4 = document.getElementById("show-btn4");
const showBtn5 = document.getElementById("show-btn5");
const showBtn6 = document.getElementById("show-btn6");
const showBtn7 = document.getElementById("show-btn7");
const showBtn8 = document.getElementById("show-btn8");
const showBtn9 = document.getElementById("show-btn9");
const showBtn10 = document.getElementById("show-btn10");
const showBtn11 = document.getElementById("show-btn11");
const showBtn12 = document.getElementById("show-btn12");

const question = document.getElementById("clue");
const answerHeading = document.getElementById("answer-heading");
const selectGuess = document.getElementById("guess");

function Character(
  name,
  src,
  shadow,
  emotion,
  skin,
  hair,
  nose,
  eyes,
  lips,
  facialHair,
  headWear,
  hide,
  show
) {
  this.name = name;
  this.src = src;
  this.shadow = shadow;
  this.emotion = emotion;
  this.skin = skin;
  this.hair = hair;
  this.nose = nose;
  this.eyes = eyes;
  this.lips = lips;
  this.facialHair = facialHair;
  this.headWear = headWear;
  this.hide = hide;
  this.show = show;

  Character.allCharactersArray.push(this);
}

Character.allCharactersArray = [];

new Character(
  "anita",
  "/images/anita.png",
  "/images/anita-shadow.png",
  "happy",
  "light",
  "light",
  "small",
  "blue",
  "small",
  false,
  true,
  "hide-btn1",
  "show-btn1"
);
new Character(
  "robert",
  "/images/robert.png",
  "/images/robert-shadow.png",
  "sad",
  "light",
  "dark",
  "big",
  "blue",
  "big",
  false,
  false,
  "hide-btn2",
  "show-btn2"
);
new Character(
  "george",
  "/images/george.png",
  "/images/george-shadow.png",
  "sad",
  "light",
  "light",
  "small",
  "brown",
  "big",
  false,
  true,
  "hide-btn3",
  "show-btn3"
);
new Character(
  "alex",
  "/images/alex.png",
  "/images/alex-shadow.png",
  "happy",
  "dark",
  "dark",
  "small",
  "brown",
  "big",
  true,
  false,
  "hide-btn4",
  "show-btn4"
);
new Character(
  "alfred",
  "/images/alfred.png",
  "/images/alfred-shadow.png",
  "happy",
  "light",
  "dark",
  "big",
  "blue",
  "small",
  true,
  false,
  "hide-btn5",
  "show-btn5"
);
new Character(
  "anne",
  "/images/anne.png",
  "/images/anne-shadow.png",
  "happy",
  "light",
  "dark",
  "big",
  "blue",
  "small",
  false,
  true,
  "hide-btn6",
  "show-btn6"
);
new Character(
  "bernard",
  "/images/bernard.png",
  "/images/bernard-shadow.png",
  "happy",
  "light",
  "dark",
  "big",
  "brown",
  "small",
  false,
  true,
  "hide-btn7",
  "show-btn7"
);
new Character(
  "bill",
  "/images/bill.png",
  "/images/bill-shadow.png",
  "happy",
  "light",
  "dark",
  "small",
  "blue",
  "small",
  true,
  false,
  "hide-btn8",
  "show-btn8"
);
new Character(
  "charles",
  "/images/charles.png",
  "/images/charles-shadow.png",
  "happy",
  "dark",
  "light",
  "small",
  "blue",
  "big",
  true,
  false,
  "hide-btn9",
  "show-btn9"
);
new Character(
  "claire",
  "/images/claire.png",
  "/images/claire-shadow.png",
  "happy",
  "light",
  "dark",
  "small",
  "blue",
  "small",
  false,
  true,
  "hide-btn10",
  "show-btn10"
);
new Character(
  "david",
  "/images/david.png",
  "/images/david-shadow.png",
  "happy",
  "light",
  "light",
  "small",
  "brown",
  "big",
  true,
  false,
  "hide-btn11",
  "show-btn11"
);
new Character(
  "eric",
  "/images/eric.png",
  "/images/eric-shadow.png",
  "happy",
  "light",
  "light",
  "small",
  "blue",
  "big",
  false,
  true,
  "hide-btn12",
  "show-btn12"
);

function getGuessWhoCharacter() {
  return Math.floor(Math.random() * Character.allCharactersArray.length);
}

const guessWho = getGuessWhoCharacter();

document.getElementById("question-btn").addEventListener("click", renderAnswer);

function renderAnswer() {
  if (question.value === "") {
    alert("Please select a question to ask!");
  } else if (question.value === "hair-color") {
    answerHeading.textContent = `The character has ${Character.allCharactersArray[guessWho].hair} hair`;
  } else if (question.value === "headwear") {
    answerHeading.textContent = `This is ${Character.allCharactersArray[guessWho].headWear}.`;
  }
}

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

const imgChar = document.getElementsByClassName("img-char");

function renderCharacter() {
  for (let i = 0; i < Character.allCharactersArray.length; i++) {
    let imgC = imgChar[i];
    imgC.src = Character.allCharactersArray[i].src;
    imgC.alt = Character.allCharactersArray[i].name;
  }
}

const imgName = document.getElementsByClassName("name-heading");

function renderName() {
  for (let i = 0; i < Character.allCharactersArray.length; i++) {
    imgName[i].textContent = `${Character.allCharactersArray[i].name}`;
  }
}

hideBtn1.addEventListener("click", hideCharacter);
hideBtn2.addEventListener("click", hideCharacter);
hideBtn3.addEventListener("click", hideCharacter);
hideBtn4.addEventListener("click", hideCharacter);
hideBtn5.addEventListener("click", hideCharacter);
hideBtn6.addEventListener("click", hideCharacter);
hideBtn7.addEventListener("click", hideCharacter);
hideBtn8.addEventListener("click", hideCharacter);
hideBtn9.addEventListener("click", hideCharacter);
hideBtn10.addEventListener("click", hideCharacter);
hideBtn11.addEventListener("click", hideCharacter);
hideBtn12.addEventListener("click", hideCharacter);

showBtn1.addEventListener("click", showCharacter);
showBtn2.addEventListener("click", showCharacter);
showBtn3.addEventListener("click", showCharacter);
showBtn4.addEventListener("click", showCharacter);
showBtn5.addEventListener("click", showCharacter);
showBtn6.addEventListener("click", showCharacter);
showBtn7.addEventListener("click", showCharacter);
showBtn8.addEventListener("click", showCharacter);
showBtn9.addEventListener("click", showCharacter);
showBtn10.addEventListener("click", showCharacter);
showBtn11.addEventListener("click", showCharacter);
showBtn12.addEventListener("click", showCharacter);

function hideCharacter(event) {
  let hideButton = event.target.id;
  for (let i = 0; i < Character.allCharactersArray.length; i++) {
    let imgC = imgChar[i];
    if (hideButton === Character.allCharactersArray[i].hide) {
      imgC.src = Character.allCharactersArray[i].shadow;
      break;
    }
  }
}

function showCharacter(event) {
  let showButton = event.target.id;
  for (let i = 0; i < Character.allCharactersArray.length; i++) {
    let imgC = imgChar[i];
    if (showButton === Character.allCharactersArray[i].show) {
      imgC.src = Character.allCharactersArray[i].src;
    }
  }
}

renderGuessInput();
renderCharacter();
renderName();
