"use strict";

function setFocusOnForm(){
  console.log("setFocusOnForm()");
  document.querySelector("#txtNamn").focus();
}

function checkForm(){
  console.log("checkForm()");
  try {

        let textRefs = document.querySelectorAll("input[type = text]");
        let currentTextRef = null;

        for(var i = 0; i < textRefs.length; i++){
          currentTextRef = textRefs.item(i);
          console.log(currentTextRef.getAttribute("id"));
            if(currentTextRef.value.length === 0){
              //throw new Error("Någon textruta saknar värde!");
              throw{"object": currentTextRef};
            }

            if(currentTextRef.getAttribute("id") === "txtPostnummer"){

              if(currentTextRef.value.length !== 5){
                throw {"object": currentTextRef};
              };

              if(isNaN(currentTextRef.value)){
                throw {"object": currentTextRef};
              };

            };
        };







    return false;
  } catch (oError) {



    window.document.querySelector("#errorMsg").textContent = "Ange " + oError.object.getAttribute("title") + "!";
    //console.log(OError.message);
    return false;
  }
}

function resetForm(){
  console.log("resetForm()");
  window.document.querySelector("#nbrOfChars").textContent = "0";
  setFocusOnForm();
}

function countNumberOfChars(textAreaRef){
  console.log("countNumberOfChars()");
  window.document.querySelector("#nbrOfChars").textContent = textAreaRef.value.length;

}
