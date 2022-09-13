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
  headWear
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
  true
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
  false
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
  true
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
  false
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
  false
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
  true
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
  true
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
  false
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
  false
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
  true
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
  false
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
  true
);

const imgChar = document.getElementsByClassName("img-char");

function renderCharacter() {
  for (let i = 0; i < Character.allCharactersArray.length; i++) {
    let imgC = imgChar[i];
    imgC.src = Character.allCharactersArray[i].src;
  }
}

renderCharacter();
// console.log(imgChar);
