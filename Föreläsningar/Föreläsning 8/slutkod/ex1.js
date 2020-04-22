"use strict";

function currentTime() {

    let myDate = new Date();

    let timeToReturn = myDate.getHours();
    timeToReturn += ":" + myDate.getMinutes();
    timeToReturn += ":" + myDate.getSeconds();

    return timeToReturn;

}

window.addEventListener("load", function() {
    updateTime();
});

function updateTime() {
    document.querySelector("#timeId").textContent = currentTime();
    setTimeout(updateTime, 1000);
}