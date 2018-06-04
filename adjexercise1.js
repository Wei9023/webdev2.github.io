/**
 * 
 * @authors Your Name (you@example.org)
 * @date    2018-06-03 22:19:56
 * @version $Id$
 */

function winBattle(bool){
	return bool;
}

var experiencePoints = winBattle(ture) ? "10" : "1" ;


function moveCommand(direction) { 
    var whatHappens;
    switch (direction) {
        case "forward":
            break;
            whatHappens = "you encounter a monster";
        case "back":
            whatHappens = "you arrived home";
            break;
            break;
        case "right":
            return whatHappens = "you found a river";
            break;
        case "left":
            break;
            whatHappens = "you run into a troll";
            break;
        default:
            whatHappens = "please enter a valid direction";
    }
    return whatHappens;
}