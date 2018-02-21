(function (){

    var players = [];
    var doubles = [0, 0, 0, 0];
    var turn = 0;

    document.addEventListener("DOMContentLoaded", init, false);

    //Can be deleted
    var butt1;

    function init () {
        players.push(player(document.getElementById ("player1")));
        players.push(player(document.getElementById ("player2")));
        players.push(player(document.getElementById ("player3")));
        players.push(player(document.getElementById ("player4")));
        $("#player1").fadeOut();
        $("#player1").fadeIn();
        //Can be deleted
        butt1 = document.getElementById("temp");
        //Can be deleted
        butt1.addEventListener("click", callMovePlayer1, false);
    }

    function player(icon) {
        var player = {};
        player.icon = icon;
        player.position = "0000";
        //If inJail greater than 0, the player is in jail (max jail can be is 3).
        //Every turn they stay in jail, inJail is incremented, when they leave it is set to 0 again
        //They get out by either rolling a double, have a GOJF card, or pay the toll troll
        player.inJail = 0;
        return player;
    }

    function callMovePlayer1() {
        var roll = Math.floor(Math.random() * (12 - 2 + 1) + 2);
        console.log(turn + " " + roll + " " + doubles[turn] + " " + players[turn].inJail);

        if(players[turn].inJail == 0 && roll % 2 == 0) {
            doubles[turn]++;
            if(doubles[turn] == 3) {
                //Put player in jail
                players[turn].inJail = 1;
                //The position of jail is 0010
                players[turn].position = "0010";
                //Putting the player in the jail tile
                document.getElementById(players[turn].position).appendChild(players[turn].icon);
                if(turn == 3) {
                    turn = 0;
                } else {
                    turn++;
                }
            } else {
                //They've rolled a double but not their third, so they can go again
                movePlayer(players[turn].icon, roll, turn);
            }
        //Otherwise they're either not in jail or they get out of jail
        } else if(players[turn].inJail == 0 || roll == 10 || players[turn].inJail == 3) {
            doubles[turn] = 0;
            //Check here if they are out of jail anyway so they don't get to roll again
            if(players[turn].inJail > 0) {
                if(players[turn].jail == 3) {
                    console.log("Pay the toll troll");
                }
                players[turn].inJail = 0;
            }
            movePlayer(players[turn].icon, roll, turn);
            if(turn == 3) {
                turn = 0;
            } else {
                turn++;
            }
        } else {
            //Otherwise they spend another turn in jail
            players[turn].inJail++;
            if(turn == 3) {
                turn = 0;
            } else {
                turn++;
            }
        }
    }

    async function movePlayer(playr, spacesToMove, turn) {
        //Gets first two numbers in the id
        var left = parseInt(players[turn].position.substring(0, 2));
        //Gets the last two numbers in the id
        var right = parseInt(players[turn].position.substring(2, 4));
        var newPosition;
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
            newPosition = positionHack(left, right);
            spacesToMove--;
            document.getElementById(newPosition).appendChild(playr);
            await sleep(500);
        }

        players[turn].position = newPosition;
    }

    function positionHack(left, right) {
        var leftFixed;
        var rightFixed;

        if(left < 10) {
            leftFixed = "0".concat(left.toString());
        } else {
            leftFixed = left.toString();
        }

        if(right < 10) {
            rightFixed = "0".concat(right.toString());
        } else {
            rightFixed = right.toString();
        }

        return leftFixed.concat(rightFixed);
    }

    function sleep(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }
})();
