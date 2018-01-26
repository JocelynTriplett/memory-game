let startButton = document.getElementById('startButton');

startButton.addEventListener('click', startGame, false);

function startGame() {
  document.getElementById("welcome").style.visibility = "hidden"; //hide start screen
  let header = document.getElementById("header");
  let gameBoard = document.getElementById("gameBoard");
  let row = document.createElement("row");
  let card = document.createElement("card");
  let cardText = document.createTextNode("this is a card!");

  gameBoard.appendChild(row);
  row.appendChild(card);
  card.appendChild(cardText);


}
