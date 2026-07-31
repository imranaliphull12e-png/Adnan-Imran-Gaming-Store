// JavaScript Start

console.log("Hello Imran");

alert("Welcome to 3 Brothers Gaming Buyer UAE");

const cards = document.querySelectorAll(".card");

cards.forEach(function(card) {
    card.addEventListener("click", function() {
        console.log("Card Clicked");
    });
});