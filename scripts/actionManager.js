


function ActionManager() {

    //this.checkAction = null; //delegte

    this.init = function () {
        //this.checkAction = AddCardToPile;
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

    this.checkAction = function (card) {//the onlu player card click action - add to pile
        //check if this is the correct player 
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
}
