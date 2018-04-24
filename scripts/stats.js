function Stats() {
    var elapsedTimeSinceStart = 0;
    var avgPlayingTime = 0;
    var numOfOneCardOnly = 0;
    var numOfTurns=0;
    var timePlaying=0; // your turn only 

    this.initStats() = function(){
        var seconds = setInterval(timer,1000);
    }

    this.timer = function () {
        elapsedTimeSinceStart++;
    }

    this.incrementNumOfTurns = function(){
        numOfTurns++;
    }

    this.incremetOneCardCounter = function(){
        numOfOneCardOnly++;
    }

}


/*
var myVar = setInterval(myTimer, 1000);

function myTimer() {
    var d = new Date();
    document.getElementById("demo").innerHTML = d.toLocaleTimeString();
}
*/

/*
var faceDownAttribute = "card_back";

function Card(eColor, eId, card_atrributes) {
    //attributes[1] is the valid attribute
    var color = eColor;
    var id = eId;
    var cardAtrribute = card_atrributes;
    var isUp = false;
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
}
*/