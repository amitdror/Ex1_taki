var NUM_OF_CHANGE_COLOR_CARD = 4;
var NUM_OF_STARTING_CARDS = 8;

function GameEngine() {

    var deck;
    var players;
    var pile;
    var currentPlayer = 1;
    var actionManager;

    //PUBLIC FUNCTIONS:
    this.initEngine = function (numberOfHuman, numberOfBots) {
        deck = new Deck();
        players = new Players();
        pile = new Pile();
        actionManager = new ActionManager();

        deck.init();
        pile.init(deck);
        players.init(deck,1,1); // 1 bot, 1 human
        actionManager.init();
    }

    function AddCardToPile(card) {

        var isValidAction = isValidCard(card)
        if (isValidAction) {
            pile.addCard(card);
            //currentPlayer = switch to other player
            if (card.IsActionCard()) {
                //2plus
                //taki --> currentPlayer = return to the old player
            }
        }
        return isValidAction;
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

    this.playerCard_OnClick = function (card) {
        var isValidAction = ActionManager.checkAction(card);
        
        if(isValidAction)
        {
            AddCardToPile()
        }
        //var isValidAction = checkAction_AddToPile(pile);
        // var isValidAction = ActionManager.CheckAction(card);

        // if(isValidAction)
        // {
        //     pile.addCard(card);

        //     if(card.IsActionCard()){

        //     }
        // }

        // return isValidAction;
    }
}
