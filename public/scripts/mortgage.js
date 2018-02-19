//This function is always an available option to the player
//if player wants to call this function they must pass their property of interest as an explicit parameter.
//only properties which the player owns deeds to should be available for mortgage.
function mortgage(property){
//calculate the loan amount
var loan = property.price/2;
var transaction = true;
//check if property is unimproved
while(transaction){
    if(property.numberOfHouses == 0){
    //property is unimproved so sell to bank
        userObj.capital += loan;
        property.mortgaged = true;
        var BaseRent = property.rent[0];
        window.BaseRent = BaseRent;
        property.rent[0] = 0;
        transation = false;
        }
    //otherwise property has improvements on it so remove and sell property
    else{
        while(property.numberOfHouses != 0){
            property.numberOfHouses -=1;
            userObj.capital += property.houseValue/2;
            }
        }
    }
}
function PayOffLoan(property){
//calculate the loan amount
var loan = property.price/2;
//calculate the cost of the loan
var payBack = loan*.1 + loan;
userObj.capital -= payBack;
property.mortgaged = false;
property.rent[0] = BaseRent;

}
