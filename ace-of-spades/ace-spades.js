let suit = ["♠", "♦️", "♥️", "♣️"];
let card = ["2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K", "A"];

let deck = [];
let click = 0;
let maxClick = 5;
let score = 0;

function CardDeck(card, suit, clicks = 0) {
  this.card = card;
  this.suit = suit;
  this.click = clicks;

  CardDeck.allCardArray.push(this);
}

CardDeck.allCardArray = [];

function getRandomCard() {
  //   for (let i = 0; i < card.length; i++) {
  // }
}

function getRandomSuit() {
  for (let i = 0; i < suits.length; i++) {}
}

//   function getDeck()
// {
// 	let deck = new Array();

// 	for(let i = 0; i < suits.length; i++)
// 	{
// 		for(let x = 0; x < values.length; x++)
// 		{
// 			let card = {Value: values[x], Suit: suits[i]};
// 			deck.push(card);
// 		}
// 	}

// 	return deck;
// }
