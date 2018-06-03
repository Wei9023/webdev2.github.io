/**
 * 
 * @authors Your Name (you@example.org)
 * @date    2018-06-01 16:00:09
 * @version $Id$
 */

var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");
var randomBtn = document.getElementById("randomBtn");

function changeBackground(){
	body.style.background = 
	"linear-gradient(to right," 
	+ color1.value 
	+ ", " 
	+ color2.value 
	+ ")";

	css.textContent = body.style.background +";"
}

color1.addEventListener("input", changeBackground);

color2.addEventListener("input", changeBackground);

randomBtn.addEventListener("click", function(){
	body.style.background = 
	"linear-gradient(to right," 
	+ randomColor() 
	+ ", " 
	+ randomColor() 
	+ ")";
	css.textContent = body.style.background +";"
})

function randomColor() {
	var r = Math.floor(Math.random() * 256);
	var g = Math.floor(Math.random() * 256);
	var b = Math.floor(Math.random() * 256);
	return "rgb(" + r + ", " + g + ", " + b + ")";
}
