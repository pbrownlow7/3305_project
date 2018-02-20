//This function is always an available option to the player
//if player wants to call this function they must pass their property of interest as an explicit parameter.
//only properties which the player owns deeds to should be available for mortgage.
function mortgage(userObject, properties){
//calculate the loan amount
var loan = properties.price/2;
var transaction = true;
//check if property is unimproved
while(transaction){
    if(properties.numberOfHouses == 0){
    //property is unimproved so sell to bank
        userObject.capital += loan;
        properties.mortgaged = true;
        var BaseRent = properties.rent[0];
        window.BaseRent = BaseRent;
        properties.rent[0] = 0;
        transation = false;
        }
    //otherwise property has improvements on it so remove and sell property
    else{
        while(properties.numberOfHouses != 0){
            properties.numberOfHouses -=1;
            userObj.capital += properties.houseValue/2;
            }
        }
    }
}
function PayOffLoan(userObject, properties){
//calculate the loan amount
var loan = properties.price/2;
//calculate the cost of the loan
var payBack = loan*.1 + loan;
userObject.capital -= payBack;
properties.mortgaged = false;
properties.rent[0] = BaseRent;

}
