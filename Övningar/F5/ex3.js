"use strict";

/*window.onload = function{
	console.log("DOM");
	let textRef = documen.querySelector("#txtDemo");
	textRef.onmouseover = function{
		this.setAttribute("style", "background-color: pink");
	}
	textRef.onmouseout = function{
		this.setAttribute("style", "background-color: white");
	}
}

*/




function demoOnMouseOver(textRef) {
	textRef.setAttribute("style", "background-color: pink");
}

function demoOnMouseOut(textRef) {
	textRef.setAttribute("style", "background-color: white");
}

function demoOnKeyPress() {
	console.log("onkeypress");
}

function demoOnKeyDown() {
	console.log("onkeydown");
}

function demoOnKeyUp() {
	console.log("onkeyup");
}




window.addEventListener("load", function(){

	let textRef = document.querySelector("#txtDemo");
	textRef.addEventListener("keydown", demoOnKeyDown);
	textRef.addEventListener("mouseover", function(){
		demoOnMouseOver(this);
	});


	textRef.addEventListener("mouseout", function(){
		demoOnMouseOut(this);
	});

});
