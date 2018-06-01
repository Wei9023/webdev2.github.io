/**
 * 
 * @authors Your Name (you@example.org)
 * @date    2018-06-01 09:37:13
 * @version $Id$
 */

var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector('ul');
var listItems = document.getElementsByTagName("li");
var deleteBtn = document.getElementsByTagName("button");

//get length of list
function listLength() {
	console.log(listItems.length);
	return listItems.length;
}

//create delete buttons for exisiting buttons
for (i=0; i<listLength();i++) {
	var btn = document.createElement("button");
	btn.appendChild(document.createTextNode("Delete!"));
	listItems[i].appendChild(btn);
	btn.onclick = removeParent;
}

//remove an item form the list
function removeParent(evt){
	evt.target.removeEventListener("click", removeParent);
	evt.target.parentNode.remove();
}

//check or uncheck list items
function checked(event){
		event.target.classList.toggle("done");
	
}

//get the buttons array
function deleteBtnsLength(){
	console.log(deleteBtn.length);
	return deleteBtn.length;
}

//get the length of the userinput
function inputLength(){
	return input.value.length;
}

//create a new list item for user input
function createElement(){
	//add user inout to list and set input value to an empty string again
	var li = document.createElement("li");
	li.appendChild(document.createTextNode(input.value));
	ul.appendChild(li);
	input.value = "";

	//create delete button for each new list item
	var btn = document.createElement("button");
		btn.appendChild(document.createTextNode("Delete!"));
 		li.appendChild(btn);

 		//why is that not working if I put () behind removeParent? As we want to execute the function?
 		btn.onclick = removeParent;

}

//user click add input
function addElementByClick() {
	if (inputLength() > 0) {
		createElement();
        
	}
};

//user press enter on keyboard
function addElementByKeypress(event) {
    if (inputLength() > 0 && event.keyCode === 13) { //event.which works too!
		createElement();
		
	}
};

 
 
 ul.addEventListener("click", checked);
 
 button.addEventListener("click", addElementByClick);

 input.addEventListener("keypress", addElementByKeypress);































