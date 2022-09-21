// guessWho Local Storage script start

const guessWhoGamesPlayedEl = document.getElementById("guessWhoGamesPlayed-El");
const guessWhoGamesWonEl = document.getElementById("guessWhoGamesWon-El");

guessWhoGamesPlayedEl.textContent = 0;

let gwScore = [];

const getGWScoresFromLocalStorage = JSON.parse(
  localStorage.getItem("guessWhoScore")
);

if (getGWScoresFromLocalStorage) {
  gwScore = getGWScoresFromLocalStorage;
  guessWhoGamesPlayedEl.textContent = gwScore.length;
}

let guessWhoGamesWon = 0;

for (let i = 0; i < gwScore.length; i++) {
  if (gwScore[i].includes("win")) {
    guessWhoGamesWon++;
  }
}

guessWhoGamesWonEl.textContent = guessWhoGamesWon;

// guessWho Local Storage script end
