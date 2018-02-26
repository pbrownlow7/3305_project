function checkTile(playerPos) {
    //console.log(playerPos);
    alert("Player position: " + playerPos);
    if(playerPos == "0010" || playerPos == "0000") {
        //This is the jail tile, do nothing
    } else if(playerPos == "0007" || playerPos == "1008" || playerPos == "0400") {
        //Player has landed on chance card
        //console.log("Draw chance card");
        alert("Draw chance card");
        chance(playerPos, player);
    } else if(playerPos == "0002" || playerPos == "0710" || playerPos == "0700") {
        //Player has landed on community chess
        //console.log("Draw community chest card");
        alert("Draw community chest card");
        communityChest(playerPos, player);
    } else if(playerPos == "1010") {
        //Player has landed on Free Parking
        //console.log("Free Parking");
        alert("Free Parking");
    } else if(playerPos == "1000") {
        //Player is sent to jail
        //console.log("Player is sent to jail");
        alert("player is sent to jail");
        placeInJail();
    } else if(playerPos == "0004" || playerPos == "0200") {
        //console.log("Player pays a tax");
        alert("Player pays a tax");

    } else {
        isOwned(players[turn], playerPos);
    }
}

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
    Name: "Advance token to the nearest Travel Tile and pay owner twice the rental to which he/she is otherwise entitled. If Tile is unowned, you may buy it from the Bank",
    Id: 14
    },

    {
    Name: "Advance token to the nearest Travel Tile and pay owner twice the rental to which he/she is otherwise entitled. If Tile is unowned, you may buy it from the Bank",
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
    Id: 18,
    Tile: "1010"
    },

    {
    Name: "Advance to HillBillys. If you pass Go, collect 200",
    Id: 19,
    Tile: "1006"
    },

    {
    Name: "Advance to Go (Collect 200)",
    Id: 20,
    Tile: "0000"
    },

    {
    Name:"Advance to Castle White If you pass Go, collect 200",
    Id: 21,
    Tile: "0110"
    },

    {
    Name: "Advance token to the nearest Utility.",
    Id: 22
    },

]
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
  ]

function chance(playerPos,player){
 var card = chanceArray.shift() // takes top card from array
 chanceArray.push(card); // adds card to end of array
 if (card.Id == 6 ){
     setJailCard();
 }
 else if (card.Id == 20 ){
      alert(card.Name); // advance to Go
      advance(card.Tile);
      players[turn].position = card.Tile;
      collect200();
 }
 else if (card.Id == 8){
   alert(card.Name);
   placeInJail();
 }
 else if(card.Id== 19){
   // add go functionality
   alert(card.Name);  // Hillbillys  Done
   if (players[turn].position == "0400"){
     collect200();
   }
   advance(card.Tile);
   players[turn].position = card.Tile;
   isOwned(players[turn],card.Tile);
 }
 else if(card.Id == 21){
   // add go functionality Castle White Done
   alert(card.Name);
   if (players[turn].position == "0400" ||players[turn].position == "1008"){
     collect200();
   }
   advance(card.Tile);
   players[turn].position = card.Tile;
   isOwned(players[turn],card.Tile);
 }
 else if (card.Id == 17){ //wgb
   alert(card.Name);
   advance(card.Tile);
   players[turn].position = card.Tile;
   isOwned(players[turn],card.Tile);
 }
 else if(card.Id == 18){
   // add go functionality
   alert(card.Name);
   if (players[turn].position == "0400" ||players[turn].position == "1008"){
     collect200();
   }
   advance(card.Tile); //  advances player to Free Parking Done
 }
 else if(card.Id == 15){
    alert(card.Name)
    movePlayer(players[turn], 3, turn); // moves player forward 3 spaces
 }
 else if (card.Id == 16){
   alert(card.Name)
   //movePlayerBack();
 }
 else if (card.Id == 9 ){
   // must calculate the amount of houses and hotels the player has.
   alert(card.Name);
   calcHouseHotels(card.Amount[0],card.Amount[1]); // calculates players houses and hotels
 }
 else if (card.Id == 14) {
   //need to add collect 200 as go was passed
   alert(card.Name);

   if(playerPos == "0007"){
     document.getElementById("0510").appendChild(players[turn].id); //advances to Cork Airport
     players[turn].position = "0510";
     isOwned(players[turn],"0510");
   }
   else if(playerPos == "1008"){
     document.getElementById("1005").appendChild(players[turn].id); // advances to Bus station
     players[turn].position = "0510";
     isOwned(players[turn],"0510");
   }
   else if(playerPos == "0400"){
     document.getElementById("0005").appendChild(players[turn].id); // advances taxi rank
     players[turn].position = "0510";
     isOwned(players[turn],"0510");
     collect200(); // collect 200 as player passed go
   }
 }
 else if (card.Id == 22) {
   // advances player to nearest utility
   alert(card.Name);

   if(playerPos == "0007"){
     document.getElementById("0210").appendChild(players[turn].id);
     players[turn].position = "0210";
     isOwned(players[turn], "0210");
   }
   else if(playerPos == "1008"){
     document.getElementById("1002").appendChild(players[turn].id);
     players[turn].position = "1002";
     isOwned(players[turn],"1002");
   }
   else if(playerPos == "0400"){
     document.getElementById("0210").appendChild(players[turn].id);
     players[turn].position = "0210";
     isOwned(players[turn],"0210");
     collect200();
   }
 }
}
//function movePlayerBack(){}

