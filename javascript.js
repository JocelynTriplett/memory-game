let startButton = document.getElementById('startButton');
startButton.addEventListener('click', startGame, false);

let cards =
["tile1.png","tile1.png",
"tile2.png","tile2.png",
"tile3.png","tile3.png",
"tile4.png","tile4.png",
"tile5.png","tile5.png",
"tile6.png","tile6.png",
"tile7.png","tile7.png",
"tile8.png","tile8.png",
"tile9.png","tile9.png"];

function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    var j = Math.floor(Math.random() * (i + 1));
    var temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }
}

shuffle(cards);

function deal(array){
  let faces = document.querySelectorAll( ".face" );
  for (let i = 0; i < array.length; i++) {
    faces[i].style.backgroundImage="url(assets/"+cards[i];
    faces[i].setAttribute("image",cards[i]);
  }
}

function createGameBoard(){
  let gameBoard = document.getElementById("gameBoard");

  // Create Header Items
  let header = document.getElementById("header");
  let h1 = document.createElement("h1");
  let title = document.createTextNode("Memory Game");
  let headerContainer = document.createElement("div");
  headerContainer.classList.add("header");
  let turns = document.createElement("div");
  turns.classList.add("turns");
  let timer = document.createElement("div");
  timer.classList.add("timer");
  timer.id = "timer";

  header.appendChild(h1);
  h1.appendChild(title);
  header.appendChild(headerContainer);
  headerContainer.appendChild(turns);
  headerContainer.appendChild(timer);

  // Create Cards
  for (let i = 0; i < 3; i++) {
    let row = document.createElement("div");
    row.classList.add('row');
    gameBoard.appendChild(row);
    for (let j = 0; j < 6; j++) {
      let container = document.createElement("div");
      container.classList.add('container');
      let card = document.createElement("div");
      card.classList.add('card');
      let face = document.createElement("div");
      face.classList.add('face');
      let back = document.createElement("div");
      back.classList.add('back');
      row.appendChild(container);
      container.appendChild(card);
      card.appendChild(face);
      card.appendChild(back);

    }
  }
  deal(cards);
}

function checkMatch(){
  let flippedCards = document.querySelectorAll('.flipped:not(.matched)');
  image1 = flippedCards[0].children[0].attributes[2].value;
  image2 = flippedCards[1].children[0].attributes[2].value;
  if (image1 === image2){
    flippedCards[0].classList.add('matched');
    flippedCards[1].classList.add('matched');
    let matched = document.querySelectorAll('.matched');
    if (matched.length == 18){
      console.log("You won!");
    }
    else {
    takeTurn();
    }
  }
  else {
    flippedCards[0].classList.remove('flipped');
    flippedCards[1].classList.remove('flipped');
    takeTurn();
  }

}

function flipCard() {
  let flippedCards = document.querySelectorAll('.flipped:not(.matched)');
  console.log(flippedCards.length);

  // only 2 flipped cards at a time
  if (flippedCards.length < 1){
    this.classList.add('flipped');
  }
  else if (flippedCards.length == 1){
    this.classList.add('flipped');
    setTimeout(checkMatch, 2000);
  }
  else {
    console.log("There are already two cards flipped!");
   }

  takeTurn();
}

function takeTurn(){
  let hiddenCards = document.querySelectorAll('.card:not(.flipped)');
  for (var i = 0; i < hiddenCards.length; i++) {
    hiddenCards[i].addEventListener('click', flipCard, false);
  }
}

function setTimerVar () {
  var timerVar = setInterval(countTimer, 1000);
}

var totalSeconds = 0;

function countTimer() {

  ++totalSeconds;
  var hour = Math.floor(totalSeconds /3600);
  var minute = Math.floor((totalSeconds - hour*3600)/60);
  var formattedMinutes = ("0" + minute).slice(-2);
  var seconds = totalSeconds - (hour*3600 + minute*60);
  var formattedSeconds = ("0" + seconds).slice(-2);
  timer = document.getElementById("timer");

  timer.innerHTML = "Time: " + formattedMinutes + ":" + formattedSeconds;
}

function startGame() {
  document.getElementById("welcome").style.visibility = "hidden";
  createGameBoard();
  setTimerVar();
  takeTurn();
}
