var BOT_INDEX = 0;
var HUMAN_INDEX = 1;


function Players() {

    var currentPlayer;
    var players= [];

    function createPlayer(deck, playerType) {

        var newPlayer = new Player(playerType);

        for (var i = 0; i < NUM_OF_STARTING_CARDS; i++) {
            var lastCard = deck.getTopCard();
            newPlayer.addCard(lastCard);
        }
        newPlayer.init();
        players.push(newPlayer); //players.push(player);
    }

    this.init = function (deck) {

        createPlayer(deck ,"bot"); //add wrapper function(numOfHumans, numOfBot)
        createPlayer(deck, "human");

        players[BOT_INDEX].startYourTurn = function () {
            
        }
        players[BOT_INDEX].endYourTurn = function () {

        }
    
        players[HUMAN_INDEX].startYourTurn = function () {
            
        }
        players[HUMAN_INDEX].endYourTurn = function () {

        }

        currentPlayer = players[HUMAN_INDEX];
    }

    this.getPlayersArray = function(){
        return players;
    }
   

    this.isHuman = function(){
        var reuslt =  currentPlayer.playerId === "human";
        return result;
    }
    this.getCurrentPlayer = function ()
    {
        return currentPlayer;
    }
}



function Player(playerId) {

    var cards = [];
    var playerId = playerId; // human or bot
    var avgTime = 0;

    //this.startYourTurn;
    //this.endYourTurn;

    this.addCard = function (card) {
        if (playerId === "human") {
            card.makeCardFaceUp();
        }
        cards.push(card);
        //this.endYourTurn();
    }

    this.removeCard = function (card) {

    }

    this.init = function () {
        if (playerId === "human") {
            for (var i = 0; i < cards.length; i++) {
                cards[i].makeCardFaceUp();
            }
        }
    }

    this.getCards = function(){
        return cards;
    }


}


/*
var BOT_INDEX = 0;
var HUMAN_INDEX = 1;


function Players() {

    var currentPlayer;
    var players= [];

    function createPlayer(deck, playerType) {

        var newPlayer = new Player(playerType);

        for (var i = 0; i < NUM_OF_STARTING_CARDS; i++) {
            var lastCard = deck.getTopCard();
            newPlayer.addCard(lastCard);
        }
       
        newPlayer.init();
        players.push(player);
    }

    this.init = function (deck) {

        createPlayer(deck ,"bot"); //add wrapper function(numOfHumans, numOfBot)
        createPlayer(deck, "human");

        players[BOT_INDEX].startYourTurn = function () {
            
        }
        players[BOT_INDEX].endYourTurn = function () {

        }
    
        players[HUMAN_INDEX].startYourTurn = function () {
            
        }
        players[HUMAN_INDEX].endYourTurn = function () {

        }

        currentPlayer = players[HUMAN_INDEX];
    }

    this.getPlayersArray = function(){
        return players;
    }
   

    this.isHuman = function(){
        var reuslt =  currentPlayer.playerId === "human";
        return result;
    }
}



function Player(playerId) {

    var cards = [];
    this.playerId = playerId; // human or bot
    this.avgTime = 0;

    this.startYourTurn;
    this.endYourTurn;

    this.addCard = function (card) {
        if (playerId === "human") {
            card.makeCardFaceUp();
        }
        cards.push(card);
        //this.endYourTurn();
    }

    this.removeCard = function (card) {

    }

    this.init = function () {
        if (playerId === "human") {
            for (var i = 0; i < cards.length; i++) {
                cards[i].makeCardFaceUp();
            }
        }
    }

    this.getCards = function(){
        return cards;
    }

}
*/