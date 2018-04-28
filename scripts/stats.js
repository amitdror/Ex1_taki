function Stats() {

    var avgPlayingTimePerTurn = 0;
    var numOfOneCardOnly = 0;
    var numOfTurns = 0;
    var timePlaying = 0; // your turn only 
    var intervalTimerId;

    function timePlayingCounter() {
        timePlaying++;
    }

    this.init = function () {
        avgPlayingTimePerTurn = 0;
        numOfOneCardOnly = 0;
        numOfTurns = 0;
        timePlaying = 0;
        intervalTimerId = 0;
    }

    this.startTurnTimer = function () {
        intervalTimerId = setInterval(timePlayingCounter, 1000);
    }

    this.endTurnTimer = function () {
        clearInterval(intervalTimerId);
        numOfTurns++;
    }

    this.incrementNumOfOneCard= function(){
        numOfOneCardOnly++;
    }

    this.getAvgPlayTime = function () {
        avgPlayingTimePerTurn = timePlaying / numOfTurns;
        return avgPlayingTime;
    }
}

