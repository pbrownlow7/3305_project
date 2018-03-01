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
    alert("Player received Get out of Jail Free Card");
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
    alert('Total Houses: '+houses +', Total Hotels: '+hotels + ', Total Repairs Cost: '+cost);
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
    //var card = communityChestArray[4];
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
        alert(card.Name + ', Amount Credited: '+ card.Amount * (players.length -1));
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

    var rollButton;
    var endTurnButton;
    var endTurnAllowed = true;
    
    //;;;Can be deleted
    /*
    //var bankruptPlayerButton;
    //var bankrupt = false;
    var rollEven = false;
    var rollOdd = false;
    var rollDouble = false;
    var giveJailCardButton;
    var evenRollButton;
    var oddRollButton;
    var doubleRollPressed;
    */
    //;;;//
    
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

    function init () {
        players.push(player("Player 1"));//document.getElementById ("player1"), "player1"));
        players.push(player("Player 2"));//document.getElementById ("player2"), "player2")); 
        players.push(player("Player 3"));//document.getElementById ("player3"), "player3"));
        players.push(player("Player 4"));//document.getElementById ("player4"), "player4"));
        numPlayers = players.length;
        //$("#player1").fadeOut();
        //$("#player1").fadeIn();
        rollButton = document.getElementById("temp");
        endTurnButton = document.getElementById("endTurn");

        /*
        bootButton = document.getElementById("bootButt");
        bootButton.addEventListener("click", bootPlacement, false);
        carButton = document.getElementById("carButt");
        carButton.addEventListener("click", carPlacement, false);
        hatButton = document.getElementById("hatButt");
        hatButton.addEventListener("click", hatPlacement, false);
        shipButton = document.getElementById("shipButt");
        shipButton.addEventListener("click", shipPlacement, false);
        barrButton = document.getElementById("barrButt");
        barrButton.addEventListener("click", barrPlacement, false);
        coneButton = document.getElementById("coneButt");
        coneButton.addEventListener("click", conePlacement, false);
        */
        canButton = document.getElementById("canButt");
        canButton.addEventListener("click", canPlacement, false);
        burrButton = document.getElementById("burrButt");
        burrButton.addEventListener("click", burrPlacement, false);
        pastaButton = document.getElementById("pastaButt");
        pastaButton.addEventListener("click", pastaPlacement, false);
        coffButton = document.getElementById("coffButt");
        coffButton.addEventListener("click", coffPlacement, false);
        contButton = document.getElementById("contButt");
        contButton.addEventListener("click", contPlacement, false);
        convButton = document.getElementById("convButt");
        convButton.addEventListener("click", convPlacement, false);
        pizzaButton = document.getElementById("pizzaButt");
        pizzaButton.addEventListener("click", pizzaPlacement, false);
        bagButton = document.getElementById("bagButt");
        bagButton.addEventListener("click", bagPlacement, false);
        
        //;;;Can be deleted
        /*
        //bankruptPlayerButton = document.getElementById("bankruptButton");
        giveJailCardButton = document.getElementById("temp1");
        evenRollButton = document.getElementById("temp2");
        oddRollButton = document.getElementById("temp3");
        doubleRollButton = document.getElementById("temp4");
        */
        //;;;//
        
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
        
        //;;;Can be deleted
        /*
        //bankruptPlayerButton.addEventListener("click", bankruptPlayerClicked, false);
        giveJailCardButton.addEventListener("click", giveJailCardPressed, false);
        evenRollButton.addEventListener("click", evenRollPressed, false);
        oddRollButton.addEventListener("click", oddRollPressed, false);
        doubleRollButton.addEventListener("click", doubleRollPressed, false);
        */
        //;;;//
        
        rollButton.addEventListener("click", normalRoll, false);
        endTurnButton.addEventListener("click", incrementTurn, false);

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

        //document.getElementById("temp").disabled = true;
        walkSound = document.getElementById("walkSound");
        diceSound = document.getElementById("diceSound");
        jailDoorCloseSound = document.getElementById("jailClose");
        buySound = document.getElementById("chaching");
        hammerSound = document.getElementById("hammerSound");

        shuffles(chanceArray);
        shuffles(communityChestArray);

        /*buy(players[0], "0003", properties["0003"].price);
        properties["0003"].numberOfHouses = 3;
        buy(players[0], "0001", properties["0001"].price);
        properties["0001"].numberOfHouses = 5;*/

        //document.getElementById("endTurn").removeAttribute("disabled");
        document.getElementById("currTurn").innerHTML = "Player 1";

        //Setting up the chance and commChest stuff
        diagonalFadeOut = true;
        straightFadeOut = true;

        var chanceDiv = document.createElement("div");
        chanceDiv.id = "chanceCard";
        chanceDiv.style.backgroundColor = "orange";
        chanceDiv.style.height = "90px";
        chanceDiv.style.width = "140px";
        chanceDiv.style.top = "25%";
        chanceDiv.style.left = "42%";
        chanceDiv.style.position = "absolute";
        chanceDiv.style.borderRadius = "10px";
        chanceDiv.style.transform = "rotate(-46deg)";
        chanceDiv.style.opacity = "1.0";

        var chanceHolder = document.createElement("div");
        chanceHolder.id = "chanceHolder";
        chanceHolder.style.backgroundColor = "black";
        //fakeDiv.style.border = "solid orange";
        chanceHolder.style.height = "90px";
        chanceHolder.style.width = "140px";
        chanceHolder.style.top = "25%";
        chanceHolder.style.left = "42%";
        chanceHolder.style.position = "absolute";
        chanceHolder.style.borderRadius = "10px";
        chanceHolder.style.transform = "rotate(-46deg)";

        document.getElementById("body").appendChild(chanceHolder);
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
        commChestDiv.style.top = "71%";
        commChestDiv.style.left = "65%";
        commChestDiv.style.position = "absolute";
        commChestDiv.style.borderRadius = "10px";
        commChestDiv.style.transform = "rotate(-46deg)";
        commChestDiv.style.opacity = "1.0";

        var commChestHolder = document.createElement("div");
        commChestHolder.id = "commChestHolder";
        commChestHolder.style.backgroundColor = "black";
        commChestHolder.style.height = "90px";
        commChestHolder.style.width = "140px";
        commChestHolder.style.top = "71%";
        commChestHolder.style.left = "65%";
        commChestHolder.style.position = "absolute";
        commChestHolder.style.borderRadius = "10px";
        commChestHolder.style.transform = "rotate(-46deg)";

        document.getElementById("body").appendChild(commChestHolder);
        document.getElementById("body").appendChild(commChestDiv);

        var commChestP = document.createElement("p");
        var commChestP2 = document.createElement("p");
        commChestP.innerHTML = "COMMUNITY";// CHEST";
        commChestP.id = "commChestP";
        commChestP.style.position = "absolute";
        commChestP.style.top = "13%";
        commChestP.style.left = "16%";
        commChestP2.innerHTML = "CHEST";//;COMMUNITY CHEST";
        commChestP2.id = "commChestP2";
        commChestP2.style.position = "absolute";
        commChestP2.style.top = "38%";
        commChestP2.style.left = "32%";
        document.getElementById("commChestCard").appendChild(commChestP);
        document.getElementById("commChestCard").appendChild(commChestP2);
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
                    document.getElementById(cardType).style.top = "45%";
                    document.getElementById(cardType).style.left = "48%";
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
                    document.getElementById(cardType).style.top = "71%";
                    document.getElementById(cardType).style.left = "65%";
                    document.getElementById(cardType).style.transform = "rotate(-46deg)";
                    if(cardType == "chanceCard") {
                        document.getElementById(cardType).style.top = "25%";
                        document.getElementById(cardType).style.left = "42%";
                        document.getElementById("chanceP").style.top = "25%";
                        document.getElementById("chanceP").style.left = "25%";
                    } else {
                        document.getElementById(cardType).style.top = "71%";
                        document.getElementById(cardType).style.left = "65%";
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
                divLeft.id = "divLeft";
                divLeft.style.position = "absolute";
                divLeft.style.left = "0";
                divLeft.style.height = "110px";
                divLeft.style.width = "140px";
                divLeft.style.top = "10%";
                var pCent = document.createElement("center");
                pCent.id = "pCent";
                var pLeft = document.createElement("p");
                pLeft.id = "desc";
                pLeft.style.fontSize = "14px";
                pLeft.innerHTML = card.Name;//"Advance to nearest Travel Tile, paying owner twice the rent due. If Tile is unowned, you may buy it from the Bank";
                var pic = document.createElement("img");
                pic.id = "pic";
                pic.src = "images/ship.png";
                pic.style.width = "70px";
                pic.style.height = "70px";
                document.getElementById(cardType).appendChild(divRight);
                document.getElementById(cardType).appendChild(divLeft);
                document.getElementById("divLeft").appendChild(pCent);
                document.getElementById("pCent").appendChild(pLeft);
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
        document.getElementById("canButt").disabled = true;
        document.getElementById("canButt").style.opacity = 0.4;
        if(turn == numPlayers-1) {
            turn = 0;
            startGame();
        } else {
            turn++;
        }
    }

    function burrPlacement() {
        var node = document.createElement("img");
        node.className = "player";
        node.src = "images/Burrito.png";
        node.alt = "burrito";
        node.style.height = "25px";
        node.style.width ="25px";
        node.style.zIndex = 2;
        players[turn].id = node;
        document.getElementById("burrButt").disabled = true;
        document.getElementById("burrButt").style.opacity = 0.4;
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
        document.getElementById("pastaButt").disabled = true;
        document.getElementById("pastaButt").style.opacity = 0.4;
        if(turn == numPlayers-1) {
            turn = 0;
            startGame();
        } else {
            turn++;
        }
    }

    function coffPlacement() {
        var node = document.createElement("img");
        node.className = "player";
        node.src = "images/Coffee.png";
        node.alt = "coffee";
        node.style.height = "24px";
        node.style.width = "24px";
        node.style.zIndex = 4;
        players[turn].id = node;
        document.getElementById("coffButt").disabled = true;
        document.getElementById("coffButt").style.opacity = 0.4;
        if(turn == numPlayers-1) {
            turn = 0;
            startGame();
        } else {
            turn++;
        }
    }

    function contPlacement() {
        var node = document.createElement("img");
        node.className = "player";
        node.src = "images/controller.png";
        node.alt = "controller";
        node.style.height = "40px";
        node.style.width ="45px";
        players[turn].id = node;
        document.getElementById("contButt").disabled = true;
        document.getElementById("contButt").style.opacity = 0.4;
        if(turn == numPlayers-1) {
            turn = 0;
            startGame();
        } else {
            turn++;
        }
    }

    function convPlacement() {
        var node = document.createElement("img");
        node.className = "player";
        node.src = "images/shoes.png";
        node.alt = "converse";
        node.style.height = "40px";
        node.style.width ="40px";
        players[turn].id = node;
        document.getElementById("convButt").disabled = true;
        document.getElementById("convButt").style.opacity = 0.4;
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
        document.getElementById("pizzaButt").disabled = true;
        document.getElementById("pizzaButt").style.opacity = 0.4;
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
        document.getElementById("bagButt").disabled = true;
        document.getElementById("bagButt").style.opacity = 0.4;
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
        var canEle = document.getElementById("canButt");
        canEle.parentNode.removeChild(canEle);
        var burrEle = document.getElementById("burrButt");
        burrEle.parentNode.removeChild(burrEle);
        var pastaEle = document.getElementById("pastaButt");
        pastaEle.parentNode.removeChild(pastaEle);
        var coffEle = document.getElementById("coffButt");
        coffEle.parentNode.removeChild(coffEle);
        var contEle = document.getElementById("contButt");
        contEle.parentNode.removeChild(contEle);
        var convEle = document.getElementById("convButt");
        convEle.parentNode.removeChild(convEle);
        var pizzaEle = document.getElementById("pizzaButt");
        pizzaEle.parentNode.removeChild(pizzaEle);
        var bagEle = document.getElementById("bagButt");
        bagEle.parentNode.removeChild(bagEle);
        for(var i = 0; i < numPlayers; i++) {
            document.getElementById("0000").appendChild(players[i].id);
        }
        //document.getElementById("temp").disabled = false;
        document.getElementById("temp").removeAttribute("disabled");
    }

    
    //;;;
    /*
    function bankruptPlayerClicked() {
        //Do nothing
    }
    */
    //;;;//

    async function diceFadeIn(num1, num2) {
        //document.getElementById("temp").disabled = true;
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

    function attemptDoubleClicked() {
        document.getElementById("goojfNo").style.visibility = "hidden";
        var doubleAttempt = rollDice();
        if(rolledDouble) {
            currentRoll = doubleAttempt[0] + doubleAttempt[1];
            releaseFromJail();
            diceRolled();
        } else {
            //await sleep(500);
            //diceFadeOut();
            decideOnNextPlayer();
        }
    }

    function buyPropertyClicked() {
        document.getElementById("buyOrAuction").style.visibility = "hidden";
        buy(players[turn], players[turn].position, properties[players[turn].position].price);
        endTurnAllowed = true;
        decideOnNextPlayer();
        //document.getElementById("endTurn").removeAttribute("disabled");
        //decidingOnProperty = false;
        //document.getElementById("temp").disabled = false;
        //incrementTurn();
    }

    async function auctionPropertyClicked() {
        //Wipe the dictionary in case any palyers hvae been eliminated from the game
        //The first element of currentAuction is the number of players left
        //The second element is the tile to be auctioned
        hammerSound.play();
        await sleep(2000);
        hammerSound.currentTime = 0;
        hammerSound.pause();
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
        document.getElementById("buyOrAuction").style.visibility = "hidden";
        document.getElementById("auctionWindow").style.visibility = "visible";
        document.getElementById("bidder").style.visibility = "visible";
        document.getElementById("currBid").innerHTML = "Current Bid: " + currentBid;
        document.getElementById("madeBid").innerHTML = "Current Bidder: ";
        //Auction checker controls the flow of auctions. Check that function for details
        checkAuctionAtStart();
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

    function player(name) {//icon, nameTemp) {
        var player = {};
        player.name = name; //done
        player.id = null; //done
        player.position = "0000"; //done
        player.doublesRolled = 0; //The number of doubles the player has rolled in a row
        player.money = 1500; //done
        player.assets = []; //done

        //player.railroadsOwned = 0;
        //player.utilitiesOwned = 0;

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
        document.getElementById("temp").setAttribute("disabled", "disabled");
        diceSound.play();
        await sleep(1000);
        diceSound.currentTime = 0;
        diceSound.pause();
        var ro = rollDice(); //Temporary variable to get the two dice rolls
        currentRoll = ro[0] + ro[1];
        diceRolled();
    }
    
    //;;;
    /*
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
    */
    //;;;//
    

    async function diceRolled() {
        if(players[turn].jail.justReleased) {
            players[turn].jail.justReleased = false;
        }
        //Check for doubles
        if(rolledDouble && players[turn].doublesRolled == 2) {
            /*
            * If they've rolled a double with two already rolled they go to jail
            */
            //players[turn].doublesRolled++
            alert("Player was place in jail");
            placeInJail();
            //diceFadeOut();
        } else {
            //Move the player
            movePlayer(players[turn], currentRoll);
        }
        
        /*else {
            //They didn't roll a double so they don't get to roll again
            players[turn].doublesRolled = 0;
        }*/
            
        //Move the player
        /*if(players[turn].doublesRolled == 3) {
            placeInJail();
            await sleep(1000);
            diceFadeOut();
        } else {
            movePlayer(players[turn], currentRoll, turn);
        }*/
    }

    function incrementTurn() {
        //Only increment if the player didn't roll a double
        diceFadeOut();
        players[turn].doublesRolled = 0;
        console.log(turn);
        if(turn == numPlayers - 1) {
            turn = 0;
        } else {
            turn++;
        }
        document.getElementById("endTurn").setAttribute("disabled", "disabled");
        /*if(!rolledDouble) {
            if(turn == numPlayers - 1) {
                turn = 0;
            } else {
                turn++;
            }
        }*/
        console.log(turn);
        var nextPlay = turn+1;
        document.getElementById("currTurn").innerHTML = "Player " + nextPlay;
        
        //Check if player is in jail here so that if the player is in jail the prompt for either
        //using their jailCard if they have one or to pay fine or roll for a double is automatically
        //shown without them having to click anything
        if(players[turn].jail.jailTag) {
            players[turn].jail.jailRoll++;
            checkForJailCard();
        } else {
            document.getElementById("temp").removeAttribute("disabled");
        }/* else {
            /*
            * Put a timer here maybe for the length of time the player has to roll until
            * it automatically does it for them
            *
        }*/
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
        if(endTurnAllowed) {
            if(!rolledDouble) {
                document.getElementById("endTurn").removeAttribute("disabled");
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
        walkSound.pause();
        //console.log(playerPos);
        alert("Player position: " + playerPos);
        if(playerPos == "0010" || playerPos == "0000") {
            decideOnNextPlayer();
            //This is the jail tile, do nothing
        } else if(playerPos == "0007" || playerPos == "1008" || playerPos == "0400") {
            //Player has landed on chance card
            //console.log("Draw chance card");
            //decidingOnProperty = true;
            alert("Draw chance card");
            getChanceCard();
        } else if(playerPos == "0002" || playerPos == "0710" || playerPos == "0700") {
            //Player has landed on community chess
            //console.log("Draw community chest card");
            alert("Draw community chest card");
            getCommChestCard();
        } else if(playerPos == "1010") {
            //Player has landed on Free Parking
            //console.log("Free Parking");
            alert("Free Parking");
            decideOnNextPlayer();
        } else if(playerPos == "1000") {
            //Player is sent to jail
            //console.log("Player is sent to jail");
            alert("player is sent to jail");
            placeInJail();
            //decideOnNextPlayer();
        } else if(playerPos == "0004" || playerPos == "0200") {
            //console.log("Player pays a tax");
            alert("Player pays a tax");
            decideOnNextPlayer();
        } else { 
            isOwned(players[turn], playerPos);
        }

        //Will probably have to put this somewhere else
        /*if(endTurnAllowed) {
            if(!rolledDouble) {
                document.getElementById("endTurn").removeAttribute("disabled");
            } else {
                playerRolledDouble();
            }
        }*/
    }

    function playerRolledDouble() {
        document.getElementById("temp").removeAttribute("disabled");
        players[turn].doublesRolled++;
    }

    function isOwned(playerObj, tileID) {
        endTurnAllowed = false;
        //Checking if the tile landed on play 'playr' is owned or naw
        if(properties[tileID].owner == null) {
            //decidingOnProperty = true;
            //Buy or Auction GUI visible
            //await sleep(1200); //Have to wait so the dice fade out and don't break the game
            document.getElementById("buyOrAuction").style.visibility = "visible";
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
        //console.log(playerObj.name + " " + playerObj.capital);
        console.log(players[turn].properties);
        console.log(players[turn].assets);
        alert(playerObj.name + " bought " + tileID + " for " + amount + ". Player's capital is " + playerObj.money);
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
        //This checks criteria for the auction, such as if the curretnt bidder has enough capital
        //or if there are still enough people in the auction
        if(currentAuction[0] > 1) {
            //Checking capital
            if(currentAuction[currentBidder].player.money < currentBid) {
                withdrawFromAuction();
                auctionChecker();
            }
            document.getElementById("bidder").innerHTML = "Player " + (currentBidder-1);
        } else {
            endAuction();
        }
    }

    function endAuction() {
        //Need to change buy to add sending the cost of the auction
        buy(players[currentBidder-2], currentAuction[1], currentBid);
        document.getElementById("auctionWindow").style.visibility = "hidden";
        document.getElementById("bidder").style.visibility = "hidden";
        //document.getElementById("temp").disabled = false;
        //decidingOnProperty = false;
        endTurnAllowed = true;
        turn = players.indexOf(auctionStarter);
        decideOnNextPlayer();
        //if(!rolledDouble) {
            document.getElementById("endTurn").removeAttribute("disabled");
        //}
        //incrementTurn();
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
            document.getElementById("currBid").innerHTML = "Current Bid: " + currentBid;
            document.getElementById("madeBid").innerHTML = "Current Bidder: " + currentAuction[currentBidder].player.name;
            findBidder();
        } else {
            //If buttonPressed is 0 the player has pressed the withdraw button
            withdrawFromAuction();
        }
        
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
        document.getElementById("endTurn").removeAttribute("disabled");
    }

    function checkForJailCard() {
        //This is done at the start of the player's round so they don't have to press anything to 
        //trigger the GUI to pop up
        if(players[turn].getOutOfJail > 0) {
            //If they do have a jailCard they will be asked if they want to use it. If they do,
            //the dice will be rolled automatically and they will be released from jail. They
            //won't be able to roll again if they get a double though. To pop the GUI, the Use
            //Jail Card HTML element needs to be set to visible and the Normal Roll button needs
            //to be disabled
            document.getElementById("goojf").style.visibility = "visible";
            //document.getElementById("temp").disabled = false;
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
            alert("Player pays the toll of 50");
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

        players[turn].jail.jailTag = false;
        players[turn].jail.jailRoll = 0;
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

        //num1 = 1;//parseInt(document.getElementById("dOne").value);
        //num2 = 1;//parseInt(document.getElementById("dTwo").value);
        
        //;;;
        /*
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
        //;;;//


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

    /*
    function takeFromCapital(amount, playerObj) {
        //Takes 'amount' from the appropriate player
        playerObj.money -= amount;
        if(playerObj.money > 0) {
            console.log("Player's capital: " + playerObj.money);
        } else if(playerObj.money <= 0) {
            playerObj.money = 0;
            console.log("Player is now bankrupt");
            /*
            * Probably call some function about cleaning up the player's variables
            
        }
    }
    */

    /*
    function generalCollect(val, playerObj){
        playerObj.money += val;
        console.log("Player's capital: "+ playerObj.money);
        console.log("Added " + val + " to player's account");
    }

    function collectKitty(playerObj){
        var oldKitty = parkingKitty;
        if (parkingKitty > 0){
            playerObj.money += parkingKitty;
            parkingKitty = 0;
            console.log("Added " + oldKitty + " to player's account");
        } else if (parkingKitty <= 0){
            console.log("There was no money to collect from the Kitty, soz :'( ");
        }
    }

    function kittyFine(playerObj, val){
        playerObj.money -= val;
        parkingKitty += val;
        console.log("Player fined. Money added to Kitty")
    }
    */

    function checkColourSetComplete(playerObj, tileID){
        //Checks if the player has all the properties in the tileID's colour set
        //Used for when the player wants to build a house on a property (tileID)
        var maxNumOfProps = properties[tileID].numberOfColours;
        
        /*if(userObj.colours[properties[tileID].colour] == maxNumOfProps) {
            return true;
        } else {
            return false;
        }*/ //changed
        if(playerObj.properties[properties[tileID].colour].length == maxNumOfProps) {
            return true;
        } else {
            return false;
        }
    }

    function buildHouses(playerObj, tileID){
        var costOfHouse = properties[tileID].houseValue;
    
        if(checkColourSetComplete(playerObj, tileID) && checkForNoMortgageInSet(playerObj, tileID) && checkNumHousesInSet(playerObj, tileID)) {
            //Player can only build a house if they have all properties of that colour, no property
            //of that colour is mortgaged, and they won't make a gap of more than 1 house between
            //the properties
            if(playerObj.money >= costOfHouse) {
                playerObj.money -= costOfHouse;
                properties[tileID].numberOfHouses++;
                if(properties[tileID].numberOfHouses == 5) {
                    placeHouse(tileID);
                    properties[tileID].numberOfHouses++;
                    //Instead of a hotel flag we're simply saying the 5th house is a hotel
                    //console.log("The player has built a hotel on " + properties[tileID].name);
                    //alert("The player has built a hotel on " + properties[tileID].name);
                } else {
                    placeHouse(tileID);
                    properties[tileID].numberOfHouses++;
                    //console.log("The player has built a house on " + properties[tileID].name);
                    //console.log("The player has " + properties[tileID].numberOfHouses + " houses here");
                    //alert("The player has built a house (" + properties[tileID].numberOfHouses + "/4) on " + properties[tileID].name);
                }
            } else {
                //console.log("Player does not have enough money to build house");
                alert("Player does not have enough money to build house");
            }
        } else {
            //console.log("player cannot place house here");
            alert("Player does not have a monopoly in this colour set");
        }
    }

    function placeHouse(tileID) {
        // this function is used to place house on board ---- NOT COMPLETE ----
        var tileA = tileID.concat("a");// +'a';
        if (properties[tileID].numberOfHouses <= 4) {
            var hse = document.getElementById("houseImg");
            var cln = hse.cloneNode(true);
            document.getElementById(tileA).appendChild(cln);
            console.log(tileA);
        } else {
            var htl = document.getElementById("hotelImg"); // places a hotel
            var parent = document.getElementById(tileA);
            while (parent.firstChild) { // remove houses from tile
                parent.removeChild(parent.firstChild);
            }
            parent.appendChild(htl); // appends Hotel to tile
            console.log(tileA);
        }
    }

    function checkForNoMortgageInSet(playerObj, tileID) {
        //Checks that no property in a colour set (must be complete) is mortgaged
        //Used when the player wants to build a house on a property
        var propColour = properties[tileID].colour;
        /*for(var i = 0; i < playerObj.colours[propColour]; i++) {
            if(properties[playerObj.ownedTilesByColour[propColour][i]].mortgaged) {
                return false;
            }
        }*/ //changed
        for(var i = 0; i < playerObj.properties[propColour].length; i++) {
            if(properties[playerObj.properties[propColour][i]].mortgaged) {
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
        //Checks if the number of houses the proprty that the player is trying to build on is
        //greater than any other property in the same colour set. If it is it will create a gap
        //greater than 1 which is not allowed
        var propColour = properties[tileID].colour;
        /*for(var i = 0; i < playerObj.colours[propColour]; i++) {
            if(playerObj.ownedTilesByColour[propColour][i] == tileID) {
                continue;
            } else {
                if(properties[tileID].numberOfHouses > properties[playerObj.ownedTilesByColour[propColour][i]].numberOfHouses) {
                    return false;
                }
            }
        }*/ //changed
        for(var i = 0; i < playerObj.properties[propColour].length; i++) {
            if(playerObj.properties[propColour][i] == tileID) {
                continue;
            } else {
                if(properties[tileID].numberOfHouses > properties[playerObj.properties[propColour][i]].numberOfHouses) {
                    return false;
                }
            }
        }
        return true;
    }

    function payRent(payer, payee, tileID) {
        var capitalAvailable = payer.money;
        var rentDue;
    
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
            console.log("Allow to mortgage or bankrupt");
        } else {
            //This is where transactions come into play
            payer.money -= rentDue;
            payee.money += rentDue;
            //console.log("Rent: " + rentDue);
            alert(rentDue + " was paid in rent to " + payee.name);
            //Add to owners account
        }
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