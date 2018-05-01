

function Pile() {
    var cards= [];
    var color;
    var cardId;

    this.init = function (deck) {
        var card = deck.getTopCardFromDeck();
        card.makeCardFaceUp();
        this.addCard(card);
    }

    this.addCard = function(card)
    {
        cards.push(card);
        color = card.getColor();
        cardId = card.getId();
    }

    this.getTopCardFromPile = function(){
        return cards[cards.length-1];
    }

    this.getTopCardId = function(){
        return cardId;
    }

    this.setTopCardId = function(newCardId){
        cardId = newCardId;
    }

    this.getTopCardColor = function(){
        return color;
    }

    this.setTopCardColor = function(newColor){
        color = newColor;
    }

    this.getPileCards = function(){
        return cards;
    }

}

