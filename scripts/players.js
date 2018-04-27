var BOT_INDEX = 0;
var HUMAN_INDEX = 1;


function Players() {
    var cuurentPlayerIndex;
    var currentPlayer;
    var players = [];
    var numOfBot;
    var numOfHumans;

    function createPlayer(deck, playerType) {

        var newPlayer = new Player(playerType);

        for (var i = 0; i < NUM_OF_STARTING_CARDS; i++) {
            var lastCard = deck.getTopCardFromDeck();
            newPlayer.addCard(lastCard);
        }
        newPlayer.init();
        players.push(newPlayer);
    }

    function createPlayers(deck, botNum, humansNum) {
        for (var i = 0; i < botNum; i++) {
            createPlayer(deck, "bot");
        }

        for (var i = 0; i < humansNum; i++) {
            createPlayer(deck, "human");
        }
    }

    this.init = function (deck, botNum, humansNum) {
        numOfBot = botNum;
        numOfHumans = humansNum;
        createPlayers(deck, botNum, humansNum);

        
        players[BOT_INDEX].startYourTurn = function () {
            currentPlayer = players[BOT_INDEX];
        }
        players[BOT_INDEX].endYourTurn = function () {

        }

        players[HUMAN_INDEX].startYourTurn = function () {
            currentPlayer = players[HUMAN_INDEX];
        }
        players[HUMAN_INDEX].endYourTurn = function () {

        }
        currentPlayerIndex = HUMAN_INDEX;
        currentPlayer = players[HUMAN_INDEX];
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
        currentPlayerIndex = (currentPlayerIndex++) % (numOfBot + numOfHumans);
        currentPlayer = players[currentPlayerIndex];
    }
}
