/**
 * 
 * @authors Your Name (you@example.org)
 * @date    2018-05-30 20:55:59
 * @version $Id$
 */

var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");

button.addEventListener("click", function(){
	var li = document.createElement("li");
	li.appendChild(document.createTextNode(input.value));
	ul.appendchild("li");
	input.value="";
});

var buttonDone = document.getElementsByClassName("buttonDone");
done.addEventListener("click", function(){
	li.classList.toggleclass("done");
})