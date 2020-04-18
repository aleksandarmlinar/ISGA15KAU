"use strict";

//Fem funktioner
function demoOnMouseOver(textRef) {
    textRef.setAttribute("style", "background-color: pink");
}

function demoOnMouseOut(textRef) {
    textRef.setAttribute("style", "background-color: white");
}

function demoOnKeyUp() {
    console.log( "onkeyup" );
}

function demoOnKeyPress() {
    console.log( "onkeypress" );
}

function demoOnKeyDown() {
    console.log( "onkeydown" );
}
