"use strict";

function setFocusOnForm(){
  console.log("setFocusOnForm()");
  document.querySelector("#txtNamn").focus();
}

function countNumberOfChars(textAreaRef){
  console.log("countNumberOfChars()");
  document.querySelector("#nbrOfChars").textContent = textAreaRef.value.length;
}

function resetForm(){
  console.log("resetForm()");
  document.querySelector("#nbrOfChars").textContent = 0;
  document.querySelector("#errMsg").textContent = "";

  setFocusOnForm();
}

function checkForm(){
  console.log("checkForm()");
    try {

      let textRefs = document.querySelectorAll("[type = text], textarea");
      console.log(textRefs);
      let currentTextRef = null;

      for(let counter = 0; counter<textRefs.length; counter++){
          currentTextRef = textRefs.item(counter);//[counter]
            console.log(currentTextRef.getAttribute("id"));

            if(currentTextRef.value.length === 0){
              // throw new Error("Någon textruta saknar värde");
              throw {"object": currentTextRef};
            }

            if(currentTextRef.getAttribute("id") === "txtPostnummer"){
              //Stränglängd = 5
              //värdet ska vara nummer
              if(currentTextRef.value.length !== 5){
                throw {"object" : currentTextRef};
              }

              if(isNaN(currentTextRef.value)){
                throw{"object": currentTextRef};
              }

            }
      }





        return true;

      } catch (oE) {


        //console.log(oE);
        document.querySelector("#errorMsg").textContent = "Ange: " + oE.object.getAttribute("title")
         "!";
        oE.object.focus();
        oE.object.setSelectionRange(0, oE.object.value.length);
        return false;
      }
}
