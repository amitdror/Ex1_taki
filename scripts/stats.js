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

