(function (){

    //The properties array
    var properties = {
        //IDs not included: 0000, 0010, 1010, 1000, 0007, 1008, 0400, 0002, 0710, 0700
        "0001": {
            colour: "brown",
            name: "holderName",
            price: 400,
            boughtFor: null, //This will be set if bought outright or if pruchased in auction
            rent: {
                0: 50,
                1: 200,
                2: 600,
                3: 1400,
                4: 1700,
                "hotel": 2000
            },
            owner: null,
            mortgageValue: 200,
            numberOfHouses: 0,
            hotelPurchased: false,
            ownAllOfColour: false,
            houseCost: 200,
            hotelCost: 200
        }
    };

    var players = []; //Where all the player info is stored
    var turn = 0; //Whose turn it is, based on their position in the players array
    var currentRoll;
    var rolledDouble = false;
    var numPlayers;
    var decidingOnProperty = false;

    document.addEventListener("DOMContentLoaded", init, false);

    
    var rollButton;
    
    //;;;Can be deleted
    /*
    var bankruptPlayerButton;
    var bankrupt = false;
    var rollEven = false;
    var rollOdd = false;
    var rollDouble = false;
    var giveJailCardButton;
    var evenRollButton;
    var oddRollButton;
    var doubleRollPressed;
    //;;;//
    */
    
    var useJailCardButton;
    var dontUseJailCardButton;
    var payFineButton;
    var attemptDoubleButton;
    var buyPropertyButton;
    var auctionPropertyButton;

    function init () {
        players.push(player(document.getElementById ("player1"), "player1"));
        players.push(player(document.getElementById ("player2"), "player2")); 
        players.push(player(document.getElementById ("player3"), "player3"));
        players.push(player(document.getElementById ("player4"), "player4"));
        numPlayers = players.length
        $("#player1").fadeOut();
        $("#player1").fadeIn();
        rollButton = document.getElementById("temp");
        /*
        //;;;Can be deleted
        bankruptPlayerButton = document.getElementById("bankruptButton");
        giveJailCardButton = document.getElementById("temp1");
        evenRollButton = document.getElementById("temp2");
        oddRollButton = document.getElementById("temp3");
        doubleRollButton = document.getElementById("temp4");
        //;;;//
        */
        useJailCardButton = document.getElementById("jYes");//...change HTML part as well
        dontUseJailCardButton = document.getElementById("jNo");
        payFineButton = document.getElementById("fine");
        attemptDoubleButton = document.getElementById("rd");
        buyPropertyButton = document.getElementById("buy");
        auctionPropertyButton = document.getElementById("auction");
        rollButton.addEventListener("click", normalRoll, false);
        /*
        //;;;Can be deleted
        bankruptPlayerButton.addEventListener("click", bankruptPlayerClicked, false);
        giveJailCardButton.addEventListener("click", giveJailCardPressed, false);
        evenRollButton.addEventListener("click", evenRollPressed, false);
        oddRollButton.addEventListener("click", oddRollPressed, false);
        doubleRollButton.addEventListener("click", doubleRollPressed, false);
        //;;;//
        */
        useJailCardButton.addEventListener("click", useJailCardClicked, false);
        dontUseJailCardButton.addEventListener("click", dontUseJailCardClicked, false);
        payFineButton.addEventListener("click", payFineClicked, false);
        attemptDoubleButton.addEventListener("click", attemptDoubleClicked, false);
        buyPropertyButton.addEventListener("click", buyPropertyClicked, false);
        auctionPropertyButton.addEventListener("click", auctionPropertyClicked, false);
    }

    /*
    //;;;
    function bankruptPlayerClicked() {
        bankrupt = true;
    }
    */

    async function diceFadeIn(num1, num2) {
        document.getElementById("temp").disabled = true;
        for(var x = 0; x <= 1; x += 0.1) {
            document.getElementById("dicePosition1").style.opacity = x;
            document.getElementById("dicePosition2").style.opacity = x;
            await sleep(100);
        }
    }

    async function diceFadeOut() {
        for(var i = 0.9; i >= 0; i -= 0.1) {
            document.getElementById("dicePosition1").style.opacity = i;
            document.getElementById("dicePosition2").style.opacity = i;
            await sleep(100);
        }
        if(!decidingOnProperty) {
            document.getElementById("temp").disabled = false;
            incrementTurn();
        }
    }

    function useJailCardClicked() {
        players[turn].jail.jailCard = false;
        document.getElementById("goojf").style.visibility = "hidden"; //...change goojf
        //Have to put jail card back and shuffle as well
        releaseFromJail();
        normalRoll();
    }

    function dontUseJailCardClicked() {
        jail();
    }

    function payFineClicked() {
        document.getElementById("goojfNo").style.visibility = "hidden";
        //Must take away from capital
        releaseFromJail();
        normalRoll();
    }

    async function attemptDoubleClicked() {
        document.getElementById("goojfNo").style.visibility = "hidden";
        var doubleAttempt = rollDice();
        if(rolledDouble) {
            currentRoll = doubleAttempt[0] + doubleAttempt[1];
            releaseFromJail();
            diceRolled();
        } else {
            await sleep(1000);
            diceFadeOut();
        }
    }

    function buyPropertyClicked() {
        document.getElementById("buyOrAuction").style.visibility = "hidden";
        buy(turn, players[turn].position);
        decidingOnProperty = false;
        document.getElementById("temp").disabled = false;
        incrementTurn();
    }

    function auctionPropertyClicked() {
        document.getElementById("buyOrAuction").style.visibility= "hidden";
        auction(players[turn].position);
    }

    function player(icon, nameTemp) {
        var player = {};
        player.id = icon;
        player.capital = 1500;
        player.name = nameTemp;
        player.position = "0000";
        player.double = false;
        player.doublesRolled = 0; //The number of doubles the player has rolled in a row
        player.assets = [];//{};
        player.jailCard = false;
        player.jail = {
            jailTag: false,
            jailRoll: 0,
            justReleased: false //Set to true if they have just been released from jail
        };
        player.colours = {
            "brown": 0,
            "lightBlue": 0,
            "pink": 0,
            "orange": 0,
            "red": 0,
            "green": 0,
            "blue": 0
        };
        return player;
    }

    function normalRoll() {
        var ro = rollDice(); //Temporary variable to get the two dice rolls
        currentRoll = ro[0] + ro[1];
        diceRolled();
    }

    /*
    //;;;
    function giveJailCardPressed() {
        for(var i = 0; i < 4; i++) {
            players[i].jailCard = true;
        }
    }
    
    function evenRollPressed() {
        rollEven = true;
        var even = rollDice();
        currentRoll = even[0] + even[1];
        diceRolled();
    }

    function oddRollPressed() {
        rollOdd = true;
        var odd = rollDice();
        currentRoll = odd[0] + odd[1];
        diceRolled();
    }

    function doubleRollPressed() {
        rollDouble = true;
        var doub = rollDice();
        currentRoll = doub[0] + doub[1];
        diceRolled();
    }
    //;;;//
    */

    async function diceRolled() {
        if(players[turn].jail.justReleased) {
            players[turn].jail.justReleased = false;
        }
        //Check for doubles
        if(rolledDouble) {
            players[turn].doublesRolled++
        } else {
            //They didn't roll a double so they don't get to roll again
            players[turn].doublesRolled = 0;
        }
            
        //Move the player
        if(players[turn].doublesRolled == 3) {
            placeInJail();
            await sleep(1000);
            diceFadeOut();
        } else {
            movePlayer(players[turn].id, currentRoll, turn);
        }
    }

    function incrementTurn() {
        //Only increment if the player didn't roll a double
        if(!rolledDouble) {
            if(turn == numPlayers - 1) {
                turn = 0;
            } else {
                turn++;
            }
        }
        
        //Check if player is in jail here so that if the player is in jail the prompt for either
        //using their jailCard if they have one or to pay fine or roll for a double is automatically
        //shown without them having to click anything
        if(players[turn].jail.jailTag) {
            checkForJailCard();
        } else {
            /*
            * Put a timer here maybe for the length of time theplayer has to roll until
            * it automatically does it for them
            */
        }
    }

    //The async keyword has to be used when the await() function is used
    async function movePlayer(playr, spacesToMove, turn) {
        //Gets first two numbers in the id
        var left = parseInt(players[turn].position.substring(0, 2));
        //Gets the last two numbers in the id
        var right = parseInt(players[turn].position.substring(2, 4));
        var newPosition; //The position they finish on
        //Deciding how the player's icon should move based on their position on the board
        while(spacesToMove > 0) {
            if(left == 0 && right < 10) {
                right++;
            } else if(right == 10 && left < 10) {
                left++;
            } else if(left == 10 && right > 0) {
                right--;
            } else if(right == 0 && left > 0) {
                left--;
            }
            //Getting the player's new position back into the "xxxx" format
            newPosition = positionHack(left, right);
            if(newPosition == "0000") {
                console.log("Player has passed go; collect 200");
            }
            spacesToMove--;
            //Placing the player's icon on the new tile
            document.getElementById(newPosition).appendChild(playr);
            //Waiting for half a second so it looks nicer
            await sleep(500);
        }

        //Updating player's position
        players[turn].position = newPosition;
        //Checking for what tile they land on, currently only says "This tile is x, etc", Sean
        //and Dave are working on that I believe
        checkTile(newPosition);
        diceFadeOut();
    }

    function checkTile(playerPos) {
        console.log(playerPos);
        if(playerPos == "0010" || playerPos == "0000") {
            //This is the jail tile, do nothing
        } else if(playerPos == "0007" || playerPos == "1008" || playerPos == "0400") {
            //Player has landed on chance card
            console.log("Draw chance card");
        } else if(playerPos == "0002" || playerPos == "0710" || playerPos == "0700") {
            //Player has landed on community chess
            console.log("Draw community chest card");
        } else if(playerPos == "1010") {
            //Player has landed on Free Parking
            console.log("Free Parking");
        } else if(playerPos == "1000") {
            //Player is sent to jail
            console.log("Player is sent to jail");
        } else { 
            isOwned(players[turn], playerPos);
        }
    }

    async function isOwned(playerObj, tileID) {
        //Checking if the tile landed on play 'playr' is owned or naw
        if(properties["0001"].owner == null) { //;;;just change "0001" to tileID
            decidingOnProperty = true;
            //Buy or Auction GUI visible
            await sleep(1200); //Have tp wait so the dice fade out and don't break the game
            document.getElementById("buyOrAuction").style.visibility = "visible";
        } else if(properties["0001"].owner != turn) {
            //console.log("You pay " + players[properties["0001"].owner].name + " 500");
            payRent(players[turn], players[properties["0001"].owner], tileID);
        }
    }

    function payRent(payee, payer, tileID) {
        //Must do error checking but this is just basic, Donnochadh is doing transactions
        var rentPrice;
        //;;;change all "0001" to tileID
        if(properties["0001"].hotelPurchased) {
            rentPrice = properties["0001"].rent["hotel"];
        } else {
            rentPrice = properties["0001"].rent[properties["0001"].numberOfHouses];
        }

        if(properties["0001"].ownAllOfColour) {
            rentPrice *= 2;
        }

        payer.capital -= rentPrice;
        payee.capital += rentPrice;
        console.log(payer.capital);
        console.log(payee.capital);
    }

    function buy(playerNumber, tileID) {
        //
        //addToPlayerAssets(playerObj, tileID);
        //payToBank(playerobj, tileID);
        players[turn].capital -= properties["0001"].price; //;;;Will be done properly by Donn
        properties["0001"].owner = playerNumber; //;;;change "0001";
        players[playerNumber].assets.push("0001");//;;;same here
        players[playerNumber].colours[properties["0001"].colour]++; //;;;same
    }

    function auction(propertyObj){
        console.log("heh, now Imma strawberry");
        /*
        //Ints
        var auctionPrice = 10;
        var amountBidded; //Button with amount bidded
        var pointerPlayer;
        //Booleans
        var isAuctionOn = true;
        //Setter when player withdraws to set ie to true.
        //Player is dequeued
        var isWithdrawn = false; 
        //var endTurn = false;
        //Queue
        var playerCount = new Queue;
        for (i=0; i<players.length; i++){
            playerCount.enqueue(players[i]);
            i++;
        }
        var j=0;
        while(isAuctionOn){
            if (j > playerCount.size){
                j = 0
            }
            pointerPlayer = playerCount[j];
            if(playerCount.size == 1){
                alert("You won the auction");
                //Pay auction price
                //Player buys property - Call function buy
                property.Owner = playerCount[pointerPlayer].player_id; //Property is given to player
                isAuctionOn = false;
                property.biddedPrice = auctionPrice;//amountBidded;
                buy(playerCount[pointerPlayer], propertyObj);
            }else if(isWithdrawn == true){
                alert("You withdrew from the auction");
                playerCount.dequeue();
            }else if(auctionPrice > playerCount.capital){
                alert("You have been withdrawn from the auction");
                playerCount.dequeue();
                //isWithdrawn = true;
            }else{
                if(auctionPrice > prop.Price){
                    alert("The price is above the original price!");
                }else{
                    if(amountBidded == 1){
                        auctionPrice ++;
                        //endTurn = true;
                        //playerCount.endTurn(playerCount.pointerPlayer);
                    }else if(amountBidded == 10){
                        auctionPrice += 10;
                        //endTurn = true;
                        //playerCount.endTurn(playerCount.player_id);
                    }else if(amountBidded == 100){
                        auctionPrice += 100;
                        //endTurn = true;
                        //playerCount.endTurn(playerCount.player_id);
                    }
                }
            }
            j++;
        }   
    }
    */
    }

    function placeInJail() {
        //Setting all the appropriate flags for being in jail. Must reset all the vairables to
        //do with rolling a double and the player being released
        players[turn].jail.jailTag = true;
        players[turn].position = "0010";
        players[turn].doublesRolled = 0;
        players[turn].double = false;
        //players[turn].jail.released = false;
        rolledDouble = false;
        //Putting the player in the jail tile (0010)
        document.getElementById(players[turn].position).appendChild(players[turn].id);
    }

    function checkForJailCard() {
        //This is done at the start of the player's round so they don't have to press anything to 
        //trigger the GUI to pop up
        if(players[turn].jailCard) {
            //If they do have a jailCard they will be asked if they want to use it. If they do,
            //the dice will be rolled automatically and they will be released from jail. They
            //won't be able to roll again if they get a double though. To pop the GUI, the Use
            //Jail Card HTML element needs to be set to visible and the Normal Roll button needs
            //to be disabled
            document.getElementById("goojf").style.visibility = "visible";
            document.getElementById("temp").disabled = false;
        } else {
            //If they don't have a jailCard then the normal jail procedure is run
            jail();
        }
    }

    function jail() {
        //The program comes here if they player is in jail and either doesn't have a jailCard or
        //chooses not to use it
        var jailTime = 3; //How many turns they can stay in jail
        var payOut = 50;
        var diceRollInJail;

        //Have to disable the Normal Roll button, as the dice roll will be controlled by the GUI
        document.getElementById("temp").disabled = true;
        //Increment the number of turns the player has been in jail immediately (before they roll)
        players[turn].jail.jailRoll++;

        //If they have been in jail for 3 turns, they cannot attempt to roll a double and the dice
        //is rolled for them automatically
        if(players[turn].jail.jailRoll == jailTime) {
            releaseFromJail();
            //Must add logic to check if player has enough capital
            players[turn].capital -= payOut;
            diceRollInJail = rollDice();
            rolledDouble = false; //Just in case they roll a double after 3 turns
            currentRoll = diceRollInJail[0] + diceRollInJail[1];
            console.log("Player pays the toll (50)");
            diceRolled();
        } else {
            //The Pay Fine or Attempt to Roll Double GUI will pop if the player hasn't been in
            //jail for 3 turns and have the option to either pay the fine to get out straight away
            //or to attempt to roll a double and get out for free. For the GUI to pop, the Jail
            //Card GUI must be set to invisible and the Fine or Double GUI must be set to visible

            document.getElementById("goojf").style.visibility = "hidden";
            document.getElementById("goojfNo").style.visibility = "visible";
        }
    }

    function releaseFromJail() {
        //This sets all the appropriate variables to what they should be if the player is released
        //from jail for whatever reason. rolledDouble must be set to false so they don't get to
        //roll again if they were released for rolling a double
        var reset = 0;

        players[turn].jail.jailTag = false;
        players[turn].jail.jailRoll = reset;
        players[turn].jail.justReleased = true;
        rolledDouble = false;
    }

    function positionHack(left, right) {
        //This is just the way to get the player's new position back to the "xxxx" format
        var leftFixed;
        var rightFixed;

        if(left < 10) {
            //If the player's position is less than 10 (the highest it can be), then you need to
            //convert it to a string and concatenate it to "0"
            leftFixed = "0".concat(left.toString());
        } else {
            //If it is not less than 10, then it has to be 10 as that is the highest number it can
            //be, so you simplyneed to convert that to a string
            leftFixed = left.toString();
        }

        if(right < 10) {
            //The same logic for converting the left part of the position
            rightFixed = "0".concat(right.toString());
        } else {
            rightFixed = right.toString();
        }

        //Then you just concatenate the right side onto the left side and return it
        return leftFixed.concat(rightFixed);
    }

    function sleep(ms) {
        //This is the way you make a JS program sleep
        return new Promise(resolve => setTimeout(resolve, ms));
    }

    function rollDice() {
        //This simulates the the two dice rolling, return two separate rolls in a list
        var num1 = Math.floor(Math.random() * 6) + 1;
        var num2 = Math.floor(Math.random() * 6) + 1;

        /*
        //;;;
        if(rollEven) {
            var h1 = [1, 3, 1, 2, 4, 5, 2, 3, 4];
            var h2 = [3, 1, 5, 4, 2, 1, 6, 5, 6];
            var t = Math.floor(Math.random() * 9);
            num1 = h1[t];
            num2 = h2[t];
            rollEven = false;
        } else if(rollOdd) {
            var a1 = [1, 2, 1, 2, 3, 4, 1, 2, 3, 4, 5, 6, 3, 4, 5, 6, 5, 6];
            var a2 = [2, 1, 4, 3, 2, 1, 6, 5, 4, 3, 2, 1, 6, 5, 4, 3, 6, 5];
            var s = Math.floor(Math.random() * 18);
            num1 = a1[s];
            num2 = a2[s];
            rollOdd = false;
        } else if(rollDouble) {
            //var z1 = [2, 3, 4, 5, 6];
            //var z = Math.floor(Math.random() * 5);
            num1 = 1;//z1[z];
            num2 = 1;//z1[z];
            rollDouble = false;
        }
        */

        //Checking to see if a double is rolled
        if(num1 == num2 & !players[turn].jail.justReleased) {
            rolledDouble = true;
        } else {
            rolledDouble = false;
        }

        //Placing the number that was rolled into the HTML dice
        document.getElementById("dicePosition1").innerHTML = num1;
        document.getElementById("dicePosition2").innerHTML = num2;
        diceFadeIn();

        return [num1, num2];
    }

    function takeFromCapital(amount, person) {
        //Takes 'amount' from the appropriate player (players[person])
        players[person].capital -= amount;
        if(players[person].capital > 0) {
            console.log("Player's capital: " + players[person].capital);
        } else if(players[person].capital <= 0) {
            players[person].capital = 0;
            console.log("Player is now bankrupt");
            /*
            * Probably call some function about cleaning up the player's variables
            */
        }
    }
})();