function Game() {
    var m_Engine; 

    function initPlayer(player, playerDivName){
        //create continer    
        document.getElementById(playerDivName).innerHTML = "";
        var cardContainer = document.createElement("div");
        cardContainer.setAttribute("class","container");
        document.getElementById(playerDivName).appendChild(cardContainer);


        for (var i = 0; i < player.getCards().length ; i++) {
            var img = new Image();
            img.setAttribute("class",player.getCards()[i].getAttributes());
            cardContainer.appendChild(img);
        }
    }

    this.initGame = function () {
        m_Engine = new GameEngine();
        m_Engine.initEngine();
        document.getElementById("menuWrapper").style.display = "none";
        document.getElementById("gameWrapper").style.display = "block";
        render();
    }

    function renderPile(){
        document.getElementById("pile").innerHTML = "";
        var img = new Image();
        img.setAttribute("class", (m_Engine.getPile().getTopCardFromPile()).getAttributes());/////////////////////////
        document.getElementById("pile").appendChild(img);   
    }

    function renderDeck(){
        document.getElementById("deck").innerHTML = "";
        var img = new Image();
        img.setAttribute("class", "card " + "card_back");
        document.getElementById("deck").appendChild(img);
        document.getElementById("deck").addEventListener("click", deck_OnClick);
    }


    function renderPlayers(){
        var players = m_Engine.getPlayers(); 
        
        initPlayer(players[0], "bot");
        initPlayer(players[1], "player");
    }
    
    function render()
    {
        renderPile();
        renderDeck();
        renderPlayers();
    }

    function playerCard_OnClick(e){
        var validAction = m_Engine.playerCard_OnClick(e.target);

        if(validAction){
            //addCardToPile();
            //checkForAction(); "changce color" --> color 
        }
        else{
            //displayInvalidAction();
        }

        render();
    }

    function deck_OnClick(){
        document.getElementById("deck").removeEventListener("click",deck_OnClick);
        m_Engine.deck_OnClick();
        render();
    }

   
}
