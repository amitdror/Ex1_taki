function Player(playerId) {

    var cards = [];
    var playerId = playerId; // human or bot (next ex change to int)
    var stats;
    var startYourTurn;//delegate
    var endYourTurn;//delegate

    function equalTwoCards(card1, card2) {///****need to check */
        var eq = JSON.stringify(card1) === JSON.stringify(card2) // checke defrence between === ^ == 
        return eq;
    }

    var startHumanTurn = function () {
        stats.startTurnTimer();
    }

    var startBotTurn = function () {
        stats.startTurnTimer();
    }

    var endHumanTurn = function() {
        if (cards.length === 1) {
            stats.incrementNumOfOneCard();
        }
        stats.endTurnTimer();
    }

    var endBotTurn = function() {
        if (cards.length === 1) {
            stats.incrementNumOfOneCard();
        }
        stats.endTurnTimer();
    }

    this.init = function () {
        stats = new Stats();
        stats.init();

        if (playerId === "human") {
            for (var i = 0; i < cards.length; i++) {
                cards[i].makeCardFaceUp();
            }
        }

        if (playerId === "human") {
            startYourTurn = startHumanTurn;
            endYourTurn = endHumanTurn;
        }
        else if (playerId === "bot") {
            startYourTurn = startBotTurn;
            endYourTurn = endBotTurn;
        }
    }


    this.addCard = function (card) {
        if (playerId === "human") {
            card.makeCardFaceUp();
        }
        cards.push(card);
    }


    this.removeCard = function (card) { ///****need to check 
        for (let i = 0; i < cards.length; i++) {
            if (equalTwoCards(cards[i], card)) // the card found
            {   
                cards.splice(i, 1);
                break;
            }
        }
    }


    this.removeCardByIndex = function (cardIndex) {
        cards.splice(cardIndex, 1);
    }

    this.getCards = function () {
        return cards;
    }

    this.getStats = function () {
        return stats;
    }

    this.getId = function(){
        return playerId;
    }
}