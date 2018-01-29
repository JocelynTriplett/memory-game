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
  console.log(flippedCards);
  image1 = flippedCards[0].children[0].attributes[2].value;
  image2 = flippedCards[1].children[0].attributes[2].value;
  console.log("image1:"+image1);
  console.log("image2:"+image2);
  if (image1 === image2){
    console.log("they match!");
    flippedCards[0].classList.add('matched');
    flippedCards[1].classList.add('matched');
  }
  else {
    console.log("they don't match.");
    flippedCards[0].classList.remove('flipped');
    flippedCards[1].classList.remove('flipped');
  }
  takeTurn();
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

function startGame() {
  document.getElementById("welcome").style.visibility = "hidden";
  createGameBoard();
  takeTurn();
}
