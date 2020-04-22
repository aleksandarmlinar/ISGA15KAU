"use strict";

window.addEventListener("load", function(){

  let bodyRef = document.querySelector("body");
  let numberOfChildNodes = bodyRef.childNodes.length;

  let pRef = null;
  let pText = null;
  let pTextRef = null;
  let currentChildNode = null;

  for(var i = 0; i < numberOfChildNodes; i++){
    pRef = document.createElement("p");
    pText = "childNode: " + i + " | ";
    currentChildNode = bodyRef.childNodes.item(i);

    pText += "nodeName: " + currentChildNode.nodeName + " | ";

    if(currentChildNode.nodeType === 1){
      pText += "nodeValue: " + currentChildNode.firstChild.nodeValue;
    }
    pTextRef = document.createTextNode(pText);
    pRef.appendChild(pTextRef);
    bodyRef.appendChild(pRef);
  }
});
