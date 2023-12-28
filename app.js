document.addEventListener('DOMContentLoaded', () => {
    //list all card options
    const cardArray = [
      {
        name: 'fries',
        img: 'images/fries.png'
      },
      {
        name: 'cheeseburger',
        img: 'images/cheeseburger.png'
      },
      {
        name: 'ice-cream',
        img: 'images/ice-cream.png'
      },
      {
        name: 'pizza',
        img: 'images/pizza.png'
      },
      {
        name: 'milkshake',
        img: 'images/milkshake.png'
      },
      {
        name: 'hotdog',
        img: 'images/hotdog.png'
      },
      {
        name: 'fries',
        img: 'images/fries.png'
      },
      {
        name: 'cheeseburger',
        img: 'images/cheeseburger.png'
      },
      {
        name: 'ice-cream',
        img: 'images/ice-cream.png'
      },
      {
        name: 'pizza',
        img: 'images/pizza.png'
      },
      {
        name: 'milkshake',
        img: 'images/milkshake.png'
      },
      {
        name: 'hotdog',
        img: 'images/hotdog.png'
      }
    ]

//  start main functioning

cardArray.sort(()=>0.5 - Math.random());

const gridDisplay = document.querySelector('#grid');
const result = document.querySelector('#result');

let chosenItem = [];
let cardId = [];
let cardWon = [];

function createBoard () {
  for ( i = 0; i < cardArray.length; i++ ) {
    const image = document.createElement('img');
    image.setAttribute('src','images/blank.png');
    image.setAttribute('data-id', i);
    image.addEventListener('click', flipCard);
    gridDisplay.appendChild(image);
  }
}

createBoard();

function checkMatch () {
let allImages = document.querySelectorAll('#grid img');

let optionOne = cardId[0];
let optionaTwo = cardId[1]

  if (chosenItem[0] === chosenItem[1]) {
    alert('Items found match!');
    allImages[optionOne].setAttribute('src', 'images/white.png');
    allImages[optionaTwo].setAttribute('src', 'images/white.png');
    allImages[optionOne].removeEventListener('click', flipCard);
    allImages[optionaTwo].removeEventListener('click', flipCard);
    cardWon.push(chosenItem);
  } else{
    allImages[optionOne].setAttribute('src', 'images/blank.png');
    allImages[optionaTwo].setAttribute('src', 'images/blank.png');
    alert('Sorry, try again!')
  }
  cardId = [];
  chosenItem = [];
  result.textContent=cardWon.length;
  if (cardWon.length === cardArray.length/2) {
    result.textContent='Congratulations, you found them all!'
  }

}

function flipCard () {
   let id = this.getAttribute('data-id');
   cardId.push(id);
   chosenItem.push(cardArray[id].name)
   this.setAttribute('src', cardArray[id].img);

   if (cardId.length===2) {
    setTimeout(checkMatch, 500);
   }
}

});