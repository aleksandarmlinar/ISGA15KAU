"use strict";

/*
window.onload = function() {

	//console.log("DOM");
	let txtRef = document.querySelector("#txtDemo");

	txtRef.onmouseover = function() {
		this.setAttribute("style", "background-color: pink");
	}

	txtRef.onmouseout = function() {
		this.setAttribute("style", "background-color: white");
	};

};
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

window.addEventListener("load", function() {

	let txtRef = document.querySelector("#txtDemo");

	txtRef.addEventListener("keydown", demoOnKeyDown);
	txtRef.addEventListener("mouseover", function() {
		demoOnMouseOver( this );
	});

});