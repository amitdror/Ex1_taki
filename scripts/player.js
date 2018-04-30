function Player(playerId) {

    var cards = [];
    var playerId = playerId; // human or bot (next ex change to int)
    var stats;
    var startYourTurn;//delegate
    var endYourTurn;//delegate
    var topPileCard;

    function equalTwoCards(card1, card2) {
        //var eq = JSON.stringify(card1) === JSON.stringify(card2) // checke defrence between === ^ == 
        var isEqual = false;
        if(card1.getColor()===card2.getColor() && card1.getId()===card2.getId())
        {
            isEqual= true;
        }
        return isEqual;
    }

    var startHumanTurn = function () {
        stats.startTurnTimer();
    }

    var startBotTurn = function () {
        stats.startTurnTimer();
        /**start bot algorithm *///every click we make sure that it will be succes 
        var cardIndex;
        var elem;
        cardIndex = hasCard("change_colorful")
        if (cardIndex != -1) {// card found
            elem = document.getElementById(cardIndex);
            elem.click();
        }
        else {
            cardIndex = hasCard("stop")
            if (cardIndex != -1) {
                elem = document.getElementById(cardIndex);
                elem.click();
            }
            else {
                cardIndex = hasCard("taki")
                if (cardIndex != -1) {
                    elem = document.getElementById(cardIndex);
                    elem.click();
                } else {
                    for (var i = 0; i < cards.length; i++) {
                        if (cards[i].getColor() === topPileCard.getColor() || cards[i].getId() === topPileCard.getId()) {
                            cardIndex = i;
                            elem = document.getElementById(cardIndex);
                            elem.click();
                        }
                    }
                }
            }
            ////getCardFromDeck
            document.getElementById("deck").click();
        }
    }


    function hasCard(cardType) {
        var i;
        for (i = 0; i < cards.length; i++) {
            if ((cardType === cards[i].getId() && cards[i].getColor() === topPileCard.getColor())) {
                return i;
            }
            else if (cards[i].getId() === cardType) {
                return i;
            }
        }
        return -1;
    }
    var endHumanTurn = function () {
        if (cards.length === 1) {
            stats.incrementNumOfOneCard();
        }
        stats.endTurnTimer();
    }

    var endBotTurn = function () {
        if (cards.length === 1) {
            stats.incrementNumOfOneCard();
        }
        stats.endTurnTimer();
    }

    this.init = function (topPile) {
        topPileCard = topPile;
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


    this.removeCard = function (card) {
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

    this.getId = function () {
        return playerId;
    }
    this.setPileTopCard = function (card) {
        topPileCard = card;
    }

    this.startYourTurnFunc = function () {
        startYourTurn.call();
    }
    this.endYourTurnFunc = function () {
        endYourTurn.call();
    }
}
