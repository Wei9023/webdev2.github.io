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

function signIn(user, pass) {
	if (user === database[0].username && 
		pass === database[0].password){
		console.log(newsFeed);
	} else {
		alert("sorry, wrong username and password");
	}
}

signIn(usernamePrompt, passwordPrompt);