
var cardID = ["1", "3", "4", "5", "6", "7", "8", "9"
, "stop", "taki", "change_colorful"];// adding 2plus before chanege color
var cardColor = ["red", "blue", "green", "yellow"];
var NUM_OF_CHANGE_COLOR_CARD = 4;
var NUM_OF_STARTING_CARDS = 8;

function Deck() {
    
    var cards =[];

    function createDeck() {
        for (var i = 0; i < cardColor.length; i++) {
            for (var j = 0; j < cardID.length - 1; j++) { // execept chang_color card
                var cardAtrribute = "card_" + cardID[j] + "_" + cardColor[i];
                var card1 = new Card(cardColor[i], cardID[j], cardAtrribute);// maybe we need 2 "new line"
                var card2 = new Card(cardColor[i], cardID[j], cardAtrribute);// maybe we need 2 "new line"
                cards.push(card1);
                cards.push(card2);
            }
        }
        for (var i = 0; i < NUM_OF_CHANGE_COLOR_CARD; i++) {
            var changeColorfulID = cardID[cardID.length - 1];
            var cardAtrribute = "card_" + changeColorfulID;
            var card = new Card(null, changeColorfulID, cardAtrribute)//CHANGE_COLOR
            cards.push(card);
        }
    }

    function shuffle() {
        for (var i = 0; i < cards.length; i++) {
            var rndNo = getRandomInt(0, cards.length-1);
            var card = cards[i];
            cards[i] = cards[rndNo];
            cards[rndNo] = card;
        }
    }

    function getRandomInt(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    this.init = function()
    {
        createDeck();
        shuffle();
    }

    this.getTopCard = function(){
        if(cards.length === 1){// last card
            //cards = getPile(); not exist yet
            shuffle();
        }
        return cards.pop();
    }

    this.getCards = function ()
    {
        return cards;
    }
}


