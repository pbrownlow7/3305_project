(function (){
    /*
    * Version 2.5.2
    */
    //Code for defining Property Objects
var properties = {
    //Start of a coloured properties
    "0001":{
        type: "colour",
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
        type: "colour",
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
        type: "colour",
        colour: "lightblue",
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
        type: "colour",
        colour: "lightblue",
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
        type: "colour",
        colour: "lightblue",
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
        type: "colour",
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
        type: "colour",
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
        type: "colour",
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
        type: "colour",
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
        type: "colour",
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
        type: "colour",
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
        type: "colour",
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
        type: "colour",
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
        type: "colour",
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
        type: "colour",
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
        type: "colour",
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
        type: "colour",
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
        type: "colour",
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
        type: "colour",
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
        type: "colour",
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
        type: "colour",
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
        type: "colour",
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

    "0005":{
        type: "railroad",
        price: 200,
        name: "Railroad 1",
        owner: null,
        mortgaged: false,
        boughtFor: null,
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
        ownAllOfColour: false,
        rent : {
            1 : 4,
            2 : 10
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
        rent: {
            1 : 4,
            2 : 10
        }
    }
    //End of Utilities
};

var chanceArray = [
    {
    Name: "Get Out of Jail Free",
    Id: 6,
    },

    {
    Name: "Go directly to Jail. Do not pass Go, do not collect 200",
    Id: 8,
    },

    {
    Name: "Make general repairs on all your property. For each house pay 25. For each hotel 100",
    Id: 9,
    Amount: [25, 100] //25 is per house and 100 is per hotel
    },

    {
    Name: "Advance to nearest Travel Tile, paying owner twice the rent due. If Tile is unowned, you may buy it from the Bank",
    Id: 14
    },

    {
    Name: "Advance to nearest Travel Tile, paying owner twice the rent due. If Tile is unowned, you may buy it from the Bank",
    Id: 14,
    },

    {
    Name: "Move forward 3 spaces",
    Id: 15,
    },

    {
    Name: "Go Back 3 Spaces",
    Id: 16,
    },

    {
    Name: "Advance to the Western Gateway Building",
    Id: 17,
    Tile: "0100"
    },

    {
    Name: "Advance to Free Parking. If you pass Go, collect 200",
    Id: 17,//18,
    Tile: "1010"
    },

    {
    Name: "Advance to HillBillys. If you pass Go, collect 200",
    Id: 17,//19,
    Tile: "1006"
    },

    {
    Name: "Advance to Go (Collect 200)",
    Id: 17,//20,
    Tile: "0000"
    },

    {
    Name:"Advance to Castle White If you pass Go, collect 200",
    Id: 17,//21,
    Tile: "0110"
    },

    {
    Name: "Advance token to the nearest Utility.",
    Id: 22
    },
];

var communityChestArray = [
    {
      Name: "You are assessed for street repairs. 40 per house, 115 per hotel",
      Id: 9,
      Amount: [40, 115] //40 is per house and 115 is per hotel
    },

    {
        Name: "Bank error in your favor. Collect 200",
        Id: 1,
        Amount: 200
    },

    {
        Name: "Doctor's fees. Pay 50",
        Id: 2,
        Amount: 50
    },

    {
        Name:"From sale of stock you get 50",
        Id: 3,
        Amount: 50
    },
    {
        Name: "Grand Opera Night, Collect 50 from every player for opening night seats",
        Id: 4,
        Amount: 50
    },

    {
        Name: "Holiday Fund matures. Receive 100",
        Id: 5,
        Amount: 100
    },

    {
        Name: "Get Out of Jail Free",
        Id: 6,
    },

    {
        Name: "Income tax refund. Collect 25",
        Id: 7,
        Amount: 25
    },

    {
        Name: " Go directly to jail. Do not pass Go. Do not collect 200",
        Id: 8,
    },


    {
        Name: "It is your birthday Collect 10 from each player ",
        Id: 10,
        Amount: 10
    },

    {
        Name: "Life insurance matures Collect 100",
        Id: 11,
        Amount: 100
    },

    {
        Name: "Pay hospital fees of 100",
        Id: 12,
        Amount: 100
    },

    {
        Name: "Pay school fees of 150",
        Id: 13,
        Amount: 150
    }
];

function shuffles(array){
    /*
    * Shuffles either the chance deck or the community chance deck (whichever it is passed)
    */
    var i =0;
    var j = 0;
    var temp = null;
  
    for(i = array.length-1;i>0;i-=1){
        j = Math.floor(Math.random()*(i+1));
        temp=array[i];
        array[i]=array[j];
        array[j]=temp;
    }
}

function getChanceCard() {
    /*
    * Takes the chance card at the top of the deck and passes it to the chance animation function
    * (fadeCardOut)
    */
    var card = chanceArray.shift();
    chanceArray.push(card);
    fadeCardOut(card, "chanceCard");
}

function chance(playerPos, player, card){
    /*
    * This holds all the possible things that can be done via a chance card. 
    */

    if (card.Id == 6 ){
        setJailCard();
        decideOnNextPlayer();
    } else if (card.Id == 8){
        placeInJail();
    } else if (card.Id == 17) {
        //Advances player to appropriate tile
        advance(card.Tile, player);
    } else if(card.Id == 15){
        movePlayer(player, 3); // moves player forward 3 spaces
    } else if (card.Id == 16){
        moveBackwards(player, 3);
    } else if (card.Id == 9 ){
        // must calculate the amount of houses and hotels the player has.
        calcHouseHotels(card.Amount[0],card.Amount[1]); // calculates players houses and hotels
        decideOnNextPlayer();
    } else if (card.Id == 14) {
        doubleRentFromChance = true;
        var playersLeft = parseInt(playerPos.substring(0, 2));
        var playersRight = parseInt(playerPos.substring(2, 4));
        var spaces;
        if(playerPos == "0007") {
            spaces = distanceCalculator("0510", playerPos);
        } else if(playerPos == "1008") {
            spaces = distanceCalculator("1005", playerPos);
        } else if("0400") {
            spaces = distanceCalculator("0005", playerPos);
        }
        movePlayer(players[turn], spaces);
    } else if (card.Id == 22) {
        // advances player to nearest utility
        var shortest;
        var utilDist1 = distanceCalculator("0210", playerPos);
        var utilDist2 = distanceCalculator("1002", playerPos);
        if(utilDist1 < utilDist2) {
            shortest = utilDist1;
        } else {
            shortest = utilDist2;
        }

        movePlayer(player, shortest);
    }
}    

function setJailCard(){
    /*
    * Gives the player a Get Out Of Jail Card
    */
    players[turn].jailCard = true;
}

function calcHouseHotels(housePrice, hotelPrice) {
    /*
    * This is for the chance card that makes you pay for repairs. It checks how many houses and 
    * hotels you have and then creates a cost from this.
    */
    var houses = 0;
    var hotels = 0;
    var houseP = 0;
    var hotelP = 0;
    var cost;
    for (var i = 0; i < players[turn].assets.length; i++){
        // line below checks the current properties object for current players assets in which it can find number of houses
        if (properties[players[turn].assets[i]].numberOfHouses == 5){
            hotels += 1;
        } else {
            houses += properties[players[turn].assets[i]].numberOfHouses;
        }
    }
    houseP = houses * housePrice;
    hotelP = hotels * hotelPrice;
    cost = houseP + hotelP;
    //alert('Total Houses: '+houses +', Total Hotels: '+hotels + ', Total Repairs Cost: '+cost);
    //document.getElementById("endTurn").removeAttribute("disabled");
    //comChestFine(cost);
}

function advance(tile, playerObj){
    /*
    * This works with the chance cards that move the player forward. Must first calculate how
    * far the player has to travel
    */
    var spaces = distanceCalculator(tile, playerObj.position);
    movePlayer(playerObj, spaces);
    //document.getElementById(tile).appendChild(players[turn].id);
}

function getCommChestCard() {
    /*
    * Takes the community chest card at the top of the deck and passes it to the chance animation 
    * function (fadeCardOut)
    */
    var card = communityChestArray.shift(); // takes top card from array
    //var card = communityChestArray[12];
    communityChestArray.push(card);
    fadeCardOut(card, "commChestCard");
}

function communityChest(playerPos, player, card){
    /*
    * This holds all the possible things that can be done via a community chest card. 
    */
  
    if (card.Id == 6){
        setJailCard(); // player receives get out of jail free card
        decideOnNextPlayer();
    } else if (card.Id == 1 || card.Id == 3 || card.Id == 5 || card.Id == 7 || card.Id ==11) {
        // community chest rewarding players
        //alert(card.Name);
        comChestCollect(card.Amount); // collect reward
        decideOnNextPlayer();
    } else if(card.Id == 2 || card.Id == 12 || card.Id == 13){
        // community chest fining player players
        //alert(card.Name);
        comChestFine(card.Amount); // fined amount on card
        decideOnNextPlayer();
    } else if (card.Id == 8){
        //go to jail card drawn from community chest
        //alert(card.Name);
        placeInJail(); // place player in jail
    } else if (card.Id == 4 || card.Id == 10){
        // must collect certain amount from each player
        //alert(card.Name + ', Amount Credited: '+ card.Amount * (players.length -1));
        playerCollect(card.Amount); //collects amount stated on card from each player
        decideOnNextPlayer();
    } else if (card.Id == 9){
        // calculate the amount of houses and hotels player has
        //alert(card.Name);
        calcHouseHotels(card.Amount[0],card.Amount[1]); // calculates players houses and hotels
        decideOnNextPlayer();
    }
}

function comChestCollect(amount){
    /*
    * Used with the community chest cards that give the player money
    */
    players[turn].money += amount;
}

function comChestFine(amount){
    /*
    * Used with the community chest cards that take away from the player's money
    */
    players[turn].money -= amount;
    kitty += amount;
    //Checking if this has bankrupt them
    if(players[turn].money <= 0) {
        bankrupt(players[turn]);
    }
    document.getElementById("kitty").innerHTML = kitty;
}

function playerCollect(amount){
    /*
    * Collects amount from each player and adds to current player.
    */
    var collection = 0;
    for(var i = 0; i < players.length; i++){
        if(players[i] != players[turn]){
            players[i].money -= amount;
            collection += amount;
            //Checking if the player is bankrupt
            if(players[i].money <= 0) {
                bankrupt(players[i]);
            }
        }
    }
    players[turn].money += collection;
}

    var diceNumbers = {
        1: "images/dice1.png",
        2: "images/dice2.png",
        3: "images/dice3.png",
        4: "images/dice4.png",
        5: "images/dice5.png",
        6: "images/dice6.png"
    };

    var players = []; //Where all the player info is stored
    var turn = 0; //Whose turn it is, based on their position in the players array
    var currentRoll;
    var rolledDouble = false;
    var numPlayers;
    //var decidingOnProperty = false;
    var currentAuction = [];
    var currentBidder;
    var currentBid;
    var auctionStarter;
    var doubleRentFromChance = false;

    var walkSound;
    var diceSound;
    var jailDoorCloseSound;
    var buySound;
    var hammerSound;

    document.addEventListener("DOMContentLoaded", init, false);

    var endTurnButton;
    var endTurnAllowed = true;
    
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

    var canButton;
    var burrButton;
    var pastaButton;
    var coffButton;
    var contButton;
    var convButton;
    var pizzaButton;
    var bagButton;

    //Chance and commChest variables
    var diagonalFadeOut;
    var straightFadeOut;

    //House variables
    var qualifiedTiles = []; //Used for deciding which properties can be built on

    //For tax
    var kitty = 0;

    //For bankruptcy
    var numberOfAuctions;
    var currentlyBankrupting = false;
    var bankruptingPlayer; //For deciding whether their are more properties to auction off during a bankruptcy

    function init () {
        //Creating the main buttons button
        var buttonHolder = document.createElement("div");
        buttonHolder.id = "buttonHolder";
        buttonHolder.style.position = "absolute";
        buttonHolder.style.width = "220px";
        buttonHolder.style.height = "310px";
        buttonHolder.style.top = "35%";
        buttonHolder.style.right = "4%";
        buttonHolder.style.border = "5px solid black";
        buttonHolder.style.borderRadius = "10px";
        buttonHolder.style.backgroundColor = "#00001a";
        document.getElementById("body").appendChild(buttonHolder);

        var rollButton = document.createElement("button");
        rollButton.id = "rollDice";
        rollButton.innerHTML = "ROLL DICE";
        rollButton.style.top = "10px";
        rollButton.style.width = "200px";
        rollButton.style.height = "50px";
        rollButton.style.position = "absolute";
        rollButton.style.borderRadius = "10px";
        rollButton.style.backgroundColor = "#c2c2a3";//"#0099ff";
        rollButton.style.borderColor = "black";
        rollButton.style.left = "10px";
        rollButton.setAttribute("disabled", "disabled");
        rollButton.style.fontSize = "20px";
        rollButton.style.fontFamily = "bold";
        document.getElementById("buttonHolder").appendChild(rollButton);
        rollButton.addEventListener("click", normalRoll, false);

        var buyButton = document.createElement("button");
        buyButton.id = "buy";
        buyButton.innerHTML = "BUY";
        buyButton.style.top = "70px";
        buyButton.style.width = "200px";
        buyButton.style.height = "50px";
        buyButton.style.position = "absolute";
        buyButton.style.borderRadius = "10px";
        buyButton.style.backgroundColor = "#c2c2a3";//"#0099ff";
        buyButton.style.borderColor = "black";
        buyButton.style.left = "10px";
        buyButton.setAttribute("disabled", "disabled");
        buyButton.style.fontSize = "20px";
        buyButton.style.fontFamily = "bold";
        document.getElementById("buttonHolder").appendChild(buyButton);
        buyButton.addEventListener("click", buyPropertyClicked, false);

        var auctionButton = document.createElement("button");
        auctionButton.id = "auction";
        auctionButton.innerHTML = "AUCTION";
        auctionButton.style.top = "130px";
        auctionButton.style.width = "200px";
        auctionButton.style.height = "50px";
        auctionButton.style.position = "absolute";
        auctionButton.style.borderRadius = "10px";
        auctionButton.style.backgroundColor = "#c2c2a3";//"#0099ff";
        auctionButton.style.borderColor = "black";
        auctionButton.style.left = "10px";
        auctionButton.setAttribute("disabled", "disabled");
        auctionButton.style.fontSize = "20px";
        auctionButton.style.fontFamily = "bold";
        document.getElementById("buttonHolder").appendChild(auctionButton);
        auctionButton.addEventListener("click", setUpAuctionGUI, false);

        var buildHouseButton = document.createElement("button");
        buildHouseButton.id = "buildHouse";
        buildHouseButton.innerHTML = "BUILD HOUSE";
        buildHouseButton.style.top = "190px";
        buildHouseButton.style.width = "200px";
        buildHouseButton.style.height = "50px";
        buildHouseButton.style.position = "absolute";
        buildHouseButton.style.borderRadius = "10px";
        buildHouseButton.style.backgroundColor = "#c2c2a3";//"#0099ff";
        buildHouseButton.style.borderColor = "black";
        buildHouseButton.style.left = "10px";
        buildHouseButton.setAttribute("disabled", "disabled");
        buildHouseButton.style.fontSize = "20px";
        buildHouseButton.style.fontFamily = "bold";
        document.getElementById("buttonHolder").appendChild(buildHouseButton);
        buildHouseButton.addEventListener("click", showQualifiedProperties, false);

        var endTurnButton = document.createElement("button");
        endTurnButton.id = "endTurn";
        endTurnButton.innerHTML = "END TURN";
        endTurnButton.style.top = "250px";
        endTurnButton.style.width = "200px";
        endTurnButton.style.height = "50px";
        endTurnButton.style.position = "absolute";
        endTurnButton.style.borderRadius = "10px";
        endTurnButton.style.backgroundColor = "#c2c2a3";//"#0099ff";
        endTurnButton.style.borderColor = "black";
        endTurnButton.style.left = "10px";
        endTurnButton.setAttribute("disabled", "disabled");
        endTurnButton.style.fontSize = "20px";
        endTurnButton.style.fontFamily = "bold";
        document.getElementById("buttonHolder").appendChild(endTurnButton);
        endTurnButton.addEventListener("click", incrementTurn, false);

        var showMortgageButton = document.createElement("button");
        showMortgageButton.id = "showMortgageButton";
        showMortgageButton.innerHTML = "MORTGAGE PROPERTY";
        showMortgageButton.style.top = "320px";
        showMortgageButton.style.width = "200px";
        showMortgageButton.style.height = "50px";
        showMortgageButton.style.position = "absolute";
        showMortgageButton.style.borderRadius = "10px";
        showMortgageButton.style.backgroundColor = "#c2c2a3";//"#c2c2a3";//
        showMortgageButton.style.borderColor = "black";
        showMortgageButton.style.left = "10px";
        showMortgageButton.setAttribute("disabled", "disabled");
        showMortgageButton.style.fontSize = "20px";
        showMortgageButton.style.fontFamily = "bold";
        document.getElementById("buttonHolder").appendChild(showMortgageButton);
        showMortgageButton.addEventListener("click", showMortgageableProps, false);

        var tradeButton = document.createElement("button");
        tradeButton.id = "tradeButton";
        tradeButton.innerHTML = "TRADE";
        tradeButton.style.top = "390px";
        tradeButton.style.width = "200px";
        tradeButton.style.height = "50px";
        tradeButton.style.position = "absolute";
        tradeButton.style.borderRadius = "10px";
        tradeButton.style.backgroundColor = "#c2c2a3";
        tradeButton.style.borderColor = "black";
        tradeButton.style.left = "10px";
        tradeButton.setAttribute("disabled", "disabled");
        tradeButton.style.fontSize = "20px";
        tradeButton.style.fontFamily = "bold";
        document.getElementById("buttonHolder").appendChild(tradeButton);
        tradeButton.addEventListener("click", tradeClicked, false);
        //Finished creating the main buttons

        //Player icon selecion
        var iconHolder = document.createElement("div");
        iconHolder.id = "iconHolder";
        iconHolder.style.position = "absolute";
        iconHolder.style.width = "220px";
        iconHolder.style.height = "310px";
        iconHolder.style.top = "35%";
        iconHolder.style.left = "5%";
        iconHolder.style.border = "5px solid black";
        iconHolder.style.borderRadius = "10px";
        iconHolder.style.backgroundColor = "#00001a";
        document.getElementById("body").appendChild(iconHolder);

        var canButton = document.createElement("button");
        canButton.id = "can";
        canButton.style.width = "50px";
        canButton.style.height = "50px";
        canButton.style.position = "absolute";
        canButton.style.top = "10px";
        canButton.style.left = "40px";
        canButton.style.backgroundImage = "url('images/can.png')";
        canButton.style.backgroundSize = "47px 47px";
        canButton.style.borderRadius = "10px";
        document.getElementById("iconHolder").appendChild(canButton);
        canButton.addEventListener("click", canPlacement, false);

        var burritoButton = document.createElement("button");
        burritoButton.id = "burrito";
        burritoButton.style.width = "50px";
        burritoButton.style.height = "50px";
        burritoButton.style.position = "absolute";
        burritoButton.style.top = "10px";
        burritoButton.style.right = "40px";
        burritoButton.style.backgroundImage = "url('images/Burrito.png')";
        burritoButton.style.backgroundSize = "47px 47px";
        burritoButton.style.borderRadius = "10px";
        document.getElementById("iconHolder").appendChild(burritoButton);
        burritoButton.addEventListener("click", burritoPlacement, false);

        var pastaButton = document.createElement("button");
        pastaButton.id = "pasta";
        pastaButton.style.width = "50px";
        pastaButton.style.height = "50px";
        pastaButton.style.position = "absolute";
        pastaButton.style.top = "90px";
        pastaButton.style.left = "40px";
        pastaButton.style.backgroundImage = "url('images/pasta.png')";
        pastaButton.style.backgroundSize = "47px 47px";
        pastaButton.style.borderRadius = "10px";
        document.getElementById("iconHolder").appendChild(pastaButton);
        pastaButton.addEventListener("click", pastaPlacement, false);

        var coffeeButton = document.createElement("button");
        coffeeButton.id = "coffee";
        coffeeButton.style.width = "50px";
        coffeeButton.style.height = "50px";
        coffeeButton.style.position = "absolute";
        coffeeButton.style.top = "90px";
        coffeeButton.style.right = "40px";
        coffeeButton.style.backgroundImage = "url('images/Coffee.png')";
        coffeeButton.style.backgroundSize = "47px 47px";
        coffeeButton.style.borderRadius = "10px";
        document.getElementById("iconHolder").appendChild(coffeeButton);
        coffeeButton.addEventListener("click", coffeePlacement, false);
        
        var controllerButton = document.createElement("button");
        controllerButton.id = "controller";
        controllerButton.style.width = "50px";
        controllerButton.style.height = "50px";
        controllerButton.style.position = "absolute";
        controllerButton.style.top = "170px";
        controllerButton.style.left = "40px";
        controllerButton.style.backgroundImage = "url('images/controller.png')";
        controllerButton.style.backgroundSize = "47px 47px";
        controllerButton.style.borderRadius = "10px";
        document.getElementById("iconHolder").appendChild(controllerButton);
        controllerButton.addEventListener("click", controllerPlacement, false);

        var converseButton = document.createElement("button");
        converseButton.id = "converse";
        converseButton.style.width = "50px";
        converseButton.style.height = "50px";
        converseButton.style.position = "absolute";
        converseButton.style.top = "170px";
        converseButton.style.right = "40px";
        converseButton.style.backgroundImage = "url('images/shoes.png')";
        converseButton.style.backgroundSize = "47px 47px";
        converseButton.style.borderRadius = "10px";
        document.getElementById("iconHolder").appendChild(converseButton);
        converseButton.addEventListener("click", conversePlacement, false);

        var pizzaButton = document.createElement("button");
        pizzaButton.id = "pizza";
        pizzaButton.style.width = "50px";
        pizzaButton.style.height = "50px";
        pizzaButton.style.position = "absolute";
        pizzaButton.style.top = "250px";
        pizzaButton.style.left = "40px";
        pizzaButton.style.backgroundImage = "url('images/pizza.png')";
        pizzaButton.style.backgroundSize = "47px 47px";
        pizzaButton.style.borderRadius = "10px";
        document.getElementById("iconHolder").appendChild(pizzaButton);
        pizzaButton.addEventListener("click", pizzaPlacement, false);

        var bagButton = document.createElement("button");
        bagButton.id = "bagOfCans";
        bagButton.style.width = "50px";
        bagButton.style.height = "50px";
        bagButton.style.position = "absolute";
        bagButton.style.top = "250px";
        bagButton.style.right = "40px";
        bagButton.style.backgroundImage = "url('images/bag.png')";
        bagButton.style.backgroundSize = "47px 47px";
        bagButton.style.borderRadius = "10px";
        document.getElementById("iconHolder").appendChild(bagButton);
        bagButton.addEventListener("click", bagPlacement, false);
        //Finished icon selection

        //Placing the chance and community chest cards
        diagonalFadeOut = true;
        straightFadeOut = true;

        //This is the orange chance card on the board
        var chanceDiv = document.createElement("div");
        chanceDiv.id = "chanceCard";
        chanceDiv.style.backgroundColor = "orange";
        chanceDiv.style.height = "90px";
        chanceDiv.style.width = "140px";
        chanceDiv.style.position = "absolute";
        chanceDiv.style.top = "150px";
        chanceDiv.style.left = "445px";
        chanceDiv.style.borderRadius = "10px";
        chanceDiv.style.transform = "rotate(-46deg)";
        chanceDiv.style.opacity = "1.0";
        document.getElementById("body").appendChild(chanceDiv);

        //This is the actual word 'chance' on the chance card
        var chanceP = document.createElement("p");
        chanceP.innerHTML = "CHANCE";
        chanceP.id = "chanceP";
        chanceP.style.position = "absolute";
        chanceP.style.top = "25%";
        chanceP.style.left = "25%";
        document.getElementById("chanceCard").appendChild(chanceP);

        //This is the blue community chest card on the board
        var commChestDiv = document.createElement("div");
        commChestDiv.id = "commChestCard";
        commChestDiv.style.backgroundColor = "blue";
        commChestDiv.style.height = "90px";
        commChestDiv.style.width = "140px";
        commChestDiv.style.top = "475px";
        commChestDiv.style.right = "445px";

        commChestDiv.style.left = "";

        commChestDiv.style.position = "absolute";
        commChestDiv.style.borderRadius = "10px";
        commChestDiv.style.transform = "rotate(-46deg)";
        commChestDiv.style.opacity = "1.0";
        document.getElementById("body").appendChild(commChestDiv);

        //This is the actual words 'community chest' on the card
        var commChestP = document.createElement("p");
        var commChestP2 = document.createElement("p");
        commChestP.innerHTML = "COMMUNITY";
        commChestP.id = "commChestP";
        commChestP.style.position = "absolute";
        commChestP.style.top = "13%";
        commChestP.style.left = "16%";
        commChestP2.innerHTML = "CHEST";
        commChestP2.id = "commChestP2";
        commChestP2.style.position = "absolute";
        commChestP2.style.top = "38%";
        commChestP2.style.left = "32%";
        document.getElementById("commChestCard").appendChild(commChestP);
        document.getElementById("commChestCard").appendChild(commChestP2);


        players.push(createPlayer("Player 1"));
        players.push(createPlayer("Player 2"));
        players.push(createPlayer("Player 3"));
        players.push(createPlayer("Player 4"));
        numPlayers = 4;

        //These are just sounds, you can probably ignore these
        walkSound = document.getElementById("walkSound");
        diceSound = document.getElementById("diceSound");
        jailDoorCloseSound = document.getElementById("jailClose");
        buySound = document.getElementById("chaching");
        hammerSound = document.getElementById("hammerSound");

        //Shuffling the chance and community chest cards
        shuffles(chanceArray);
        shuffles(communityChestArray);

        //;;;
        var inp1 = document.createElement("input");
        inp1.id = "inp1";
        inp1.style.position = "absolute";
        inp1.style.left = "0%";
        inp1.style.top = "10%";
        document.getElementById("body").appendChild(inp1);
        var inp2 = document.createElement("input");
        inp2.id = "inp2";
        inp2.style.position = "absolute";
        inp2.style.left = "0%";
        inp2.style.top = "15%";
        document.getElementById("body").appendChild(inp2);
        //;;;
        
        
        //Kitty holder (free parking)
        //This is the little box beside Free Parking that holds all the fines that players have paid
        //It returns to 0 when a player lands on Free Parking (the money is given to them)
        var kittyHolder = document.createElement("div");
        kittyHolder.id = "kitty";
        kittyHolder.style.height = "30px";
        kittyHolder.style.width = "50px";
        kittyHolder.style.position = "absolute";
        kittyHolder.style.left = "276px";
        kittyHolder.style.top = "1.2%";
        kittyHolder.style.backgroundColor = "white";
        kittyHolder.innerHTML = kitty;
        kittyHolder.style.textAlign = "center";
        kittyHolder.style.verticalAlign = "middle";
        kittyHolder.style.lineHeight = "30px";
        kittyHolder.style.backgroundColor = "#c2c2a3";
        kittyHolder.style.borderRadius = "5px";
        document.getElementById("body").appendChild(kittyHolder);


        //Setting up the View Stats drop down
        //Thing in the top right corner
        var statsDropDown = document.createElement("div");
        statsDropDown.id = "dropDown";
        statsDropDown.style.position = "absolute";
        statsDropDown.style.height = "25px";
        statsDropDown.style.width = "230px";
        statsDropDown.style.right = "4%";
        statsDropDown.style.top = "10px";
        statsDropDown.style.border = "5px solid black";
        statsDropDown.style.borderRadius = "10px";
        statsDropDown.style.backgroundColor = "#00001a";
        statsDropDown.innerHTML = "VIEW STATS";
        statsDropDown.style.textAlign = "center";
        statsDropDown.style.verticalAlign = "middle";
        statsDropDown.style.lineHeight = "25px";
        statsDropDown.style.color = "white";
        document.getElementById("body").appendChild(statsDropDown);

        var toggleStatsButton = document.createElement("button");
        toggleStatsButton.id = "toggle";
        toggleStatsButton.up = true;
        toggleStatsButton.style.position = "absolute";
        toggleStatsButton.style.height = "35px";
        toggleStatsButton.style.width = "35px";
        toggleStatsButton.style.right = "-5px";
        toggleStatsButton.style.top = "-5px";
        toggleStatsButton.style.borderRadius = "10px";
        toggleStatsButton.style.border = "5px solid black";
        toggleStatsButton.style.backgroundColor = "white";
        toggleStatsButton.style.backgroundImage = "url('images/dropDownArrow.png')";
        toggleStatsButton.style.backgroundSize = "25px 25px";
        toggleStatsButton.setAttribute("disabled", "disabled");
        document.getElementById("dropDown").appendChild(toggleStatsButton);
        toggleStatsButton.addEventListener("click", dropStatsDownOrUp, false);

        var bbut = document.createElement("button");
        bbut.id = "bankb";
        bbut.innerHTML = "bankrupt";
        bbut.style.position = "absolute";
        document.getElementById("body").appendChild(bbut);
        bbut.addEventListener("click", bankrupt.bind(null, players[0]), false);
    }

    $(document).ready(function() {
        $(".ver").mouseover(function() {
            /*
            * This is used for checking who owns a property. If the player hovers over a property
            * that is owned, a little graphic in the bottom right will pop up saying who owns it
            */
            if(this.id != "1008" && this.id != "1008a" && this.id != "0007" && this.id != "0007a" && this.id != "0002" && this.id != "0002a" && this.id != "0004" && this.id != "0004a") {
                if(properties[this.id].owner && !document.getElementById("owner")) {
                    
                    var ownerLabel = document.createElement("label");
                    ownerLabel.id = "owner";
                    ownerLabel.style.height = "38px";
                    ownerLabel.style.width = "105px";
                    ownerLabel.style.position = "absolute";
                    ownerLabel.style.right = "55px";
                    ownerLabel.style.bottom = "50px";
                    ownerLabel.style.backgroundColor = "#c2c2a3";
                    ownerLabel.style.borderRadius = "10px";
                    ownerLabel.innerHTML = "OWNED BY:<br>";
                    ownerLabel.innerHTML += properties[this.id].owner.name;
                    ownerLabel.style.textAlign = "center";
                    document.getElementById("body").appendChild(ownerLabel);

                    var offerTradeButton = document.createElement("button");
                    offerTradeButton.id = "offerTrade";
                    offerTradeButton.style.position = "absolute";
                    offerTradeButton.style.height = "20px";
                    offerTradeButton.style.width = "85px";
                    offerTradeButton.style.right = "75px";
                    offerTradeButton.style.bottom = "30px";
                    offerTradeButton.innerHTML = "TRADE";
                    offerTradeButton.style.borderRadius = "5px";
                    offerTradeButton.style.backgroundColor = "#0099ff";
                    offerTradeButton.style.borderColor = "black";
                    document.getElementById("body").appendChild(offerTradeButton);
                    offerTradeButton.addEventListener("click", offerTradeClicked.bind(null, this.id), false);

                    var removeLabel = document.createElement("button");
                    removeLabel.id = "removeLabel";
                    removeLabel.style.position = "absolute";
                    removeLabel.style.height = "20px";
                    removeLabel.style.width = "20px";
                    removeLabel.style.right = "55px";
                    removeLabel.style.bottom = "30px";
                    removeLabel.style.borderRadius = "5px";
                    removeLabel.style.backgroundImage = "url('images/cancel.png')";
                    removeLabel.style.backgroundSize = "16px 16px";
                    document.getElementById("body").appendChild(removeLabel);
                    removeLabel.addEventListener("click", removeOwnerLabel, false);
                }
            }
        });
    });

    function tradeClicked() {
        /*
        * This sets up the GUI for trade. A player can trade even if they have no properties or 
        * jail card. They can still trade with their money. The idea behind trade is that both
        * players in the trade will have the same type of GUI, where they can freely offer their
        * own stuff, but theyhave to request the other person's stuff
        */

        //Deciding which button is the active one
        var enabledButton;
        if(!document.getElementById("rollDice").hasAttribute("disabled")) {
            enabledButton = "rollDice";
            document.getElementById("rollDice").setAttribute("disabled", "disabled");
        } else if(!document.getElementById("endTurn").hasAttribute("disabled")) {
            enabledButton = "endTurn";
            document.getElementById("endTurn").setAttribute("disabled", "disabled");
        }

        //Setting up the trade GUI
        var tradersAvailable = availableTraders();
        var tradersHolder = document.createElement("div");
        tradersHolder.id = "tradersHolder";
        tradersHolder.style.position = "absolute";
        tradersHolder.style.width = "220px";
        tradersHolder.style.height = "70px";
        tradersHolder.style.top = "25%";
        tradersHolder.style.left = "5%";
        tradersHolder.style.border = "5px solid black";
        tradersHolder.style.borderRadius = "10px";
        tradersHolder.style.backgroundColor = "#00001a";
        document.getElementById("body").appendChild(tradersHolder);

        if(tradersAvailable.length == 0) {
            //If in here, the trader has no properties to trade
            var tradersLabel = document.createElement("label");
            tradersLabel.id = "tLabel";
            tradersLabel.style.height = "50px";
            tradersLabel.style.width = "200px";
            tradersLabel.style.position = "absolute";
            tradersLabel.style.top = "10px";
            tradersLabel.style.left = "10px";
            tradersLabel.innerHTML = "NO TRADERS AVAILABLE";
            tradersLabel.style.textAlign = "center";
            tradersLabel.style.verticalAlign = "middle";
            tradersLabel.style.lineHeight = "50px";
            tradersLabel.style.borderRadius = "10px";
            tradersLabel.style.backgroundColor = "#c2c2a3";
            document.getElementById("tradersHolder").appendChild(tradersLabel);
        } else {
            //This means they do have properties, so we have to place them
            tradersHolder.style.height = (10 + (60 * tradersAvailable.length)).toString().concat("px");
            for(var i = 0; i < tradersAvailable.length; i++) {
                var traderButton = document.createElement("button");
                traderButton.id = "traderButton".concat(i.toString());
                traderButton.style.height = "50px";
                traderButton.style.width = "200px";
                traderButton.style.position = "absolute";
                traderButton.style.top = ((10 * (i+1)) + (50 * i)).toString().concat("px");
                traderButton.style.left = "10px";
                traderButton.innerHTML = tradersAvailable[i].name;
                traderButton.style.textAlign = "center";
                traderButton.style.verticalAlign = "middle";
                traderButton.style.lineHeight = "50px";
                traderButton.style.borderRadius = "10px";
                traderButton.style.backgroundColor = "#0099ff";
                traderButton.style.borderColor = "black";     
                traderButton.style.fontSize = "20px";
                traderButton.style.fontFamily = "bold";
                document.getElementById("tradersHolder").appendChild(traderButton);
                traderButton.addEventListener("click", reqTrade.bind(null, tradersAvailable[i], enabledButton), false);
            }
        }
    }

    function availableTraders() {
        /*
        * This runs through the list of players and returns all players who can trade (if they have
        * any money at all). The player then chooses who they want to trade with using the buttons
        */
        var traders = [];
        for(var i = 0; i < numPlayers; i++) {
            if(players[i] == players[turn]) {
                //If players[i] is the person requesting a trade, don't add them
                continue;
            } else {
                if(players[i].money > 0) {
                    traders.push(players[i]);
                }
            }
        }
        return traders;
    }

    function reqTrade(playerClicked, enabledButton) {
        //This tells the trade GUI set up function which player they want to trade with
        var tradersHolder = document.getElementById("tradersHolder");
        tradersHolder.parentNode.removeChild(tradersHolder);

        showAssets(players[turn], playerClicked, enabledButton);
    }

    function showAssets(traderAssets, tradeeAssets, enabledButton){
        /*
        * Sets up the information for the GUI, getting all the trader's assets and all the tradee's assets
        */
        var traderPropsAvailableTrade = [];
        var tradeePropsAvailableTrade = [];

         for(var i = 0; i < traderAssets.assets.length; i++){
             //This is where we get the trader's assets
            traderPropsAvailableTrade.push(traderAssets.assets[i]);
        }
        for(var i = 0; i < tradeeAssets.assets.length; i++){
            //This is where we get the tradee's assets
            tradeePropsAvailableTrade.push(tradeeAssets.assets[i]);
        }

        setUpTradeGUI(traderPropsAvailableTrade, tradeePropsAvailableTrade, traderAssets, tradeeAssets, enabledButton);
    }

    function setUpTradeGUI(traderPropsAvailableTrade, tradeePropsAvailableTrade, traderAssets, tradeeAssets, enabledButton) {
        /*
        * Sets up the actual GUI, using the assets information from the previous function
        */

        //This is used to make a link between the buttons in the trade and what the actual property
        //the button is representing. The key/value pair is 'buttonID'/'tileID'
        var propertiesHolder = {};

        //This is just setting up the GUI
        var tradeOuter = document.createElement("div");
        tradeOuter.id = "tradeOuter";
        tradeOuter.style.position = "absolute";
        tradeOuter.style.width = "270px";
        tradeOuter.style.height = "624px";
        tradeOuter.style.top = "50px";
        tradeOuter.style.left = "50px";
        tradeOuter.style.border = "5px solid black";
        tradeOuter.style.borderRadius = "10px";
        tradeOuter.style.backgroundColor = "#ffcc66";
        document.getElementById("body").appendChild(tradeOuter);

        var cancelTrade = document.createElement("button");
        cancelTrade.style.height = "15px";
        cancelTrade.style.width = "15px";
        cancelTrade.style.position = "absolute";
        cancelTrade.style.right = "0px";
        cancelTrade.style.top = "0px";
        cancelTrade.style.borderRadius = "2px";
        cancelTrade.style.backgroundImage = "url('images/cancel.png')";
        cancelTrade.style.backgroundSize = "12px 12px";
        document.getElementById("tradeOuter").appendChild(cancelTrade);
        cancelTrade.addEventListener("click", removeTradeGUI.bind(null, enabledButton), false);
        
        var traderAssetsHolder = document.createElement("div");
        traderAssetsHolder.id = "traderAssetsHolder";
        traderAssetsHolder.style.position = "absolute";
        traderAssetsHolder.style.width = "230px";
        traderAssetsHolder.style.height = "100px";
        traderAssetsHolder.style.top = "20px";
        traderAssetsHolder.style.left = "20px";
        traderAssetsHolder.style.border = "5px solid black";
        traderAssetsHolder.style.borderRadius = "10px";
        traderAssetsHolder.style.backgroundColor = "#00001a";
        traderAssetsHolder.style.overflowY = "scroll";
        document.getElementById("tradeOuter").appendChild(traderAssetsHolder);

        var traderCapitalButton = document.createElement("button");
        traderCapitalButton.id = "traderCapitalButton";
        traderCapitalButton.style.height = "50px";
        traderCapitalButton.style.width = "200px";
        traderCapitalButton.style.position = "absolute";
        traderCapitalButton.style.top = "10px";
        traderCapitalButton.style.left = "10px";
        traderCapitalButton.innerHTML = "Trade Capital<br>Captial Available: " + traderAssets.money;
        traderCapitalButton.style.textAlign = "center";
        traderCapitalButton.style.borderRadius = "10px";
        traderCapitalButton.style.backgroundColor = "#0099ff";
        traderCapitalButton.style.borderColor = "black";
        traderCapitalButton.style.fontSize = "18px";
        traderCapitalButton.style.fontFamily = "bold";
        document.getElementById("traderAssetsHolder").appendChild(traderCapitalButton);
        traderCapitalButton.addEventListener("click", offerCapitalClicked.bind(null, "trader", propertiesHolder, traderAssets), false);

        if(traderPropsAvailableTrade == 0) {
            //Here if the trader has no properties to trade
            var tradersPropsLabel = document.createElement("label");
            tradersPropsLabel.id = "tradersPropsLabel";
            tradersPropsLabel.style.height = "50px";
            tradersPropsLabel.style.width = "200px";
            tradersPropsLabel.style.position = "absolute";
            tradersPropsLabel.style.top = "70px";
            tradersPropsLabel.style.left = "10px";
            tradersPropsLabel.innerHTML = "NO PROPERTIES TO SHOW";
            tradersPropsLabel.style.textAlign = "center";
            tradersPropsLabel.style.verticalAlign = "middle";
            tradersPropsLabel.style.lineHeight = "50px";
            tradersPropsLabel.style.borderRadius = "10px";
            tradersPropsLabel.style.backgroundColor = "#c2c2a3";
            document.getElementById("traderAssetsHolder").appendChild(tradersPropsLabel);
        } else {
            //This runs throught the assets if they do ahve any
            for(var i = 0; i < traderPropsAvailableTrade.length; i++) {
                var traderAssetButton = document.createElement("button");
                traderAssetButton.id = ("traderAssetButton").concat(i.toString());
                traderAssetButton.style.height = "50px";
                traderAssetButton.style.width = "200px";
                traderAssetButton.style.position = "absolute";
                traderAssetButton.style.top = (10 + (10 * (i+1)) + (50 * (i+1))).toString().concat("px");
                traderAssetButton.style.left = "10px";
                traderAssetButton.innerHTML = properties[traderPropsAvailableTrade[i]].name;
                traderAssetButton.style.textAlign = "center";
                traderAssetButton.style.verticalAlign = "middle";
                traderAssetButton.style.lineHeight = "50px";
                traderAssetButton.style.borderRadius = "10px";
                traderAssetButton.style.backgroundColor = "#0099ff";
                traderAssetButton.style.borderColor = "black";     
                traderAssetButton.style.fontSize = "20px";
                traderAssetButton.style.fontFamily = "bold";
                document.getElementById("traderAssetsHolder").appendChild(traderAssetButton);
                propertiesHolder[traderAssetButton.id] = traderPropsAvailableTrade[i]
                traderAssetButton.addEventListener("click", addPropDecider.bind(null, traderPropsAvailableTrade[i], traderAssetButton.id, propertiesHolder), false);
            }
        }

        //This runs through any Get Out Of Jail Free cards the trader has
        for(var i = 0; i < traderAssets.getOutOfJail; i++) {
            var traderJailCardButton = document.createElement("button");
            traderJailCardButton.id = "traderJailCardButton".concat(i.toString());
            traderJailCardButton.style.height = "50px";
            traderJailCardButton.style.width = "200px";
            traderJailCardButton.style.position = "absolute";
            traderJailCardButton.style.top = (130 + (60 * (i)) + (60 * (traderPropsAvailableTrade.length-1))).toString().concat("px");
            traderJailCardButton.style.left = "10px";
            traderJailCardButton.innerHTML = "JAIL CARD";
            traderJailCardButton.style.textAlign = "center";
            traderJailCardButton.style.verticalAlign = "middle";
            traderJailCardButton.style.lineHeight = "50px";
            traderJailCardButton.style.borderRadius = "10px";
            traderJailCardButton.style.backgroundColor = "#0099ff";
            traderJailCardButton.style.borderColor = "black";     
            traderJailCardButton.style.fontSize = "20px";
            traderJailCardButton.style.fontFamily = "bold";
            document.getElementById("traderAssetsHolder").appendChild(traderJailCardButton);
            traderJailCardButton.addEventListener("click", addJailCardDecider.bind(null, traderJailCardButton.id), false);
        }

        //This is where the assets are actually held
        var tradeeAssetsHolder = document.createElement("div");
        tradeeAssetsHolder.id = "tradeeAssetsHolder";
        tradeeAssetsHolder.style.position = "absolute";
        tradeeAssetsHolder.style.width = "230px";
        tradeeAssetsHolder.style.height = "100px";
        tradeeAssetsHolder.style.bottom = "20px";
        tradeeAssetsHolder.style.left = "20px";
        tradeeAssetsHolder.style.border = "5px solid black";
        tradeeAssetsHolder.style.borderRadius = "10px";
        tradeeAssetsHolder.style.backgroundColor = "#00001a";
        tradeeAssetsHolder.style.overflowY = "scroll";
        document.getElementById("tradeOuter").appendChild(tradeeAssetsHolder);

        var tradeeCapitalButton = document.createElement("button");
        tradeeCapitalButton.id = "tradeeCapitalButton";
        tradeeCapitalButton.style.height = "50px";
        tradeeCapitalButton.style.width = "200px";
        tradeeCapitalButton.style.position = "absolute";
        tradeeCapitalButton.style.top = "10px";
        tradeeCapitalButton.style.left = "10px";
        tradeeCapitalButton.innerHTML = "Trade Capital<br>Capital Available: " + tradeeAssets.money;
        tradeeCapitalButton.style.textAlign = "center";
        tradeeCapitalButton.style.borderRadius = "10px";
        tradeeCapitalButton.style.backgroundColor = "#0099ff";
        tradeeCapitalButton.style.borderColor = "black";
        tradeeCapitalButton.style.fontSize = "18px";
        tradeeCapitalButton.style.fontFamily = "bold";
        document.getElementById("tradeeAssetsHolder").appendChild(tradeeCapitalButton);
        tradeeCapitalButton.addEventListener("click", offerCapitalClicked.bind(null, "tradee", propertiesHolder, tradeeAssets), false);

        //Just doing the same thing for the tradee
        if(tradeePropsAvailableTrade == 0) {
            var tradeesPropsLabel = document.createElement("label");
            tradeesPropsLabel.id = "tradeesPropsLabel";
            tradeesPropsLabel.style.height = "50px";
            tradeesPropsLabel.style.width = "200px";
            tradeesPropsLabel.style.position = "absolute";
            tradeesPropsLabel.style.top = "70px";
            tradeesPropsLabel.style.left = "10px";
            tradeesPropsLabel.innerHTML = "NO PROPERTIES TO SHOW";
            tradeesPropsLabel.style.textAlign = "center";
            tradeesPropsLabel.style.verticalAlign = "middle";
            tradeesPropsLabel.style.lineHeight = "50px";
            tradeesPropsLabel.style.borderRadius = "10px";
            tradeesPropsLabel.style.backgroundColor = "#c2c2a3";
            document.getElementById("tradeeAssetsHolder").appendChild(tradeesPropsLabel);
        } else {
            for(var i = 0; i < tradeePropsAvailableTrade.length; i++) {
                var tradeeAssetButton = document.createElement("button");
                tradeeAssetButton.id = "tradeeAssetButton".concat(i.toString());
                tradeeAssetButton.style.height = "50px";
                tradeeAssetButton.style.width = "200px";
                tradeeAssetButton.style.position = "absolute";
                tradeeAssetButton.style.top = (10 + (10 * (i+1)) + (50 * (i+1))).toString().concat("px");
                tradeeAssetButton.style.left = "10px";
                tradeeAssetButton.innerHTML = properties[tradeePropsAvailableTrade[i]].name;
                tradeeAssetButton.style.textAlign = "center";
                tradeeAssetButton.style.verticalAlign = "middle";
                tradeeAssetButton.style.lineHeight = "50px";
                tradeeAssetButton.style.borderRadius = "10px";
                tradeeAssetButton.style.backgroundColor = "#0099ff";
                tradeeAssetButton.style.borderColor = "black";     
                tradeeAssetButton.style.fontSize = "20px";
                tradeeAssetButton.style.fontFamily = "bold";
                document.getElementById("tradeeAssetsHolder").appendChild(tradeeAssetButton);
                propertiesHolder[tradeeAssetButton.id] = tradeePropsAvailableTrade[i];
                tradeeAssetButton.addEventListener("click", addPropDecider.bind(null, tradeePropsAvailableTrade[i], tradeeAssetButton.id, propertiesHolder), false);
            }
        }

        for(var i = 0; i < tradeeAssets.getOutOfJail; i++) {
            var tradeeJailCardButton = document.createElement("button");
            tradeeJailCardButton.id = "tradeeJailCardButton".concat(i.toString());
            tradeeJailCardButton.style.height = "50px";
            tradeeJailCardButton.style.width = "200px";
            tradeeJailCardButton.style.position = "absolute";
            tradeeJailCardButton.style.top = (130 + (60 * (i)) + (60 * (tradeePropsAvailableTrade.length-1))).toString().concat("px");
            tradeeJailCardButton.style.left = "10px";
            tradeeJailCardButton.innerHTML = "JAIL CARD";
            tradeeJailCardButton.style.textAlign = "center";
            tradeeJailCardButton.style.verticalAlign = "middle";
            tradeeJailCardButton.style.lineHeight = "50px";
            tradeeJailCardButton.style.borderRadius = "10px";
            tradeeJailCardButton.style.backgroundColor = "#0099ff";
            tradeeJailCardButton.style.borderColor = "black";     
            tradeeJailCardButton.style.fontSize = "20px";
            tradeeJailCardButton.style.fontFamily = "bold";
            document.getElementById("tradeeAssetsHolder").appendChild(tradeeJailCardButton);
            tradeeJailCardButton.addEventListener("click", addJailCardDecider.bind(null, tradeeJailCardButton.id), false);
        }

        //This is the offer part of the GUI, where all the properties that are currently being
        //offered are put
        var offerHolder = document.createElement("div");
        offerHolder.id = "offerHolder";
        offerHolder.style.position = "absolute";
        offerHolder.style.width = "230px";
        offerHolder.style.height = "260px";
        offerHolder.style.top = "182px";
        offerHolder.style.left = "20px";
        document.getElementById("tradeOuter").appendChild(offerHolder);

        var traderOfferHolder = document.createElement("div");
        traderOfferHolder.id = "traderOfferHolder";
        traderOfferHolder.style.position = "absolute";
        traderOfferHolder.style.width = "230px";
        traderOfferHolder.style.height = "100px";
        traderOfferHolder.style.top = "0px";
        traderOfferHolder.style.left = "0px";
        traderOfferHolder.style.border = "5px solid black";
        traderOfferHolder.style.borderRadius = "10px";
        traderOfferHolder.style.backgroundColor = "#00001a";
        traderOfferHolder.style.overflowY = "scroll";
        document.getElementById("offerHolder").appendChild(traderOfferHolder);

        var tradeeOfferHolder = document.createElement("div");
        tradeeOfferHolder.id = "tradeeOfferHolder";
        tradeeOfferHolder.style.position = "absolute";
        tradeeOfferHolder.style.width = "230px";
        tradeeOfferHolder.style.height = "100px";
        tradeeOfferHolder.style.bottom = "0px";
        tradeeOfferHolder.style.left = "0px";
        tradeeOfferHolder.style.border = "5px solid black";
        tradeeOfferHolder.style.borderRadius = "10px";
        tradeeOfferHolder.style.backgroundColor = "#00001a";
        tradeeOfferHolder.style.overflowY = "scroll";
        document.getElementById("offerHolder").appendChild(tradeeOfferHolder);

        //This button finishes the trade (if accepted)
        var finishOfferButton = document.createElement("button");
        finishOfferButton.id = "finishOfferButton";
        finishOfferButton.style.height = "40px";
        finishOfferButton.style.width = "240px";
        finishOfferButton.style.position = "absolute";
        finishOfferButton.style.top = "110px";
        finishOfferButton.style.left = "0px";
        finishOfferButton.innerHTML = "PROPOSE TRADE";
        finishOfferButton.style.textAlign = "center";
        finishOfferButton.style.verticalAlign = "middle";
        finishOfferButton.style.lineHeight = "40px";
        finishOfferButton.style.borderRadius = "10px";
        finishOfferButton.style.backgroundColor = "#c2c2a3";
        finishOfferButton.style.borderColor = "black";
        finishOfferButton.setAttribute("disabled", "disabled");
        document.getElementById("offerHolder").appendChild(finishOfferButton);
        finishOfferButton.addEventListener("click", proposeTrade.bind(null, "trader", traderAssets, tradeeAssets, propertiesHolder, enabledButton), false);
    }

    function offerCapitalClicked(traderOrTradee, propertiesHolder, traderOrTradeeObject) {
        /*
        * This is for deciding who offered money. traderOrTradee determines if the money is supposed
        * to be coming from the trader or the tradee
        */

        //This is the id of the holder div for either the trader or the tradee, depending on where
        //the money is coming from
        var tradexButtonsID;
        if(traderOrTradee == "trader") {
            tradexButtonsID = "traderAssetsHolder";
            tradex = "traderCapitalButton";
        } else if(traderOrTradee == "tradee") {
            tradexButtonsID = "tradeeAssetsHolder";
            tradex = "tradeeCapitalButton";
        }

        for(var i = 0; i < document.getElementById(tradexButtonsID).childNodes.length; i++) {
            //This disables all the buttons in the corresponding holder div so they can't be pressed
            //while deciding how much money
            document.getElementById(tradexButtonsID).childNodes[i].setAttribute("disabled", "disabled");
            document.getElementById(tradexButtonsID).childNodes[i].style.backgroundColor = "#c2c2a3";
        }

        //This is just theh GUI for offering. It's an input field above two buttons, offer and cancel
        var offerOuter = document.createElement("div");
        offerOuter.id = "offerOuter".concat(tradex);
        offerOuter.style.position = "absolute";
        offerOuter.style.width = "128px";
        offerOuter.style.height = "41px";
        offerOuter.style.top = "2.5px";
        offerOuter.style.left = "36px";
        document.getElementById(tradex).appendChild(offerOuter);

        var offerInput = document.createElement("input");
        offerInput.id = "offerInput".concat(tradex);
        offerInput.style.height = "15px";
        offerInput.style.width = "128px";
        offerInput.style.position = "absolute";
        offerInput.style.left = "0px";
        offerInput.style.top = "0px"
        offerInput.placeholder = "Offer Money";
        document.getElementById("offerOuter".concat(tradex)).appendChild(offerInput);

        var offerButton = document.createElement("button");
        offerButton.id = "offerButton".concat(tradex);
        offerButton.style.height = "21px";
        offerButton.style.width = "66px";
        offerButton.style.position = "absolute";
        offerButton.style.left = "0px";
        offerButton.style.bottom = "0px";
        offerButton.innerHTML = "OFFER";
        document.getElementById("offerOuter".concat(tradex)).appendChild(offerButton);
        offerButton.addEventListener("click", offerCapitalAmount.bind(null, tradex, tradexButtonsID, propertiesHolder, traderOrTradeeObject), false);

        var cancelButton = document.createElement("button");
        cancelButton.id = "cancelOfferButton".concat(tradex);
        cancelButton.style.height = "21px";
        cancelButton.style.width = "66px";
        cancelButton.style.position = "absolute";
        cancelButton.style.left = "66px";
        cancelButton.style.bottom = "0px";
        cancelButton.innerHTML = "CANCEL";
        document.getElementById("offerOuter".concat(tradex)).appendChild(cancelButton);
        cancelButton.addEventListener("click", removeCapitalOfferGUI.bind(null, tradex, tradexButtonsID), false);
    }

    function removeCapitalOfferGUI(tradex, tradexButtonsID) {
        //This removes the GUI for offering up money.
        var offerOuter = document.getElementById("offerOuter".concat(tradex));
        offerOuter.parentNode.removeChild(offerOuter);

        var traderOrTradee = tradexButtonsID.substring(0, 6).concat("OfferHolder");
        
        setTimeout(function() {
            //Have to delay slightly so clicking the cancel button doesn't also click the button
            //to activate the capital offer again
            for(var i = 0; i < document.getElementById(tradexButtonsID).childNodes.length; i++) {
                //This reactivates all buttons in the corresponding holder div (all the properties)
                if(document.getElementById(tradexButtonsID).childNodes[i].id.substring(7, 12) == "Props") {
                    //Do nothing, the label should never change colour
                } else {
                    document.getElementById(tradexButtonsID).childNodes[i].removeAttribute("disabled");
                    document.getElementById(tradexButtonsID).childNodes[i].style.backgroundColor = "#0099ff";
                }
            }

            for(var i = 0; i < document.getElementById(traderOrTradee).childNodes.length; i++) {
                //This re-deactivates the properties that are currently being offered so you cannot
                //press them again
                if(document.getElementById(traderOrTradee).childNodes[i].id.substring(0, 7) == "capital") {
                    //do nothing
                } else {
                    var originalID = document.getElementById(traderOrTradee).childNodes[i].id.substring(0, document.getElementById(traderOrTradee).childNodes[i].id.length-5);
                    document.getElementById(originalID).setAttribute("disabled", "disabled");
                    document.getElementById(originalID).style.backgroundColor = "#c2c2a3";
                }
            }
        }, 50);
    }

    function offerCapitalAmount(tradex, tradexButtonsID, propertiesHolder, traderOrTradeeObject) {
        //This places the offered amount into the offers div in the center
        //tradex is either trader or tradee
        var traderOrTradee = tradexButtonsID.substring(0, 6).concat("OfferHolder");
        var amount = parseInt(document.getElementById("offerInput".concat(tradex)).value);
        var oldAmount = 0;
        //If some money has already been offered, we want to just add the new amount to it
        if(document.getElementById("capital".concat(traderOrTradee))) {
            oldAmount = parseInt(document.getElementById("capital".concat(traderOrTradee)).innerHTML);
        }

        //Just some error checking so they can only input a number
        if(amount == "" || isNaN(amount)) {
            alert("Please enter a valid amount to offer");
            document.getElementById("offerInput".concat(tradex)).value = "";
        } else {
            if((amount + oldAmount) > traderOrTradeeObject.money) {
                alert("Please enter an amount the player can afford");
                document.getElementById("offerInput".concat(tradex)).value = "";
            } else {
                addCapitalOfferDecider(amount, tradexButtonsID, propertiesHolder);
                removeCapitalOfferGUI(tradex, tradexButtonsID);
            }
        }
    }

    function addPropDecider(prop, buttonID, propertiesHolder) {
        //This decides whether the trader or tradee is adding a property. This needs to be done
        //so the tradee can be requested
        if(buttonID.substring(0, 6) == "trader") {
            addProp(prop, buttonID, propertiesHolder);
        } else if(buttonID.substring(0, 6) == "tradee") {
            if(confirm("Player requests " + properties[prop].name)) {
                addProp(prop, buttonID, propertiesHolder);
            } else {
                alert("Player rejected your request");
            }
        }
    }

    function addProp(prop, buttonID, propertiesHolder) {
        //This adds the property to the offer div in the center. It needs to know if it's the trader
        //or tradee offering so it can place it in either the top half or the bottom half

        var traderOrTradee = buttonID.substring(0, 6).concat("OfferHolder");
        var offeredAsset = document.getElementById(buttonID).cloneNode();
        document.getElementById(buttonID).setAttribute("disabled", "disabled");
        document.getElementById(buttonID).style.backgroundColor = "#c2c2a3";
        offeredAsset.style.top = (10 + (60 * document.getElementById(traderOrTradee).childNodes.length)).toString().concat("px");
        //Cloning the button that was pressed in the trader/tradee divs
        offeredAsset.id = buttonID.concat("clone");
        offeredAsset.style.backgroundColor = "#0099ff";
        offeredAsset.removeAttribute("disabled");
        offeredAsset.innerHTML = properties[prop].name;
        //Placing it in the corresponding offer div
        document.getElementById(traderOrTradee).appendChild(offeredAsset);

        var cancelOfferOfAsset = document.createElement("button");
        cancelOfferOfAsset.style.height = "15px";
        cancelOfferOfAsset.style.width = "15px";
        cancelOfferOfAsset.style.position = "absolute";
        cancelOfferOfAsset.style.right = "0px";
        cancelOfferOfAsset.style.top = "0px";
        cancelOfferOfAsset.style.borderRadius = "2px";
        cancelOfferOfAsset.style.backgroundImage = "url('images/cancel.png')";
        cancelOfferOfAsset.style.backgroundSize = "12px 12px";
        offeredAsset.appendChild(cancelOfferOfAsset);
        cancelOfferOfAsset.addEventListener("click", removeAssetOffer.bind(null, offeredAsset.id, buttonID, propertiesHolder), false);
        
        if(document.getElementById("traderOfferHolder").childNodes.length > 0 && document.getElementById("tradeeOfferHolder").childNodes.length > 0) {
            document.getElementById("finishOfferButton").removeAttribute("disabled");
            document.getElementById("finishOfferButton").style.backgroundColor = "#0099ff";
        }
    }

    function addJailCardDecider(buttonID) {
        //This decides if either the trader or tradee is offering a jail card, again so the tradee 
        //can bee requested
        if(buttonID.substring(0, 6) == "trader") {
            addJailCard(buttonID);
        } else if(buttonID.substring(0, 6) == "tradee") {
            if(confirm("Player requests a jail card")) {
                addJailCard(buttonID);
            } else {
                alert("Player rejected your request for a jail card");
            }
        }
    }

    function addJailCard(buttonID) {
        //Doing the same job as addProp only for jail cards

        var traderOrTradee = buttonID.substring(0, 6).concat("OfferHolder");
        var offeredAsset = document.getElementById(buttonID).cloneNode();
        document.getElementById(buttonID).setAttribute("disabled", "disabled");
        document.getElementById(buttonID).style.backgroundColor = "#c2c2a3";
        offeredAsset.style.top = (10 + (60 * document.getElementById(traderOrTradee).childNodes.length)).toString().concat("px");
        offeredAsset.innerHTML = "JAIL CARD";
        offeredAsset.style.backgroundColor = "#0099ff";
        offeredAsset.removeAttribute("disabled");
        offeredAsset.id = buttonID.concat("clone");
        document.getElementById(traderOrTradee).appendChild(offeredAsset);

        var cancelOfferOfAsset = document.createElement("button");
        cancelOfferOfAsset.style.height = "15px";
        cancelOfferOfAsset.style.width = "15px";
        cancelOfferOfAsset.style.position = "absolute";
        cancelOfferOfAsset.style.right = "0px";
        cancelOfferOfAsset.style.top = "0px";
        cancelOfferOfAsset.style.borderRadius = "2px";
        cancelOfferOfAsset.style.backgroundImage = "url('images/cancel.png')";
        cancelOfferOfAsset.style.backgroundSize = "12px 12px";
        offeredAsset.appendChild(cancelOfferOfAsset);
        cancelOfferOfAsset.addEventListener("click", removeAssetOffer.bind(null, offeredAsset.id, buttonID, propertiesHolder), false);
        
        if(document.getElementById("traderOfferHolder").childNodes.length > 0 && document.getElementById("tradeeOfferHolder").childNodes.length > 0) {
            document.getElementById("finishOfferButton").removeAttribute("disabled");
            document.getElementById("finishOfferButton").style.backgroundColor = "#0099ff";
        }
    }

    function addCapitalOfferDecider(amount, buttonID, propertiesHolder) {
        //Again deciding who it was that offered
        if(buttonID.substring(0, 6) == "trader") {
            addCapitalOffer(amount, buttonID, propertiesHolder);
        } else if(buttonID.substring(0, 6) == "tradee") {
            if(confirm("Player requests " + amount)) {
                addCapitalOffer(amount, buttonID, propertiesHolder);
            } else {
                alert("Player rejected your request for " + amount);
            }
        }
    }

    function addCapitalOffer(amount, buttonID, propertiesHolder) {
        //This is where the money offer is actually placed in the offer div. This one is a little
        //more complicated because we are always making the money offer be at the top of the offer 
        //div. If there is already offers in the div, we need to remove them, store them in a list,
        //and then add them back into the offer div under the money offer
        var traderOrTradee = buttonID.substring(0, 6).concat("OfferHolder");
        if(document.getElementById(traderOrTradee).childNodes.length == 0) {
            //If there's no property or jail card offers we can just add it straight in
            if(document.getElementById("capital".concat(traderOrTradee))) {
                //If there's already a money offer 
                var oldAmount = parseInt(document.getElementById("capital".concat(traderOrTradee)).innerHTML);
                oldAmount += amount;
                document.getElementById("capital".concat(traderOrTradee)).innerHTML = oldAmount;

                var cancelCapitalOffer = document.createElement("button");
                cancelCapitalOffer.style.height = "15px";
                cancelCapitalOffer.style.width = "15px";
                cancelCapitalOffer.style.position = "absolute";
                cancelCapitalOffer.style.right = "0px";
                cancelCapitalOffer.style.top = "0px";
                cancelCapitalOffer.style.borderRadius = "2px";
                cancelCapitalOffer.style.backgroundImage = "url('images/cancel.png')";
                cancelCapitalOffer.style.backgroundSize = "12px 12px";
                document.getElementById("capital".concat(traderOrTradee)).appendChild(cancelCapitalOffer);
                cancelCapitalOffer.addEventListener("click", removeCapitalOffer.bind(null, capitalOffered.id, propertiesHolder), false);
            } else {
                //If there isn't a money offer already
                var capitalOffered = document.createElement("button");
                capitalOffered.id = "capital".concat(traderOrTradee);
                capitalOffered.style.height = "50px";
                capitalOffered.style.width = "200px";
                capitalOffered.style.position = "absolute";
                capitalOffered.style.top = "10px";
                capitalOffered.style.left = "10px";
                capitalOffered.innerHTML = amount;
                capitalOffered.style.textAlign = "center";
                capitalOffered.style.verticalAlign = "middle";
                capitalOffered.style.lineHeight = "50px";
                capitalOffered.style.borderRadius = "10px";
                capitalOffered.style.backgroundColor = "#0099ff";
                capitalOffered.style.borderColor = "black";     
                capitalOffered.style.fontSize = "20px";
                capitalOffered.style.fontFamily = "bold";
                document.getElementById(traderOrTradee).appendChild(capitalOffered);

                var cancelCapitalOffer = document.createElement("button");
                cancelCapitalOffer.style.height = "15px";
                cancelCapitalOffer.style.width = "15px";
                cancelCapitalOffer.style.position = "absolute";
                cancelCapitalOffer.style.right = "0px";
                cancelCapitalOffer.style.top = "0px";
                cancelCapitalOffer.style.borderRadius = "2px";
                cancelCapitalOffer.style.backgroundImage = "url('images/cancel.png')";
                cancelCapitalOffer.style.backgroundSize = "12px 12px";
                capitalOffered.appendChild(cancelCapitalOffer);
                cancelCapitalOffer.addEventListener("click", removeCapitalOffer.bind(null, capitalOffered.id, propertiesHolder), false);
            }
        } else {
            //Here is where we get all the previously offered properties, storing them so we can
            //re-add them after adding the money offer
            var oldAmount = 0;
            var propertyButtonIDs = [];
            for(var i = 0; i < document.getElementById(traderOrTradee).childNodes.length; i++) {
                if(document.getElementById(traderOrTradee).childNodes[i].id != "capital".concat(traderOrTradee)) {
                    //We need the original ids of the properties so we can re-add them through the 
                    //cling function. We do this by removing the 'clone' part at the end of the id
                    //(what's happening in the line below)
                    var convertToOriginalID = document.getElementById(traderOrTradee).childNodes[i].id.substring(0, document.getElementById(traderOrTradee).childNodes[i].id.length-5);
                    propertyButtonIDs.push(convertToOriginalID);
                }
            }

            for(var i = 0; i < propertyButtonIDs.length; i++) {
                //now we need to get the actual clone button from the offers div in the center so
                //we can remove it
                var assetToRemove = document.getElementById(propertyButtonIDs[i].concat("clone"));
                assetToRemove.parentNode.removeChild(assetToRemove);
            }

            if(document.getElementById("capital".concat(traderOrTradee))) {
                //And here is just updating or adding the money offer label (button)
                oldAmount = parseInt(document.getElementById("capital".concat(traderOrTradee)).innerHTML);
                oldAmount += amount;
                document.getElementById("capital".concat(traderOrTradee)).innerHTML = oldAmount;

                var cancelCapitalOffer = document.createElement("button");
                cancelCapitalOffer.style.height = "15px";
                cancelCapitalOffer.style.width = "15px";
                cancelCapitalOffer.style.position = "absolute";
                cancelCapitalOffer.style.right = "0px";
                cancelCapitalOffer.style.top = "0px";
                cancelCapitalOffer.style.borderRadius = "2px";
                cancelCapitalOffer.style.backgroundImage = "url('images/cancel.png')";
                cancelCapitalOffer.style.backgroundSize = "12px 12px";
                console.log(document.getElementById("capital".concat(traderOrTradee)));
                document.getElementById("capital".concat(traderOrTradee)).appendChild(cancelCapitalOffer);
                cancelCapitalOffer.addEventListener("click", removeCapitalOffer.bind(null, "capital".concat(traderOrTradee), propertiesHolder), false);
            } else {
                var capitalOffered = document.createElement("button");
                capitalOffered.id = "capital".concat(traderOrTradee);
                capitalOffered.style.height = "50px";
                capitalOffered.style.width = "200px";
                capitalOffered.style.position = "absolute";
                capitalOffered.style.top = "10px";
                capitalOffered.style.left = "10px";
                capitalOffered.innerHTML = amount;
                capitalOffered.style.textAlign = "center";
                capitalOffered.style.verticalAlign = "middle";
                capitalOffered.style.lineHeight = "50px";
                capitalOffered.style.borderRadius = "10px";
                capitalOffered.style.backgroundColor = "#0099ff";
                capitalOffered.style.borderColor = "black";     
                capitalOffered.style.fontSize = "20px";
                capitalOffered.style.fontFamily = "bold";
                document.getElementById(traderOrTradee).appendChild(capitalOffered);

                var cancelCapitalOffer = document.createElement("button");
                cancelCapitalOffer.style.height = "15px";
                cancelCapitalOffer.style.width = "15px";
                cancelCapitalOffer.style.position = "absolute";
                cancelCapitalOffer.style.right = "0px";
                cancelCapitalOffer.style.top = "0px";
                cancelCapitalOffer.style.borderRadius = "2px";
                cancelCapitalOffer.style.backgroundImage = "url('images/cancel.png')";
                cancelCapitalOffer.style.backgroundSize = "12px 12px";
                capitalOffered.appendChild(cancelCapitalOffer);
                cancelCapitalOffer.addEventListener("click", removeCapitalOffer.bind(null, capitalOffered.id, propertiesHolder), false);
            }

            if(traderOrTradee.substring(0, 6) == "trader") {
                //If it was the tradee ones then putting them all through here would trigger the 
                //confirm again and we don't need to do that
                redoOfferHolder(propertyButtonIDs, propertiesHolder);
            } else {
                //Have to do this so it doesn't ask player to accept them again
                for(var i = 0; i < propertyButtonIDs.length; i++) {
                    if(propertyButtonIDs[i].substring(6, 10) == "Jail") {
                        addJailCard(propertyButtonIDs[i]);
                    } else {
                        addProp(propertiesHolder[propertyButtonIDs[i]], propertyButtonIDs[i], propertiesHolder);
                    }
                }
            }
        }

        if(document.getElementById("traderOfferHolder").childNodes.length > 0 && document.getElementById("tradeeOfferHolder").childNodes.length > 0) {
            document.getElementById("finishOfferButton").removeAttribute("disabled");
            document.getElementById("finishOfferButton").style.backgroundColor = "#0099ff";
        }
    }

    function removeAssetOffer(assetID, originalID, propertiesHolder) {
        //This takes the property the player wanted to trade and decided against it and returns it to
        //their holder div
        var traderOrTradee = assetID.substring(0, 6).concat("OfferHolder");
        //Reenabling the button in the trader's/tradee's holder div so they can er-offer it if they 
        //want
        document.getElementById(originalID).removeAttribute("disabled");
        document.getElementById(originalID).style.backgroundColor = "#0099ff";

        //We need to take note of the other properties that are still getting offered so we can 
        //clean up the offer div
        var assetsStillIncluded = [];
        var start = 0;
        if(document.getElementById(traderOrTradee).childNodes[0].id.substring(0, 7) == "capital") {
            //If a money offer has been made, this will still be the first offer in the div after
            //the clean up so no point removing it
            start = 1;
        }

        for(var i = start; i < document.getElementById(traderOrTradee).childNodes.length; i++) {
            //Need to get the original ID of all the cloned properties so we can re-clone them
            if(document.getElementById(traderOrTradee).childNodes[i].id != assetID) {
                //Same deal here with getting the original ID as above
                var convertToOriginalID = document.getElementById(traderOrTradee).childNodes[i].id.substring(0, document.getElementById(traderOrTradee).childNodes[i].id.length-5);
                assetsStillIncluded.push(convertToOriginalID);
            }
        }

        for(var i = start; i < assetsStillIncluded.length; i++) {
            //Removing the cloned buttons from the offer div
            var assetToRemove = document.getElementById(assetsStillIncluded[i].concat("clone"));
            assetToRemove.parentNode.removeChild(assetToRemove);
        }

        //Removing the property that we actually want to get rid of
        var lastAsset = document.getElementById(assetID);
        lastAsset.parentNode.removeChild(lastAsset);

        if(document.getElementById("traderOfferHolder").childNodes.length == 0 || document.getElementById("tradeeOfferHolder").childNodes.length == 0) {
            //This disables the offer button if their is one player without an item being offered
            document.getElementById("finishOfferButton").setAttribute("disabled", "disabled");
            document.getElementById("finishOfferButton").style.backgroundColor = "#c2c2a3";
        }

        //Call this function to clean up the offers div
        redoOfferHolder(assetsStillIncluded, propertiesHolder);
    }

    function removeCapitalOffer(tradex, propertiesHolder) {
        //This just removes the offered capital from the offers div
        var parentN = document.getElementById(tradex).parentNode;
        parentN.removeChild(document.getElementById(tradex));

        if(parentN.childNodes.length > 0) {
            //If there's more than one offer on the table, we need to take note of their buttonIDs
            //so we add them back in
            propertyButtonIDs = [];

            for(var i = 0; i < parentN.childNodes.length; i++) {
                //Again getting the original id so we can re-clone it
                var convertToOriginalID = parentN.childNodes[i].id.substring(0, parentN.childNodes[i].id.length-5);
                propertyButtonIDs.push(convertToOriginalID);
            }

            for(var i = 0; i < propertyButtonIDs.length; i++) {
                //Then removing the clones from the offers div
                var assetToRemove = document.getElementById(propertyButtonIDs[i].concat("clone"));
                assetToRemove.parentNode.removeChild(assetToRemove);
            }

            //cleaning up again
            redoOfferHolder(propertyButtonIDs, propertiesHolder);
        }

        if(document.getElementById("traderOfferHolder").childNodes.length == 0 || document.getElementById("tradeeOfferHolder").childNodes.length == 0) {
            //Deciding whether to turn off the offer button based on how many offers are being made
            document.getElementById("finishOfferButton").setAttribute("disabled", "disabled");
            document.getElementById("finishOfferButton").style.backgroundColor = "#c2c2a3";
        }
    }

    function redoOfferHolder(assets, propertiesHolder) {
        /*
        * This function is for cleaning up the offers div when a player removes an offer. It takes 
        * the buttonIDs that need to be re-added
        */

        if(assets.length > 0) {
            //The innerHTML was being weird so have to go back to the actual property to get its name
            document.getElementById(assets[0]).name = document.getElementById(assets[0]).innerHTML;
        } 
        
        if(document.getElementById("traderOfferHolder").childNodes.length == 0 || document.getElementById("tradeeOfferHolder").childNodes.length == 0) {
            //Again deciding on whether to disable the offer button due to lack of offers
            document.getElementById("finishOfferButton").setAttribute("disabled", "disabled");
            document.getElementById("finishOfferButton").style.backgroundColor = "#c2c2a3";
        }

        for(var i = 0; i < assets.length; i++) {
            //Here we add back the properties/jail cards
            if(assets[i].substring(6, 10) == "Jail") {
                addJailCardDecider(assets[i]);
            } else {
                addPropDecider(propertiesHolder[assets[i]], assets[i], propertiesHolder);
            }
        }
    }

    function proposeTrade(tradex, trader, tradee, propertiesHolder, enabledButton) {
        //This is called when one of the players wants to finish the trade with the current offers
        var traderOffers = [];
        var tradeeOffers = [];
        if(confirm("Do you accept this trade?")) {
            //If the other player accepts the trade then we need to get all of the trader and tradee
            //assets so we can pass them onto the function that finishes the trade
            for(var i = 0; i < document.getElementById("traderOfferHolder").childNodes.length; i++) {
                //We need to convert the clone's id back into the original so we can use propetiesHolder
                //to get back to the actual tileID
                var convertToOriginalID;
                if(document.getElementById("traderOfferHolder").childNodes[i].id.substring(0, 7) == "capital") {
                    //This is for checking if it's the money offer
                    convertToOriginalID = document.getElementById("traderOfferHolder").childNodes[i].id;
                } else {
                    convertToOriginalID = document.getElementById("traderOfferHolder").childNodes[i].id.substring(0, document.getElementById("traderOfferHolder").childNodes[i].id.length-5);
                }
                //adding the property to the trader offer list
                traderOffers.push(convertToOriginalID);
            }
    
            //This is the same as above just for the tradee offers
            for(var i = 0; i < document.getElementById("tradeeOfferHolder").childNodes.length; i++) {
                var convertToOriginalID;
                if(document.getElementById("tradeeOfferHolder").childNodes[i].id.substring(0, 7) == "capital") {
                    convertToOriginalID = document.getElementById("tradeeOfferHolder").childNodes[i].id;
                } else {
                    convertToOriginalID = document.getElementById("tradeeOfferHolder").childNodes[i].id.substring(0, document.getElementById("tradeeOfferHolder").childNodes[i].id.length-5);
                }
                tradeeOffers.push(convertToOriginalID);
            }

            //Passing the trader object, tradee object, the trader's offers, tradee's offers
            // the propertiesHolder dictionary, and the button (roll dice/end turn) that needs to be
            //reactivated
            finishTrade(trader, tradee, propertiesHolder, traderOffers, tradeeOffers, enabledButton);
        }
        
    }

    function finishTrade(trader, tradee, propertiesHolder, traderOffers, tradeeOffers, enabledButton) {
        /*
        * Here is where the trade actually finishes and the properties are traded
        */
        //This holds the assets that need to be removed from the trader object
        var removeFromTraderAssets = [];
        //Same but for tradee
        var removeFromTradeeAssets = [];
        //Need to remove the properties from the playerObj.properties[colour/railroad/utilities] as well
        var traderColourHolder = [];
        var tradeeColourHolder = [];        
        var traderRailHolder = [];
        var tradeeRailHolder = [];
        var traderUtilHolder = [];
        var tradeeUtilHolder = [];
        
        for(var i = 0; i < traderOffers.length; i++) {
            //This gives the tradee all the properties that the trader offered
            if(traderOffers[i].substring(6, 10) == "Jail") {
                //This is if it's a jail card
                tradee.getOutOfJail++;
                trader.getOutOfJail--;
            } else if(traderOffers[i].substring(0, 7) == "capital") {
                //This is if it'money
                tradee.money += parseInt(document.getElementById(traderOffers[i]).innerHTML);
                trader.money -= parseInt(document.getElementById(traderOffers[i]).innerHTML);
            } else {
                //This is if it's a property. propertiesHolder[traderOffers[i]] converts the button
                //id back into the tileID
                properties[propertiesHolder[traderOffers[i]]].owner = tradee;
                removeFromTraderAssets.push(propertiesHolder[traderOffers[i]]);
                tradee.assets.push(propertiesHolder[traderOffers[i]]);
                //We need to decide whether it is a colour, railroad, or utility property
                if(properties[propertiesHolder[traderOffers[i]]].type == "colour") {
                    traderColourHolder.push(propertiesHolder[traderOffers[i]]);
                    tradee.properties[properties[propertiesHolder[traderOffers[i]]].colour].push(propertiesHolder[traderOffers[i]]);
                } else if(properties[propertiesHolder[traderOffers[i]]].type == "railroad") {
                    traderRailHolder.push(propertiesHolder[traderOffers[i]]);
                    tradee.properties[properties[propertiesHolder[traderOffers[i]]].type].push(propertiesHolder[traderOffers[i]]);
                } else if(properties[propertiesHolder[traderOffers[i]]].type == "utility") {
                    traderUtilHolder.push(propertiesHolder[traderOffers[i]]);
                    tradee.properties["utilities"].push(propertiesHolder[traderOffers[i]]);
                }
                //Just traded checks whether the property traded was mortgaged or not
                justTraded(tradee, propertiesHolder[traderOffers[i]]);
            }
            
        }

        //This is the same as above but for the tradee
        for(var i = 0; i < tradeeOffers.length; i++) {
            if(tradeeOffers[i].substring(6, 10) == "Jail") {
                trader.getOutOfJail++;
                tradee.getOutOfJail--;
            } else if(tradeeOffers[i].substring(0, 7) == "capital") {
                trader.money += parseInt(document.getElementById(traderOffers[i]).innerHTML);
                tradee.money -= parseInt(document.getElementById(traderOffers[i]).innerHTML);
            } else {
                properties[propertiesHolder[tradeeOffers[i]]].owner = trader;
                removeFromTradeeAssets.push(propertiesHolder[tradeeOffers[i]]);
                trader.assets.push(propertiesHolder[tradeeOffers[i]]);
                if(properties[propertiesHolder[tradeeOffers[i]]].type == "colour") {
                    tradeeColourHolder.push(propertiesHolder[tradeeOffers[i]]);
                    trader.properties[properties[propertiesHolder[tradeeOffers[i]]].colour].push(propertiesHolder[tradeeOffers[i]]);
                } else if(properties[propertiesHolder[tradeeOffers[i]]].type == "railroad") {
                    tradeeRailHolder.push(propertiesHolder[tradeeOffers[i]]);
                    trader.properties[properties[propertiesHolder[tradeeOffers[i]]].type].push(propertiesHolder[tradeeOffers[i]]);
                } else if(properties[propertiesHolder[tradeeOffers[i]]].type == "utility") {
                    tradeeUtilHolder.push(propertiesHolder[tradeeOffers[i]]);
                    trader.properties["utilities"].push(propertiesHolder[tradeeOffers[i]]);
                }
                justTraded(trader, propertiesHolder[tradeeOffers[i]]);
            }
        }
        
        //Here is where we delete the properties from the old owner's object
        var assetsHolder = [];
        for(var i = 0; i < trader.assets.length; i++) {
            //This removes them from the assets list
            var keep = true;
            for(var j = 0; j < removeFromTraderAssets.length; j++) {
                //If the property matches any of the ones in the remove list, then it is not 
                //added into the list that replaces the player's assets
                if(trader.assets[i] == removeFromTraderAssets[j]) {
                    keep = false;
                    break;
                }
            }
            if(keep) {
                assetsHolder.push(trader.assets[i]);
            }
        }
        trader.assets = assetsHolder;

        //This does the same job as above but for the colours folders in the player.properties dictionary
        for(var i = 0; i < traderColourHolder.length; i++) {
            var keepingThisColour = [];
            for(var j = 0; j < trader.properties[properties[traderColourHolder[i]].colour].length; j++) {
                //Adding every property that isn't in the removing list into teh list that will replace the
                //corresponding one in the player.propertis dictionary
                if(trader.properties[properties[traderColourHolder[i]].colour][j] != traderColourHolder[i]) {
                    keepingThisColour.push(trader.properties[properties[traderColourHolder[i]].colour][j]);
                }
            }
            trader.properties[properties[traderColourHolder[i]].colour] = keepingThisColour;
        }

        //Same as above just for railroads
        for(var i = 0; i < traderRailHolder.length; i++) {
            var keepingThisRail = [];
            for(var j = 0; j < trader.properties["railroad"].length; j++) {
                if(trader.properties["railroad"][j] != traderRailHolder[i]) {
                    keepingThisRail.push(trader.properties["railroad"][j]);
                }
            }
            trader.properties["railroad"] = keepingThisRail;
        }

        //Again but for utilities
        for(var i = 0; i < traderUtilHolder.length; i++) {
            var keepingThisRound = [];

            for(var j = 0; j < trader.properties["utilities"].length; j++) {
                if(trader.properties["utilities"][j] != traderUtilHolder[i]) {
                    keepingThisRound.push(trader.properties["utilities"][j]);
                }
            }
            trader.properties["utilities"] = keepingThisRound;
        }

        //And now just repeating it for the tradee
        assetsHolder = [];
        for(var i = 0; i < tradee.assets.length; i++) {
            var keep = true;
            for(var j = 0; j < removeFromTradeeAssets.length; j++) {
                if(tradee.assets[i] == removeFromTradeeAssets[j]) {
                    keep = false;
                    break;
                }
            }
            if(keep) {
                assetsHolder.push(tradee.assets[i]);
            }
        }
        tradee.assets = assetsHolder;
        
        for(var i = 0; i < tradeeColourHolder.length; i++) {
            var keepingThisColour = [];
            for(var j = 0; j < tradee.properties[properties[tradeeColourHolder[i]].colour].length; j++) {
                if(tradee.properties[properties[tradeeColourHolder[i]].colour][j] != tradeeColourHolder[i]) {
                    keepingThisColour.push(tradee.properties[properties[tradeeColourHolder[i]].colour][j]);
                }
            }
            tradee.properties[properties[tradeeColourHolder[i]].colour] = keepingThisColour;
        }

        for(var i = 0; i < tradeeRailHolder.length; i++) {
            var keepingThisRail = [];
            for(var j = 0; j < tradee.properties["railroad"].length; j++) {
                if(tradee.properties["railroad"][j] != tradeeRailHolder[i]) {
                    keepingThisRail.push(tradee.properties["railroad"][j]);
                }
            }
            tradee.properties["railroad"] = keepingThisRail;
        }

        for(var i = 0; i < tradeeUtilHolder.length; i++) {
            var keepingThisRound = [];
            for(var j = 0; j < tradee.properties["utilities"].length; j++) {
                if(tradee.properties["utilities"][j] != tradeeUtilHolder[i]) {
                    keepingThisRound.push(tradee.properties["utilities"][j]);
                }
            }
            tradee.properties["utilities"] = keepingThisRound;
        }

        removeTradeGUI(enabledButton);
    }

    function removeTradeGUI(enabledButton) {
        //Just removing the GUI and reenabling the appropriate button
        var trade = document.getElementById("tradeOuter");
        trade.parentNode.removeChild(trade);
        document.getElementById(enabledButton).removeAttribute("disabled");
        enableBuildButton();
    }

    function checkIfStillBankrupt(playerObj) {
        //This checks if the player is still bankrupt after doing something to gain money during bankruptcy
        if(playerObj.money <= 0) {
            bankrupt(playerObj);
        } else {
            enableButton("endTurn");
        }
    }

    function bankrupt(playerObj) {
        var cur_pos = playerObj.position;
        /*
        * During the set up of the GUI, it checks whether the player can actually get unbankrupt,
        * returning true or false depending
        */
        if(!setUpBankruptGUI(playerObj)) {
            //All of these positions are the ones that are unownable
            if(cur_pos != "0000" || cur_pos != "0002" || cur_pos != "0004" || cur_pos != "0007" || cur_pos != "0010" || cur_pos != "0710" || cur_pos != "1010" || cur_pos != "1008" || cur_pos != "1000" || cur_pos != "0700" ||cur_pos != "0400" || cur_pos != "0200") {
                if(properties[cur_pos].owner != null && properties[cur_pos].owner != playerObj) {
                    //Must give the owner of this tile all of the player's properties
                    for(var i = 0; i < playerObj.assets.length; i++) {
                        //Setting the new owner in the property dictionary
                        properties[playerObj.assets[i]].owner = properties[cur_pos].owner;
                        //Adding it to the new owner's assets
                        properties[cur_pos].owner.assets.push(playerObj.assets[i]);
                        //Adding it to the appropriate field in the player.properties dictionary
                        if(properties[playerObj.assets[i]].type == "colour") {
                            properties[cur_pos].owner.properties[properties[playerObj.assets[i]].colour].push(playerObj.assets[i]);
                        } else if(properties[playerObj.assets[i]].type == "railroad") {
                            properties[cur_pos].owner.properties["railroad"].push(playerObj.assets[i]);
                        } else if(properties[playerObj.assets[i]].type == "utility") {
                            properties[cur_pos].owner.properties["utilities"].push(playerObj.assets[i]);
                        }
                    }
                    //Removes the player from the game (off the board)
                    removePlayer(playerObj);
                } else {
                    //Must auction off all properties
                    //This is the number of properties to auction off
                    numberOfAuctions = playerObj.assets.length-1;
                    //This is for checking whether we need to check if the player is still bankrupt in auction
                    currentlyBankrupting = true;
                    bankruptingPlayer = playerObj;
                    bankruptcyAuction(playerObj);
                }
            }
        }
    }

    function setUpBankruptGUI(playerObj) {
        /*
        * This function decides whether the player is able to try and bail themselves out of bankruptcy
        * or not. It gets all their mortgagable properties, their deveoped properties so they can sell
        * the houses, and their jail cards. It also returns false if they have nothing
        */
        var mortgagableProperties = getMortgagableProperties(playerObj);
        var propertiesWithHouses = getPropertiesWithHouse(playerObj, mortgagableProperties);
        var numberOfJailCards = playerObj.getOutOfJail;

        //You don't need to check if tehy have any houses because if they must have a mortgagable
        //property in order to have houses
        if(mortgagableProperties.length > 0 || numberOfJailCards > 0) {
            //This is just creating the mortgaging div
            if(mortgagableProperties.length > 0) {
                var mortgagablePropetiesHolder = document.createElement("div");
                mortgagablePropetiesHolder.id = "mortgagablePropetiesHolder";
                mortgagablePropetiesHolder.style.position = "absolute";
                mortgagablePropetiesHolder.style.height = "145px";
                mortgagablePropetiesHolder.style.width = "250px";
                if(mortgagableProperties.length > 1) {
                    if(mortgagableProperties.length > 2) {
                        mortgagablePropetiesHolder.style.overflowX = "hidden";
                        mortgagablePropetiesHolder.style.overflowY = "scroll";
                    }
                } else {
                    mortgagablePropetiesHolder.style.height = "100px";
                }
                mortgagablePropetiesHolder.style.top = "100px";
                mortgagablePropetiesHolder.style.left = "50px";
                mortgagablePropetiesHolder.style.border = "5px solid black";
                mortgagablePropetiesHolder.style.borderRadius = "10px";
                mortgagablePropetiesHolder.style.backgroundColor = "#00001a";
                document.getElementById("body").appendChild(mortgagablePropetiesHolder);

                var mortgageLabel = document.createElement("label");
                mortgageLabel.id = "mortgageLabel";
                mortgageLabel.style.height = "50px";
                mortgageLabel.style.width = "250px";
                mortgageLabel.style.position = "absolute";
                mortgageLabel.style.left = "0px";
                mortgageLabel.style.top = "0px";
                mortgageLabel.style.backgroundColor = "black";
                mortgageLabel.innerHTML = "MORTGAGE PROPERTY";
                mortgageLabel.style.textAlign = "center";
                mortgageLabel.style.color = "white";
                mortgageLabel.style.verticalAlign = "middle";
                mortgageLabel.style.lineHeight = "50px";
                document.getElementById("mortgagablePropetiesHolder").appendChild(mortgageLabel);

                for(var i = 0; i < mortgagableProperties.length; i++ ) {
                    //Adding the mortgagable properties to the mortgage div
                    var propertyButton = document.createElement("button");
                    propertyButton.id = mortgagableProperties[i];
                    propertyButton.innerHTML = properties[mortgagableProperties[i]].name.toUpperCase();
                    propertyButton.style.top = (55 + ((40 * i) + (5 * i))).toString().concat("px");;
                    propertyButton.style.left = "10px";
                    propertyButton.style.width = "220px";
                    propertyButton.style.height = "40px";
                    propertyButton.style.position = "absolute";
                    propertyButton.style.borderRadius = "10px";
                    propertyButton.style.backgroundColor = "#0099ff";
                    propertyButton.style.borderColor = "black";
                    propertyButton.style.fontSize = "20px";
                    propertyButton.style.fontFamily = "bold";
                    document.getElementById("mortgagablePropetiesHolder").appendChild(propertyButton);
                    propertyButton.addEventListener("click", mortgage.bind(null, playerObj, propertyButton.id), false);
                }
            }

            if(propertiesWithHouses.length > 0) {
                //Now setting up the sellable houses div
                var housesHolder = document.createElement("div");
                housesHolder.id = "housesHolder";
                housesHolder.style.position = "absolute";
                housesHolder.style.height = "145px";
                housesHolder.style.width = "250px";
                if(propertiesWithHouses.length > 1) {
                    if(propertiesWithHouses.length > 2) {
                        housesHolder.style.overflowX = "hidden";
                        housesHolder.style.overflowY = "scroll";
                    }
                } else {
                    housesHolder.style.height = "100px";
                }
                if(mortgagableProperties.length > 0) {
                    housesHolder.style.top = (120 + parseInt((document.getElementById("mortgagablePropetiesHolder").style.height).substring(0, 3))).toString().concat("px");
                } else {
                    housesHolder.style.top = "155px";
                }
                housesHolder.style.left = "50px";
                housesHolder.style.border = "5px solid black";
                housesHolder.style.borderRadius = "10px";
                housesHolder.style.backgroundColor = "#00001a";
                document.getElementById("body").appendChild(housesHolder);

                var houseLabel = document.createElement("label");
                houseLabel.id = "houseLabel";
                houseLabel.style.height = "50px";
                houseLabel.style.width = "250px";
                houseLabel.style.position = "absolute";
                houseLabel.style.left = "0px";
                houseLabel.style.top = "0px";
                houseLabel.style.backgroundColor = "black";
                houseLabel.innerHTML = "SELL HOUSE";
                houseLabel.style.textAlign = "center";
                houseLabel.style.color = "white";
                houseLabel.style.verticalAlign = "middle";
                houseLabel.style.lineHeight = "50px";
                document.getElementById("housesHolder").appendChild(houseLabel);

                for(var i = 0; i < propertiesWithHouses.length; i++) {
                    //Adding the properties with sellable houses
                    var propertyButton = document.createElement("button");
                    propertyButton.id = propertiesWithHouses[i].concat("Houses");
                    propertyButton.innerHTML = properties[propertiesWithHouses[i]].name.toUpperCase();
                    propertyButton.style.top = (55 + ((40 * i) + (5 * i))).toString().concat("px");;
                    propertyButton.style.left = "10px";
                    propertyButton.style.width = "220px";
                    propertyButton.style.height = "40px";
                    propertyButton.style.position = "absolute";
                    propertyButton.style.borderRadius = "10px";
                    propertyButton.style.backgroundColor = "#0099ff";
                    propertyButton.style.borderColor = "black";
                    propertyButton.style.fontSize = "20px";
                    propertyButton.style.fontFamily = "bold";
                    document.getElementById("housesHolder").appendChild(propertyButton);
                    propertyButton.addEventListener("click", removeNumberOfHouses.bind(null, playerObj, propertyButton.id.substring(0, 4)), false);
                }
            }

            if(numberOfJailCards > 0) {
                //Now just adding any jail cards that can be sold
                var jailCardsHolder = document.createElement("div");
                jailCardsHolder.id = "jailCardsHolder";
                jailCardsHolder.style.position = "absolute";
                jailCardsHolder.style.height = "145px";
                jailCardsHolder.style.width = "250px";
                if(numberOfJailCards > 1) {
                    if(numberOfJailCards > 2) {
                        jailCardsHolder.style.overflowX = "hidden";
                        jailCardsHolder.style.overflowY = "scroll";
                    }
                } else {
                    jailCardsHolder.style.height = "100px";
                }
                var distanceFromTop = 295;
                if(propertiesWithHouses.length > 0) {
                    distanceFromTop += parseInt((document.getElementById("housesHolder").style.height).substring(0, 3));
                }
                jailCardsHolder.style.top = distanceFromTop.toString().concat("px");
                jailCardsHolder.style.left = "50px";
                jailCardsHolder.style.border = "5px solid black";
                jailCardsHolder.style.borderRadius = "10px";
                jailCardsHolder.style.backgroundColor = "#00001a";
                document.getElementById("body").appendChild(jailCardsHolder);
    
                var jailCardsLabel = document.createElement("label");
                jailCardsLabel.id = "jailCardsLabel";
                jailCardsLabel.style.height = "50px";
                jailCardsLabel.style.width = "250px";
                jailCardsLabel.style.position = "absolute";
                jailCardsLabel.style.left = "0px";
                jailCardsLabel.style.top = "0px";
                jailCardsLabel.style.backgroundColor = "black";
                jailCardsLabel.innerHTML = "SELL JAIL CARDS";
                jailCardsLabel.style.textAlign = "center";
                jailCardsLabel.style.color = "white";
                jailCardsLabel.style.verticalAlign = "middle";
                jailCardsLabel.style.lineHeight = "50px";
                document.getElementById("jailCardsHolder").appendChild(jailCardsLabel);
    
                for(var i = 0; i < numberOfJailCards; i++) {
                    var jailButton = document.createElement("button");
                    jailButton.id = "jailCard"[i].concat(i.toString());
                    jailButton.innerHTML = "JAIL CARD";
                    jailButton.style.top = (55 + ((40 * i) + (5 * i))).toString().concat("px");;
                    jailButton.style.left = "10px";
                    jailButton.style.width = "220px";
                    jailButton.style.height = "40px";
                    jailButton.style.position = "absolute";
                    jailButton.style.borderRadius = "10px";
                    jailButton.style.backgroundColor = "#0099ff";
                    jailButton.style.borderColor = "black";
                    jailButton.style.fontSize = "20px";
                    jailButton.style.fontFamily = "bold";
                    document.getElementById("jailCardsHolder").appendChild(jailButton);
                    jailButton.addEventListener("click", sellJailCard.bind(null, playerObj), false);
                }
            }

            return true;
        } else {
            return false;
        }
    }

    function removeBankruptGUI() {
        //Just removes the bankrupt GUI
        if(document.getElementById("mortgagablePropetiesHolder")) {
            var mortgagableHolder = document.getElementById("mortgagablePropetiesHolder");
            mortgagableHolder.parentNode.removeChild(mortgagableHolder);
        }

        if(document.getElementById("housesHolder")) {
            var housesHolder = document.getElementById("housesHolder");
            housesHolder.parentNode.removeChild(housesHolder);
        }

        if(document.getElementById("jailCardsHolder")) {
            var jailCardsHolder = document.getElementById("jailCardsHolder");
            jailCardsHolder.parentNode.removeChild(jailCardsHolder);
        }
    }

    function sellJailCard(playerObj) {
        removeBankruptGUI();
        playerObj.money += 100;
        playerObj.getOutOfJail--;
        checkIfStillBankrupt(playerObj);
    }

    function getMortgagableProperties(playerObj) {
        //This returns a list of all the properties that the player can mortgage
        mortgagableProperties = [];
        for(var i = 0; i < playerObj.assets.length; i++) {
            if(!properties[playerObj.assets[i]].mortgaged) {
                mortgagableProperties.push(playerObj.assets[i]);
            }
        }
        return mortgagableProperties;
    }

    function removeNumberOfHouses(playerObj, tileID) {
        removeBankruptGUI();
        //unPlaceHouse removes the house image from the tile and decrements the number of houses
        unPlaceHouse(tileID);
        checkIfStillBankrupt(playerObj);
    }

    function getPropertiesWithHouse(playerObj, propertiesList) {
        //This returns a list of all the properties that have houses and are able to be removed. A
        //house is able to be removed if by removing it you do not create a house gap of more than 
        //one with any other property of the same colour set
        propertiesWithHouses = [];
        for(var i = 0; i < propertiesList.length; i++) {
            if(properties[propertiesList[i]].numberOfHouses > 0 && checkIfAbleToRemoveHouse(playerObj, propertiesList[i])) {
                propertiesWithHouses.push(propertiesList[i]);
            }
        }
        return propertiesWithHouses;
    }

    function bankruptcyAuction(playerObj) {
        //Had to create a separate bankruptcy auction set up to go through all the properties
        if(numberOfAuctions >= 0) {
            var outerAuction = document.createElement("div");
            outerAuction.id = "outerAuction";
            outerAuction.style.position = "absolute";
            outerAuction.style.width = "220px";
            outerAuction.style.height = "440px";
            outerAuction.style.top = "35%";
            outerAuction.style.left = "5%";
            outerAuction.style.border = "5px solid black";
            outerAuction.style.borderRadius = "10px";
            outerAuction.style.backgroundColor = "#00001a";
            document.getElementById("body").appendChild(outerAuction);

            var innerAuction = document.createElement("div");
            innerAuction.id = "innerAuction";
            innerAuction.style.position = "absolute";
            innerAuction.style.width = "220px";
            innerAuction.style.height = "370px";
            innerAuction.style.top = "35%";
            innerAuction.style.left = "5%";
            innerAuction.style.border = "5px solid black";
            innerAuction.style.borderRadius = "10px";
            innerAuction.style.backgroundColor = "#00001a";
            document.getElementById("body").appendChild(innerAuction);

            var bidLabel = document.createElement("label");
            bidLabel.id = "bidLabel";
            bidLabel.innerHTML = "CURRENT BID:<br>".concat(properties[players[turn].position].price * 0.2);
            bidLabel.style.top = "10px";
            bidLabel.style.width = "200px";
            bidLabel.style.height = "50px";
            bidLabel.style.position = "absolute";
            bidLabel.style.borderRadius = "10px";
            bidLabel.style.backgroundColor = "#c2c2a3";
            bidLabel.style.borderColor = "black";
            bidLabel.style.left = "10px";
            bidLabel.style.fontSize = "20px";
            bidLabel.style.fontFamily = "bold";
            bidLabel.style.textAlign = "center";
            document.getElementById("innerAuction").appendChild(bidLabel);

            var bidderLabel = document.createElement("label");
            bidderLabel.id = "bidderLabel";
            bidderLabel.innerHTML = "CURRENT BIDDER:<br>";
            bidderLabel.style.top = "70px";
            bidderLabel.style.width = "200px";
            bidderLabel.style.height = "50px";
            bidderLabel.style.position = "absolute";
            bidderLabel.style.borderRadius = "10px";
            bidderLabel.style.backgroundColor = "#c2c2a3";
            bidderLabel.style.borderColor = "black";
            bidderLabel.style.left = "10px";
            bidderLabel.style.fontSize = "20px";
            bidderLabel.style.fontFamily = "bold";
            bidderLabel.style.textAlign = "center";
            document.getElementById("innerAuction").appendChild(bidderLabel);

            var bidOneButton = document.createElement("button");
            bidOneButton.id = "bidOne";
            bidOneButton.innerHTML = "BID &euro;1";
            bidOneButton.style.top = "130px";
            bidOneButton.style.width = "200px";
            bidOneButton.style.height = "50px";
            bidOneButton.style.position = "absolute";
            bidOneButton.style.borderRadius = "10px";
            bidOneButton.style.backgroundColor = "#0099ff";
            bidOneButton.style.borderColor = "black";
            bidOneButton.style.left = "10px";
            bidOneButton.style.fontSize = "20px";
            bidOneButton.style.fontFamily = "bold";
            document.getElementById("innerAuction").appendChild(bidOneButton);
            bidOneButton.addEventListener("click", bidOneClicked, false);

            var bidTenButton = document.createElement("button");
            bidTenButton.id = "bidTen";
            bidTenButton.innerHTML = "BID &euro;10";
            bidTenButton.style.top = "190px";
            bidTenButton.style.width = "200px";
            bidTenButton.style.height = "50px";
            bidTenButton.style.position = "absolute";
            bidTenButton.style.borderRadius = "10px";
            bidTenButton.style.backgroundColor = "#0099ff";
            bidTenButton.style.borderColor = "black";
            bidTenButton.style.left = "10px";
            bidTenButton.style.fontSize = "20px";
            bidTenButton.style.fontFamily = "bold";
            document.getElementById("innerAuction").appendChild(bidTenButton);
            bidTenButton.addEventListener("click", bidTenClicked, false);

            var bidHundredButton = document.createElement("button");
            bidHundredButton.id = "bidHundred";
            bidHundredButton.innerHTML = "BID &euro;100";
            bidHundredButton.style.top = "250px";
            bidHundredButton.style.width = "200px";
            bidHundredButton.style.height = "50px";
            bidHundredButton.style.position = "absolute";
            bidHundredButton.style.borderRadius = "10px";
            bidHundredButton.style.backgroundColor = "#0099ff";
            bidHundredButton.style.borderColor = "black";
            bidHundredButton.style.left = "10px";
            bidHundredButton.style.fontSize = "20px";
            bidHundredButton.style.fontFamily = "bold";
            document.getElementById("innerAuction").appendChild(bidHundredButton);
            bidHundredButton.addEventListener("click", bidHundredClicked, false);

            var withdrawButton = document.createElement("button");
            withdrawButton.id = "withdraw";
            withdrawButton.innerHTML = "WITHDRAW";
            withdrawButton.style.top = "310px";
            withdrawButton.style.width = "200px";
            withdrawButton.style.height = "50px";
            withdrawButton.style.position = "absolute";
            withdrawButton.style.borderRadius = "10px";
            withdrawButton.style.backgroundColor = "#0099ff";
            withdrawButton.style.borderColor = "black";
            withdrawButton.style.left = "10px";
            withdrawButton.style.fontSize = "20px";
            withdrawButton.style.fontFamily = "bold";
            document.getElementById("innerAuction").appendChild(withdrawButton);
            withdrawButton.addEventListener("click", withdrawClicked, false);

            var playerBiddingLabel = document.createElement("label");
            playerBiddingLabel.id = "playerBiddingLabel";
            var turnPlusOne;
            if(turn < numPlayers-1) {
                turnPlusOne = turn + 1;
            } else {
                turnPlusOne = 0;
            }
            playerBiddingLabel.innerHTML = players[turnPlusOne].name;
            playerBiddingLabel.style.bottom = "10px";
            playerBiddingLabel.style.width = "200px";
            playerBiddingLabel.style.height = "50px";
            playerBiddingLabel.style.position = "absolute";
            playerBiddingLabel.style.borderRadius = "10px";
            playerBiddingLabel.style.backgroundColor = "#c2c2a3";
            playerBiddingLabel.style.borderColor = "black";
            playerBiddingLabel.style.left = "10px";
            playerBiddingLabel.style.fontSize = "20px";
            playerBiddingLabel.style.fontFamily = "bold";
            playerBiddingLabel.style.verticalAlign = "middle";
            playerBiddingLabel.style.lineHeight = "50px";
            playerBiddingLabel.style.textAlign = "center";
            document.getElementById("outerAuction").appendChild(playerBiddingLabel);

            auctionStarter = players[turn];
            currentAuction = [0, playerObj.assets[numberOfAuctions]];
            currentBid = properties[playerObj.assets[numberOfAuctions]].price * 0.2; //Starting bid is 10% of price
            for(var i = 0; i < numPlayers; i++) {
                //Adding the players to the auction
                if(players[i] == playerObj) {
                    continue;
                } else {
                    //Add them to the auction
                    if(players[i].money > currentBid) {
                        currentAuction.push({player: players[i], stillIn: true});
                        currentAuction[0]++;
                    } else {
                        currentAuction.push({player: players[i], stillIn: false});
                    }
                }
            }
            currentBidder = 2;
            checkAuctionAtStart();
        } else {
            //Remove player from the game
            console.log("Bankrupt player: " + playerObj.name);
            setTimeout(function() {
                //Had to set a timeout because currentlyBankrupting was causing issues
                numberOfAuctions = null;
                currentlyBankrupting = false;
                bankruptingPlayer = null;
                removePlayer(playerObj);
            }, 800);
        }
    }

    function removePlayer(playerObj) {
        //Removes the player from the game and cleans up the players list
        var playersTemp = [];
        for(var i = 0; i < numPlayers; i++) {
            if(players[i] == playerObj) {
                continue;
            } else {
                playersTemp.push(players[i]);
            }
        }
        players = playersTemp;
        playerObj.id.parentNode.removeChild(playerObj.id);
        numPlayers--;
        enableButton("rollDice");
    }

    function showMortgageableProps() {
        /*
        * This is used for show casing which properties the player can currently mortgage. All it takes
        * is for the player to own th eproperty and for it not to be mortgaged already. It also takes 
        * the already mortgaged properties and keeps track of them so the player can buy them back from
        * the bank
        */
        document.getElementById("showMortgageButton").setAttribute("disabled", "disabled");

        var mortgagedProperties = [];

        for(var i = 0; i < players[turn].assets.length; i++) {
            if(!properties[players[turn].assets[i]].mortgaged) {
                qualifiedTiles.push(players[turn].assets[i]);
            } else {
                mortgagedProperties.push(players[turn].assets[i]);
            }
        }

        //Setting up the GUI
        var mortgageHolder = document.createElement("div");
        mortgageHolder.id = "mortgageHolder";
        mortgageHolder.style.position = "absolute";
        mortgageHolder.style.height = "155px";
        mortgageHolder.style.width = "240px";
        if(qualifiedTiles.length > 1) {
            if(qualifiedTiles.length > 2) {
                mortgageHolder.style.overflowX = "hidden";
                mortgageHolder.style.overflowY = "scroll";
                mortgageHolder.style.width = "250px";
            }
        } else {
            mortgageHolder.style.height = "100px";
        }
        mortgageHolder.style.top = "250px";
        mortgageHolder.style.left = "50px";
        mortgageHolder.style.border = "5px solid black";
        mortgageHolder.style.borderRadius = "10px";
        mortgageHolder.style.backgroundColor = "#00001a";
        document.getElementById("body").appendChild(mortgageHolder);

        var mortgageLabel = document.createElement("label");
        mortgageLabel.id = "mortgageLabel";
        mortgageLabel.style.height = "50px";
        mortgageLabel.style.width = "240px";
        mortgageLabel.style.position = "absolute";
        mortgageLabel.style.left = "0px";
        mortgageLabel.style.top = "0px";
        mortgageLabel.style.backgroundColor = "black";
        mortgageLabel.innerHTML = "MORTGAGE PROPERTY";
        mortgageLabel.style.textAlign = "center";
        mortgageLabel.style.color = "white";
        mortgageLabel.style.verticalAlign = "middle";
        mortgageLabel.style.lineHeight = "50px";
        document.getElementById("mortgageHolder").appendChild(mortgageLabel);

        var cancelBuildButton = document.createElement("button");
        cancelBuildButton.id = "cancelMortgage";
        cancelBuildButton.style.width = "15px";
        cancelBuildButton.style.height = "15px";
        cancelBuildButton.style.backgroundImage = "url('images/cancel.png')";
        cancelBuildButton.style.backgroundSize = "11px 11px";
        cancelBuildButton.style.borderRadius = "5px";
        cancelBuildButton.style.position = "absolute";
        cancelBuildButton.style.left = "50px";
        cancelBuildButton.style.top = "250px";
        document.getElementById("body").appendChild(cancelBuildButton);
        cancelBuildButton.addEventListener("click", resetMortgageableProperties, false);

        if(qualifiedTiles.length == 0) {
            //Just show that there are no mortgagable properties 
            var propertyButton = document.createElement("button");
            propertyButton.id = qualifiedTiles[i];
            propertyButton.innerHTML = "NO PROPERTIES AVAILABLE";
            propertyButton.style.top = "55px";
            propertyButton.style.left = "10px";
            propertyButton.style.width = "220px";
            propertyButton.style.height = "40px";
            propertyButton.style.position = "absolute";
            propertyButton.style.borderRadius = "10px";
            propertyButton.style.backgroundColor = "#c2c2a3";
            propertyButton.style.borderColor = "black";
            propertyButton.style.fontSize = "16px";
            propertyButton.style.fontFamily = "bold";
            document.getElementById("mortgageHolder").appendChild(propertyButton);
        } else {
            for(var i = 0; i < qualifiedTiles.length; i++) {
                //Otherwise add al of them to the GUI
                var propertyButton = document.createElement("button");
                propertyButton.id = qualifiedTiles[i];
                propertyButton.innerHTML = properties[qualifiedTiles[i]].name.toUpperCase();
                propertyButton.style.top = (55 + ((40 * i) + (5 * i))).toString().concat("px");;
                propertyButton.style.left = "10px";
                propertyButton.style.width = "220px";
                propertyButton.style.height = "40px";
                propertyButton.style.position = "absolute";
                propertyButton.style.borderRadius = "10px";
                propertyButton.style.backgroundColor = "#0099ff";
                propertyButton.style.borderColor = "black";
                propertyButton.style.fontSize = "20px";
                propertyButton.style.fontFamily = "bold";
                document.getElementById("mortgageHolder").appendChild(propertyButton);
                propertyButton.addEventListener("click", mortgage.bind(null, players[turn], propertyButton.id), false);
            }
        }
        
        //Doing the same for the already mortgaged properties
        if(mortgagedProperties.length > 0) {
            var mortgagedPropertiesHolder = document.createElement("div");
            mortgagedPropertiesHolder.id = "mortgagedPropertiesHolder";
            mortgagedPropertiesHolder.style.position = "absolute";
            mortgagedPropertiesHolder.style.height = "155px";
            mortgagedPropertiesHolder.style.width = "240px";
            if(mortgagedProperties.length > 1) {
                if(mortgagedProperties.length > 2) {
                    mortgagedPropertiesHolder.style.overflowX = "hidden";
                    mortgagedPropertiesHolder.style.overflowY = "scroll";
                    mortgagedPropertiesHolder.style.width = "250px";
                }
            } else {
                mortgagedPropertiesHolder.style.height = "100px";
            }
            mortgagedPropertiesHolder.style.top = (250 + parseInt((document.getElementById("mortgageHolder").style.height).substring(0, 3)) + 20 + qualifiedTiles.length).toString().concat("px");
            mortgagedPropertiesHolder.style.left = "50px";
            mortgagedPropertiesHolder.style.border = "5px solid black";
            mortgagedPropertiesHolder.style.borderRadius = "10px";
            mortgagedPropertiesHolder.style.backgroundColor = "#00001a";
            document.getElementById("body").appendChild(mortgagedPropertiesHolder);

            var mortgagePropertiesLabel = document.createElement("label");
            mortgagePropertiesLabel.id = "mortgagePropertiesLabel";
            mortgagePropertiesLabel.style.height = "50px";
            mortgagePropertiesLabel.style.width = "240px";
            mortgagePropertiesLabel.style.position = "absolute";
            mortgagePropertiesLabel.style.left = "0px";
            mortgagePropertiesLabel.style.top = "0px";
            mortgagePropertiesLabel.style.backgroundColor = "black";
            mortgagePropertiesLabel.innerHTML = "BUY BACK PROPERTY";
            mortgagePropertiesLabel.style.textAlign = "center";
            mortgagePropertiesLabel.style.color = "white";
            mortgagePropertiesLabel.style.verticalAlign = "middle";
            mortgagePropertiesLabel.style.lineHeight = "50px";
            document.getElementById("mortgagedPropertiesHolder").appendChild(mortgagePropertiesLabel);

            for(var i = 0; i < mortgagedProperties.length; i++) {
                var propertyButton = document.createElement("button");
                propertyButton.id = mortgagedProperties[i];
                propertyButton.innerHTML = properties[mortgagedProperties[i]].name.toUpperCase();
                propertyButton.style.top = (55 + ((40 * i) + (5 * i))).toString().concat("px");;
                propertyButton.style.left = "10px";
                propertyButton.style.width = "220px";
                propertyButton.style.height = "40px";
                propertyButton.style.position = "absolute";
                propertyButton.style.borderRadius = "10px";
                propertyButton.style.backgroundColor = "#0099ff";
                propertyButton.style.borderColor = "black";
                propertyButton.style.fontSize = "20px";
                propertyButton.style.fontFamily = "bold";
                document.getElementById("mortgagedPropertiesHolder").appendChild(propertyButton);
                propertyButton.addEventListener("click", sellBack.bind(null, players[turn], propertyButton.id), false);
            }
        }
    }

    function resetMortgageableProperties() {
        clearMortgageGUI();
        enableBuildButton();
    }

    function clearMortgageGUI() {
        //Just clears the mortgage GUI
        var mortgageHolder = document.getElementById("mortgageHolder");
        mortgageHolder.parentNode.removeChild(mortgageHolder);
        var cancel = document.getElementById("cancelMortgage");
        cancel.parentElement.removeChild(cancel);
        if(document.getElementById("mortgagedPropertiesHolder")) {
            var mortgaged = document.getElementById("mortgagedPropertiesHolder");
            mortgaged.parentNode.removeChild(mortgaged);
        }
        qualifiedTiles = [];
    }

    function sellBack(playerObj, tileID) {
        //This function allows the player to buy back their property from the bank
        var cost = properties[tileID].price * 1.1;

        if(playerObj.money < cost) {
            alert(playerObj.name + " cannot afford to buy this property back");
        } else {
            playerObj.money -= cost;
            properties[tileID].mortgaged = false;
        }
        resetMortgageableProperties();
    }

    function offerTradeClicked(tileID) {
        //This is for that thing that comes up in the corner when hovering over a tile that is owned
        removeOwnerLabel();
        alert("Player wants to trade for " + tileID);
    }

    function removeOwnerLabel() {
        //Removes the label that pops up
        var tile = document.getElementById("owner");
        tile.parentNode.removeChild(tile);
        var button = document.getElementById("offerTrade");
        button.parentNode.removeChild(button);
        var cancel = document.getElementById("removeLabel");
        cancel.parentNode.removeChild(cancel);
    }

    function dropStatsDownOrUp() {
        //This is the function that shows or hides the player's stats in the game
        if(document.getElementById("toggle").up) {
            var statsHolder = document.createElement("div");
            statsHolder.id = "statsHolder";
            statsHolder.style.position = "absolute";
            statsHolder.style.width = "230px";
            statsHolder.style.height = "150px";
            statsHolder.style.top = "45px";
            statsHolder.style.right = "4%";
            statsHolder.style.border = "5px solid black";
            statsHolder.style.borderRadius = "10px";
            statsHolder.style.backgroundColor = "#00001a";
            statsHolder.style.overflowY = "scroll";
            document.getElementById("body").appendChild(statsHolder);

            var nameLabel = document.createElement("label");
            nameLabel.innerHTML = "Name: " + players[turn].name;
            nameLabel.style.position = "absolute";
            nameLabel.style.height = "25px";
            nameLabel.style.width = "200px";
            nameLabel.style.left = "10px";
            nameLabel.style.top = "10px";
            nameLabel.style.backgroundColor = "#0099ff";
            nameLabel.style.verticalAlign = "middle";
            nameLabel.style.lineHeight = "25px";
            nameLabel.style.borderRadius = "5px";
            document.getElementById("statsHolder").appendChild(nameLabel);

            var iconLabel = document.createElement("label");
            iconLabel.id = "iconLabel";
            iconLabel.innerHTML = "Icon: " + players[turn].id.alt;
            iconLabel.style.position = "absolute";
            iconLabel.style.height = "25px";
            iconLabel.style.width = "200px";
            iconLabel.style.left = "10px";
            iconLabel.style.top = "45px";
            iconLabel.style.backgroundColor = "#0099ff";
            iconLabel.style.verticalAlign = "middle";
            iconLabel.style.lineHeight = "25px";
            iconLabel.style.borderRadius = "5px";
            document.getElementById("statsHolder").appendChild(iconLabel);

            var moneyLabel = document.createElement("label");
            moneyLabel.id = "moneyLabel";
            moneyLabel.innerHTML = "Money: " + players[turn].money;
            moneyLabel.style.position = "absolute";
            moneyLabel.style.height = "25px";
            moneyLabel.style.width = "200px";
            moneyLabel.style.left = "10px";
            moneyLabel.style.top = "80px";
            moneyLabel.style.backgroundColor = "#0099ff";
            moneyLabel.style.verticalAlign = "middle";
            moneyLabel.style.lineHeight = "25px";
            moneyLabel.style.borderRadius = "5px";
            document.getElementById("statsHolder").appendChild(moneyLabel);

            //Deciding on what tile the player is on
            var positionLabel = document.createElement("label");
            var pos;
            positionLabel.id = "positionLabel";
            if(players[turn].position == "0000") {
                pos = "Pass Go";
            } else if(players[turn].position == "0010") {
                if(players[turn].jailTag) {
                    pos = "Studying For Exams";
                } else {
                    pos = "Just Visiting";
                }
            } else if(players[turn].position == "1010") {
                pos = "Free Parking";
            } else if(players[turn].position == "0002" || players[turn].position == "0710" || players[turn].position == "0700") {
                pos = "Community Chest (" + players[turn].position + ")";
            } else if(players[turn].position == "0004" || players[turn].position == "0200") {
                pos = "Paying Tax (" + players[turn].position + ")";
            } else if(players[turn].position == "0007" || players[turn].position == "1008" || players[turn].position == "0400") {
                pos = "Chance (" + players[turn].position + ")";
            } else {
                pos = properties[players[turn].position].name;
            }
            positionLabel.innerHTML = "Position: " + pos;
            positionLabel.style.position = "absolute";
            positionLabel.style.height = "25px";
            positionLabel.style.width = "200px";
            positionLabel.style.left = "10px";
            positionLabel.style.top = "115px";
            positionLabel.style.backgroundColor = "#0099ff";
            positionLabel.style.verticalAlign = "middle";
            positionLabel.style.lineHeight = "25px";
            positionLabel.style.borderRadius = "5px";
            document.getElementById("statsHolder").appendChild(positionLabel);

            var jailCardLabel = document.createElement("label");
            jailCardLabel.id = "jailCardLabel";
            jailCardLabel.innerHTML = "Number of Jail Cards: " + players[turn].getOutOfJail;
            jailCardLabel.style.position = "absolute";
            jailCardLabel.style.height = "25px";
            jailCardLabel.style.width = "200px";
            jailCardLabel.style.left = "10px";
            jailCardLabel.style.top = "150px";
            jailCardLabel.style.backgroundColor = "#0099ff";
            jailCardLabel.style.verticalAlign = "middle";
            jailCardLabel.style.lineHeight = "25px";
            jailCardLabel.style.borderRadius = "5px";
            document.getElementById("statsHolder").appendChild(jailCardLabel);

            //Here is just show casing the properties the player owns
            var colourProps = [];
            var railProps = [];
            var utilProps = [];

            for(var i = 0; i < players[turn].assets.length; i++) {
                if(properties[players[turn].assets[i]].type == "colour") {
                    colourProps.push(players[turn].assets[i]);
                } else if(properties[players[turn].assets[i]].type == "railroad") {
                    railProps.push(players[turn].assets[i]);
                } else if(properties[players[turn].assets[i]].type == "utility") {
                    utilProps.push(players[turn].assets[i]);
                }
            }

            var colourPropertiesDiv = document.createElement("div");
            colourPropertiesDiv.id = "colourPropertiesDiv";
            colourPropertiesDiv.style.position = "absolute";
            colourPropertiesDiv.style.width = "200px";
            colourPropertiesDiv.style.left = "10px";
            colourPropertiesDiv.style.top = "185px";
            colourPropertiesDiv.style.backgroundColor = "#0099ff";
            colourPropertiesDiv.style.verticalAlign = "middle";
            colourPropertiesDiv.style.lineHeight = "25px";
            colourPropertiesDiv.style.borderRadius = "5px";
            document.getElementById("statsHolder").appendChild(colourPropertiesDiv);
            if(colourProps.length == 0) {
                colourPropertiesDiv.style.height = "60px";
                var nothingToDeclare = document.createElement("label");
                nothingToDeclare.id = "NoColourProps";
                nothingToDeclare.innerHTML = "No Properties To Show";
                nothingToDeclare.style.position = "absolute";
                nothingToDeclare.style.height = "25px";
                nothingToDeclare.style.width = "200px";
                nothingToDeclare.style.bottom = "0px";
                nothingToDeclare.style.alignContent.verticalAlign = "middle";
                nothingToDeclare.style.lineHeight = "25px";
                nothingToDeclare.style.borderRadius = "5px";
                document.getElementById("colourPropertiesDiv").appendChild(nothingToDeclare);
            } else {
                colourPropertiesDiv.style.height = (25 + (30 * colourProps.length)).toString().concat("px");
            }

            for(var i = 0; i < colourProps.length; i++) {
                var colourProp = document.createElement("label");
                colourProp.id = "colourProp".concat(i.toString());
                colourProp.innerHTML = properties[colourProps[i]].name + " (" + properties[colourProps[i]].colour + ")";
                colourProp.style.position = "absolute";
                colourProp.style.height = "25px";
                colourProp.style.width = "200px";
                colourProp.style.top = (25 + (30 * i)).toString().concat("px");
                colourProp.style.alignContent.verticalAlign = "middle";
                colourProp.style.lineHeight = "25px";
                colourProp.style.borderRadius = "5px";
                document.getElementById("colourPropertiesDiv").appendChild(colourProp);
            }

            var colourHeader = document.createElement("label");
            colourHeader.id = "colourHeader";
            colourHeader.innerHTML = "Colour Properties";
            colourHeader.style.color = "white";
            colourHeader.style.position = "absolute";
            colourHeader.style.height = "25px";
            colourHeader.style.width = "200px";
            colourHeader.style.backgroundColor = "black";
            colourHeader.style.alignContent.verticalAlign = "middle";
            colourHeader.style.lineHeight = "25px";
            document.getElementById("colourPropertiesDiv").appendChild(colourHeader);

            var railroadPropertiesDiv = document.createElement("div");
            railroadPropertiesDiv.id = "railroadPropertiesDiv";
            railroadPropertiesDiv.style.position = "absolute";
            railroadPropertiesDiv.style.width = "200px";
            railroadPropertiesDiv.style.left = "10px";
            if(colourProps.length == 0) {
                railroadPropertiesDiv.style.top = "255px";
            } else {
                railroadPropertiesDiv.style.top = (215 + (30 * colourProps.length)).toString().concat("px");
            }
            
            railroadPropertiesDiv.style.backgroundColor = "#0099ff";
            railroadPropertiesDiv.style.verticalAlign = "middle";
            railroadPropertiesDiv.style.lineHeight = "25px";
            railroadPropertiesDiv.style.borderRadius = "5px";
            document.getElementById("statsHolder").appendChild(railroadPropertiesDiv);
            if(railProps.length == 0) {
                railroadPropertiesDiv.style.height = "60px";
                var nothingToDeclare = document.createElement("label");
                nothingToDeclare.id = "noRailProps";
                nothingToDeclare.innerHTML = "No Railroads To Show";
                nothingToDeclare.style.position = "absolute";
                nothingToDeclare.style.height = "25px";
                nothingToDeclare.style.width = "200px";
                nothingToDeclare.style.bottom = "0px";
                nothingToDeclare.style.alignContent.verticalAlign = "middle";
                nothingToDeclare.style.lineHeight = "25px";
                nothingToDeclare.style.borderRadius = "5px";
                document.getElementById("railroadPropertiesDiv").appendChild(nothingToDeclare);
            } else {
                railroadPropertiesDiv.style.height = (25 + (30 * railProps.length)).toString().concat("px");
            }

            for(var i = 0; i < railProps.length; i++) {
                var railProp = document.createElement("label");
                railProp.id = "railProp".concat(i.toString());
                railProp.innerHTML = properties[railProps[i]].name;
                railProp.style.position = "absolute";
                railProp.style.height = "25px";
                railProp.style.width = "200px";
                railProp.style.top = (25 + (30 * i)).toString().concat("px");
                railProp.style.alignContent.verticalAlign = "middle";
                railProp.style.lineHeight = "25px";
                railProp.style.borderRadius = "5px";
                document.getElementById("railroadPropertiesDiv").appendChild(railProp);
            }

            var railHeader = document.createElement("label");
            railHeader.id = "railHeader";
            railHeader.innerHTML = "Railroad Properties";
            railHeader.style.color = "white";
            railHeader.style.position = "absolute";
            railHeader.style.height = "25px";
            railHeader.style.width = "200px";
            railHeader.style.backgroundColor = "black";
            railHeader.style.alignContent.verticalAlign = "middle";
            railHeader.style.lineHeight = "25px";
            document.getElementById("railroadPropertiesDiv").appendChild(railHeader);
    
            var utilityPropertiesDiv = document.createElement("div");
            utilityPropertiesDiv.id = "utilitiesPropertiesDiv";
            utilityPropertiesDiv.style.position = "absolute";
            utilityPropertiesDiv.style.width = "200px";
            utilityPropertiesDiv.style.left = "10px";
            var utilitiesTop = parseInt(document.getElementById("railroadPropertiesDiv").style.top.substring(0, document.getElementById("railroadPropertiesDiv").style.top.length - 2));
            if(railProps.length == 0) {
                utilityPropertiesDiv.style.top = (utilitiesTop + 70).toString().concat("px");//"465px";
            } else {
                utilityPropertiesDiv.style.top = (utilitiesTop + 25 + (35 * railProps.length)).toString().concat("px");
            }
            utilityPropertiesDiv.style.backgroundColor = "#0099ff";
            utilityPropertiesDiv.style.verticalAlign = "middle";
            utilityPropertiesDiv.style.lineHeight = "25px";
            utilityPropertiesDiv.style.borderRadius = "5px";
            document.getElementById("statsHolder").appendChild(utilityPropertiesDiv);
            if(utilProps.length == 0) {
                utilityPropertiesDiv.style.height = "60px";
                var nothingToDeclare = document.createElement("label");
                nothingToDeclare.id = "noUtilProps";
                nothingToDeclare.innerHTML = "No Utilities To Show";
                nothingToDeclare.style.position = "absolute";
                nothingToDeclare.style.height = "25px";
                nothingToDeclare.style.width = "200px";
                nothingToDeclare.style.bottom = "0px";
                nothingToDeclare.style.alignContent.verticalAlign = "middle";
                nothingToDeclare.style.lineHeight = "25px";
                nothingToDeclare.style.borderRadius = "5px";
                document.getElementById("utilitiesPropertiesDiv").appendChild(nothingToDeclare);
            } else {
                utilityPropertiesDiv.style.height = (25 + (30 * utilProps.length)).toString().concat("px");
            }

            for(var i = 0; i < utilProps.length; i++) {
                var utilProp = document.createElement("label");
                utilProp.id = "utilProp".concat(i.toString());
                utilProp.innerHTML = properties[utilProps[i]].name;
                utilProp.style.position = "absolute";
                utilProp.style.height = "25px";
                utilProp.style.width = "200px";
                utilProp.style.top = (25 + (30 * i)).toString().concat("px");
                utilProp.style.alignContent.verticalAlign = "middle";
                utilProp.style.lineHeight = "25px";
                utilProp.style.borderRadius = "5px";
                document.getElementById("utilitiesPropertiesDiv").appendChild(utilProp);
            }

            var utilHeader = document.createElement("label");
            utilHeader.id = "utilHeader";
            utilHeader.innerHTML = "Utility Properties";
            utilHeader.style.color = "white";
            utilHeader.style.position = "absolute";
            utilHeader.style.height = "25px";
            utilHeader.style.width = "200px";
            utilHeader.style.backgroundColor = "black";
            utilHeader.style.alignContent.verticalAlign = "middle";
            utilHeader.style.lineHeight = "25px";
            document.getElementById("utilitiesPropertiesDiv").appendChild(utilHeader);

            var currentToggle = document.getElementById("toggle");
            currentToggle.parentNode.removeChild(currentToggle);
            var toggleStatsButton = document.createElement("button");
            toggleStatsButton.id = "toggle";
            toggleStatsButton.up = false;
            toggleStatsButton.style.position = "absolute";
            toggleStatsButton.style.height = "35px";
            toggleStatsButton.style.width = "35px";
            toggleStatsButton.style.right = "-5px";
            toggleStatsButton.style.top = "-5px";
            toggleStatsButton.style.borderRadius = "10px";
            toggleStatsButton.style.border = "5px solid black";
            toggleStatsButton.style.backgroundColor = "white";
            toggleStatsButton.style.backgroundImage = "url('images/dropUpArrow.png')";
            toggleStatsButton.style.backgroundSize = "25px 25px";
            document.getElementById("dropDown").appendChild(toggleStatsButton);
            toggleStatsButton.addEventListener("click", dropStatsDownOrUp, false);
        } else {
            removeStatsGUI();
        }
    }

    function removeStatsGUI() {
        var stats = document.getElementById("statsHolder");
        stats.parentNode.removeChild(stats);
        var currentToggle = document.getElementById("toggle");
        currentToggle.parentNode.removeChild(currentToggle);
        var toggleStatsButton = document.createElement("button");
        toggleStatsButton.id = "toggle";
        toggleStatsButton.up = true;
        toggleStatsButton.style.position = "absolute";
        toggleStatsButton.style.height = "35px";
        toggleStatsButton.style.width = "35px";
        toggleStatsButton.style.right = "-5px";
        toggleStatsButton.style.top = "-5px";
        toggleStatsButton.style.borderRadius = "10px";
        toggleStatsButton.style.border = "5px solid black";
        toggleStatsButton.style.backgroundColor = "white";
        toggleStatsButton.style.backgroundImage = "url('images/dropDownArrow.png')";
        toggleStatsButton.style.backgroundSize = "25px 25px";
        document.getElementById("dropDown").appendChild(toggleStatsButton);
        toggleStatsButton.addEventListener("click", dropStatsDownOrUp, false);
    }

    //Start of chance animation stuff
    function fadeCardOut(card, cardType) {
        var intervalID = setInterval(function() {
            var chanceOpacity = parseFloat(document.getElementById(cardType).style.opacity);
            if(chanceOpacity > 0.0) {
                chanceOpacity -= 0.1;
                document.getElementById(cardType).style.opacity = chanceOpacity;
            } else {
                clearInterval(intervalID);
                if(diagonalFadeOut) {
                    //Must move chance card to the centre
                    document.getElementById(cardType).style.height = "140px";
                    document.getElementById(cardType).style.width = "220px";
                    document.getElementById(cardType).style.top = "290px";
                    document.getElementById(cardType).style.left = "570px";
                    document.getElementById(cardType).style.transform = "none";
                    if(cardType == "chanceCard") {
                        document.getElementById("chanceP").style.top = "34%";
                        document.getElementById("chanceP").style.left = "34%";
                    } else {
                        document.getElementById("commChestP").style.top = "25%";
                        document.getElementById("commChestP").style.left = "25%";
                        document.getElementById("commChestP2").style.top = "40%";
                        document.getElementById("commChestP2").style.left = "37%";
                    }
                } else if(straightFadeOut) {
                    //Must move chance card to the origin
                    document.getElementById(cardType).style.height = "90px";
                    document.getElementById(cardType).style.width = "140px";
                    document.getElementById(cardType).style.transform = "rotate(-46deg)";
                    if(cardType == "chanceCard") {
                        document.getElementById(cardType).style.top = "150px";
                        document.getElementById(cardType).style.left = "445px";
                        document.getElementById("chanceP").style.top = "25%";
                        document.getElementById("chanceP").style.left = "25%";
                    } else {
                        document.getElementById(cardType).style.top = "475px";
                        document.getElementById(cardType).style.right = "445px";
                        document.getElementById(cardType).style.left = "";
                        document.getElementById("commChestP").style.top = "13%";
                        document.getElementById("commChestP").style.left = "16%";
                        document.getElementById("commChestP2").style.top = "38%";
                        document.getElementById("commChestP2").style.left = "32%";
                    }
                }
                fadeCardIn(card, cardType);
            }
        }, 50);
    }

    function fadeCardIn(card, cardType) {
        var intervalID = setInterval(function() {
            var chanceOpacity = parseFloat(document.getElementById(cardType).style.opacity);
            if(chanceOpacity < 1.0) {
                chanceOpacity += 0.1;
                document.getElementById(cardType).style.opacity = chanceOpacity;
            } else {
                clearInterval(intervalID);
                if(diagonalFadeOut) {
                    if(cardType == "chanceCard") {
                        chanceP = document.getElementById("chanceP");
                        document.getElementById(cardType).removeChild(chanceP);
                    } else {
                        commchestP = document.getElementById("commChestP");
                        commchestP2 = document.getElementById("commChestP2");
                        document.getElementById(cardType).removeChild(commchestP);
                        document.getElementById(cardType).removeChild(commchestP2);
                    }
                    revealCard(card, cardType);
                    diagonalFadeOut = false;
                    straightFadeOut = true;
                } else if(straightFadeOut) {
                    straightFadeOut = false;
                    diagonalFadeOut = true;
                    if(cardType == "chanceCard") {
                        chance(players[turn].position, players[turn], card);
                    } else {
                        communityChest(players[turn].position, players[turn], card);
                    }
                }
            }
        }, 50);
    }

    function revealCard(card, cardType) {
        var moveUp = true;
        var moveDown = false;
        var intervalID = setInterval(function() {
            var height = document.getElementById(cardType).style.height;
            heightNum = parseInt(height.substring(0, height.length-2));
            if(moveUp) {
                if(heightNum > 0) {
                    heightNum -= 5;
                } else {
                    moveUp = false;
                    moveDown = true;
                }
                document.getElementById(cardType).style.height = heightNum + "px";
            } else if(moveDown) {
                if(heightNum < 140) {
                    heightNum += 5;
                } else {
                    moveDown = false;
                }
                document.getElementById(cardType).style.height = heightNum + "px";
            } else {
                /*var divRight = document.createElement("div");
                divRight.id = "divRight";
                divRight.style.position = "absolute";
                divRight.style.right = "0";
                divRight.style.height = "70px";
                divRight.style.width = "70px";
                divRight.style.top = "25%";*/
                var divLeft = document.createElement("div");
                var textSize = Math.floor(card.Name.length / 19);
                var topPercent = (45 - (textSize * 5)).toString().concat("%");
                divLeft.id = "divLeft";
                divLeft.style.position = "absolute";
                divLeft.style.width = "140px";
                divLeft.style.top = topPercent;
                divLeft.style.left = "10px";
                divLeft.style.textAlign = "center";
                divLeft.innerHTML = card.Name;
                /*var pic = document.createElement("img");
                pic.id = "pic";
                pic.src = "images/ship.png";
                pic.style.width = "70px";
                pic.style.height = "70px";*/
                //document.getElementById(cardType).appendChild(divRight);
                document.getElementById(cardType).appendChild(divLeft);
                //document.getElementById("divRight").appendChild(pic);
                var okButton = document.createElement("button");
                okButton.id = "ok";
                okButton.innerHTML = "OK";
                okButton.style.position = "absolute";
                okButton.style.left = "40%";
                document.getElementById(cardType).appendChild(okButton);
                okButton.addEventListener("click", reflipCard.bind(null, card, cardType), false);
                clearInterval(intervalID);
            }
        }, 16);
    }

    function reflipCard(card, cardType) {
        var moveUp = true;
        var moveDown = false;
        straightFadeOut = true;

        //var divRight = document.getElementById("divRight");
        var divLeft = document.getElementById("divLeft");
        var okButton = document.getElementById("ok");
        document.getElementById(cardType).removeChild(okButton);
        document.getElementById(cardType).removeChild(divLeft);
        //document.getElementById(cardType).removeChild(divRight);

        var intervalID = setInterval(function() {
            var height = document.getElementById(cardType).style.height;
            heightNum = parseInt(height.substring(0, height.length-2));
            if(moveUp) {
                if(heightNum > 0) {
                    heightNum -= 5;
                } else {
                    moveUp = false;
                    moveDown = true;
                }
                document.getElementById(cardType).style.height = heightNum + "px";
            } else if(moveDown) {
                if(heightNum < 140) {
                    heightNum += 5;
                } else {
                    moveDown = false;
                }
                document.getElementById(cardType).style.height = heightNum + "px";
            } else {
                if(cardType == "chanceCard") {
                    var chanceP = document.createElement("p");
                    chanceP.innerHTML = "CHANCE";
                    chanceP.id = "chanceP";
                    chanceP.style.position = "absolute";
                    chanceP.style.top = "34%";
                    chanceP.style.left = "34%";
                    document.getElementById(cardType).appendChild(chanceP);
                    clearInterval(intervalID);
                } else {
                    var commChestP = document.createElement("p");
                    var commChestP2 = document.createElement("p");
                    commChestP.innerHTML = "COMMUNITY";
                    commChestP.id = "commChestP";
                    commChestP.style.position = "absolute";
                    commChestP.style.top = "25%";
                    commChestP.style.left = "25%";
                    commChestP2.innerHTML = "CHEST";
                    commChestP2.id = "commChestP2";
                    commChestP2.style.position = "absolute";
                    commChestP2.style.top = "40%";
                    commChestP2.style.left = "37%";
                    document.getElementById(cardType).appendChild(commChestP);
                    document.getElementById(cardType).appendChild(commChestP2);
                    clearInterval(intervalID);
                }
                fadeCardOut(card, cardType);
            }
        }, 16);
    }
    //End of chance animation stuff

    //This is all just the icon selection
    function canPlacement() {
        var node = document.createElement("img");
        node.className = "player";
        node.src = "images/can.png";
        node.alt = "can";
        node.style.height = "25px";
        node.style.width ="25px";
        node.style.zIndex = 1;
        players[turn].id = node;
        document.getElementById("can").setAttribute("disabled", "disabled");
        document.getElementById("can").style.opacity = 0.4;
        console.log(turn);
        if(turn == numPlayers-1) {
            turn = 0;
            startGame();
        } else {
            turn++;
        }
    }

    function burritoPlacement() {
        var node = document.createElement("img");
        node.className = "player";
        node.src = "images/Burrito.png";
        node.alt = "burrito";
        node.style.height = "25px";
        node.style.width ="25px";
        node.style.zIndex = 2;
        players[turn].id = node;
        document.getElementById("burrito").setAttribute("disabled", "disabled");
        document.getElementById("burrito").style.opacity = 0.4;
        if(turn == numPlayers-1) {
            turn = 0;
            startGame();
        } else {
            turn++;
        }
    }

    function pastaPlacement() {
        var node = document.createElement("img");
        node.className = "player";
        node.src = "images/pasta.png";
        node.alt = "pasta";
        node.style.height = "30px";
        node.style.width ="40px";
        node.style.zIndex = 3;
        players[turn].id = node;
        document.getElementById("pasta").setAttribute("disabled", "disabled");
        document.getElementById("pasta").style.opacity = 0.4;
        if(turn == numPlayers-1) {
            turn = 0;
            startGame();
        } else {
            turn++;
        }
    }

    function coffeePlacement() {
        var node = document.createElement("img");
        node.className = "player";
        node.src = "images/Coffee.png";
        node.alt = "coffee";
        node.style.height = "24px";
        node.style.width = "24px";
        node.style.zIndex = 4;
        players[turn].id = node;
        document.getElementById("coffee").setAttribute("disabled", "disabled");
        document.getElementById("coffee").style.opacity = 0.4;
        if(turn == numPlayers-1) {
            turn = 0;
            startGame();
        } else {
            turn++;
        }
    }

    function controllerPlacement() {
        var node = document.createElement("img");
        node.className = "player";
        node.src = "images/controller.png";
        node.alt = "controller";
        node.style.height = "40px";
        node.style.width ="45px";
        players[turn].id = node;
        document.getElementById("controller").setAttribute("disabled", "disabled");
        document.getElementById("controller").style.opacity = 0.4;
        if(turn == numPlayers-1) {
            turn = 0;
            startGame();
        } else {
            turn++;
        }
    }

    function conversePlacement() {
        var node = document.createElement("img");
        node.className = "player";
        node.src = "images/shoes.png";
        node.alt = "converse";
        node.style.height = "40px";
        node.style.width ="40px";
        players[turn].id = node;
        document.getElementById("converse").setAttribute("disabled", "disabled");
        document.getElementById("converse").style.opacity = 0.4;
        if(turn == numPlayers-1) {
            turn = 0;
            startGame();
        } else {
            turn++;
        }
    }

    function pizzaPlacement() {
        var node = document.createElement("img");
        node.className = "player";
        node.src = "images/pizza.png";
        node.alt = "pizza";
        node.style.height = "35px";
        node.style.width ="35px";
        players[turn].id = node;
        document.getElementById("pizza").setAttribute("disabled", "disabled");
        document.getElementById("pizza").style.opacity = 0.4;
        if(turn == numPlayers-1) {
            turn = 0;
            startGame();
        } else {
            turn++;
        }
    }

    function bagPlacement() {
        var node = document.createElement("img");
        node.className = "player";
        node.src = "images/bag.png";
        node.alt = "bagOfCansWithTheLads";
        node.style.height = "35px";
        node.style.width ="35px";
        players[turn].id = node;
        document.getElementById("bagOfCans").setAttribute("disabled", "disabled");
        document.getElementById("bagOfCans").style.opacity = 0.4;
        if(turn == numPlayers-1) {
            turn = 0;
            startGame();
        } else {
            turn++;
        }
    }

    
    function startGame() {
        var iconHolder = document.getElementById("iconHolder");
        iconHolder.parentNode.removeChild(iconHolder);
        for(var i = 0; i < numPlayers; i++) {
            document.getElementById("0000").appendChild(players[i].id);
        }
        enableButton("rollDice");
        enableButton("tradeButton");
        //toggle is the toggle stats
        enableButton("toggle");
    }

    function enableButton(buttonID) {
        //Enables the given button
        document.getElementById(buttonID).removeAttribute("disabled");
        document.getElementById(buttonID).style.backgroundColor = "#0099ff";
    }

    function disableButton(buttonID) {
        //Disables teh given button
        document.getElementById(buttonID).setAttribute("disabled", "disabled");
        document.getElementById(buttonID).style.backgroundColor = "#c2c2a3";
    }

    async function diceFadeIn(num1, num2) {
        document.getElementById("dicePosition1").style.opacity = 1.0;
        document.getElementById("dicePosition2").style.opacity = 1.0;
        /*for(var x = 0; x <= 1; x += 0.1) {
            document.getElementById("dicePosition1").style.opacity = x;
            document.getElementById("dicePosition2").style.opacity = x;
            await sleep(100);
        }*/
    }

    async function diceFadeOut() {
        document.getElementById("dicePosition1").style.opacity = 0.0;
        document.getElementById("dicePosition2").style.opacity = 0.0;
        /*for(var i = 0.9; i >= 0; i -= 0.1) {
            document.getElementById("dicePosition1").style.opacity = i;
            document.getElementById("dicePosition2").style.opacity = i;
            await sleep(100);
        }*/
        //if(!decidingOnProperty) {
            //document.getElementById("temp").disabled = false;
            //console.log("here");
            //incrementTurn();
        //}
    }

    function useJailCardClicked() {
        //Player has used their jail card while in jail
        players[turn].jail.getOutOfJail--;
        releaseFromJail();
        removeJailGUI();
        normalRoll();
    }

    function payFineClicked() {
        //Player chose to pay the fine to get out of jail
        releaseFromJail();
        removeJailGUI();
        normalRoll();
    }

    function attemptDoubleClicked() {
        //Player is attempting to roll a doubleto get out of jail
        var doubleAttempt = rollDice();
        //rolledDouble will be set to tru in tollDice() if they roll a double
        if(rolledDouble) {
            currentRoll = doubleAttempt[0] + doubleAttempt[1];
            releaseFromJail();
            removeJailGUI();
            diceRolled();
        } else {
            removeJailGUI();
            decideOnNextPlayer();
        }
    }

    function buyPropertyClicked() {
        //Player has clicked buy on the tile they landed on
        buy(players[turn], players[turn].position, properties[players[turn].position].price);
        endTurnAllowed = true;
        decideOnNextPlayer();
    }

    async function setUpAuctionGUI() {
        disableButton("buy");
        disableButton("auction");
        hammerSound.play();
        await sleep(2000);
        hammerSound.currentTime = 0;
        hammerSound.pause();

        //This is just setting up the auction GUI
        var outerAuction = document.createElement("div");
        outerAuction.id = "outerAuction";
        outerAuction.style.position = "absolute";
        outerAuction.style.width = "220px";
        outerAuction.style.height = "460px";
        outerAuction.style.top = "35%";
        outerAuction.style.left = "5%";
        outerAuction.style.border = "5px solid black";
        outerAuction.style.borderRadius = "10px";
        outerAuction.style.backgroundColor = "#00001a";
        document.getElementById("body").appendChild(outerAuction);

        var innerAuction = document.createElement("div");
        innerAuction.id = "innerAuction";
        innerAuction.style.position = "absolute";
        innerAuction.style.width = "220px";
        innerAuction.style.height = "370px";
        innerAuction.style.top = "35%";
        innerAuction.style.left = "5%";
        innerAuction.style.border = "5px solid black";
        innerAuction.style.borderRadius = "10px";
        innerAuction.style.backgroundColor = "#00001a";
        document.getElementById("body").appendChild(innerAuction);

        //This holds the most recent bid
        var bidLabel = document.createElement("label");
        bidLabel.id = "bidLabel";
        bidLabel.innerHTML = "CURRENT BID:<br>".concat(properties[players[turn].position].price * 0.2);
        bidLabel.style.top = "10px";
        bidLabel.style.width = "200px";
        bidLabel.style.height = "50px";
        bidLabel.style.position = "absolute";
        bidLabel.style.borderRadius = "10px";
        bidLabel.style.backgroundColor = "#c2c2a3";
        bidLabel.style.borderColor = "black";
        bidLabel.style.left = "10px";
        bidLabel.style.fontSize = "20px";
        bidLabel.style.fontFamily = "bold";
        bidLabel.style.textAlign = "center";
        document.getElementById("innerAuction").appendChild(bidLabel);

        //This holds the most recent bidder
        var bidderLabel = document.createElement("label");
        bidderLabel.id = "bidderLabel";
        bidderLabel.innerHTML = "CURRENT BIDDER:<br>";
        bidderLabel.style.top = "70px";
        bidderLabel.style.width = "200px";
        bidderLabel.style.height = "50px";
        bidderLabel.style.position = "absolute";
        bidderLabel.style.borderRadius = "10px";
        bidderLabel.style.backgroundColor = "#c2c2a3";
        bidderLabel.style.borderColor = "black";
        bidderLabel.style.left = "10px";
        bidderLabel.style.fontSize = "20px";
        bidderLabel.style.fontFamily = "bold";
        bidderLabel.style.textAlign = "center";
        document.getElementById("innerAuction").appendChild(bidderLabel);

        var bidOneButton = document.createElement("button");
        bidOneButton.id = "bidOne";
        bidOneButton.innerHTML = "BID &euro;1";
        bidOneButton.style.top = "130px";
        bidOneButton.style.width = "200px";
        bidOneButton.style.height = "50px";
        bidOneButton.style.position = "absolute";
        bidOneButton.style.borderRadius = "10px";
        bidOneButton.style.backgroundColor = "#0099ff";
        bidOneButton.style.borderColor = "black";
        bidOneButton.style.left = "10px";
        bidOneButton.style.fontSize = "20px";
        bidOneButton.style.fontFamily = "bold";
        document.getElementById("innerAuction").appendChild(bidOneButton);
        bidOneButton.addEventListener("click", bidOneClicked, false);

        var bidTenButton = document.createElement("button");
        bidTenButton.id = "bidTen";
        bidTenButton.innerHTML = "BID &euro;10";
        bidTenButton.style.top = "190px";
        bidTenButton.style.width = "200px";
        bidTenButton.style.height = "50px";
        bidTenButton.style.position = "absolute";
        bidTenButton.style.borderRadius = "10px";
        bidTenButton.style.backgroundColor = "#0099ff";
        bidTenButton.style.borderColor = "black";
        bidTenButton.style.left = "10px";
        bidTenButton.style.fontSize = "20px";
        bidTenButton.style.fontFamily = "bold";
        document.getElementById("innerAuction").appendChild(bidTenButton);
        bidTenButton.addEventListener("click", bidTenClicked, false);

        var bidHundredButton = document.createElement("button");
        bidHundredButton.id = "bidHundred";
        bidHundredButton.innerHTML = "BID &euro;100";
        bidHundredButton.style.top = "250px";
        bidHundredButton.style.width = "200px";
        bidHundredButton.style.height = "50px";
        bidHundredButton.style.position = "absolute";
        bidHundredButton.style.borderRadius = "10px";
        bidHundredButton.style.backgroundColor = "#0099ff";
        bidHundredButton.style.borderColor = "black";
        bidHundredButton.style.left = "10px";
        bidHundredButton.style.fontSize = "20px";
        bidHundredButton.style.fontFamily = "bold";
        document.getElementById("innerAuction").appendChild(bidHundredButton);
        bidHundredButton.addEventListener("click", bidHundredClicked, false);

        var withdrawButton = document.createElement("button");
        withdrawButton.id = "withdraw";
        withdrawButton.innerHTML = "WITHDRAW";
        withdrawButton.style.top = "310px";
        withdrawButton.style.width = "200px";
        withdrawButton.style.height = "50px";
        withdrawButton.style.position = "absolute";
        withdrawButton.style.borderRadius = "10px";
        withdrawButton.style.backgroundColor = "#0099ff";
        withdrawButton.style.borderColor = "black";
        withdrawButton.style.left = "10px";
        withdrawButton.style.fontSize = "20px";
        withdrawButton.style.fontFamily = "bold";
        document.getElementById("innerAuction").appendChild(withdrawButton);
        withdraw.addEventListener("click", withdrawClicked, false);

        //This holds the person that is currenlty deciding what to bid or to withdraw
        var playerBiddingLabel = document.createElement("label");
        playerBiddingLabel.id = "playerBiddingLabel";
        var turnPlusOne;
        if(turn < numPlayers-1) {
            turnPlusOne = turn + 1;
        } else {
            turnPlusOne = 0;
        }

        playerBiddingLabel.innerHTML = players[turnPlusOne].name;
        playerBiddingLabel.style.bottom = "50px";
        playerBiddingLabel.style.width = "200px";
        playerBiddingLabel.style.height = "30px";
        playerBiddingLabel.style.position = "absolute";
        playerBiddingLabel.style.borderRadius = "10px";
        playerBiddingLabel.style.backgroundColor = "#c2c2a3";
        playerBiddingLabel.style.borderColor = "black";
        playerBiddingLabel.style.left = "10px";
        playerBiddingLabel.style.fontSize = "20px";
        playerBiddingLabel.style.fontFamily = "bold";
        playerBiddingLabel.style.verticalAlign = "middle";
        playerBiddingLabel.style.lineHeight = "30px";
        playerBiddingLabel.style.textAlign = "center";
        document.getElementById("outerAuction").appendChild(playerBiddingLabel);

        //This holds the position that is getting auctioned
        var positionLabel = document.createElement("label");
        positionLabel.id = "playerBiddingLabel";
        positionLabel.innerHTML = properties[players[turn].position].name;
        positionLabel.style.bottom = "10px";
        positionLabel.style.width = "200px";
        positionLabel.style.height = "30px";
        positionLabel.style.position = "absolute";
        positionLabel.style.borderRadius = "10px";
        positionLabel.style.backgroundColor = "#c2c2a3";
        positionLabel.style.borderColor = "black";
        positionLabel.style.left = "10px";
        positionLabel.style.fontSize = "20px";
        positionLabel.style.fontFamily = "bold";
        positionLabel.style.verticalAlign = "middle";
        positionLabel.style.lineHeight = "30px";
        positionLabel.style.textAlign = "center";
        document.getElementById("outerAuction").appendChild(positionLabel);

        auctionPropertyClicked();
    }

    function auctionPropertyClicked() {
        //Must get rid of stats gui if up
        if(!document.getElementById("toggle").up) {
            removeStatsGUI();
        }
        //Wipe the dictionary in case any players have been eliminated from the game
        //The first element of currentAuction is the number of players left
        //The second element is the tile to be auctioned
        auctionStarter = players[turn];
        currentAuction = [0, players[turn].position];
        if(turn == numPlayers-1) {
            turn = 0;
        } else {
            turn++
        }
        //Have ot offset the currentBidder by 2 to match up after the first two elements
        currentBidder = turn+2;
        currentBid = properties[auctionStarter.position].price * 0.2; //Starting bid is 10% of price
        for(var b = 0; b < players.length; b++) {
            //Putting all the players in the auction
            //The player's stillIn attribute will be set to false when they withdraw from the 
            //auction or they are kicked out
            var tempPlayer = players[b];
            if(tempPlayer.money > currentBid) {
                currentAuction.push({player: tempPlayer, stillIn: true});
                currentAuction[0]++;
            } else {
                currentAuction.push({player: tempPlayer, stillIn: false});
            }
        }
        
        checkAuctionAtStart();
    }

    function bidOneClicked() {
        //The player clicked the 'Bid 1' button
        auction(1);
    }

    function bidTenClicked() {
        //The player clicked the 'Bid 10' button
        auction(10);
    }

    function bidHundredClicked() {
        //The player has clicked the 'Bid 100' button
        auction(100);
    }

    function withdrawClicked() {
        //The player has clicked the 'Withdraw' button
        auction(0);
    }

    function createPlayer(name) {
        var player = {};
        player.name = name;
        player.id = null; 
        player.position = "0000";
        player.doublesRolled = 0; //The number of doubles the player has rolled in a row
        player.money = 1500;
        player.assets = [];

        player.properties = {};
        player.properties["brown"] = [];
        player.properties["pink"] = [];
        player.properties["lightblue"] = [];
        player.properties["orange"] = [];
        player.properties["red"] = [];
        player.properties["green"] = [];
        player.properties["blue"] = [];
        player.properties["yellow"] = [];
        player.properties["railroad"] = [];
        player.properties["utilities"] = [];

        player.getOutOfJail = 0;
        player.jail = {};
        player.jail.jailTag = false;
        player.jail.jailRoll = 0;
        player.jail.justReleased = false;

        return player;
    }

    async function normalRoll() {
        if(!document.getElementById("toggle").up) {
            removeStatsGUI();
        }
        disableButton("rollDice");
        diceSound.play();
        await sleep(1000);
        diceSound.currentTime = 0;
        diceSound.pause();
        var ro = rollDice(); //Temporary variable to get the two dice rolls
        currentRoll = ro[0] + ro[1];
        diceRolled();
    }

    function diceRolled() {
        if(players[turn].jail.justReleased) {
            players[turn].jail.justReleased = false;
        }
        //Check for doubles
        if(rolledDouble && players[turn].doublesRolled == 2) {
            /*
            * If they've rolled a double with two already rolled they go to jail
            */
            //players[turn].doublesRolled++
            //alert("Player was place in jail");
            placeInJail();
            //diceFadeOut();
        } else {
            //Move the player
            movePlayer(players[turn], currentRoll);
        }
    }

    function incrementTurn() {
        //Remove stats GUI if it's there
        if(!document.getElementById("toggle").up) {
            removeStatsGUI();
        }
        //Only increment if the player didn't roll a double
        diceFadeOut();
        players[turn].doublesRolled = 0;
        if(turn == numPlayers - 1) {
            turn = 0;
        } else {
            turn++;
        }
        disableButton("endTurn");
        console.log("turn: " + turn);
        console.log(players[turn]);
        //Check if player is in jail here so that if the player is in jail the prompt for either
        //using their jailCard if they have one or to pay fine or roll for a double is automatically
        //shown without them having to click anything
        if(players[turn].jail.jailTag) {
            players[turn].jail.jailRoll++;
            jail();
            //checkForJailCard();
        } else {
            enableButton("rollDice");
            enableBuildButton();
        }
    }

    //The async keyword has to be used when the await() function is used
    async function movePlayer(playerObj, spacesToMove) {//, turn) {
        //Gets first two numbers in the id
        var left = parseInt(playerObj.position.substring(0, 2));
        //Gets the last two numbers in the id
        var right = parseInt(playerObj.position.substring(2, 4));
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
            spacesToMove--;
            //Placing the player's icon on the new tile
            document.getElementById(newPosition).appendChild(playerObj.id);
            //Waiting for half a second so it looks nicer
            await sleep(500);
            //walkSound.play();
            if(newPosition == "0000") {
                //console.log("Player has passed go; collect 200");
                alert("Player has passed go; collect 200");
            }
        }

        //Updating player's position
        playerObj.position = newPosition;
        //Checking for what tile they land on, currently only says "This tile is x, etc", Sean
        //and Dave are working on that I believe
        checkTile(newPosition);
        //if(decidingOnProperty) {
        //diceFadeOut();
        //}
    }

    function decideOnNextPlayer() {
        //This function is used to determine whether the endTurn button should be enabled
        //It'll be enabled if the player didn't roll a double and they aren't deciding on a 
        //property or doing anything that would hold the game up
        if(endTurnAllowed && !currentlyBankrupting) {
            if(!rolledDouble) {
                enableButton("endTurn")
            } else {
                playerRolledDouble();
            }
        }
    }

    async function moveBackwards(playerObj, spacesToMove) {
        //This function is used with the chance cards that move the player backwards
        //It's pretty much the same as the movePlayer function except for the while loop
        var newPosition;
        //Gets first two numbers in the id
        var left = parseInt(playerObj.position.substring(0, 2));
        //Gets the last two numbers in the id
        var right = parseInt(playerObj.position.substring(2, 4));
        while(spacesToMove > 0) {
            if(left == 0 && right > 0) {
                right--;
            } else if(right == 10 && left > 0) {
                left--;
            } else if(left == 10 && right >= 0) {
                right++;
            } else if(right == 0 && left >= 0) {
                left++;
            }
            newPosition = positionHack(left, right);
            spacesToMove--;
            document.getElementById(newPosition).appendChild(playerObj.id);
            await sleep(500);
        }
        playerObj.position = newPosition;
        checkTile(newPosition);
    }

    function checkTile(playerPos) {
        if(playerPos == "0010" || playerPos == "0000") {
            decideOnNextPlayer();
            //This is the jail tile, do nothing
        } else if(playerPos == "0007" || playerPos == "1008" || playerPos == "0400") {
            //Player has landed on chance card
            getChanceCard();
        } else if(playerPos == "0002" || playerPos == "0710" || playerPos == "0700") {
            //Player has landed on community chess
            getCommChestCard();
        } else if(playerPos == "1010") {
            //Player has landed on Free Parking
            landedOnKitty(players[turn]);
        } else if(playerPos == "1000") {
            //Player is sent to jail
            placeInJail();
            //decideOnNextPlayer();
        } else if(playerPos == "0004" || playerPos == "0200") {
            //Player landed on a tax tile
            playerFined(players[turn], playerPos);
        } else { 
            //Player landed on a tile that can be owned
            isOwned(players[turn], playerPos);
        }
    }

    function playerRolledDouble() {
        enableButton("rollDice");
        players[turn].doublesRolled++;
    }

    function isOwned(playerObj, tileID) {
        //This stops the endTurn button being enabled in decideOnNextPlayer()
        endTurnAllowed = false;
        //Checking if the tile landed on by player is owned or naw
        if(properties[tileID].owner == null) {
            //The player has landed on a tile they can purchase
            enableButton("buy");
            enableButton("auction");
        } else {
            if(properties[tileID].owner != players[turn]) {
                payRent(playerObj, properties[tileID].owner, tileID);
            }
            endTurnAllowed = true;
            decideOnNextPlayer();
        }
    }

    async function buy(playerObj, tileID, amount) {
        //Have to get rid of the stats holder if it's currently down
        if(!document.getElementById("toggle").up) {
            removeStatsGUI();
        }

        disableButton("buy");
        disableButton("auction");
        playerObj.money -= amount;
        if(playerObj.money <= 0) {
            bankrupt(playerObj);
        } else {
            //Setting the owner in the properties dictionary
            properties[tileID].owner = playerObj;
            //Adding the property to the player's assets list
            playerObj.assets.push(tileID);
            //Also adding it to the appropriate list in player.properties
            if(properties[tileID].type == "colour") {
                playerObj.properties[properties[tileID].colour].push(tileID);
            } else if(properties[tileID].type == "railroad") {
                playerObj.properties["railroad"].push(tileID);
            } else if(properties[tileID].type == "utility") {
                playerObj.properties["utilities"].push(tileID);
            }
            buySound.play();
            await sleep(750);
            buySound.currentTime = 0;
            buySound.pause();
            if(!currentlyBankrupting) {
                //If this were true then the property was bought in the bankruptcy auction so there
                //may still be some properties left
                enableBuildButton();
            }
        }
    }

    function checkAuctionAtStart() {
        /*
        * This checks to make sure there is more than one player in the auction. It takes note of the
        * currentBidder, then it finds the next one with findBidder() and compares the two. If they 
        * are the same person then there's no auction
        */

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
        //This checks criteria for the auction, such as if the current bidder has enough capital
        //or if there are still enough people in the auction
        if(currentAuction[0] > 1) {
            //The first element of currentAuction is how many people are still in the auction
            if(currentAuction[currentBidder].player.money < currentBid) {
                withdrawFromAuction();
                auctionChecker();
            }
        } else {
            endAuction();
        }
    }

    function endAuction() {
        //This clears away the GUI and gives the property to the winner of the auction
        var outerAuction = document.getElementById("outerAuction");
        var innerAuction = document.getElementById("innerAuction");
        outerAuction.parentNode.removeChild(outerAuction);
        innerAuction.parentNode.removeChild(innerAuction);
        if(!currentlyBankrupting) {
            //This means it's a regular old auction and you can just give the player the property
            if(currentBid == properties[auctionStarter.position].price * 0.2) {
                console.log("nobody wanted the property");
            } else {
                buy(currentAuction[currentBidder].player, currentAuction[1], currentBid);
            }
        }
        if(currentlyBankrupting) {
            //This means that there is a player being bankrupt so you need to check if there's
            //more properties to be auctioned
            buy(currentAuction[currentBidder].player, currentAuction[1], currentBid);
            justTraded(currentAuction[currentBidder].player, currentAuction[1]);
            numberOfAuctions--;
            bankruptcyAuction(bankruptingPlayer);
        } else {
            //Otherwise you can just carry on with the game
            endTurnAllowed = true;
            //This just returns turn to its value before the auction
            turn = players.indexOf(auctionStarter);
            decideOnNextPlayer();
            enableButton("endTurn");
        }
    }

    function findBidder() {
        //This finds the next bidder in the auction by going through the currentAuction list (starting
        //from point 2) and checking the stillIn part of the dictionary at that index
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

        if(currentAuction[currentBidder].player.money < currentBid + 100) {
            document.getElementById("bidHundred").setAttribute("disabled", "disabled");
        } else {
            document.getElementById("bidHundred").removeAttribute("disabled");
        }

        if(currentAuction[currentBidder].player.money < currentBid + 10) {
            document.getElementById("bidTen").setAttribute("disabled", "disabled");
        } else {
            document.getElementById("bidTen").removeAttribute("disabled");
        }

        if(currentAuction[currentBidder].player.money < currentBid + 1) {
            document.getElementById("bidOne").setAttribute("disabled", "disabled");
        } else {
            document.getElementById("bidOne").removeAttribute("disabled");
        }
    }

    function withdrawFromAuction() {
        //Instead of removing them from the list, it simply sets their stillIn variable to false
        currentAuction[currentBidder].stillIn = false;
        //The number of players still in the auction is held in the first element of teh array
        currentAuction[0]--;
        findBidder();
    }

    function auction(buttonPressed){
        //buttonPressed can have 4 values:
        //{
        //1 -> The player bid 1
        //10 -> The player bid 10
        //100 -> The player bid 100
        //0 -> The player withdrew
        //}
        if(buttonPressed > 0) {
            //Need to error check here for capital
            currentBid += buttonPressed;
            //Just updating the GUI
            document.getElementById("bidLabel").innerHTML = "CURRENT BID:<br>".concat(currentBid.toString());
            document.getElementById("bidderLabel").innerHTML = "CURRENT BIDDER:<br>".concat(currentAuction[currentBidder].player.name);
            findBidder();
        } else {
            //If buttonPressed is 0 the player has pressed the withdraw button
            withdrawFromAuction();
        }
        
        document.getElementById("playerBiddingLabel").innerHTML = currentAuction[currentBidder].player.name;
        auctionChecker();
    }

    async function placeInJail() {
        //Setting all the appropriate flags for being in jail. Must reset all the vairables to
        //do with rolling a double and the player being released
        players[turn].jail.jailTag = true;
        players[turn].position = "0010";
        players[turn].doublesRolled = 0;
        //players[turn].double = false;
        rolledDouble = false;
        //Putting the player in the jail tile (0010)
        document.getElementById(players[turn].position).appendChild(players[turn].id);
        jailDoorCloseSound.play();
        await sleep(1000);
        enableButton("endTurn");
    }

    function checkForJailCard() {
        //This is done at the start of the player's round so they don't have to press anything to 
        //trigger the GUI to pop up
        if(players[turn].getOutOfJail > 0) {
            return true;
            //If they do have a jailCard they will be asked if they want to use it. If they do,
            //the dice will be rolled automatically and they will be released from jail. They
            //won't be able to roll again if they get a double though. To pop the GUI, the Use
            //Jail Card HTML element needs to be set to visible and the Normal Roll button needs
            //to be disabled
        } else {
            return false;
        }
    }

    function jail() {
        //The program comes here if they player is in jail and either doesn't have a jailCard or
        //chooses not to use it
        var jailTime = 3; //How many turns they can stay in jail
        var payOut = 50;
        var diceRollInJail;

        //Have to disable the Normal Roll button, as the dice roll will be controlled by the GUI
        //document.getElementById("temp").disabled = true;
        //Increment the number of turns the player has been in jail immediately (before they roll)
        //players[turn].jail.jailRoll++;

        //If they have been in jail for 3 turns, they cannot attempt to roll a double and the dice
        //is rolled for them automatically
        if(players[turn].jail.jailRoll == jailTime) {
            releaseFromJail();
            //Must add logic to check if player has enough capital
            players[turn].money -= payOut;
            if(players[turn].money <= 0) {
                bankrupt(players[turn]);
            } else {
                diceRollInJail = rollDice();
                rolledDouble = false; //Just in case they roll a double after 3 turns
                currentRoll = diceRollInJail[0] + diceRollInJail[1];
                diceRolled();
            }
        } else {
            //The Pay Fine or Attempt to Roll Double GUI will pop if the player hasn't been in
            //jail for 3 turns and have the option to either pay the fine to get out straight away
            //or to attempt to roll a double and get out for free. For the GUI to pop, the Jail
            //Card GUI must be set to invisible and the Fine or Double GUI must be set to visible
            var jailHolder = document.createElement("div");
            jailHolder.id = "jailHolder";
            jailHolder.style.position = "absolute";
            jailHolder.style.width = "220px";
            jailHolder.style.height = "210px";
            jailHolder.style.top = "35%";
            jailHolder.style.left = "5%";
            jailHolder.style.border = "5px solid black";
            jailHolder.style.borderRadius = "10px";
            jailHolder.style.backgroundColor = "#00001a";
            document.getElementById("body").appendChild(jailHolder);

            var jailCardButton = document.createElement("button");
            jailCardButton.id = "jailCard";
            jailCardButton.innerHTML = "GET OUT OF JAIL FREE";
            jailCardButton.style.position = "absolute";
            jailCardButton.style.width = "200px";
            jailCardButton.style.height = "50px";
            jailCardButton.style.top = "10px";
            jailCardButton.style.left = "10px";
            jailCardButton.style.borderRadius = "10px";
            jailCardButton.style.borderColor = "black";
            if(!players[turn].jailCard) {
                jailCardButton.setAttribute("disabled", "disabled");
                jailCardButton.style.backgroundColor = "#c2c2a3";
            } else {
                jailCardButton.style.backgroundColor = "#0099ff";
            }
            jailCardButton.style.fontSize = "16px";
            jailCardButton.style.fontFamily = "bold";
            document.getElementById("jailHolder").appendChild(jailCardButton);
            jailCardButton.addEventListener("click", useJailCardClicked, false);

            var payFineButton = document.createElement("button");
            payFineButton.id = "payFine";
            payFineButton.innerHTML = "PAY FINE";
            payFineButton.style.position = "absolute";
            payFineButton.style.width = "200px";
            payFineButton.style.height = "50px";
            payFineButton.style.top = "80px";
            payFineButton.style.left = "10px";
            payFineButton.style.borderRadius = "10px";
            payFineButton.style.backgroundColor = "#0099ff";
            payFineButton.style.borderColor = "black";
            payFineButton.style.fontSize = "20px";
            payFineButton.style.fontFamily = "bold";
            document.getElementById("jailHolder").appendChild(payFineButton);
            payFineButton.addEventListener("click", payFineClicked, false);

            var rollForDoubleButton = document.createElement("button");
            rollForDoubleButton.id = "rollForDouble";
            rollForDoubleButton.innerHTML = "ROLL FOR DOUBLE";
            rollForDoubleButton.style.position = "absolute";
            rollForDoubleButton.style.width = "200px";
            rollForDoubleButton.style.height = "50px";
            rollForDoubleButton.style.top = "150px";
            rollForDoubleButton.style.left = "10px";
            rollForDoubleButton.style.borderRadius = "10px";
            rollForDoubleButton.style.backgroundColor = "#0099ff";
            rollForDoubleButton.style.borderColor = "black";
            rollForDoubleButton.style.fontSize = "20px";
            rollForDoubleButton.style.fontFamily = "bold";
            document.getElementById("jailHolder").appendChild(rollForDoubleButton);
            rollForDoubleButton.addEventListener("click", attemptDoubleClicked, false);
        }
    }

    function releaseFromJail() {
        //This sets all the appropriate variables to what they should be if the player is released
        //from jail for whatever reason. rolledDouble must be set to false so they don't get to
        //roll again if they were released for rolling a double

        players[turn].jail.jailTag = false;
        players[turn].jail.jailRoll = 0;
        players[turn].jail.justReleased = true;
        rolledDouble = false;
    }

    function removeJailGUI() {
        var jailHolder = document.getElementById("jailHolder");
        jailHolder.parentNode.removeChild(jailHolder);
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

        num1 = parseInt(document.getElementById("inp1").value);
        num2 = parseInt(document.getElementById("inp2").value);

        //Checking to see if a double is rolled
        if(num1 == num2 & !players[turn].jail.justReleased) {
            rolledDouble = true;
        } else {
            rolledDouble = false;
        }

        //Placing the number that was rolled into the HTML dice
        document.getElementById("dice1").src = diceNumbers[num1];
        document.getElementById("dice2").src = diceNumbers[num2];
        diceFadeIn();

        return [num1, num2];
    }

    function checkColourSetComplete(playerObj, tileID){
        //Checks if the player has all the properties in the tileID's colour set
        //Used for when the player wants to build a house on a property (tileID)
        var maxNumOfProps = properties[tileID].numberOfColours;
        if(playerObj.properties[properties[tileID].colour].length == maxNumOfProps) {
            return true;
        } else {
            //alert("Player does not have a monopoly in this colour set");
            return false;
        }
    }

    function buildHouses(playerObj, tileID) {
        var costOfHouse = properties[tileID].houseValue;
        clearBuildGUI();
        //Checking whether they can afford it
        if(playerObj.money >= costOfHouse) {
            playerObj.money -= costOfHouse;
            if(properties[tileID].numberOfHouses < 4) {
                placeHouse(tileID);
            } else {
                placeHotel(tileID);
            }
        } else {
            //alert("Player cannot afford to build a house");
        }
    }

    function placeHouse(tileID, numberToBuild = 1) {
        //Places houses, not hotels
        //tileA is the little div above the tile where houses go
        var tileA = tileID.concat("a");
        for(var i = 0; i < numberToBuild; i++) {
            properties[tileID].numberOfHouses++;
            var house = document.createElement("img");
            house.id = tileA.concat((properties[tileID].numberOfHouses).toString());
            house.src = "images/house.png";
            house.style.height = "14px";
            house.style.width = "14px";
            house.style.opacity = 0.0;
            document.getElementById(tileA).appendChild(house);
            buildHouse(house.id);
        }
    }

    function placeHotel(tileID) {
        //Place hotels, not houses
        //tileA is the little div above the tile where houses go
        var tileA = tileID.concat("a");
        //You must first remove the 4 houses already on the tile
        unPlaceHouse(tileID, 4);
        setTimeout(function() {
            var tileA = tileID.concat("a");
            properties[tileID].numberOfHouses = 4
            properties[tileID].numberOfHouses++;
            var hotel = document.createElement("img");
            hotel.id = tileA.concat((properties[tileID].numberOfHouses).toString());
            hotel.src = "images/hotel.png";
            hotel.style.height = "18px";
            hotel.style.width = "18px";
            hotel.style.opacity = 0.0;
            document.getElementById(tileA).appendChild(hotel);
            buildHouse(hotel.id);
        }, 500);
    }

    function buildHouse(houseID) {
        //This fades the house image in
        var intervalID = setInterval(function() {
            var currentOpacity = parseFloat(document.getElementById(houseID).style.opacity);
            if(currentOpacity < 1.0) {
                document.getElementById(houseID).style.opacity = (currentOpacity + 0.1);
            } else { 
                clearInterval(intervalID);
                enableBuildButton();
            }
        }, 50);
    }

    function unPlaceHouse(tileID, numberToRemove = 1) {
        //If number to remove is 5, the property is being mortgaged and it currently has a hotel
        //This means all the properties are gonna be removed so you just remove them all in one
        var tileA = tileID.concat("a");
        if(numberToRemove == 5) {
            var tileAID = tileA.concat(properties[tileID].numberOfHouses.toString());
            removeHouse(tileAID);
            properties[tileID].numberOfHouses = 0;
        } else {
            //Otherwise you remove the specified number
            for(var i = 0; i < numberToRemove; i++) {
                var tileAID = tileA.concat(properties[tileID].numberOfHouses.toString());
                properties[tileID].numberOfHouses--;
                removeHouse(tileAID);
                if(properties[tileID].numberOfHouses == 4) {
                    setTimeout(function() {
                        properties[tileID].numberOfHouses = 0;
                        placeHouse(tileID, 4);
                    }, 500);
                }
            }
        }
    }

    function removeHouse(houseID) {
        //This fades the house out
        var intervalID = setInterval(function() {
            var currentOpacity = parseFloat(document.getElementById(houseID).style.opacity);
            if(currentOpacity > 0.0) {
                document.getElementById(houseID).style.opacity = (currentOpacity - 0.1);
            } else { 
                clearInterval(intervalID);
                var house = document.getElementById(houseID);
                house.parentNode.removeChild(house);
                enableBuildButton();
            }
        }, 50);
    }

    function showQualifiedProperties() {
        /*
        * This returns the houses can can currently be built on. A house can be built on if there
        * are no mortgaged houses in the colour set, you have all houses in the colour set, and, by
        * building a house on a property, you don't create a house gap of more than one with any
        * other property in the colour set
        */
        disableButton("buildHouse");
        for(var i = 0; i < players[turn].assets.length; i++) {
            //This runs through each of the players assets and checks what i described up there
            if(properties[players[turn].assets[i]].type == "colour" && properties[players[turn].assets[i]].numberOfHouses < 5 && checkColourSetComplete(players[turn], players[turn].assets[i]) && checkForNoMortgageInSet(players[turn], players[turn].assets[i]) && checkNumHousesInSet(players[turn], players[turn].assets[i])) {
                qualifiedTiles.push(players[turn].assets[i]);
            }
        }

        //This creates the GUI telling you which properties can be improved
        var buildHolder = document.createElement("div");
        buildHolder.id = "buildHolder";
        buildHolder.style.position = "absolute";
        buildHolder.style.height = "95px";
        if(qualifiedTiles.length > 2) {
            buildHolder.style.width = "250px";
            buildHolder.style.overflowY = "scroll";
        } else {
            buildHolder.style.width = "240px";
            if(qualifiedTiles.length == 1) {
                buildHolder.style.height = "50px";
            }
        }
        buildHolder.style.top = "35%";
        buildHolder.style.left = "5%";
        buildHolder.style.border = "5px solid black";
        buildHolder.style.borderRadius = "10px";
        buildHolder.style.backgroundColor = "#00001a";
        document.getElementById("body").appendChild(buildHolder);

        var cancelBuildButton = document.createElement("button");
        cancelBuildButton.id = "cancel";
        cancelBuildButton.style.width = "15px";
        cancelBuildButton.style.height = "15px";
        cancelBuildButton.style.backgroundImage = "url('images/cancel.png')";
        cancelBuildButton.style.backgroundSize = "11px 11px";
        cancelBuildButton.style.borderRadius = "5px";
        cancelBuildButton.style.position = "absolute";
        cancelBuildButton.style.left = "5%";
        cancelBuildButton.style.top = "35%";
        document.getElementById("body").appendChild(cancelBuildButton);
        cancelBuildButton.addEventListener("click", resetQualifiedProperties, false);

        for(var i = 0; i < qualifiedTiles.length; i++) {
            //This puts the properties in the GUI
            var propertyButton = document.createElement("button");
            propertyButton.id = qualifiedTiles[i];
            propertyButton.innerHTML = properties[qualifiedTiles[i]].name.toUpperCase();
            propertyButton.style.top = (5 + ((40 * i) + (5 * i))).toString().concat("px");;
            propertyButton.style.left = "10px";
            propertyButton.style.width = "220px";
            propertyButton.style.height = "40px";
            propertyButton.style.position = "absolute";
            propertyButton.style.borderRadius = "10px";
            propertyButton.style.backgroundColor = "#0099ff";
            propertyButton.style.borderColor = "black";
            propertyButton.style.fontSize = "20px";
            propertyButton.style.fontFamily = "bold";
            document.getElementById("buildHolder").appendChild(propertyButton);
            propertyButton.addEventListener("click", buildHouses.bind(null, players[turn], propertyButton.id), false);
        }
    }

    function enableBuildButton() {
        //This runs through the hosues to check if at least one can be either build on or mortgaged
        //and activated teh necessary buttons (build/mortgage). It also 
        disableButton("buildHouse");
        disableButton("showMortgageButton")
        //disableButton("tradeButton");
        for(var i = 0; i < players[turn].assets.length; i++) {
            if(properties[players[turn].assets[i]].type == "colour" && properties[players[turn].assets[i]].numberOfHouses < 5 && checkColourSetComplete(players[turn], players[turn].assets[i]) && checkForNoMortgageInSet(players[turn], players[turn].assets[i]) && checkNumHousesInSet(players[turn], players[turn].assets[i])) {
                if(players[turn].money >= properties[players[turn].assets[i]].costOfHouse) {
                    enableButton("buildHouse");
                    break;
                }
            }
        }
        
        for(var i = 0; i < players[turn].assets.length; i++) {
            enableButton("showMortgageButton");
            break;
        }
    
        if(players[turn].assets > 0 || players[turn].getOutOfJail > 0 || players[turn].money > 0) {
            //Think we already have something to check if trade should be activated 
            for(var i = 0; i < numPlayers; i++) {
                if(i != turn) {
                    if(players[i].assets > 0 || players[i].getOutOfJail > 0) {
                        enableButton("tradeButton");
                        break
                    }
                }
            }
        }
    }

    function resetQualifiedProperties() {
        clearBuildGUI();
        enableBuildButton();
    }

    function clearBuildGUI() {
        var buildHolder = document.getElementById("buildHolder");
        buildHolder.parentNode.removeChild(buildHolder);
        var cancelButton = document.getElementById("cancel");
        cancelButton.parentNode.removeChild(cancelButton);
        qualifiedTiles = [];
    }

    function checkForNoMortgageInSet(playerObj, tileID) {
        //Checks that no property in a colour set (must be complete) is mortgaged
        //Used when the player wants to build a house on a property
        var propColour = properties[tileID].colour;
        for(var i = 0; i < playerObj.properties[propColour].length; i++) {
            if(properties[playerObj.properties[propColour][i]].mortgaged) {
                //alert("Cannot build a house with a mortgaged property in the colour set");
                return false;
            }
        }
        return true;
    }

    function checkIfAllPropsMortgaged(playerObj) {
        //Checks if every property a player owns (regardless of colour) is mortgaged
        //Used when the player lands a fine they can't pay. Ifthis returns false they can mortgage
        //a property to pay the fine, if true then they go bankrupt
        for(var i = 0; i < playerObj.assets.length; i++) {
            //You can probably just change this to the actualy function later
            if(!checkIfPropMortgaged(playerObj.assets[i])) {
                return false;
            }
        }
        return true;
    }

    function checkIfPropMortgaged(tileID) {
        //Checks if a single property is mortgaged
        return properties[tileID].mortgaged;
    }

    function checkNumHousesInSet(playerObj, tileID) {
        //Checks if the number of houses the property that the player is trying to build on is
        //greater than any other property in the same colour set. If it is it will create a gap
        //greater than 1 which is not allowed
        var propColour = properties[tileID].colour;

        for(var i = 0; i < playerObj.properties[propColour].length; i++) {
            if(playerObj.properties[propColour][i] == tileID) {
                continue;
            } else {
                if(properties[tileID].numberOfHouses > properties[playerObj.properties[propColour][i]].numberOfHouses) {
                    //alert("Player does not have an even build");
                    return false;
                }
            }
        }
        return true;
    }

    function checkIfAbleToRemoveHouse(playerObj, tileID) {
        //This checks that if by removing a house you create a house gap of more than one
        var propColour = properties[tileID].colour;

        for(var i = 0; i < playerObj.properties[propColour].length; i++) {
            if(playerObj.properties[propColour][i] == tileID) {
                continue;
            } else {
                if(properties[tileID].numberOfHouses < properties[playerObj.properties[propColour][i]].numberOfHouses) {
                    return false;
                }
            }
        }
        return true;
    }

    function payRent(payer, payee, tileID) {
        //When a player lands on an owned tile this will be called to calculate the rent. If the 
        //property is mortgaged, norent will be paid
        var capitalAvailable = payer.money;
        var rentDue;
        if(properties[tileID].mortgaged) {
            alert("Property is mortgaged, no rent collected");
        } else {
            if(properties[tileID].type == "colour") {
                var numOfHouses = properties[tileID].numberOfHouses;
                //If it's a normal property
                rentDue = properties[tileID].rent[numOfHouses];
                if(checkColourSetComplete(payee, tileID) && numOfHouses == 0) {
                    //If the player owns all of the properties, any undeveloped (no houses) property
                    //has its rent doubled
                    rentDue *= 2;
                }
            } else if(properties[tileID].type == "railroad") {
                //Depending on how many railroads the player owns, the rent will be different
                //rentDue = properties[tileID].rent[payee.railroadsOwned]; //changed
                rentDue = properties[tileID].rent[payee.properties["railroad"].length];
                if(doubleRentFromChance) {
                    rentDue *= 2;
                    doubleRentFromChance = false;
                }
            } else if(properties[tileID].type == "utility") {
                //The rent is the dice roll * the number corresponding to the number of utilities owned
                //rentDue = currentRoll * properties[tileID].rent[payee.utilitiesOwned]; //changed
                rentDue = currentRoll * properties[tileID].rent[payee.properties["utilities"].length];
            }

            if(rentDue > capitalAvailable) {
                //console.log("Allow to mortgage or bankrupt");
                //deficitAmount = rentDue;
                iDeclareBankruptcy(players[turn]);
            } else {
                //This is where transactions come into play
                payer.money -= rentDue;
                payee.money += rentDue;
                if(payer.money <= 0) {
                    bankrupt(payer);
                }
            }
        }
    }

    function playerFined(playerObj, playerPos) {
        //This just adds to the kitty
        if(playerPos == "0004") {
            kitty += 200;
        } else {
            kitty += 75;
        }
        document.getElementById("kitty").innerHTML = kitty;
        decideOnNextPlayer();
    }

    function landedOnKitty(playerObj) {
        //The player is given all the money in the kitty
        playerObj.money += kitty;
        kitty = 0;
        document.getElementById("kitty").innerHTML = kitty;
        decideOnNextPlayer();
    }

    function mortgage(playerObj, tileID) {
        //Allow the player to mortgage their property to the bank. 
        var bankruptCheck = false;

        //This just checks if they are mortgaging from bankrupt and they need to be checked again
        if(playerObj.money <= 0) {
            bankruptCheck = true;
            removeBankruptGUI();
        }
        //Calculate the loan amount
        var loan = properties[tileID].price / 2;
        console.log("loan: " + loan);

        //If the property has houses on it, all the properties of that colour need to remove their
        //houses and sold back to the bank
        if(properties[tileID].type == "colour") {
            var propertyColour = properties[tileID].colour;
            //This checks whether the colour set is all unimproved
            var allUnimproved = checkIfAllPropertiesUnimproved(playerObj.properties[propertyColour]);
    
            if(!allUnimproved) {
                //If not you have to go through each property in the set and remove houses where necessary
                for(var i = 0; i < playerObj.properties[propertyColour].length; i++) {
                    var tile = playerObj.properties[propertyColour][i];
                    unPlaceHouse(tile, properties[tile].numberOfHouses);
                    playerObj.money += ((properties[tile].houseValue * properties[tile].numberOfHouses) / 2);
                }
            }
        }
        
        playerObj.money += loan;
        properties[tileID].mortgaged = true;

        if(document.getElementById("mortgageHolder")) {
            //This resets it if it's a normal mortgage
            resetMortgageableProperties();
        }

        if(bankruptCheck) {
            checkIfStillBankrupt(playerObj);
        }
    }

    function checkIfAllPropertiesUnimproved(propertyList) {
        //This runs through a colour set to check if there are any houses
        for(var i = 0; i < propertyList.length; i++) {
            if(properties[propertyList[i]].numberOfHouses > 0) {
                return false;
            }
        }
        return true;
    }

    function justTraded(playerObj, tileID) {
        /*
        * After a player trades a property with another player, the property may be mortgaged. If 
        * it is then the player who receives the card has the opportunity to pay off the loan to the
        * bank. If they don't they have to pay the 10% anyway along with the full loan later on
        */
        if(properties[tileID].mortgaged) {
            if(confirm("Would you like to unmortgage this property now?")) {
                playerObj.money -= ((properties[tileID].price / 2) * 1.1);
            } else {
                alert("Player has to pay 10% of the loan anyway");
                playerObj.money -= ((properties[tileID].price / 2) * 0.1);
            }
            if(playerObj.money <= 0) {
                bankrupt(playerObj);
            }
        }
    }

    function distanceCalculator(tileOne, tileTwo) {
        //Calculates the distance between two tiles
        var distance = tileToPosition(tileOne) - tileToPosition(tileTwo);
        if(distance < 0) {
            distance += 40;
        }
        return distance;
    }

    function tileToPosition(tileID) {
        //Converts tileID into its corresponding position in the made up array
        var arrayIndex;
        //Gets first two numbers in the id
        var left = parseInt(tileID.substring(0, 2));
        //Gets the last two numbers in the id
        var right = parseInt(tileID.substring(2, 4));
        if(left <= right) {
            arrayIndex = left + right;
        } else {
            arrayIndex = 40 - (left + right);
        }
        return arrayIndex;
    }
})();