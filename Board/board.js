(function (){

    //Code for defining Property Objects
var properties = {
    //Start of a coloured properties
    "0001":{
        colour: "brown",
        price: 60,
        name: "Brown 1",
        owner: null,
        mortgaged: false,
        houseValue: 50,
        boughtFor: null,
        numberOfHouses: 0,
        numberOfColours: 2,
        ownAllOfColour: false,
        rent : {
            0 : 2,
            1 : 10,
            2 : 30,
            3 : 90,
            4 : 160,
            5 : 250
        }
    },

    "0003":{
        colour: "brown",
        price: 60,
        name: "Brown 2",
        owner: null,
        mortgaged: false,
        houseValue: 50,
        boughtFor: null,
        numberOfHouses: 0,
        numberOfColours: 2,
        ownAllOfColour: false,
        rent : {
            0 : 4,
            1 : 20,
            2 : 60,
            3 : 180,
            4 : 320,
            5 : 450
        }
    },

    "0006":{
       colour: "light blue",
       price: 100,
       name: "Light Blue 1",
       owner: null,
       mortgaged: false,
       houseValue: 50,
       boughtFor: null,
       numberOfHouses: 0,
       numberOfColours: 3,
       ownAllOfColour: false,
       rent : {
           0 : 6,
           1 : 30,
           2 : 90,
           3 : 270,
           4 : 400,
           5 : 550
       }
    },

    "0008":{
        colour: "light blue",
        price: 100,
        name: "Light Blue 2",
        owner: null,
        mortgaged: false,
        houseValue: 50,
        boughtFor: null,
        numberOfHouses: 0,
        numberOfColours: 3,
        ownAllOfColour: false,
        rent : {
            0 : 6,
            1 : 30,
            2 : 90,
            3 : 270,
            4 : 400,
            5 : 550
        }
    },

    "0009":{
        colour: "light blue",
        price: 120,
        name: "Light Blue 3",
        owner: null,
        mortgaged: false,
        houseValue: 50,
        boughtFor: null,
        numberOfHouses: 0,
        numberOfColours: 3,
        ownAllOfColour: false,
        rent : {
            0 : 8,
            1 : 40,
            2 : 100,
            3 : 300,
            4 : 450,
            5 : 600
        }
    },

    "0110":{
        colour: "pink",
        price: 140,
        name: "Pink 1",
        owner: null,
        mortgaged: false,
        houseValue: 100,
        boughtFor: null,
        numberOfHouses: 0,
        numberOfColours: 3,
        ownAllOfColour: false,
        rent : {
            0 : 10,
            1 : 50,
            2 : 150,
            3 : 450,
            4 : 625,
            5 : 750
        }
    },

    "0310":{
        colour: "pink",
        price: 140,
        name: "Pink 2",
        owner: null,
        mortgaged: false,
        houseValue: 100,
        boughtFor: null,
        numberOfHouses: 0,
        numberOfColours: 3,
        ownAllOfColour: false,
        rent : {
            0 : 10,
            1 : 50,
            2 : 150,
            3 : 450,
            4 : 625,
            5 : 750
        }
    },

    "0410":{
        colour: "pink",
        price: 160,
        name: "Pink 3",
        owner: null,
        mortgaged: false,
        boughtFor: null,
        numberOfHouses: 0,
        numberOfColours: 3,
        ownAllOfColour: false,
        rent : {
            0 : 12,
            1 : 60,
            2 : 180,
            3 : 500,
            4 : 700,
            5 : 900
        }
    },

    "0610":{
        colour: "orange",
        price: 180,
        name: "Orange 1",
        owner: null,
        mortgaged: false,
        houseValue: 100,
        boughtFor: null,
        numberOfHouses: 0,
        numberOfColours: 3,
        ownAllOfColour: false,
        rent : {
            0 : 14,
            1 : 70,
            2 : 200,
            3 : 550,
            4 : 750,
            5 : 950
        }
    },

    "0810":{
        colour: "orange",
        price: 180,
        name: "Orange 2",
        owner: null,
        mortgaged: false,
        houseValue: 100,
        boughtFor: null,
        numberOfHouses: 0,
        numberOfColours: 3,
        ownAllOfColour: false,
        rent : {
            0 : 14,
            1 : 70,
            2 : 200,
            3 : 550,
            4 : 750,
            5 : 950
        }
    },

    "0910":{
        colour: "orange",
        price: 200,
        name: "Orange 3",
        owner: null,
        mortgaged: false,
        houseValue: 100,
        boughtFor: null,
        numberOfHouses: 0,
        numberOfColours: 3,
        ownAllOfColour: false,
        rent : {
            0 : 16,
            1 : 80,
            2 : 220,
            3 : 600,
            4 : 800,
            5 : 1000
        }
    },

    "1009":{
        colour: "red",
        price: 220,
        name: "Red 1",
        owner: null,
        mortgaged: false,
        houseValue: 150,
        boughtFor: null,
        numberOfHouses: 0,
        numberOfColours: 3,
        ownAllOfColour: false,
        rent : {
            0 : 18,
            1 : 90,
            2 : 250,
            3 : 700,
            4 : 875,
            5 : 1050
        }
    },

    "1007":{
        colour: "red",
        price: 220,
        name: "Red 2",
        owner: null,
        mortgaged: false,
        houseValue: 150,
        boughtFor: null,
        numberOfHouses: 0,
        numberOfColours: 3,
        ownAllOfColour: false,
        rent : {
            0 : 18,
            1 : 90,
            2 : 250,
            3 : 700,
            4 : 875,
            5 : 1050
        }
    },

    "1006":{
        colour: "red",
        price: 240,
        name: "Red 3",
        owner: null,
        mortgaged: false,
        houseValue: 150,
        boughtFor: null,
        numberOfHouses: 0,
        numberOfColours: 3,
        ownAllOfColour: false,
        rent : {
            0 : 20,
            1 : 100,
            2 : 350,
            3 : 750,
            4 : 925,
            5 : 1100
        }
    },
   
    "1004":{
        colour: "yellow",
        price: 260,
        name: "Yellow 1",
        owner: null,
        mortgaged: false,
        houseValue: 150,
        boughtFor: null,
        numberOfHouses: 0,
        numberOfColours: 3,
        ownAllOfColour: false,
        rent : {
            0 : 22,
            1 : 110,
            2 : 330,
            3 : 800,
            4 : 975,
            5 : 1150
        }
    },

    "1003":{
        colour: "yellow",
        price: 260,
        name: "Yellow 2",
        owner: null,
        mortgaged: false,
        houseValue: 150,
        boughtFor: null,
        numberOfHouses: 0,
        numberOfColours: 3,
        ownAllOfColour: false,
        rent : {
            0 : 22,
            1 : 110,
            2 : 330,
            3 : 800,
            4 : 975,
            5 : 1150
        }
    },

    "1001":{
        colour: "yellow",
        price: 280,
        name: "Yellow 3",
        owner: null,
        mortgaged: false,
        houseValue: 150,
        boughtFor: null,
        numberOfHouses: 0,
        numberOfColours: 3,
        ownAllOfColour: false,
        rent : {
            0 : 24,
            1 : 120,
            2 : 360,
            3 : 850,
            4 : 1025,
            5 : 1200
        }
    },

    "0900":{
        colour: "green",
        price: 300,
        name: "Green 1",
        owner: null,
        mortgaged: false,
        houseValue: 200,
        boughtFor: null,
        numberOfHouses: 0,
        numberOfColours: 3,
        ownAllOfColour: false,
        rent : {
            0 : 26,
            1 : 130,
            2 : 390,
            3 : 900,
            4 : 1100,
            5 : 1275
        }
    },

    "0800":{
        colour: "green",
        price: 300,
        name: "Green 2",
        owner: null,
        mortgaged: false,
        houseValue: 200,
        boughtFor: null,
        numberOfHouses: 0,
        numberOfColours: 3,
        ownAllOfColour: false,
        rent : {
            0 : 26,
            1 : 130,
            2 : 390,
            3 : 900,
            4 : 1100,
            5 : 1275
        }
    },

    "0600":{
        colour: "green",
        price: 320,
        name: "Green 3",
        owner: null,
        mortgaged: false,
        houseValue: 200,
        boughtFor: null,
        numberOfHouses: 0,
        numberOfColours: 3,
        ownAllOfColour: false,
        rent : {
            0 : 28,
            1 : 150,
            2 : 450,
            3 : 100,
            4 : 1200,
            5 : 1400
        }
    },

    "0300":{
        colour: "blue",
        price: 350,
        name: "Blue 1",
        owner: null,
        mortgaged: false,
        houseValue: 200,
        boughtFor: null,
        numberOfHouses: 0,
        numberOfColours: 2,
        ownAllOfColour: false,
        rent : {
            0 : 35,
            1 : 175,
            2 : 50,
            3 : 110,
            4 : 1300,
            5 : 1500
        }
    },

    "0100":{
        colour: "blue",
        price: 400,
        name: "Blue 2",
        owner: null,
        mortgaged: false,
        houseValue: 200,
        boughtFor: null,
        numberOfHouses: 0,
        numberOfColours: 2,
        ownAllOfColour: false,
        rent : {
            0 : 50,
            1 : 200,
            2 : 600,
            3 : 1400,
            4 : 1700,
            5 : 2000
        }
    },
    //End of all coloured properties
    
    //Start of Railroads

    //numberOfRailRoads is used to determine how many railroads the players have as we have no other way of accessing it
    "0005":{
        type: "railroad",
        price: 200,
        name: "Railroad 1",
        owner: null,
        mortgaged: false,
        boughtFor: null,
        numberOfRailRoads: 0,
        ownAllOfColour: false,
        rent : {
            1 : 25,
            2 : 50,
            3 : 100,
            4 : 200
        }
    },

    "0510":{
        type: "railroad",
        price: 200,
        name: "Railroad 2",
        owner: null,
        mortgaged: false,
        boughtFor: null,
        numberOfRailRoads: 0,
        ownAllOfColour: false,
        rent : {
            1 : 25,
            2 : 50,
            3 : 100,
            4 : 200
        }
    },

    "1005":{
        type: "railroad",
        price: 200,
        name: "Railroad 3",
        owner: null,
        mortgaged: false,
        boughtFor: null,
        numberOfRailRoads: 0, 
        ownAllOfColour: false,
        rent : {
            1 : 25,
            2 : 50,
            3 : 100,
            4 : 200
        }
    },

    "0500":{
        type: "railroad",
        price: 200,
        name: "Railroad 4",
        owner: null,
        mortgaged: false,
        boughtFor: null,
        numberOfRailRoads: 0,
        ownAllOfColour: false,
        rent : {
            1 : 25,
            2 : 50,
            3 : 100,
            4 : 200
        }
    },
    //End of Railroads

    //Start of Utilities
    "0210":{
        type: "utility",
        price: 150,
        name: "Utility 1",
        owner: null,
        mortgaged: false,
        boughtFor: null,
        numberOfUtilities: 0,
        ownAllOfColour: false,
        valueOfDiceRolled: null,//We can remove this from all utilities
        rent : {
            1 : 4,//(valueOfDiceRolled * 4),
            2 : 10//(valueOfDiceRolled * 10)
        }
    },

    "1002":{
        type: "utility",
        price: 150,
        name: "Utility 2",
        owner: null,
        mortgaged: false,
        boughtFor: null,
        numberOfUtilities: 0,
        ownAllOfColour: false,
        valueOfDiceRolled: null,
        rent : {
            1 : 4,//(valueOfDiceRolled * 4),
            2 : 10//(valueOfDiceRolled * 10)
        }
    }
    //End of Utilities
};

    var players = []; //Where all the player info is stored
    var turn = 0; //Whose turn it is, based on their position in the players array
    var currentRoll;
    var rolledDouble = false;
    var numPlayers;
    var decidingOnProperty = false;
    var currentAuction = [];
    var currentBidder;
    var currentBid;

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
    var bid1Button;
    var bid10Button;
    var bid100Button;
    var withdrawButton;

    function init () {
        players.push(player(document.getElementById ("player1"), "player1"));
        players.push(player(document.getElementById ("player2"), "player2")); 
        players.push(player(document.getElementById ("player3"), "player3"));
        players.push(player(document.getElementById ("player4"), "player4"));
        numPlayers = players.length;
        //$("#player1").fadeOut();
        //$("#player1").fadeIn();
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
        bid1Button = document.getElementById("1");
        bid10Button = document.getElementById("10");
        bid100Button = document.getElementById("100");
        withdrawButton = document.getElementById("withdraw");
        /*
        //;;;Can be deleted
        bankruptPlayerButton.addEventListener("click", bankruptPlayerClicked, false);
        giveJailCardButton.addEventListener("click", giveJailCardPressed, false);
        evenRollButton.addEventListener("click", evenRollPressed, false);
        oddRollButton.addEventListener("click", oddRollPressed, false);
        doubleRollButton.addEventListener("click", doubleRollPressed, false);
        //;;;//
        */
        rollButton.addEventListener("click", normalRoll, false);
        useJailCardButton.addEventListener("click", useJailCardClicked, false);
        dontUseJailCardButton.addEventListener("click", dontUseJailCardClicked, false);
        payFineButton.addEventListener("click", payFineClicked, false);
        attemptDoubleButton.addEventListener("click", attemptDoubleClicked, false);
        buyPropertyButton.addEventListener("click", buyPropertyClicked, false);
        auctionPropertyButton.addEventListener("click", auctionPropertyClicked, false);
        bid1Button.addEventListener("click", bid1Clicked, false);
        bid10Button.addEventListener("click", bid10Clicked, false);
        bid100Button.addEventListener("click", bid100Clicked, false);
        withdrawButton.addEventListener("click", withdrawClicked, false);
        //buy(0, "0001");//;;;
        //buy(0, "0003");//;;;
        //properties["0001"].numberOfHouses = 3;//;;;
        //properties["0003"].numberOfHouses = 4;//;;;
        //players[0].capital = 10;
        //properties["0001"].mortgaged = true;//;;;
        //buildHouses(players[0], "0001");//;;;
        //console.log(checkForNoMortgageInSet(players[0], "brown"));//;;;
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
        //Wipe the dictionary in case any palyers hvae been eliminated from the game
        //The first element of currentAuction is the number of players left
        //The second element is the tile to be auctioned
        currentAuction = [0, players[turn].position];
        currentBidder = turn+2;
        currentBid = 10; //Might eb set to something else but 10 for now anyway
        players[0].capital = 0;
        players[1].capital = 0;
        players[2].capital = 0;
        //players[3].capital = 0;
        for(var b = 0; b < players.length; b++) {
            //Putting all the players in the auction
            //The player's stillIn attribute will be set to false when they withdraw from the 
            //auction or they are kicked out
            var tempPlayer = players[b];
            if(tempPlayer.capital > currentBid) {
                currentAuction.push({player: tempPlayer, stillIn: true});
                currentAuction[0]++;
            } else {
                currentAuction.push({player: tempPlayer, stillIn: false});
            }
        }

        //Must be +2 to line up with the currentAuction list (cause the first two elements are 
        //taken)
        //Hiding and showing all appropriate GUIs
        document.getElementById("buyOrAuction").style.visibility = "hidden";
        document.getElementById("auctionWindow").style.visibility = "visible";
        document.getElementById("bidder").style.visibility = "visible";
        document.getElementById("currBid").innerHTML = "Current Bid: " + currentBid;
        document.getElementById("madeBid").innerHTML = "Current Bidder: ";
        //Auction checker controls the flow of auctions. Check that function for details
        checkAuctionAtStart();
        //auctionChecker();
    }

    function bid1Clicked() {
        //The player clicked the 'Bid 1' button
        auction(1);
    }

    function bid10Clicked() {
        //The player clicked the 'Bid 10' button
        auction(10);
    }

    function bid100Clicked() {
        //The player has clicked the 'Bid 100' button
        auction(100);
    }

    function withdrawClicked() {
        //The player has clicked the 'Withdraw' button
        auction(0);
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
        player.ownedTilesByColour = {
            "brown": [],
            "lightBlue": [],
            "pink": [],
            "orange": [],
            "red": [],
            "green": [],
            "blue": []
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
        } else if(playerPos == "0004" || playerPos == "0200") {
            console.log("Player pays a tax");
        } else { 
            isOwned(players[turn], playerPos);
        }
    }

    async function isOwned(playerObj, tileID) {
        //Checking if the tile landed on play 'playr' is owned or naw
        if(properties[tileID].owner == null) { //;;;just change "0001" to tileID
            decidingOnProperty = true;
            //Buy or Auction GUI visible
            await sleep(1200); //Have tp wait so the dice fade out and don't break the game
            document.getElementById("buyOrAuction").style.visibility = "visible";
        } else if(properties[tileID].owner != turn) {
            //console.log("You pay " + players[properties["0001"].owner].name + " 500");
            payRent(players[turn], players[properties[tileID].owner], tileID);
        }
    }

    function payRent(payer, payee, tileID) {
        //Must do error checking but this is just basic, Donnochadh is doing transactions
        var rentPrice = properties[tileID].rent[properties[tileID].numberOfHouses];

        payer.capital -= rentPrice;
        payee.capital += rentPrice;
        console.log(payee.capital);
        console.log(payer.capital);
    }

    function buy(playerNumber, tileID) {
        //
        //addToPlayerAssets(playerObj, tileID);
        //payToBank(playerobj, tileID);
        players[playerNumber].capital -= properties[tileID].price; //;;;Will be done properly by Donn
        properties[tileID].owner = playerNumber;
        players[playerNumber].assets.push(tileID);
        players[playerNumber].colours[properties[tileID].colour]++;
        players[playerNumber].ownedTilesByColour[properties[tileID].colour].push(tileID);
        console.log(players[playerNumber].name + " " + players[playerNumber].capital);
    }

    function checkAuctionAtStart() {
        var holder = currentBidder;
        findBidder();
        var tempA = currentBidder;
        findBidder();
        var tempB = currentBidder;
        if(tempA == tempB) {
            currentBidder = holder;
            findBidder();
            endAuction();
        } else {
            currentBidder = holder;
            if(currentAuction[currentBidder].stillIn == false) {
                findBidder();
            }
            auctionChecker();
        }
    }

    function auctionChecker() {
        //console.log("Now " + currentBidder);
        //This checks criteria for the auction, such as if the curretnt bidder has enough capital
        //or if there are still enough people in the auction
        if(currentAuction[0] > 1) {
            //Checking capital
            if(currentAuction[currentBidder].player.capital < currentBid) {
                withdrawFromAuction();
                //console.log("Here " + currentBidder);
                auctionChecker();
                //console.log("Here2 " + currentBidder + " " + currentAuction[5].stillIn);
            }
            document.getElementById("bidder").innerHTML = "Player " + (currentBidder-1);
        } else {
            endAuction();
        }
    }

    function endAuction() {
        //Need to change buy to add sending the cost of the auction
        buy(currentBidder-2, currentAuction[1]);
        document.getElementById("auctionWindow").style.visibility = "hidden";
        document.getElementById("bidder").style.visibility = "hidden";
        document.getElementById("temp").disabled = false;
        decidingOnProperty = false;
        incrementTurn();
    }

    function findBidder() {
        var numAuctioneers = currentAuction.length - 2;
        //Have to get to the next bidder straight away so it doesn't just stay as the current one
        if(currentBidder < currentAuction.length-1) {
            currentBidder++;
        } else {
            currentBidder = 2;
        }
        //This while loop checks if the player is still in the auction, stopping when it comes
        //to the first one that is
        while(numAuctioneers >= 0) {
            if(currentAuction[currentBidder].stillIn) {
                //Kinda cheating by just breaking out of the loop
                //console.log("..." + currentBidder);
                break;
            } else {
                if(currentBidder < currentAuction.length-1) {
                    currentBidder++;
                } else {
                    currentBidder = 2;
                }
            }
            numAuctioneers--;
        }
    }

    function withdrawFromAuction() {
        //Instead of removing them from the list, it simply sets their stillIn variable to false
        //console.log("gone " + currentBidder);
        currentAuction[currentBidder].stillIn = false;
        //The number of players still in the auction is held in the first element of teh array
        currentAuction[0]--;
        //console.log()
        findBidder();
    }

    function auction(buttonPressed){
        //The button can be them bidding 1, 10, or 100, or them withdrawing
        if(buttonPressed > 0) {
            //Need to error check here for capital
            currentBid += buttonPressed;
            //Just updating the GUI
            document.getElementById("currBid").innerHTML = "Current Bid: " + currentBid;
            document.getElementById("madeBid").innerHTML = "Current Bidder: " + currentAuction[currentBidder].player.name;
            findBidder();
        } else {
            //If buttonPressed is 0 the player has pressed the withdraw button
            withdrawFromAuction();
        }
        
        auctionChecker();
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

    function generalCollect(val, playerNum){
        players[playerNum].capital += val;
        console.log("Player's capital: "+ players[playerNum].capital);
        console.log("Added " + val + " to player's account");
    }

    function collectKitty(playerNum){
        var oldKitty = parkingKitty;
        if (parkingKitty > 0){
            players[playerNum].capital += parkingKitty;
            parkingKitty = 0;
            console.log("Added " + oldKitty + " to player's account");
        } else if (parkingKitty <= 0){
            console.log("There was no money to collect from the Kitty, soz :'( ");
        }
    }

    function kittyFine(playerNum, val){
        players[playerNum].capital -= val;
        parkingKitty += val;
        console.log("Player fined. Money added to Kitty")
    }

    function checkColourSetComplete(userObj, tileID){
        var maxNumOfProps = properties[tileID].numberOfColours;
        
        if(userObj.colours[properties[tileID].colour] == maxNumOfProps) {
            return true;
        } else {
            return false;
        }
        /*
        if(properties.colour == "brown" || properties.colour == "blue"){
            if(userObj.colour[0] == maxNumOfProps || userObj.colour[5] == maxNumOfProps){
                properties.ownAllOfColour = true;
            }
        }else if(properties.colour != "brown" || properties.colour != "blue"){
            for( i = 1; i <= 4; i++){
                if(userObj.colour[i] == maxNumOfProps){
                    properties.ownAllOfColour = true;
                }
            }
        }*/
    }

    function buildHouses(userObj, tileID){
        var costOfHouse = properties[tileID].houseValue;
        //var playersMoney = userObj.capital;
        var rentOfProp;
    
        //checkColourSetComplete(userObj, properties) //Checking if player owns all colours
    
        if(checkColourSetComplete(userObj, tileID) && checkForNoMortgageInSet(userObj, tileID) && checkNumHousesInSet(userObj, tileID)) {
            if(userObj.capital >= costOfHouse) {
                userObj.capital -= costOfHouse;
                properties[tileID].numberOfHouses++;
                if(properties[tileID].numberOfHouses == 5) {
                    console.log("The player has built a hotel on " + properties[tileID].name);
                } else {
                    console.log("The player has built a house on " + properties[tileID].name);
                    console.log("The player has " + properties[tileID].numberOfHouses + " houses here");
                }
            } else {
                console.log("Player does not have enough money to build house");
            }
        } else {
            console.log("player cannot place house here");
        }
        /*if(properties.mortgaged == false || properties.ownAllOfColour == true){
            if(playersMoney >= costOfHouse){
                if(numberOfHousesOnProp > 5){
                    playersMoney -= costOfHouse;
                    numberOfHousesOnProp += 1;
                    if(numberOfHousesOnProp == 5){
                        alert("Hotel built! Max number of houses built");
                    }
                }
            }
        }*/
    }

    function checkForNoMortgageInSet(playerObj, tileID) {
        var propColour = properties[tileID].colour;
        for(var i = 0; i < playerObj.colours[propColour]; i++) {
            if(properties[playerObj.ownedTilesByColour[propColour][i]].mortgaged) {
                return false;
            }
        }
        return true;
    }

    function checkNumHousesInSet(playerObj, tileID) {
        var propColour = properties[tileID].colour;
        for(var i = 0; i < playerObj.colours[propColour]; i++) {
            if(playerObj.ownedTilesByColour[propColour][i] == tileID) {
                continue;
            } else {
                if(properties[tileID].numberOfHouses > properties[playerObj.ownedTilesByColour[propColour][i]].numberOfHouses) {
                    return false;
                }
            }
        }
        return true;
    }

    function payRent(userObj, tileID){
        var numOfHouses = properties[tileID].numberOfHouses;
        var allColoursOwned = properties[tileID].ownAllOfColour;
        var capitalAvailable = userObj.capital;
        var rentDue;
    
        if(properties[tileID].type == "colour") {
            //If it's a normal property
            if(allColoursOwned) {
                rent = properties[tileID].rent[numOfHouses];
                if(numOfHouses == 0) {
                    //If all properties are owned, any undeveloped property in that monopoly has
                    //its rent doubled
                    rent *= 2;
                }
            }
        } /*else if(properties[tileID].type == "railroad") {
            rent = rentForRailRoadPerOwned(userObj, tileID);
        } else if(properties[tileID].type == "utilities") {
            rent = rentForUtilitiesPerOwned(userObj, tileID);
        }*/
        if(rent > capitalAvailable) {
            console.log("Allow to mortgage or bankrupt");
        } else {
            //Thsi is where transactions come into play
            userObj.capital -= rent;
            //Add to owners account
        }
        /*if(properties[tileID].type == "colour") {
            if(numOfHouses == 0 && allColoursOwned == true) {
                var colourRent = properties[tileID].rent[numOfHouses];
                var rentDoubled = colourRent * 2;
                if(rentDoubled > capitalAvailable){
                    //Allow to mortgage or bankrupt
                } else {
                    capitalAvailable -= rentDoubled;
                    //Add to owners account
                }
            } else if(numHouses > 0) {
                var rentWithHouse = properties[tileID].rent[numberOfHouses];
                if(rentWithHouse > capitalAvailable) {
                      //Allow to mortgage or bankrupt
                } else {
                    capitalAvailable -= rentWithHouse;
                    //Add to owners account
                }
            }
        } else if(properties.type == "railroad") {
            var rrRent = rentForRailRoadPerOwned(userObj, properties);
            if(rrRent > capitalAvailable){
                //Allow to mortgage or bankrupt
            } else {
              capitalAvailable -= rrRent;
              //Add to owners account
            }
        } else if(properties.type == "utilities") {
            var uRent = rentOfUtilitiesPerOwned(userObj, properties);
    
            if(uRent > capitalAvailable){
                //Allow to mortgage or bankrupt
            } else {
              capitalAvailable -= uRent;
              //Add to owners account
            }
        }*/
    }

    /*function rentForRailRoadPerOwned(userObj, tileID) {
        var railroadsOwned = properties[tileID].numberOfRailRoads
        var railroadRent;
            
        if(railroadsOwned == 1){
            railroadRent = properties.rent[0];
            return railroadRent;
    
        }else if(railroadsOwned == 2){
            railroadRent = properties.rent[1];
            return railroadRent;
    
        }else if(railroadsOwned == 3){
            railroadRent = properties.rent[2];
            return railroadRent;
            
        }else if(railroadsOwned == 4){
            railroadRent = properties.rent[3];
            return railroadRent;
        }
    }*/

    /*function rentOfUtilitiesPerOwned(valOfDice, tileID){
        var numOfUtils = properties[tileID].numberOfUtilities;
        //properties.valueOfDiceRolled = valOfDice;
        var rentOfUtil;
    
        if(numOfUtils == 1){
            rentOfUtil = properties[tileID].rent[0];
            //return rentOfUtil;
        }else if(numOfUtils == 2){
            rentOfUtil = properties[tileID].rent[1];
            //return rentOfUtil
        }
        return rentOfUtil * valOfDice;
    }*/

    function transactions(userObj,fee,kitty){
        if(fee < 0){
            userObj.capital += fee;
            kitty -= fee
        }else if (fee > 0){
            userObj.capital += fee;
        }
    }
})();