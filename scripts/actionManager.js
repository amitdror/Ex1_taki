
var eGameState = { "normal": 0, "change_colorful": 1, "taki": 2, "stop": 3 };

function ActionManager(deck, pile) {


    this.deck = deck;
    this.pile = pile;
    var gameState = eGameState["normal"];
    var isValidCard = true;
    var isActionCard = true;


    this.isValidAction = function () {
        return isValidAction;
    }



    this.init = function () {
        //this.checkAction = AddCardToPile;
    }

    function TakiState(card) {

        // var playerCards = Players.getCurrentPlayer().getCards();
        //var isMoreCards = playerCards.ContainsColor(deck.getTopCardColor);

        var isMoreCards = players.getCurrentPlayer().isHoldCardColor(deck.getTopCardColor());

        var currPlayer = players.getCurrentPlayer();
        var takiColor = deck.getTopCardColor();
        var isMoreCardsWithTakiColor = currPlayer.ContainsCardColor(takiColor);

        if (!isMoreCardsWithTakiColor) {
            //currPlayer --> cahge to other player
            checkAciton = AddCardToPile();
        }
    }

    function checkValidCard(card) {

        var result = false;

        if (pile.getTopCardColor() === NO_COLOR ||
            card.getColor() === pile.getTopCardColor() ||
            card.getId() === pile.getTopCardId() ||
            card.getId() === "change_colorful" ||
            pile.getTopCardId() === "change_colorful") {

                result = true;
        }
        return result;
    }

    this.AddCardToPile = function (player, card) {

        isValidCard = checkValidCard(card);

        if (isValidCard) {
            pile.addCard(card);
            player.removeCard(card);

            isActionCard = card.isActionCard();

            if (isActionCard) {
                gameState = eGameState[card.getId()];
            }
        }
    }

    this.getGameResult = function () {

        var result = -1; //not added sign

        if (isValidCard) {
            result = eGameState["normal"];

            if (isActionCard) {
                result = gameState;
            }
        }

        return result;
    }


    this.setDefaultState = function () {
        gameState = eGameState["normal"];
        isValidCard = false;
        isActionCard = false;
    }

    this.getCurrentGameState = function(){
        return gameState;
    }
}
