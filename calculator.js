/**
 * 
 * @authors Your Name (you@example.org)
 * @date    2018-05-28 23:35:33
 * @version $Id$
 */

console.log("hello");
var firstNum = document.getElementById('n1').value;
var secondNum = document.getElementById('n2').value;
console.log(firstNum);

function plus(firstNum, secondNum){
	console.log(1);
	console.log(firstNum);
	return firstNum + secondNum;
}
alert(plus(firstNum, secondNum));

function subtract(firstNum, secondNum){
	console.log(2);
	alert(Number(firstNum) - Number(secondNum));
}

function multiply(firstNum, secondNum){
	console.log(3);
	alert(Number(firstNum) * Number(secondNum));
}

function devide(firstNum, secondNum){
	console.log(4);
	alert(Number(firstNum) / Number(secondNum));
}