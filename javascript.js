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
let flippedCards = document.querySelectorAll('.face' && 'style.display[flex]');

console.log(flippedCards);

var test = document.querySelectorAll('input[value][type="checkbox"]:not([value=""])');

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
    flippedCards.push(this);

    if (flippedCards.length > 1) {
      for (let i = 0; i < allCards.length; i++) {
        allCards[i].removeEventListener('click', showFace, false);

        }
      setTimeout(matchCards,2000);
      for (let i = 0; i < allCards.length; i++) {
        allCards[i].addEventListener('click', showFace, false);

        }
    }

    function matchCards(){

      let face1 = flippedCards[0].getElementsByClassName("face");
      let face2 = flippedCards[1].getElementsByClassName("face");
      console.log(face1);
      console.log(face2);
      if (face1[0].textContent != face2[0].textContent) {
      face1[0].style.display = "none";
      face2[0].style.display = "none";
      flippedCards.shift();
      flippedCards.shift();
    }

    else {
    face1[0].matched = "yes";
    face2[0].matched = "yes";
    console.log(face1 + " matched!");
    console.log(face2 + " matched!");
    flippedCards.shift();
    flippedCards.shift();
    }
  }
}

  for (let i = 0; i < allCards.length; i++) {
    allCards[i].addEventListener('click', showFace, false);

    }
