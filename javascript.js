let startButton = document.getElementById('startButton');

startButton.addEventListener('click', startGame, false);

function createGameBoard(){
  let gameBoard = document.getElementById("gameBoard");
  for (let i = 0; i < 3; i++) {
    let row = document.createElement("div");
    row.classList.add('row');
    gameBoard.appendChild(row);
    for (let j = 0; j < 5; j++) {
      let card = document.createElement("div");
      card.classList.add('card');
      let cardText = document.createTextNode("this is a card!");
      row.appendChild(card);
      card.appendChild(cardText);
      console.log("created element")
    }
  }
}

function startGame() {
  document.getElementById("welcome").style.visibility = "hidden";
  createGameBoard();
}
