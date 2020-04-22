"use strict";

function changeColorForm(){

    let red = document.querySelector("#red").value;
    let green = document.querySelector("#green").value;
    let blue = document.querySelector("#blue").value;
    let divRef = document.querySelector("div[class=container-fluid]");
    let style = "background-color: rgb(" + red + ", " + green + ", " + blue + ")";

  divRef.setAttribute("style", style);
}

window.addEventListener("load", function(){


  document.querySelector("#theForm").addEventListener("input", function(){
    changeColorForm();
    
  })
  changeColorForm();

});
