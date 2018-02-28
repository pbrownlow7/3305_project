function buildHouses(playerObj, tileID){
    var costOfHouse = properties[tileID].houseValue;

    if(checkColourSetComplete(playerObj, tileID) && checkForNoMortgageInSet(playerObj, tileID) && checkNumHousesInSet(playerObj, tileID)) {
        //Player can only build a house if they have all properties of that colour, no property
        //of that colour is mortgaged, and they won't make a gap of more than 1 house between
        //the properties
        if(playerObj.money >= costOfHouse) {
            playerObj.money -= costOfHouse;
            if(properties[tileID].numberOfHouses == 5) {
                placeHouse(tileID);
                properties[tileID].numberOfHouses++;
                //Instead of a hotel flag we're simply saying the 5th house is a hotel
                //console.log("The player has built a hotel on " + properties[tileID].name);
                alert("The player has built a hotel on " + properties[tileID].name);
            }
            else {
                placeHouse(tileID);
                properties[tileID].numberOfHouses++;
                //console.log("The player has built a house on " + properties[tileID].name);
                //console.log("The player has " + properties[tileID].numberOfHouses + " houses here");
                alert("The player has built a house (" + properties[tileID].numberOfHouses + "/4) on " + properties[tileID].name);
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

function placeHouse(tile){
  // this function is used to place house on board ---- NOT COMPLETE ----
  tileA = tile +'a';
  if (properties[tile].numberOfHouses <= 4){
    var hse = document.getElementById("houseImg");
    var cln = hse.cloneNode(true);
    document.getElementById(tileA).appendChild(cln);
    console.log(tileA);
 }
 else {
   var htl = document.getElementById("hotelImg"); // places a hotel
   var parent = document.getElementById(tileA);
   while (parent.firstChild) { // remove houses from tile
      parent.removeChild(parent.firstChild);
    }
   parent.appendChild(htl); // appends Hotel to tile
   console.log(tileA);
 }
}
/* still working on this  --- needs to be tested --  Do NOT Integrate
function removeHouse(tile){ // this function removes houses when mortgaging occurs
  var parent = document.getElementById(tile);
  if (properties[players[turn].position].numberOfHouses == 5){ // if there is a hotel you want the houses to reappear and the hotel to be removed
    parent.removeChild(parent.firstChild);
    for (var i= 0; i <= 3; i++){
       var hse = document.getElementById("houseImg");
       var cln = hse.cloneNode(true);
       parent.appendChild(cln);
    }
  }
  else if(properties[players[turn].position].numberOfHouses <= 4){ // this removes the houses 1 by one when the property is mortaged
      parent.removeChild(parent.firstChild);
  }
}
*/
