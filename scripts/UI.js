function Game() {
    var m_Engine;

    this.initGame = function () {
        m_Engine = new GameEngine();
        m_Engine.initEngine();
        document.getElementById("menuWrapper").style.display = "none";
        document.getElementById("gameWrapper").style.display = "block";
        render();
    }

    function openPopUp() {

    }

    function renderPile() {

        document.getElementById("pile").innerHTML = "";
        var img = new Image();
        img.setAttribute("class", (m_Engine.getPile().getTopCardFromPile()).getAttributes());
        document.getElementById("pile").appendChild(img);
    }

    function renderDeck() {
        document.getElementById("deck").innerHTML = "";
        var deck = m_Engine.getDeck();
        var numOfLoops = deck.getCards().length ;
        
        for (var i = 0; i < numOfLoops; i++) {
            var img = new Image();
            img.setAttribute("class", "card " + "card_back " + "overLapCard");
            var top = i / 3;
            var left = i / 3;
            img.style.margin = top + "px " + left + "px";
            document.getElementById("deck").appendChild(img);
            document.getElementById("deck").addEventListener("click", deck_OnClick);
        }
    }

    function renderPlayers() {
        var players = m_Engine.getPlayers();

        renderPlayer(players[0], "bot");
        renderPlayer(players[1], "player");
    }

    function renderPlayer(player, playerDivName) {
        //create continer    
        document.getElementById(playerDivName).innerHTML = "";
        var playerDiv = document.getElementById(playerDivName);
        var numOfCards = player.getCards().length;
        var left = 0;

        for (var i = 0; i < numOfCards; i++) {
            var img = new Image();
            left += (80 / numOfCards);
            //img.style.marginTop= 0;
            img.style.marginLeft =  left + "%";
            img.setAttribute("class", player.getCards()[i].getAttributes() +" overLapCard");
            playerDiv.appendChild(img);
            document.getElementById(playerDivName).addEventListener("click", playerCard_OnClick);
        }
    }

    function render() {
        renderPile();
        renderDeck();
        renderPlayers();
    }


    function playerCard_OnClick(e) {

        alert(e.target);

        //var validAction = m_Engine.playerCard_OnClick(e.target);
        //alert(card.getId());
        
        if (validAction) {
            //addCardToPile();
            //checkForAction(); "changce color" --> color 
        }
        else {
            //displayInvalidAction();
        }
        
        render();
    }

    function deck_OnClick() {
        document.getElementById("deck").removeEventListener("click", deck_OnClick);
        m_Engine.deck_OnClick();
        render();
    }


}