function collect200(){
  players[turn].money += 200;
  alert("Player Passed Go. Collect 200");
  console.log(players[turn].money);
}

function communityChest(playerPos, player){
  var card = communityChestArray.shift(); // takes top card from array
  communityChestArray.push(card);  // adds card to end of array

  if (card.Id == 6){
     setJailCard(); // player receives get out of jail free card
   }
  else if (card.Id == 1 || card.Id == 3 || card.Id == 5 || card.Id == 7 || card.Id ==10 || card.Id ==11){
  // community chest rewarding players
      alert(card.Name);
      comChestCollect(card.Amount); // collect reward
  }
  else if(card.Id == 2 || card.Id == 12 || card.Id == 13){
    // community chest fining player players
      alert(card.Name);
      comChestFine(card.Amount); // fined amount on card
  }
  else if (card.Id == 8){
    //go to jail card drawn from community chest
      alert(card.Name);
      placeInJail(); // place player in jail
  }
  else if (card.Id == 4 || card.Id == 10){
    // must collect certain amount from each player
      alert(card.Name + ', Amount Credited: '+ card.Amount * (players.length -1));
      playerCollect(card.Amount); //collects amount stated on card from each player
  }
  else if (card.Id == 9){
    // calculate the amount of houses and hotels player has
      alert(card.Name);
      calcHouseHotels(card.Amount[0],card.Amount[1]); // calculates players houses and hotels
  }
}

function calcHouseHotels(housePrice, hotelPrice){
  var houses = 0;
  var hotels = 0;
  var houseP = 0;
  var hotelP = 0;
  var cost;
  for (var i = 0; i < players[turn].assets.length; i++){
    // line below checks the current properties object for current players assets in which it can find number of houses
    if (properties[players[turn].assets].numberOfHouses == 4){
       hotels += 1;
    }
    else {
      houses += properties[players[turn].assets].numberOfHouses;
    }
  }
  houseP = houses * housePrice;
  hotelP = hotels * hotelP;
  cost = houseP + hotelP;
  alert('Total Houses: '+houses +', Total Hotels: '+hotels + ', Total Repairs Cost: '+cost);
  comChestFine(cost);
}

function advance(tile){
   document.getElementById(tile).appendChild(players[turn].id);
}

function comChestCollect(amount){
  console.log(players[turn].money);
  players[turn].money = players[turn].money + amount;
  console.log(players[turn].money);

}

function comChestFine(amount){
  console.log(players[turn].money);
  players[turn].money = players[turn].money - amount;
  console.log(players[turn].money);
}

function setJailCard(){
  players[turn].jailCard = true;
  alert("Player received Get out of Jail Free Card")
  console.log(players[turn].jailCard);
}

function playerCollect(amount){
  // collects amount from each player and adds to current player.
  var collection = 0;
  console.log(collection);
  console.log(players);
  for(var i = 0; i < players.length; i++){
    console.log(players.length);
    if(players[i] != players[turn]){
      console.log(players[i]);
       players[i].money -=amount;
       collection += amount;
  }
  }
  players[turn].money += collection;
  console.log(players[turn]);
  console.log(players);
}

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
