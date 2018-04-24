
var NUM_OF_CHANGE_COLOR_CARD = 4;
var NUM_OF_STARTING_CARDS = 8;

function GameEngine() {

    var deck=[];
    var players;
    var pile = [];
    var currentPlayer = 1;

    function initPile() {
        var card = deck.getTopCard();
        card.makeCardFaceUp();
        pile.push(card);
    }
    
    //PUBLIC FUNCTIONS:
    this.initEngine = function (numberOfHuman, numberOfBots) {
        deck = new Deck();
        players = new Players();
        deck.init();
        initPile();
        players.init(deck);
    }

    this.getPile = function () {
        return pile;
    }

    this.getTopCardFromPile = function () {
        return pile[0];
    }

    this.getPlayers = function () {
        return players.getPlayersArray();
    }

    this.equalTwoCards = function (card1, card2) {
        var eq = JSON.stringify(card1) === JSON.stringify(card2) // checke defrence between === ^ == 
        return eq;
    }

    this.deck_OnClick = function(){
        var topCard = deck.getTopCard();
        players.getCurrentPlayer().addCard(topCard);
    }
}

