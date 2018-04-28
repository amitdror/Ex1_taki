var NUM_OF_CHANGE_COLOR_CARD = 4;
var NUM_OF_STARTING_CARDS = 8;

function GameEngine() {

    var deck;
    var players;
    var pile;
    var actionManager;

    //PUBLIC FUNCTIONS:
    this.initEngine = function (numberOfHuman, numberOfBots) {
        deck = new Deck();
        players = new Players();
        pile = new Pile();
        actionManager = new ActionManager(deck, pile);

        deck.init();
        pile.init(deck);
        players.init(deck,1,1); // 1 bot, 1 human
        actionManager.init();
    }


    this.getDeck = function(){
        return deck;
    }

    this.getPile = function () {
        return pile;
    }

    this.getPlayers = function () {
        return players.getPlayersArray();
    }

    this.getCurrentPlayer = function (){
        return players.getCurrentPlayer();
    }

    this.deck_OnClick = function () {
        var topCard = deck.getTopCardFromDeck();
        players.getCurrentPlayer().addCard(topCard);
    }
    

    //info:
    //-1 = falid
    // 0 = added card
    // 1 = change color
    // 2 = taki
    // 3 = stop 

    this.playerCard_OnClick = function (event) {
        
        var gameState = actionManager.getCurrentGameState();
        //start turn
        switch(gameState) 
        {
            case eGameState["normal"]:
                var cardIndex = event.target.id;
                var currPlayer = players.getCurrentPlayer();
                var card = currPlayer.getCards()[cardIndex];
                actionManager.AddCardToPile(currPlayer, card);
                break;
            case eGameState["change_colorful"]:
                var newPileColor = event.target.id;
                pile.setColor(newPileColor);
                actionManager.setDefaultState();
            case eGameState["taki"]:

                break;
            case eGameState["stop"]:
                
                break;
        }

        var turnResult = actionManager.getGameResult();

    
        if(turnResult != -1){ // success 
            var cardIndex = event.target.id;
            var card = players.getCurrentPlayer().removeCardByIndex(cardIndex);
        }
        else if(turnResult === eGameState["stop"]){
            //players.jumpNextPlayerTurn()
            actionManager.setDefaultState();
        }

        return turnResult;
    }

}
