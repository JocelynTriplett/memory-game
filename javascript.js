let startButton = document.getElementById('startButton');
startButton.addEventListener('click', startGame, false);

// images for cards go here (2 of each).
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

// Shuffle cards function:
// stackoverflow.com/questions/2450954/how-to-randomize-shuffle-a-javascript-array

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
  let title = document.createTextNode("Memory");
  let headerContainer = document.createElement("div");
  headerContainer.classList.add("header");
  let turns = document.createElement("div");
  turns.classList.add("turns");
  let timer = document.createElement("div");

  header.appendChild(h1);
  h1.appendChild(title);
  header.appendChild(headerContainer);
  headerContainer.appendChild(turns);

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

function youWin(){
  document.getElementById("gameBoard").style.visibility = "hidden";

  // remove header items
  let header = document.getElementById('header');
  while (header.firstChild) {
    header.removeChild(header.firstChild);
  }
  // remove previous playAgain children
  playAgain = document.getElementById("playAgain");
  while (playAgain.firstChild) {
    playAgain.removeChild(playAgain.firstChild);
  }

  // build new playAgain screen
  playAgain.style.display = "";
  playAgain.style.visibility = "visible";
  youWonh1 = document.createElement("h1");
  youWon = document.createTextNode("You Won!");
  playAgainButton = document.createElement("button");
  playAgainButton.id = playAgainButton;
  playAgainButtonText = document.createTextNode("Play Again?");

  playAgain.appendChild(youWonh1);
  youWonh1.appendChild(youWon);
  playAgain.appendChild(playAgainButton);
  playAgainButton.appendChild(playAgainButtonText);

  playAgainButton.addEventListener('click', newGame, false);
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
      youWin();
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

  // only allow 2 flipped cards (excluding matches) at a time
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

function newGame(){
  document.getElementById("playAgain").style.visibility = "hidden";
  let gameBoard = document.getElementById("gameBoard");
  gameBoard.style.visibility = "visible";
  while (gameBoard.firstChild) {
    gameBoard.removeChild(gameBoard.firstChild);
  }
  let header = document.getElementById('header');
  while (header.firstChild) {
    header.removeChild(header.firstChild);
  }
  shuffle(cards);
  createGameBoard();
  takeTurn();
}

function startGame() {
  let welcome = document.getElementById("welcome");
  welcome.style.visibility = "hidden";
  welcome.style.display = "none";
  createGameBoard();
  takeTurn();
}
