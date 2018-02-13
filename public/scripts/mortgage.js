
function mortgage(property){
//calculate the loan amount
var loan = property.price/2;
var transaction = true;
//check if property is unimproved
while(transaction){
    if(property.houses == 0){
    //property is unimproved so sell to bank
        userObj.capital += loan;
        property.mortgage = true;
        var BaseRent = property.rent[0];
        window.BaseRent = BaseRent;
        property.rent[0] = 0;
        transation = false;
        }
    else{
        while(property.houses != 0){
            property.houses -=1;
            userObj.capital += property.houses.cost;
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
property.mortgage = false;
property.rent[0] = BaseRent;

}