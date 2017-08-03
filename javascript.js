// Shuffle cards function:
// stackoverflow.com/questions/2450954/how-to-randomize-shuffle-a-javascript-array

let cards = ["A","B","C","D","E","F","G","H","I","A","B","C","D","E","F","G","H","I"];

function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
}

shuffle(cards);

for (let i = 0; i < cards.length; i++) {
  let cardFaceValue = document.createTextNode(cards[i]);
  let cardFace = document.getElementById(i+"f");
  cardFace.appendChild(cardFaceValue);
  cardFace.style.display="none";
}

// Show/hide function found here:
// www.w3schools.com/howto/howto_js_toggle_hide_show.asp

let allCards = document.querySelectorAll('.card');

function showFace() {
    let face = this.getElementsByClassName("face");
    // console.log("this",this);
    // console.log("face[0]",face[0]);
    // console.log("face[0].style.display",face[0].style.display);
    if (face[0].style.display === 'none') {
        face[0].style.display = 'flex';
    } else {
        face[0].style.display = 'none';
    }
  }

  for (let i = 0; i < allCards.length; i++) {
    allCards[i].addEventListener('click', showFace, false);
  }
