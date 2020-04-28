/**
 * Förnamn: Aleksandar
 * Efternamn: Mlinar
 * Initialer: AM
 * Personummer:19791115-1236
 * Datum: 2020-04-22
 * Kurskod: ISGB15
 * Kursnamn: JavaScript för webbutveckling
 */

"use strict";
window.addEventListener("load", function(){

    let AM_btnRef = document.querySelector("#newGame");
    AM_btnRef.addEventListener("click", validateForm);
    //console.log(AM_btnRef);


});



function validateForm() {

  try {

    let AM_nickRef1 = document.querySelector("#nick1");
    let AM_nickRef2 = document.querySelector("#nick2");

    let AM_colorRef1 = document.querySelector("#color1");
    let AM_colorRef2 = document.querySelector("#color2");

    //console.log(AM_nickRef1, AM_nickRef2, AM_colorRef1, AM_colorRef2);

    //validera namn & färger

    if(AM_nickRef1.value === ""){
      throw {"object": AM_nickRef1};
    }

    if(AM_nickRef2.value === ""){
      throw {"object": AM_nickRef2};
    }

    if(AM_nickRef1.value === AM_nickRef2.value){
      throw {"object": AM_nickRef2};
    }

    if(AM_colorRef1.value === "#ffffff"){
      throw {"object": AM_colorRef1};
    }

    if(AM_colorRef2.value === "#ffffff"){
      throw {"object": AM_colorRef2};
    }

    if(AM_colorRef1.value === AM_colorRef2.value){
      throw {"object": AM_colorRef2};
    }

    console.log("validateForm()");
    initGlobalObject();
    oGameData.nickNamePlayerOne = AM_nickRef2.value;
    oGameData.nickNamePlayerTwo = AM_nickRef1.value;
    oGameData.colorPlayerOne = AM_colorRef1.value;
    oGameData.colorPlayerTwo = AM_colorRef2.value;
    console.log(oGameData.nickNamePlayerOne, oGameData.nickNamePlayerTwo, oGameData.colorPlayerOne, oGameData.colorPlayerTwo);
    return true;
    initiateGame();
  } catch (oError) {


    document.querySelector("#errorMsg").textContent = "Ange " + oError.object.getAttribute("title") + "!";
    oError.object.focus();
    return false;
  };
};

function initiateGame() {
  console.log("initiateGame()");
  //let AM_bodyRef = document.querySelector("body");
  let AM_tblBody = document.createElement("tbody");
  let AM_gameAreaRef = document.querySelector("#gameArea");
  let AM_tableRef = document.createElement("table");



  for(var i = 0; i < 3; i++){
      let AM_trRef = document.createElement("tr");
        for(var j = 0; j < 3; j++){
          let AM_tdRef = document.createElement("td");
          let AM_cellText = document.createTextNode("Hej!");

          AM_tdRef.appendChild(AM_cellText);
          AM_trRef.appendChild(AM_tdRef);
        }
        AM_tblBody.appendChild(AM_trRef);
      }
      AM_tableRef.appendChild(AM_tblBody);
      //AM_bodyRef.appendChild(AM_tableRef);
      AM_gameAreaRef.appendChild(AM_tableRef);


      AM_tableRef.setAttribute("class", "ml-0 mr-0");
      AM_tdRef.setAttribute("height", "125px");
      AM_tdRef.setAttribute("width", "125px");
      AM_tdRef.setAttribute("border", "2px solid gray");


}

function executeMove( e ) {

}
