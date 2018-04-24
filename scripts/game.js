var NUM_OF_CHANGE_COLOR_CARD = 4;
var NUM_OF_STARTING_CARDS = 8;

function GameEngine() {

    var deck;
    var players;
    var pile;
    var currentPlayer = 1;


    //PUBLIC FUNCTIONS:
    this.initEngine = function (numberOfHuman, numberOfBots) {
        deck = new Deck();
        players = new Players();
        pile = new Pile();

        deck.init();
        pile.init(deck);
        players.init(deck);
    }

    this.getPile = function () {
        return pile;
    }

    this.getPlayers = function () {
        return players.getPlayersArray();
    }

    this.equalTwoCards = function (card1, card2) {
        var eq = JSON.stringify(card1) === JSON.stringify(card2) // checke defrence between === ^ == 
        return eq;
    }

    this.deck_OnClick = function () {
        var topCard = deck.getTopCardFromDeck();
        players.getCurrentPlayer().addCard(topCard);
    }

    this.checkAction_AddToPile = function (card) {
        var isValidAction = false;
        var pileTopCard = pile.getTopCardFromPile();

        if (card.getColor() === pileTopCard.getColor() ||
            card.getId() === pile ||
            card.getId() === "change_colorful" ||
            pileTopCard.getid() === "change_colorful") {
            isValidAction = true;
        }

        return isValidAction;

    }

    this.playerCard_OnClick = function (card) {

        ActionManager.checkAciton();
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


function ActionManager() {

    this.checkAction = null; //delegte

    this.init = function () {
        this.checkAction = AddCardToPile;
    }

    function TakiState(card){

       // var playerCards = Players.getCurrentPlayer().getCards();
        //var isMoreCards = playerCards.ContainsColor(deck.getTopCardColor);

        var isMoreCards = players.getCurrentPlayer().isHoldCardColor(deck.getTopCardColor());

        var currPlayer =  players.getCurrentPlayer();
        var takiColor = deck.getTopCardColor();
        var isMoreCardsWithTakiColor = currPlayer.ContainsCardColor(takiColor);

        if(!isMoreCardsWithTakiColor){
            //currPlayer --> cahge to other player
            checkAciton = AddCardToPile();
        }


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

    function isValidCard(card) {

        var isValidAction = false;

        if (pile.getTopCardColor() === NO_COLOR ||
            card.getColor() === pile.getTopCardColor() ||
            card.getId() === pile.getTopCardId() ||
            card.getId() === "change_colorful" ||
            pile.getTopCardId() === "change_colorful") {
            isValidAction = true;
        }

        return isValidAction;
    }


}
