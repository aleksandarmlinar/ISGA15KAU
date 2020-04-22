"use strict";


function currentTime(){

    let myDate = new Date();

    let timeToReturn = myDate.getHours();
    timeToReturn += ":" + myDate.getMinutes();
    timeToReturn += ":" + myDate.getSeconds();

  return timeToReturn;

}

window.addEventListener("load", function(){

  updateTIme();

});


function updateTIme(){
  document.querySelector("#timeId").textContent = currentTime();
  window.setTimeout(updateTIme, 1000);
}
