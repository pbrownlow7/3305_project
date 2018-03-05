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
    var card = chanceArray.shift();
    chanceArray.push(card);
    fadeCardOut(card, "chanceCard");
}

function chance(playerPos, player, card){
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
    players[turn].jailCard = true;
    //alert("Player received Get out of Jail Free Card");
}

function calcHouseHotels(housePrice, hotelPrice) {
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
    var spaces = distanceCalculator(tile, playerObj.position);
    movePlayer(playerObj, spaces);
    //document.getElementById(tile).appendChild(players[turn].id);
}

function getCommChestCard() {
    var card = communityChestArray.shift(); // takes top card from array
    //var card = communityChestArray[12];
    communityChestArray.push(card);
    fadeCardOut(card, "commChestCard");
}

async function communityChest(playerPos, player, card){
    /*await sleep(500);
    var card = communityChestArray.shift(); // takes top card from array
    //var card = communityChestArray[4];
    communityChestArray.push(card);  // adds card to end of array*/
  
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
    players[turn].money += amount;
}

function comChestFine(amount){
    players[turn].money -= amount;
    kitty += amount;
    document.getElementById("kitty").innerHTML = kitty;
}

function playerCollect(amount){
    // collects amount from each player and adds to current player.
    var collection = 0;
    for(var i = 0; i < players.length; i++){
        if(players[i] != players[turn]){
            players[i].money -=amount;
            collection += amount;
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

    //var rollButton;
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

    /*
    var bootButton;
    var carButton;
    var hatButton;
    var shipButton;
    var barrButton;
    var coneButton;
    */
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
    var qualifiedTiles = [];

    //For tax
    var kitty = 0;

    //For bankruptcy
    var numberOfAuctions;
    var currentlyBankrupting = false;
    var bankruptingPlayer;
    var deficitAmount = 0;

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


        //Placing the chance and community chest cards
        diagonalFadeOut = true;
        straightFadeOut = true;

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

        var chanceP = document.createElement("p");
        chanceP.innerHTML = "CHANCE";
        chanceP.id = "chanceP";
        chanceP.style.position = "absolute";
        chanceP.style.top = "25%";
        chanceP.style.left = "25%";
        document.getElementById("chanceCard").appendChild(chanceP);

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
        numPlayers = players.length;
        //$("#player1").fadeOut();
        //$("#player1").fadeIn();
        //rollButton = document.getElementById("temp");
        //endTurnButton = document.getElementById("endTurn");

        walkSound = document.getElementById("walkSound");
        diceSound = document.getElementById("diceSound");
        jailDoorCloseSound = document.getElementById("jailClose");
        buySound = document.getElementById("chaching");
        hammerSound = document.getElementById("hammerSound");

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
        bbut.addEventListener("click", iDeclareBankruptcy, false);
    }

    $(document).ready(function() {
        $(".ver").mouseover(function() {
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

    function iDeclareBankruptcy() {
        currentlyBankrupting = true;
        //players[turn].money = 0;
        disableButton("endTurn");
        disableButton("rollDice");
        disableButton("showMortgageButton");
        disableButton("buy");
        disableButton("auction");
        disableButton("buildHouse");
        
        qualifiedTiles = [];
        var mortgageableProperty = false;

        for(var i = 0; i < players[turn].assets.length; i++) {
            if(!properties[players[turn].assets[i]].mortgaged) {
                mortgageableProperty = true;
                break;
            }
        }

        var bankruptHolder = document.createElement("div");
        bankruptHolder.id = "bankruptHolder";
        bankruptHolder.style.position = "absolute";
        bankruptHolder.style.height = "130px";
        bankruptHolder.style.width = "260px";
        bankruptHolder.style.top = "35%";
        bankruptHolder.style.left = "3%";
        bankruptHolder.style.border = "5px solid black";
        bankruptHolder.style.borderRadius = "10px";
        bankruptHolder.style.backgroundColor = "#00001a";
        document.getElementById("body").appendChild(bankruptHolder);

        var mortgageButton = document.createElement("button");
        mortgageButton.id = "mortgageButton";
        mortgageButton.style.position = "absolute";
        mortgageButton.style.height = "50px";
        mortgageButton.style.width = "240px";
        mortgageButton.style.top = "10px";
        mortgageButton.style.left = "10px";
        mortgageButton.style.borderRadius = "10px";
        mortgageButton.style.backgroundColor = "#0099ff";
        if(!mortgageableProperty) {
            mortgageButton.style.backgroundColor = "#c2c2a3";
            mortgageButton.setAttribute("disabled", "disabled");
        }
        mortgageButton.style.borderColor = "black";
        mortgageButton.innerHTML = "MORTGAGE PROPERTY";
        mortgageButton.style.fontSize = "20px";
        mortgageButton.style.fontFamily = "bold";
        document.getElementById("bankruptHolder").appendChild(mortgageButton);
        mortgageButton.addEventListener("click", bankruptMortgaging.bind(null, players[turn]), false);

        var sellJailCard = document.createElement("button");
        sellJailCard.id = "sellJailCard";
        sellJailCard.style.position = "absolute";
        sellJailCard.style.height = "50px";
        sellJailCard.style.width = "240px";
        sellJailCard.style.top = "70px";
        sellJailCard.style.left = "10px";
        sellJailCard.style.borderRadius = "10px";
        sellJailCard.style.backgroundColor = "#0099ff";
        if(players[turn].getOutOfJail == 0) {
            sellJailCard.style.backgroundColor = "#c2c2a3";
            sellJailCard.setAttribute("disabled", "disabled");
        }
        sellJailCard.style.borderColor = "black";
        sellJailCard.innerHTML = "TRADE JAIL CARD";
        sellJailCard.style.fontSize = "20px";
        sellJailCard.style.fontFamily = "bold";
        document.getElementById("bankruptHolder").appendChild(sellJailCard);

        if(!mortgageableProperty && players[turn].getOutOfJail == 0) {
            var bankruptHolder = document.getElementById("bankruptHolder");     
            bankruptHolder.parentNode.removeChild(bankruptHolder);       
            bankrupt(players[turn]);
        }
    }

    function bankruptMortgaging(playerObj) {
        var bankruptHolder = document.getElementById("bankruptHolder");
        bankruptHolder.parentNode.removeChild(bankruptHolder);

        for(var i = 0; i < players[turn].assets.length; i++) {
            if(!properties[players[turn].assets[i]].mortgaged) {
                qualifiedTiles.push(players[turn].assets[i]);
            }
        }

        var mortgageHolder = document.createElement("div");
        mortgageHolder.id = "mortgageHolderB";
        mortgageHolder.style.position = "absolute";
        mortgageHolder.style.height = "95px";
        if(qualifiedTiles.length > 2) {
            mortgageHolder.style.width = "250px";
            mortgageHolder.style.overflowY = "scroll";
        } else {
            mortgageHolder.style.width = "240px";
            if(qualifiedTiles.length == 1) {
                mortgageHolder.style.height = "50px";
            }
        }
        mortgageHolder.style.top = "35%";
        mortgageHolder.style.left = "5%";
        mortgageHolder.style.border = "5px solid black";
        mortgageHolder.style.borderRadius = "10px";
        mortgageHolder.style.backgroundColor = "#00001a";
        document.getElementById("body").appendChild(mortgageHolder);

        var cancelBuildButton = document.createElement("button");
        cancelBuildButton.id = "cancelMortgage";
        cancelBuildButton.style.width = "15px";
        cancelBuildButton.style.height = "15px";
        cancelBuildButton.style.backgroundImage = "url('images/cancel.png')";
        cancelBuildButton.style.backgroundSize = "11px 11px";
        cancelBuildButton.style.borderRadius = "5px";
        cancelBuildButton.style.position = "absolute";
        cancelBuildButton.style.left = "5%";
        cancelBuildButton.style.top = "35%";
        document.getElementById("body").appendChild(cancelBuildButton);
        cancelBuildButton.addEventListener("click", removeBankruptMortgageGUI, false);

        for(var i = 0; i < qualifiedTiles.length; i++) {
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
            document.getElementById("mortgageHolderB").appendChild(propertyButton);
            propertyButton.addEventListener("click", mortgage.bind(null, players[turn], propertyButton.id), false);
        }
    }

    function removeBankruptMortgageGUI() {
        var holder = document.getElementById("mortgageHolderB");
        holder.parentNode.removeChild(holder);
        var cancel = document.getElementById("cancelMortgage");
        cancel.parentNode.removeChild(cancel);
        qualifiedTiles = [];
        checkIfStillBankrupt(players[turn]);
    }

    function checkIfStillBankrupt(playerObj) {
        if(playerObj.money <= deficitAmount) {
            iDeclareBankruptcy(playerObj);
        } else {
            enableButton("endTurn");
            deficitAmount = 0;
        }
    }

    function bankrupt(playerObj) {
        var cur_pos = playerObj.position;
        if(cur_pos != "0000" || cur_pos != "0002" || cur_pos != "0004" || cur_pos != "0007" || cur_pos != "0010" || cur_pos != "0710" || cur_pos != "1010" || cur_pos != "1008" || cur_pos != "1000" || cur_pos != "0700" ||cur_pos != "0400" || cur_pos != "0200") {
            if(properties[cur_pos].owner != null && properties[cur_pos].owner != playerObj) {
                //Must give the owner of this tile all of the player's properties
                for(var i = 0; i < playerObj.assets.length; i++) {
                    properties[playerObj.assets[i]].owner = properties[cur_pos].owner;
                    properties[cur_pos].owner.assets.push(playerObj.assets[i]);
                    if(properties[playerObj.assets[i]].type == "colour") {
                        properties[cur_pos].owner.properties[properties[playerObj.assets[i]].colour].push(playerObj.assets[i]);
                    } else if(properties[playerObj.assets[i]].type == "railroad") {
                        properties[cur_pos].owner.properties["railroad"].push(playerObj.assets[i]);
                    } else if(properties[playerObj.assets[i]].type == "utility") {
                        properties[cur_pos].owner.properties["utilities"].push(playerObj.assets[i]);
                    }
                }
                removePlayer(playerObj);
            } else {
                //Must auction off all properties
                numberOfAuctions = playerObj.assets.length-1;
                currentlyBankrupting = true;
                bankruptingPlayer = playerObj;
                bankruptcyAuction(playerObj);
            }
        }
    }

    function bankruptcyAuction(playerObj) {
        console.log("num: " + numberOfAuctions);
        if(numberOfAuctions >= 0) {
            console.log(playerObj.assets[numberOfAuctions]);
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
                if(players[i] == playerObj) {
                    continue;
                } else {
                    //Add them to the auction
                    console.log(currentBid);
                    if(players[i].money > currentBid) {
                        currentAuction.push({player: players[i], stillIn: true});
                        currentAuction[0]++;
                    } else {
                        currentAuction.push({player: players[i], stillIn: false});
                    }
                }
            }
            currentBidder = 2;

            //console.log(currentAuction);
            //console.log("as: " + auctionStarter + " ca: " + currentAuction + " cbr: " + currentBidder + " cb: " + currentBid);
            //Must be +2 to line up with the currentAuction list (cause the first two elements are 
            //taken)
            //Hiding and showing all appropriate GUIs
            checkAuctionAtStart();
        } else {
            //Remove player from the game
            console.log("Bankrupt player: " + playerObj.name);
            //var outer = document.getElementById("outerAuction");
            //outer.parentNode.removeChild(outer);
            //var inner = document.getElementById("innerAuction");
            //inner.parentNode.removeChild(inner);
            setTimeout(function() {
                numberOfAuctions = null;
                currentlyBankrupting = false;
                bankruptingPlayer = null;
                //enableButton("endTurn");
                removePlayer(playerObj);
            }, 800);
        }
    }

    function removePlayer(playerObj) {
        var playersTemp = [];
        for(var i = 0; i < numPlayers; i++) {
            if(players[i] == playerObj) {
                continue;
            } else {
                playersTemp.push(players[i]);
            }
        }
        players = playersTemp;
        //console.log(playerObj);
        playerObj.id.parentNode.removeChild(playerObj.id);
        numPlayers--;
        deficitAmount = 0;
        console.log(players);
        console.log(turn);
        enableButton("rollDice");
    }

    function showMortgageableProps() {
        document.getElementById("showMortgageButton").setAttribute("disabled", "disabled");

        console.log(qualifiedTiles);
        console.log(players[turn]);
        for(var i = 0; i < players[turn].assets.length; i++) {
            if(!properties[players[turn].assets[i]].mortgaged) {
                qualifiedTiles.push(players[turn].assets[i]);
            }
        }

        var mortgageHolder = document.createElement("div");
        mortgageHolder.id = "mortgageHolder";
        mortgageHolder.style.position = "absolute";
        mortgageHolder.style.height = "95px";
        if(qualifiedTiles.length > 2) {
            mortgageHolder.style.width = "250px";
            mortgageHolder.style.overflowY = "scroll";
        } else {
            mortgageHolder.style.width = "240px";
            if(qualifiedTiles.length == 1) {
                mortgageHolder.style.height = "50px";
            }
        }
        mortgageHolder.style.top = "35%";
        mortgageHolder.style.left = "5%";
        mortgageHolder.style.border = "5px solid black";
        mortgageHolder.style.borderRadius = "10px";
        mortgageHolder.style.backgroundColor = "#00001a";
        document.getElementById("body").appendChild(mortgageHolder);

        var cancelBuildButton = document.createElement("button");
        cancelBuildButton.id = "cancelMortgage";
        cancelBuildButton.style.width = "15px";
        cancelBuildButton.style.height = "15px";
        cancelBuildButton.style.backgroundImage = "url('images/cancel.png')";
        cancelBuildButton.style.backgroundSize = "11px 11px";
        cancelBuildButton.style.borderRadius = "5px";
        cancelBuildButton.style.position = "absolute";
        cancelBuildButton.style.left = "5%";
        cancelBuildButton.style.top = "35%";
        document.getElementById("body").appendChild(cancelBuildButton);
        cancelBuildButton.addEventListener("click", resetMortgageableProperties, false);

        for(var i = 0; i < qualifiedTiles.length; i++) {
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
            document.getElementById("mortgageHolder").appendChild(propertyButton);
            propertyButton.addEventListener("click", mortgage.bind(null, players[turn], propertyButton.id), false);
        }
    }

    function resetMortgageableProperties() {
        clearMortgageGUI();
        enableBuildButton();
    }

    function clearMortgageGUI() {
        var mortgageHolder = document.getElementById("mortgageHolder");
        mortgageHolder.parentNode.removeChild(mortgageHolder);
        var cancelButton = document.getElementById("cancelMortgage");
        cancelButton.parentNode.removeChild(cancelButton);
        qualifiedTiles = [];
    }

    function offerTradeClicked(tileID) {
        removeOwnerLabel();
        alert("Player wants to trade for " + tileID);
    }

    function removeOwnerLabel() {
        var tile = document.getElementById("owner");
        tile.parentNode.removeChild(tile);
        var button = document.getElementById("offerTrade");
        button.parentNode.removeChild(button);
        var cancel = document.getElementById("removeLabel");
        cancel.parentNode.removeChild(cancel);
    }

    function dropStatsDownOrUp() {
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
                var divRight = document.createElement("div");
                divRight.id = "divRight";
                divRight.style.position = "absolute";
                divRight.style.right = "0";
                divRight.style.height = "70px";
                divRight.style.width = "70px";
                divRight.style.top = "25%";
                var divLeft = document.createElement("div");
                var textSize = Math.floor(card.Name.length / 19);
                var topPercent = (45 - (textSize * 5)).toString().concat("%");
                console.log(textSize + " " + topPercent);
                divLeft.id = "divLeft";
                divLeft.style.position = "absolute";
                divLeft.style.width = "140px";
                divLeft.style.top = topPercent;
                console.log(divLeft.style.top);
                divLeft.style.textAlign = "center";
                divLeft.innerHTML = card.Name;
                var pic = document.createElement("img");
                pic.id = "pic";
                pic.src = "images/ship.png";
                pic.style.width = "70px";
                pic.style.height = "70px";
                document.getElementById(cardType).appendChild(divRight);
                document.getElementById(cardType).appendChild(divLeft);
                document.getElementById("divRight").appendChild(pic);
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

        var divRight = document.getElementById("divRight");
        var divLeft = document.getElementById("divLeft");
        var okButton = document.getElementById("ok");
        document.getElementById(cardType).removeChild(okButton);
        document.getElementById(cardType).removeChild(divLeft);
        document.getElementById(cardType).removeChild(divRight);

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

    /*
    function bootPlacement() {
        var node = document.createElement("img");
        node.className = "player";
        node.src = "images/boot.png";
        node.alt = "boot";
        //node.style.height = "25px";
        //node.style.width ="25px";
        players[turn].id = node;
        document.getElementById("bootButt").disabled = true;
        document.getElementById("bootButt").style.opacity = 0.4;
        if(turn == numPlayers-1) {
            turn = 0;
            startGame();
        } else {
            turn++;
        }
    }

    function carPlacement() {
        var node = document.createElement("img");
        node.className = "player";
        node.src = "images/car.png";
        node.alt = "car";
        //node.style.height = "25px";
        //node.style.width ="25px";
        players[turn].id = node;
        document.getElementById("carButt").disabled = true;
        document.getElementById("carButt").style.opacity = 0.4;
        if(turn == numPlayers-1) {
            turn = 0;
            startGame();
        } else {
            turn++;
        }
    }

    function hatPlacement() {
        var node = document.createElement("img");
        node.className = "player";
        node.src = "images/hat.png";
        node.alt = "hat";
        //node.style.height = "25px";
        //node.style.width ="25px";
        players[turn].id = node;
        document.getElementById("hatButt").disabled = true;
        document.getElementById("hatButt").style.opacity = 0.4;
        if(turn == numPlayers-1) {
            turn = 0;
            startGame();
        } else {
            turn++;
        }
    }

    function shipPlacement() {
        var node = document.createElement("img");
        node.className = "player";
        node.src = "images/ship.png";
        node.alt = "ship";
        //node.style.height = "25px";
        //node.style.width ="25px";
        players[turn].id = node;
        document.getElementById("shipButt").disabled = true;
        document.getElementById("shipButt").style.opacity = 0.4;
        if(turn == numPlayers-1) {
            turn = 0;
            startGame();
        } else {
            turn++;
        }
    }

    function barrPlacement() {
        var node = document.createElement("img");
        node.className = "player";
        node.src = "images/barrow.png";
        node.alt = "barrow";
        //node.style.height = "25px";
        //node.style.width ="25px";
        players[turn].id = node;
        document.getElementById("barrButt").disabled = true;
        document.getElementById("barrButt").style.opacity = 0.4;
        if(turn == numPlayers-1) {
            turn = 0;
            startGame();
        } else {
            turn++;
        }
    }

    function conePlacement() {
        var node = document.createElement("img");
        node.className = "player";
        node.src = "images/cone.png";
        node.alt = "cone";
        node.style.height = "30px";
        node.style.width ="25px";
        players[turn].id = node;
        document.getElementById("coneButt").disabled = true;
        document.getElementById("coneButt").style.opacity = 0.4;
        if(turn == numPlayers-1) {
            turn = 0;
            startGame();
        } else {
            turn++;
        }
    }*/

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
        /*
        var bootEle = document.getElementById("bootButt");
        bootEle.parentNode.removeChild(bootEle);
        var carEle = document.getElementById("carButt");
        carEle.parentNode.removeChild(carEle);
        var hatEle = document.getElementById("hatButt");
        hatEle.parentNode.removeChild(hatEle);
        var shipEle = document.getElementById("shipButt");
        shipEle.parentNode.removeChild(shipEle);
        var barrEle = document.getElementById("barrButt");
        barrEle.parentNode.removeChild(barrEle);
        var coneEle = document.getElementById("coneButt");
        coneEle.parentNode.removeChild(coneEle);
        */
        /*
        var canEle = document.getElementById("can");
        canEle.parentNode.removeChild(canEle);
        var burrEle = document.getElementById("burrito");
        burrEle.parentNode.removeChild(burrEle);
        var pastaEle = document.getElementById("pasta");
        pastaEle.parentNode.removeChild(pastaEle);
        var coffEle = document.getElementById("coff");
        coffEle.parentNode.removeChild(coffEle);
        var contEle = document.getElementById("contButt");
        contEle.parentNode.removeChild(contEle);
        var convEle = document.getElementById("convButt");
        convEle.parentNode.removeChild(convEle);
        var pizzaEle = document.getElementById("pizzaButt");
        pizzaEle.parentNode.removeChild(pizzaEle);
        var bagEle = document.getElementById("bagButt");
        bagEle.parentNode.removeChild(bagEle);*/
        var iconHolder = document.getElementById("iconHolder");
        iconHolder.parentNode.removeChild(iconHolder);
        for(var i = 0; i < numPlayers; i++) {
            document.getElementById("0000").appendChild(players[i].id);
        }
        enableButton("rollDice");
        enableButton("toggle");
    }

    function enableButton(buttonID) {
        document.getElementById(buttonID).removeAttribute("disabled");
        document.getElementById(buttonID).style.backgroundColor = "#0099ff";
    }

    function disableButton(buttonID) {
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
        players[turn].jail.getOutOfJail--;
        //document.getElementById("goojf").style.visibility = "hidden"; //...change goojf
        //Have to put jail card back and shuffle as well
        //alert("Player used their Get Out Of Jail Free card");
        releaseFromJail();
        removeJailGUI();
        normalRoll();
    }

    function payFineClicked() {
        //document.getElementById("goojfNo").style.visibility = "hidden";
        //Must take away from capital
        //alert("Player payed the fine of 50");
        releaseFromJail();
        removeJailGUI();
        normalRoll();
    }

    function attemptDoubleClicked() {
        //document.getElementById("goojfNo").style.visibility = "hidden";
        var doubleAttempt = rollDice();
        if(rolledDouble) {
            //alert("Player rolled a double");
            currentRoll = doubleAttempt[0] + doubleAttempt[1];
            releaseFromJail();
            removeJailGUI();
            diceRolled();
        } else {
            //await sleep(500);
            //diceFadeOut();
            //alert("Player did not roll a double");
            removeJailGUI();
            decideOnNextPlayer();
        }
    }

    function buyPropertyClicked() {
        //document.getElementById("buyOrAuction").style.visibility = "hidden";
        buy(players[turn], players[turn].position, properties[players[turn].position].price);
        endTurnAllowed = true;
        decideOnNextPlayer();
        //document.getElementById("endTurn").removeAttribute("disabled");
        //decidingOnProperty = false;
        //document.getElementById("temp").disabled = false;
        //incrementTurn();
    }

    async function setUpAuctionGUI() {
        disableButton("buy");
        disableButton("auction");
        hammerSound.play();
        await sleep(2000);
        hammerSound.currentTime = 0;
        hammerSound.pause();

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
        withdraw.addEventListener("click", withdrawClicked, false);

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

    async function auctionPropertyClicked() {
        //Must get rid of stats gui if up
        if(!document.getElementById("toggle").up) {
            removeStatsGUI();
        }
        //Wipe the dictionary in case any palyers hvae been eliminated from the game
        //The first element of currentAuction is the number of players left
        //The second element is the tile to be auctioned
        auctionStarter = players[turn];
        currentAuction = [0, players[turn].position];
        if(turn == numPlayers-1) {
            turn = 0;
        } else {
            turn++
        }
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

        //Must be +2 to line up with the currentAuction list (cause the first two elements are 
        //taken)
        //Hiding and showing all appropriate GUIs
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
        if(endTurnAllowed && !currentlyBankrupting) {
            if(!rolledDouble) {
                console.log("herelol");
                enableButton("endTurn")
            } else {
                playerRolledDouble();
            }
        }
    }

    async function moveBackwards(playerObj, spacesToMove) {
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
        //decidingOnProperty = false;
        //document.getElementById("temp").disabled = false;
        //incrementTurn();
    }

    function checkTile(playerPos) {
        //decidingOnProperty = true;
        //walkSound.pause();
        //console.log(playerPos);
        //alert("Player position: " + playerPos);
        if(playerPos == "0010" || playerPos == "0000") {
            decideOnNextPlayer();
            //This is the jail tile, do nothing
        } else if(playerPos == "0007" || playerPos == "1008" || playerPos == "0400") {
            //Player has landed on chance card
            //console.log("Draw chance card");
            //decidingOnProperty = true;
            //alert("Draw chance card");
            getChanceCard();
        } else if(playerPos == "0002" || playerPos == "0710" || playerPos == "0700") {
            //Player has landed on community chess
            //console.log("Draw community chest card");
            //alert("Draw community chest card");
            getCommChestCard();
        } else if(playerPos == "1010") {
            //Player has landed on Free Parking
            //console.log("Free Parking");
            landedOnKitty(players[turn]);
        } else if(playerPos == "1000") {
            //Player is sent to jail
            //console.log("Player is sent to jail");
            //alert("player is sent to jail");
            placeInJail();
            //decideOnNextPlayer();
        } else if(playerPos == "0004" || playerPos == "0200") {
            //console.log("Player pays a tax");
            playerFined(players[turn], playerPos);
            //decideOnNextPlayer();
        } else { 
            isOwned(players[turn], playerPos);
        }
    }

    function playerRolledDouble() {
        enableButton("rollDice");
        players[turn].doublesRolled++;
    }

    function isOwned(playerObj, tileID) {
        endTurnAllowed = false;
        //Checking if the tile landed on play 'playr' is owned or naw
        if(properties[tileID].owner == null) {
            //decidingOnProperty = true;
            //Buy or Auction GUI visible
            //await sleep(1200); //Have to wait so the dice fade out and don't break the game
            //document.getElementById("buyOrAuction").style.visibility = "visible";
            enableButton("buy");
            enableButton("auction");
        } else {
            if(properties[tileID].owner != players[turn]) { //Took out .id here on both
                payRent(playerObj, properties[tileID].owner, tileID);
            }
            endTurnAllowed = true;
            decideOnNextPlayer();
            //document.getElementById("endTurn").removeAttribute("disabled");
            //endTurnAllowed = true;
        }
    }

    async function buy(playerObj, tileID, amount) {
        //Have to get rid of the stats holder if it's currently down
        if(!document.getElementById("toggle").up) {
            removeStatsGUI();
        }

        disableButton("buy");
        disableButton("auction");
        playerObj.money -= amount;//properties[tileID].price; //;;;Will be done properly by Donn
        properties[tileID].owner = playerObj;//players.indexOf(playerObj);
        playerObj.assets.push(tileID);
        //playerObj.colours[properties[tileID].colour]++; //changed
        //playerObj.properties[properties[tileID].colour].push(tileID);
        if(properties[tileID].type == "colour") {
            //playerObj.ownedTilesByColour[properties[tileID].colour].push(tileID); //changed
            playerObj.properties[properties[tileID].colour].push(tileID);
        } else if(properties[tileID].type == "railroad") {
            //playerObj.railroadsOwned++; //changed
            playerObj.properties["railroad"].push(tileID);
        } else if(properties[tileID].type == "utility") {
            //playerObj.utilitiesOwned++; //changed
            playerObj.properties["utilities"].push(tileID);
        }
        buySound.play();
        await sleep(750);
        buySound.currentTime = 0;
        buySound.pause();
        //alert(playerObj.name + " bought " + tileID + " for " + amount + ". Player's capital is " + playerObj.money);
        console.log(currentlyBankrupting);
        if(!currentlyBankrupting) {
            enableBuildButton();
        }
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
        console.log(currentBidder);
        //This checks criteria for the auction, such as if the curretnt bidder has enough capital
        //or if there are still enough people in the auction
        if(currentAuction[0] > 1) {
            //Checking capital
            if(currentAuction[currentBidder].player.money < currentBid) {
                withdrawFromAuction();
                auctionChecker();
            }
        } else {
            endAuction();
        }
    }

    function endAuction() {
        var outerAuction = document.getElementById("outerAuction");
        var innerAuction = document.getElementById("innerAuction");
        outerAuction.parentNode.removeChild(outerAuction);
        innerAuction.parentNode.removeChild(innerAuction);
        if(!currentlyBankrupting) {
            if(currentBid == properties[auctionStarter.position].price * 0.2) {
                console.log("nobody wanted the property");
            } else {
                buy(currentAuction[currentBidder].player, currentAuction[1], currentBid);
            }
        }
        if(currentlyBankrupting) {
            buy(currentAuction[currentBidder].player, currentAuction[1], currentBid);
            properties[currentAuction[1]].mortgaged = false;
            numberOfAuctions--;
            bankruptcyAuction(bankruptingPlayer);
        } else {
            endTurnAllowed = true;
            turn = players.indexOf(auctionStarter);
            decideOnNextPlayer();
            enableButton("endTurn");
        }
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
        //document.getElementById("playerBiddingLabel").innerHTML = players[currentBidder-1].name;
    }

    function withdrawFromAuction() {
        //Instead of removing them from the list, it simply sets their stillIn variable to false
        currentAuction[currentBidder].stillIn = false;
        //The number of players still in the auction is held in the first element of teh array
        currentAuction[0]--;
        findBidder();
    }

    function auction(buttonPressed){
        //The button can be them bidding 1, 10, or 100, or them withdrawing
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
            diceRollInJail = rollDice();
            rolledDouble = false; //Just in case they roll a double after 3 turns
            currentRoll = diceRollInJail[0] + diceRollInJail[1];
            //console.log("Player pays the toll (50)");
            //alert("Player pays the toll of 50");
            diceRolled();
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
        var tileA = tileID.concat("a");
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
        var tileA = tileID.concat("a");
        if(numberToRemove == 5) {
            var tileAID = tileA.concat(properties[tileID].numberOfHouses.toString());
            removeHouse(tileAID);
            properties[tileID].numberOfHouses = 0;
        } else {
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
        disableButton("buildHouse");
        for(var i = 0; i < players[turn].assets.length; i++) {
            if(properties[players[turn].assets[i]].type == "colour" && properties[players[turn].assets[i]].numberOfHouses < 5 && checkColourSetComplete(players[turn], players[turn].assets[i]) && checkForNoMortgageInSet(players[turn], players[turn].assets[i]) && checkNumHousesInSet(players[turn], players[turn].assets[i])) {
                qualifiedTiles.push(players[turn].assets[i]);
            }
        }

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
        //cancelBuildButton.style.backgroundColor = "#e60000";
        cancelBuildButton.style.borderRadius = "5px";
        //cancelBuildButton.style.borderColor = "#e60000";
        cancelBuildButton.style.position = "absolute";
        cancelBuildButton.style.left = "5%";
        cancelBuildButton.style.top = "35%";
        document.getElementById("body").appendChild(cancelBuildButton);
        cancelBuildButton.addEventListener("click", resetQualifiedProperties, false);

        for(var i = 0; i < qualifiedTiles.length; i++) {
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
        disableButton("buildHouse");
        disableButton("showMortgageButton")
        for(var i = 0; i < players[turn].assets.length; i++) {
            if(properties[players[turn].assets[i]].type == "colour" && properties[players[turn].assets[i]].numberOfHouses < 5 && checkColourSetComplete(players[turn], players[turn].assets[i]) && checkForNoMortgageInSet(players[turn], players[turn].assets[i]) && checkNumHousesInSet(players[turn], players[turn].assets[i])) {
                enableButton("buildHouse");
                break;
            }
        }
        
        for(var i = 0; i < players[turn].assets.length; i++) {
            if(!properties[players[turn].assets[i]].mortgaged) {
                enableButton("showMortgageButton");
                break;
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

    function payRent(payer, payee, tileID) {
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
                deficitAmount = rentDue;
                iDeclareBankruptcy(players[turn]);
            } else {
                //This is where transactions come into play
                payer.money -= rentDue;
                payee.money += rentDue;
                //console.log("Rent: " + rentDue);
                //alert(rentDue + " was paid in rent to " + payee.name);
                //Add to owners account
            }
        }
    }

    function playerFined(playerObj, playerPos) {
        if(playerPos == "0004") {
            //alert("player pays 200");
            kitty += 200;
        } else {
            //alert("player pays 75 for noise complaint");
            kitty += 75;
        }
        document.getElementById("kitty").innerHTML = kitty;
        decideOnNextPlayer();
    }

    function landedOnKitty(playerObj) {
        //alert(playerObj.money);
        //alert("Player receives " + kitty + " for landing on Free Parking");
        playerObj.money += kitty;
        kitty = 0;
        document.getElementById("kitty").innerHTML = kitty;
        //alert(playerObj.money);
        decideOnNextPlayer();
    }

    function mortgage(playerObj, tileID) {
        //Calculate the loan amount
        var loan = properties[tileID].price / 2;
        console.log("loan: " + loan);

        if(properties[tileID].type == "colour") {
            var propertyColour = properties[tileID].colour;
            var allUnimproved = checkIfAllPropertiesUnimproved(playerObj.properties[propertyColour]);
            console.log(allUnimproved);
    
            if(!allUnimproved) {
                for(var i = 0; i < playerObj.properties[propertyColour].length; i++) {
                    var tile = playerObj.properties[propertyColour][i];
                    unPlaceHouse(tile, properties[tile].numberOfHouses);
                    playerObj.money += ((properties[tile].houseValue * properties[tile].numberOfHouses) / 2);
                }
            }
        }
        
        playerObj.money += loan;
        properties[tileID].mortgaged = true;
        console.log(playerObj.money);
        console.log(properties[tileID].mortgaged);

        if(document.getElementById("mortgageHolder")) {
            console.log("here");
            resetMortgageableProperties();
        } else if(document.getElementById("mortgageHolderB")) {
            removeBankruptMortgageGUI();
            /*
            var holder = document.getElementById("mortgageHolderB");
            holder.parentNode.removeChild(holder);
            var cancel = document.getElementById("cancelMortgage");
            cancel.parentNode.removeChild(cancel);
            qualifiedTiles = [];*/
            //checkIfStillBankrupt(playerObj);
        }
    }

    function checkIfAllPropertiesUnimproved(propertyList) {
        for(var i = 0; i < propertyList.length; i++) {
            if(properties[propertyList[i]].numberOfHouses > 0) {
                return false;
            }
        }
        return true;
    }

    /*
    function transactions(userObj, fee) {
        //Can use for both paying a player/taking money from a player
        if(fee < 0) {
            //Taking money from player
            userObj.money += fee;
            kitty -= fee
        }else if(fee > 0) {
            userObj.money += fee;
        }
    }
    */

    function distanceCalculator(tileOne, tileTwo) {
        //Calculates the distance between two tiles
        //var t1 = tileToPosition(tileOne);
        //var t2 = tileToPosition(tileTwo);
        var distance = tileToPosition(tileOne) - tileToPosition(tileTwo);
        //console.log(t1);
        //console.log(t2);
        /*if(t2 > t1) {
            distance = (40 - t2) + t1;
        } else {
            distance = t1 - t2;
        }*/
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