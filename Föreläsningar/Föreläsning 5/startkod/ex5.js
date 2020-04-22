"use strict";

window.addEventListener("load", function() {

    this.document.querySelector("#idCurrentTarget").addEventListener("click", eventObjectDemo);


});

function eventObjectDemo(e){

  console.log(e);
  console.log("target" + e.target);
  console.log("Current target" + e.currentTarget);

  console.log(e.target.textContent);
  console.log(e.currentTarget.getAttribute("id"));

}
