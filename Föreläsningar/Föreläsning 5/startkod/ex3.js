"use strict";

function demoOnMouseOver(textRef) {
	textRef.setAttribute("style", "background-color: pink");
}

function demoOnMouseOut(textRef) {
	textRef.setAttribute("style", "background-color: white");
}

function demoOnKeyPress(textRef) {
	console.log("onkeypress");
}

function demoOnKeyDown(textRef) {
	console.log("onkeydown");
}

function demoOnKeyUp(textRef) {
	console.log("onkeyup");
}