//This function is always an available option to the player
//if player wants to call this function they must pass their property of interest as an explicit parameter.
//only properties which the player owns deeds to should be available for mortgage.
var user = require('./userObject.js');
var prop = require('./properties.js');

function mortgage(){
//calculate the loan amount
var loan = prop.price/2;
var transaction = true;
//check if property is unimproved
while(transaction){
    if(prop.numberOfHouses == 0){
    //property is unimproved so sell to bank
        user.capital += loan;
        prop.mortgaged = true;
        var BaseRent = prop.rent[0];
        window.BaseRent = BaseRent;
        prop.rent[0] = 0;
        transation = false;
        }
    //otherwise property has improvements on it so remove and sell property
    else{
        while(prop.numberOfHouses != 0){
            prop.numberOfHouses -=1;
            user.capital += prop.houseValue/2;
            }
        }
    }
}
function PayOffLoan(){
//calculate the loan amount
var loan = prop.price/2;
//calculate the cost of the loan
var payBack = loan*.1 + loan;
if(user.capital < payBack){
    user.bankrupt();
}
else{
    user.capital -= payBack;
    prop.mortgaged = false;
    prop.rent[0] = BaseRent;

}
