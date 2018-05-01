function Player(playerId) {

    var cards = [];
    var playerId = playerId; // human or bot (next ex change to int)
    var stats;
    var startYourTurn;//delegate
    var endYourTurn;//delegate
    var topPileCard;

    function equalTwoCards(card1, card2) {
        var isEqual = false;
        if (card1.getColor() === card2.getColor() && card1.getId() === card2.getId()) {
            isEqual = true;
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
        }
        else {
            cardIndex = hasCard("stop")
            if (cardIndex != -1) {
                elem = document.getElementById(cardIndex);
            }
            else {
                cardIndex = hasCard("taki")
                if (cardIndex != -1) {
                    elem = document.getElementById(cardIndex);
                } else {
                    for (var i = 0; i < cards.length; i++) {
                        if (cards[i].getColor() === topPileCard.getColor() || cards[i].getId() === topPileCard.getId()) {
                            cardIndex = i;
                            elem = document.getElementById(cardIndex);
                            break;
                        }
                    }
                }
            }
        }
        if (elem) {
            elem.click();
        }
        else {
            document.getElementById("deck").click();
        }
    }

    function hasCard(cardType) {
        switch (cardType) {

            case "change_colorful":
                for (var i = 0; i < cards.length; i++) {
                    if ((cardType === cards[i].getId())) {
                        return i;
                    }
                }
                return -1;
                break;
            case "stop":
                for (var i = 0; i < cards.length; i++) {
                    if ((cards[i].getId() === "stop" && topPileCard.getId() === "stop") ||
                        (cards[i].getColor() === topPileCard.getColor() && cards[i].getId() === "stop")) {
                        return i;
                    }
                }
                return -1;
                break;
            case "taki":
                for (var i = 0; i < cards.length; i++) {
                    if (("taki" === cards[i].getId() && cards[i].getColor() === topPileCard.getColor())) {
                        return i;
                    }
                }
                return -1;
                break;
        }
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

        if (playerId === "human" || playerId === "bot") {
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
        var x = card.getColor();
        var y = card.getId();
        topPileCard = card;
    }

    this.startYourTurnFunc = function () {
        startYourTurn.call();
    }
    this.endYourTurnFunc = function () {
        endYourTurn.call();
    }

}
