/**
 * 
 * @authors Your Name (you@example.org)
 * @date    2018-05-29 20:34:17
 * @version $Id$
 */

var database = [
	{
		username: "wei",
		password: "111111",
	}
	{
		username: "tao",
		password: "123456",
	}
	{
		username: "yibo",
		password: "123123",
	}
];

var newsFeed = [
	{
		username: "wei",
		timeline: "I love u"
	},
	{
		username: "tao",
		timeline: "I like u"
	},
	{
		username: "yibo",
		timeline: "I hate u"
	}
];

var usernamePrompt = prompt("What's your username?");
var passwordPrompt = prompt("What's your password?");

function isUserValid(username, password) {
	for (var i=0; i<database.length; i++) {
		if (database[i].username === username &&
			database[i].password === password){
			return true;
		} 
	}
	return false;
}


function signIn(user, pass) {
	if (isUserValid(username, password)){
		console.log(newsFeed);
	} else {
		alert("sorry, wrong username and password");
	}
}

signIn(usernamePrompt, passwordPrompt);