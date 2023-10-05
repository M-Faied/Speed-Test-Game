const words = [
  "prestige",
  "Interestellar",
  "Inception",
  "Titanic",
  "Armangadon",
  "Avengers",
  "Mamento",
  "Tenet",
  "Oppenheimer",
  "Nun",
  "MoonFall",
  "World",
  "Sunshine",
  "Gravity",
  "Paradise",
  "SpiderMan",
  "Hulk",
  "Thor",
  "Core",
  "SkyScraper",
  "It",
];

const lvls = {
  Easy: 5,
  Normal: 3,
  Hard: 2,
};

let defaultLevelName = "Normal";
let defaultLevelSeconds = lvls[defaultLevelName];

let startButton = document.querySelector(".start");
let lvlNameSpan = document.querySelector(".message .lvl");
let lvlsecondsSpan = document.querySelector(".message .seconds");
let theWord = document.querySelector(".the-word");
let upComingWords = document.querySelector(".upcoming-words");
let input = document.querySelector(".input");
let timeLeftSpan = document.querySelector(".time span");
let scoreGot = document.querySelector(".score .got");
let scoreTotal = document.querySelector(".score .total");
let finishMessage = document.querySelector(".finish");

lvlNameSpan.innerHTML = defaultLevelName;
lvlsecondsSpan.innerHTML = defaultLevelSeconds;
timeLeftSpan.innerHTML = defaultLevelSeconds;
scoreTotal.innerHTML = words.length;

input.onpaste = function () {
  return false;
};

startButton.onclick = function () {
  this.remove();
  input.focus();
  getWords();
};

function getWords() {
  let randomWord = words[Math.floor(Math.random() * words.length)];
  let wordIndex = words.indexOf(randomWord);
  words.splice(wordIndex, 1);
  upComingWords.innerHTML = "";
  theWord.innerHTML = randomWord;
  for (i = 0; i < words.length; i++) {
    let div = document.createElement("div");
    let txt = document.createTextNode(words[i]);
    div.appendChild(txt);
    upComingWords.appendChild(div);
  }
  startPlay();
}

function startPlay() {
  timeLeftSpan.innerHTML = defaultLevelSeconds;
  let start = setInterval(() => {
    timeLeftSpan.innerHTML--;
    if (timeLeftSpan.innerHTML === "0") {
      clearInterval(start);
      if (input.value.toLowerCase() === theWord.innerHTML.toLowerCase()) {
        input.value = "";
        scoreGot.innerHTML++;
        if (words.length > 0) {
          getWords();
        } else {
          let span = document.createElement("span");
          let spanText = document.createTextNode("Congratulations!!!");
          span.className = "good";
          span.appendChild(spanText);
          finishMessage.appendChild(span);
        }
      } else {
        let span = document.createElement("span");
        span.className = "bad";
        let spanText = document.createTextNode("Game Over!!");
        span.appendChild(spanText);
        finishMessage.appendChild(span);
      }
    }
  }, 1000);
}
