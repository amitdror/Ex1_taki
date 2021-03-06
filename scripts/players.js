var BOT_INDEX = 1;
var HUMAN_INDEX = 0;


function Players() {
    var currentPlayerIndex;
    var currentPlayer;
    var players = [];
    var numOfBot;
    var numOfHumans;
    var topPile;

    function createPlayer(deck, playerType) {
        var newPlayer = new Player(playerType);

        for (var i = 0; i < NUM_OF_STARTING_CARDS; i++) {
            var lastCard = deck.getTopCardFromDeck();
            newPlayer.addCard(lastCard);
        }
        newPlayer.init(topPile);
        players.push(newPlayer);
    }

    function createPlayers(deck, botNum, humansNum) {
        for (var i = 0; i < humansNum; i++) {
            createPlayer(deck, "human");
        }

        for (var i = 0; i < botNum; i++) {
            createPlayer(deck, "bot");
        }
    }

    this.init = function (deck,topPileCard, botNum, humansNum) {
        topPile = topPileCard;
        numOfBot = botNum;
        numOfHumans = humansNum;
        createPlayers(deck, botNum, humansNum);
        currentPlayer = players[HUMAN_INDEX]; // the first human player
        currentPlayerIndex = HUMAN_INDEX;
    }

    this.getPlayersArray = function () {
        return players;
    }

    this.isHuman = function () {
        var reuslt = currentPlayer.playerId === "human";
        return result;
    }

    this.getCurrentPlayer = function () {
        return currentPlayer;
    }
    
    this.nextPlayerTurn = function () {
        currentPlayer.endYourTurnFunc(); //end currPlayer turn

        currentPlayerIndex = (++currentPlayerIndex) % (numOfBot + numOfHumans);
        currentPlayer = players[currentPlayerIndex];

        currentPlayer.startYourTurnFunc();//start nextPlayar turn
    }

    this.jumpNextPlayerTurn = function(){
        currentPlayer.endYourTurnFunc(); //end currPlayer turn
        currentPlayerIndex = (currentPlayerIndex + 2) % (numOfBot + numOfHumans);
        currentPlayer = players[currentPlayerIndex];
        currentPlayer.startYourTurnFunc();//start nextPlayar turn
    }

    this.getCurrentPlayerIndex = function(){
        return currentPlayerIndex;
    }

}
