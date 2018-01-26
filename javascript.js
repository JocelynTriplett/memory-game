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
    let faceImage = document.createElement("img");
    faceImage.setAttribute("src","assets/"+cards[i]);
    faces[i].appendChild(faceImage);
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
      let card = document.createElement("div");
      card.classList.add('card');let face = document.createElement("div");
      face.classList.add('face');
      face.style.display="none";
      row.appendChild(card);
      card.appendChild(face);
    }
  }
  deal(cards);
}




var myFunction = function() {
  var attribute = this.getAttribute("data-myattribute");
  alert(attribute);
};



function flipCard() {
  cardFace = this.querySelector(".face");
  cardFace.style.display = "flex";
}

function startGame() {
  document.getElementById("welcome").style.visibility = "hidden";
  createGameBoard();
  let hiddenCards = document.querySelectorAll('[style="display: none;"]');
  console.log(hiddenCards);
  for (var i = 0; i < hiddenCards.length; i++) {
    hiddenCards[i].parentElement.addEventListener('click', flipCard, false);
  }
}
