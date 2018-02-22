function bankrupt(player, properties){
    //If player has no capital
    if (player.money <= 0){
      //Does user own properties/buildings/utilities?
      if (player.assets != null){
        $(#mortgageButton).html('<div>Do you want to mortgage assets?</div>');
        $(#mortgageButton).append('<div id="yes">Yes</div>');
        $(#mortgageButton).append('<div id="no">No</div>');
        $(#yes).click(function(event){
            //Loop through player properties/houses to mortgage
            var prop;
            for (prop in player.properties){
                //Prop is a list returned e.g {"brown":[prop1, prop2....]}
                for (prop_name in prop){
                    //Prop_name is then prop1, prop2... of brown, pink etc.
                    //Ask for each property owned do they want to mortgage
                    $(#mortgageButton).append('<div id="mortgage">Mortgage '+prop_name+' ?</div>');
                    mortgage(player, prop_name);
                    //Remove existing "Mortgage brown_house_1 property?"
                    var element = document.getElementById(#mortgage);
                    element.parentNode.removeChild(element);
                }
            }
            var element = document.getElementById(#mortgageButton);
            element.parentNode.removeChild(element);
        });
        $(#no).click(function(event){
                //Remove questions to mortgaging assets
                var element = document.getElementById(#mortgageButton);
                element.parentNode.removeChild(element);
            });
        }
      //Does player own get out of jail card to trade?
      if (player.jailCard){
        //Does user want to auction cards?
        $(#tradeButton).html('<div>Do you want to trade your card?</div>');
        $(#tradeButton).append('<div id="yes">Yes</div>');
        $(#tradeButton).append('<div id="no">No</div>');
	    $(#yes).click(function(event){
	        trade(player, player.jailCard);
	    });
	    $(#no).click(function(event){
            //Remove questions to trading cards
            var element = document.getElementById(#tradeButton);
            element.parentNode.removeChild(element);
        });
      }
      //If player still has no capital after this, they are bankrupt
      if (player.money <= 0){
          //Check if player is on tile that is owned
          var cur_pos = player.position; //e.g "0001"
          if (isOwned(properties.cur_pos)){
              //Add bankrupt user's props to user whose tile they landed on
              var new_owner = properties.cur_pos.owner;
              new_player = player(new_owner);
              var props;
              for (props in player.properties){
                for (props_name in props){
                    new_player.properties.props += props_name;       
                }
            }
          }
          else{
              for (propts in player.properties){
                for (propts_name in props){
                    properties.propts.owner = null;
                    auction(player, propts_name);       
                }
              }
          }
      else{
	    console.log("You avoided bankruptcy!");
      }
    }
    if (player.connection){
        for (proprts in player.properties){
                for (proprts_name in props){
                    properties.proprts.owner = null;
                    auction(player, proprts_name);       
                }
        }
    }
}
}
