function Player(playerId) {

    var cards = [];
    var playerId = playerId; // human or bot
    var avgTime = 0;

    //this.startYourTurn;
    //this.endYourTurn;

    this.addCard = function (card) {
        if (playerId === "human") {
            card.makeCardFaceUp();
        }
        cards.push(card);
        //this.endYourTurn();
    }

    this.removeCard = function (card) {

    }

    this.init = function () {
        if (playerId === "human") {
            for (var i = 0; i < cards.length; i++) {
                cards[i].makeCardFaceUp();
            }
        }
    }

    this.getCards = function(){
        return cards;
    }


}