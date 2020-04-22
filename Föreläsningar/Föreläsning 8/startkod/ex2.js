"use strict";

window.addEventListener("load", function(){

  let bodyRef = document.querySelector("body");
  let divRef = document.querySelector("div");

  let newDivRef1 = document.createElement("div");
  let newTextRef1 = document.createTextNode("newDivRef1")

  let newDivRef2 = document.createElement("div");
  let newTextRef2 = document.createTextNode("newDivRef2")

  let newDivRef3 = document.createElement("div");
  let newTextRef3 = document.createTextNode("newDivRef3")

  newDivRef1.appendChild(newTextRef1);
  newDivRef2.appendChild(newTextRef2);
  newDivRef3.appendChild(newTextRef3);

  divRef.appendChild(newDivRef1);

  bodyRef.insertBefore(newDivRef2, divRef);
  bodyRef.insertBefore(newDivRef3, divRef.nextSibling);

});
