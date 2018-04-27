function Stats() {
    var elapsedTimeSinceStart = 0;
    var avgPlayingTime = 0;
    var numOfOneCardOnly = 0;
    var numOfTurns = 0;
    var timePlaying = 0; // your turn only 

    function timer() {
        elapsedTimeSinceStart++;
    }

    this.init = function () {
        var seconds = setInterval(timer, 1000);
    }

    this.incrementNumOfTurns = function () {
        numOfTurns++;
    }

    this.incremetOneCardCounter = function () {
        numOfOneCardOnly++;
    }
    this.getElspedTime = function () {
        return elapsedTimeSinceStart;
    }

    this.upadteTimePlaying = function (seconds) {
        timePlaying+=seconds;
    }

    this.getAvgPlayTime = function(){
        avgPlayingTime = timePlaying/numOfTurns;
        return avgPlayingTime;
    }

}

