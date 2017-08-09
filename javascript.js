// Shuffle cards function:
// stackoverflow.com/questions/2450954/how-to-randomize-shuffle-a-javascript-array

// These load on page refresh:

// Code for timer:
// https://stackoverflow.com/questions/5517597/plain-count-up-timer-in-javascript


//document.getElementById("startClock").addEventListener("click", startTimer);

let beginningLives = ["heart.png", "heart.png","heart.png","heart.png","heart.png",];
var lives = [];
var hearts = "";
for (var i = 0; i < beginningLives.length; i++) {
  lives.push(beginningLives[i]);
}
for (var i = 0; i < lives.length; i++) {
  hearts += `<img src="assets/${lives[i]}" />       `
}
document.getElementById("lives").innerHTML = hearts;

// Card deck values:
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

// Shuffle cards:
function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    var j = Math.floor(Math.random() * (i + 1));
    var temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }
}

shuffle(cards);

// Insert new card values:

for (let i = 0; i < cards.length; i++) {
  let cardFaceImage = document.createElement("img");
  cardFaceImage.setAttribute("src","assets/"+cards[i]);
  let cardFace = document.getElementById(i+"f");
  let cardFaceText = document.createTextNode(cards[i]);
  cardFace.appendChild(cardFaceImage);
  cardFace.appendChild(cardFaceText);
  cardFace.style.display="none";
}

// Show/hide function found here:
// www.w3schools.com/howto/howto_js_toggle_hide_show.asp

let allCards = document.querySelectorAll('.card');

// QuerySelectorAll match on attribute value help here: https://stackoverflow.com/questions/10777684/how-to-use-queryselectorall-only-for-elements-that-have-a-specific-attribute-set
var flippedFaces = document.querySelectorAll('.face' && '[style="display: flex;"]');
var hiddenFaces = document.querySelectorAll('.face' && '[style= "display: none;"]');

var hiddenCards = [];
for (var i = 0; i < hiddenFaces.length; i++) {
  hiddenCards.push(hiddenFaces[i].parentElement);
}

var flippedCards = [];
for (var i = 0; i < flippedFaces.length; i++) {
  flippedCards.push(flippedFaces[i].parentElement);
}

hiddenCards[i].addEventListener('click', setTimerVar, false);

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

  document.getElementById("timer").innerHTML = "Time: " + formattedMinutes + ":" + formattedSeconds;
}
// console.log("hiddenCards: " + hiddenCards);
// console.log("flippedFaces: " + flippedFaces);
// console.log("hiddenFaces: " + hiddenFaces);
// console.log("hiddenCards: " + hiddenFaces.length);

//console.log(flippedCards);

function pauseBeforeFlip (x,y){
  console.log(x[0]);
  hearts = "";
  x[0].style.display = "none";
  y[0].style.display = "none";
  flippedCards.shift();
  flippedCards.shift();
  lives.shift();
  for (var i = 0; i < lives.length; i++) {

    hearts += `<img src="assets/${lives[i]}" />       `
  }
  document.getElementById("lives").innerHTML = hearts;
  if (lives.length == 0) {
    var modal = document.getElementById('lose');
    var span = document.getElementsByClassName("close")[0];
    modal.style.display = "block";
    span.onclick = function() {
      modal.style.display = "none";
    }
  }

  else {
    for (let i = 0; i < hiddenFaces.length; i++) {
      hiddenCards[i].addEventListener('click', playGame, false);
    }
  }
}

function playGame (){
  if (flippedCards.length < 2) {
    let face = this.getElementsByClassName("face");
    if (face[0].style.display === 'none') {
      face[0].style.display = 'flex';
    }
    flippedCards.push(this);

  }

  // console.log(flippedCards);
  if (flippedCards.length > 1) {
    for (let i = 0; i < allCards.length; i++) {
      allCards[i].removeEventListener('click', playGame, false);

    }


    let face1 = flippedCards[0].getElementsByClassName("face");
    let face2 = flippedCards[1].getElementsByClassName("face");
    console.log(face1);
    console.log(face2);
    if (face1[0].textContent != face2[0].textContent) {

      setTimeout(function() { pauseBeforeFlip(face1,face2); },2000);

    }

    else {
      face1[0].matched = "yes";
      face2[0].matched = "yes";
      console.log(face1 + " matched!");
      console.log(face2 + " matched!");
      flippedCards.shift();
      flippedCards.shift();
      console.log(hiddenFaces.length);
      console.log(hiddenCards.length);
      console.log(flippedCards.length);
      console.log(flippedFaces.length);
      let matched = document.querySelectorAll('[matched="yes"]')
      console.log(matched);
      if (hiddenFaces.length == 0) {
        var modal = document.getElementById('win');
        var span = document.getElementsByClassName("close")[0];
        modal.style.display = "block";
        span.onclick = function() {
          modal.style.display = "none";
        }
      }
      else {
        for (let i = 0; i < hiddenFaces.length; i++) {
          hiddenCards[i].addEventListener('click', playGame, false);
        }
      }

    }
  }

}


function clickCard () {
  for (let i = 0; i < hiddenFaces.length; i++) {
    hiddenCards[i].addEventListener('click', playGame, false);
  }
}


clickCard ();
