import { Cah } from './Cah.js';

var MainPack = Cah[0];
var black_cards = MainPack.black;
var white_cards = MainPack.white;

console.log(MainPack.name);

// Generates the text from a random black card in the black box.
var BlackCards = black_cards[Math.floor(Math.random()*black_cards.length)];
console.log(`${BlackCards.text}`);
var black = document.getElementById("black");
black.addEventListener('click', black_random);

function black_random() {
    var BlackCards = black_cards[Math.floor(Math.random()*black_cards.length)];
    var master = document.getElementById('master');
    console.log(`${BlackCards.text}`);
    master.innerHTML = `<h1>${BlackCards.text}</h1>`;
}

// Adds a white card to your hand with a maximum limit of 7.
var the_hand = [];
var the_text = [];
var num = 0;

var white = document.getElementById("white");
white.addEventListener('click', white_random);

function white_random() {
    var random_w_card = white_cards[Math.floor(Math.random()*white_cards.length)];
    var WhiteCards = random_w_card.text;

    if(the_hand.length < 7){
        var hand = document.getElementById('hand');
        the_hand.push(hand.innerHTML += `<td id="hand_card ${num}" class="hand_card"><h3>${WhiteCards}<h3></td>`); 
        the_text.push(`${WhiteCards}`);
        num++;
        console.log(num);
    }
}

console.log(the_text);
console.log(the_hand);

// Removes a card and adds its text to the black box on click.
var user_card = document.getElementById("hand");
user_card.addEventListener('click', user_picks/* && computer_card*/);
function user_picks(e){
    // console.log(e);
    console.log(e.target);
    var the_card = e.target;

    var master_display = document.getElementById("display_row");
    master_display.innerHTML = `<tr><h3 id='display_card'>${e.target.innerText}</h3></tr>`;
    console.log(master_display.innerHTML);
    the_card.parentNode.removeChild(the_card);

    var random_w_card = white_cards[Math.floor(Math.random()*white_cards.length)];
    var WhiteCards = random_w_card.text;
    console.log(WhiteCards);
    display_row.innerHTML += `<td id="hand_card ${num}" class="hand_card"><h3>${WhiteCards}<h3></td>`;
}

// function computer_card() {
//     var random_w_card = white_cards[Math.floor(Math.random()*white_cards.length)];
//     var WhiteCards = random_w_card.text;
//     console.log(WhiteCards);
//     display.innerHTML += `<td id="hand_card ${num}" class="hand_card"><h3>${WhiteCards}<h3></td>`;
// }





// for(const card of foodWhiteCards) {
//     cards.innerHTML = card `<li>${card.text}</li>`
//     myArray[Math.floor(Math.random()*myArray.length)];
// }

// var pop = document.getElementById("pop")
// // var randomBlack_card = black_cards[Math.floor(Math.random()*black_cards.length)];
// pop.innerHTML = `<h2>${}`

//slice method to remove white cards.