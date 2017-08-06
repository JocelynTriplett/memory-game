// Shuffle cards function:
// stackoverflow.com/questions/2450954/how-to-randomize-shuffle-a-javascript-array

// These load on page refresh:

// Card deck values:
let cards = ["A","B","C","D","E","F","G","H","I","A","B","C","D","E","F","G","H","I"];

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
  let cardFaceValue = document.createTextNode(cards[i]);
  let cardFace = document.getElementById(i+"f");
  cardFace.appendChild(cardFaceValue);
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

// console.log("hiddenCards: " + hiddenCards);
// console.log("flippedFaces: " + flippedFaces);
// console.log("hiddenFaces: " + hiddenFaces);
// console.log("hiddenCards: " + hiddenFaces.length);

//console.log(flippedCards);

function pauseBeforeFlip (x,y){
  console.log(x[0]);
  x[0].style.display = "none";
  y[0].style.display = "none";
  flippedCards.shift();
  flippedCards.shift();
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


              let face1 = flippedCards[0].getElementsByClassName("face");
              let face2 = flippedCards[1].getElementsByClassName("face");
              console.log(face1);
              console.log(face2);
              if (face1[0].textContent != face2[0].textContent) {

                setTimeout(function() { pauseBeforeFlip(face1,face2); },5000);

                //setTimeout(function() { startTimer(parm1); }, startInterval);


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


function clickCard () {
for (let i = 0; i < hiddenFaces.length; i++) {
  hiddenCards[i].addEventListener('click', playGame, false);
  }
}

clickCard ();

// console.log(flippedCards);

//   for (let i = 0; i < hiddenCards.length; i++) {
//   hiddenCards[i].addEventListener('onClick', flipCard, false);
// }


//
// function showFace() {
//     let face = this.getElementsByClassName("face");
//     // console.log("this",this);
//     // console.log("face[0]",face[0]);
//     // console.log("face[0].style.display",face[0].style.display);
//     if (face[0].style.display === 'none') {
//         face[0].style.display = 'flex';
//     } else {
//         face[0].style.display = 'none';
//     }
//     flippedCards.push(this);
//
//     if (flippedCards.length > 1) {
//       for (let i = 0; i < allCards.length; i++) {
//         allCards[i].removeEventListener('click', showFace, false);
//
//         }
//       setTimeout(matchCards,2000);
//       for (let i = 0; i < allCards.length; i++) {
//         allCards[i].addEventListener('click', showFace, false);
//
//         }
//     }
//
//     function matchCards(){
//
//       let face1 = flippedCards[0].getElementsByClassName("face");
//       let face2 = flippedCards[1].getElementsByClassName("face");
//       console.log(face1);
//       console.log(face2);
//       if (face1[0].textContent != face2[0].textContent) {
//       face1[0].style.display = "none";
//       face2[0].style.display = "none";
//       flippedCards.shift();
//       flippedCards.shift();
//     }
//
//     else {
//     face1[0].matched = "yes";
//     face2[0].matched = "yes";
//     console.log(face1 + " matched!");
//     console.log(face2 + " matched!");
//     flippedCards.shift();
//     flippedCards.shift();
//     }
//   }
// }
//
  // for (let i = 0; i < allCards.length; i++) {
  //   allCards[i].addEventListener('click', showFace, false);
  //
  //   }
