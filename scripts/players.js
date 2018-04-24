var BOT_INDEX = 0;
var HUMAN_INDEX = 1;


function Players() {

    var currentPlayer;
    var players= [];

    function createPlayer(deck, playerType) {

        var newPlayer = new Player(playerType);

        for (var i = 0; i < NUM_OF_STARTING_CARDS; i++) {
            var lastCard = deck.getTopCardFromDeck();
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
