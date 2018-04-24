



var faceDownAttribute = "card_back";

function Card(eColor, eId, card_atrributes,actionCard) {
    //attributes[1] is the valid attribute
    var color = eColor;
    var id = eId;
    var cardAtrribute = card_atrributes;
    var isUp = false;
    var isActionCard = actionCard;
    var attributes = ["card", faceDownAttribute];

    this.makeCardFaceUp = function () {
        attributes[1] = cardAtrribute;
        isUp = true;
    }

    this.makeCardFaceDown = function () {
        attributes[1] = faceDownAttribute;
        isUp = false;
    }

    this.getAttributes = function () {
        var attributesStr = attributes[0] + " " + attributes[1];
        return attributesStr;
    }

    this.getColor = function(){
        return color;
    }

    this.getId = function(){
        return id;
    }

    this.isUp = function(){
        return isUp;
    }

    this.isActionCard = function(){
        return isActionCard;
    }
}

