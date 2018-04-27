function Player(playerId) {

    var cards = [];
    var playerId = playerId; // human or bot
    var avgTime = 0;
    var stats;
    //this.startYourTurn;
    //this.endYourTurn;

    this.addCard = function (card) {
        if (playerId === "human") {
            card.makeCardFaceUp();
        }
        cards.push(card);
        //this.endYourTurn();
    }

    this.removeCard = function (card) { ///****need to check */
        for (let i = 0; i < cards.length; i++) {
            if(equalTwoCards(cards[i],cards)) // the card found
            {
                cards.splice(i,1);
                break;
            }
        }
    }

    function equalTwoCards(card1, card2) {///****need to check */
        var eq = JSON.stringify(card1) === JSON.stringify(card2) // checke defrence between === ^ == 
        return eq;
    }

    this.init = function () {
        stats = new Stats();
        stats.init();
        
        if (playerId === "human") {
            for (var i = 0; i < cards.length; i++) {
                cards[i].makeCardFaceUp();
            }
        }
    }

    this.getCards = function () {
        return cards;
    }

    this.getStats = function(){
        return stats;
    }

}