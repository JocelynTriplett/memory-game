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
}
