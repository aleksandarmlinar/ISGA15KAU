"use strict";

function setFocusOnForm() {
    console.log("setFocusOnForm()");
    document.querySelector("#txtNamn").focus();

}

function countNumberOfChars(textAreaRef) {
    console.log("countNumberOfChars()");

    document.querySelector("#nbrOfChars").textContent = textAreaRef.value.length;

}

function resetForm() {
    console.log("checkForm()");
    setFocusOnForm();
    document.querySelector("#nbrOfChars").textContent = 0;
    document.querySelector("#errorMsg").textContent = "";
}



function checkForm() {
    //Funktionen skall returnera sant eller falskt.

    console.log("checkForm()");

    try {
        let textRefs = document.querySelectorAll("input[type=text], textarea");
        console.log( textRefs );
        let currentTextRef = null;

        for(let counter = 0; counter < textRefs.length; counter++) {

            currentTextRef = textRefs.item(counter); //[counter]

            console.log(currentTextRef.getAttribute("id"));

            if(currentTextRef.value.length === 0) {
                //throw new Error("Någon textruta saknar värde!");
                throw { "object" : currentTextRef };
            }

            if(currentTextRef.getAttribute("id") === "txtPostNummer") {

                //Stränglängde = 5
                //Värdet = siffror

                if(currentTextRef.value.length !== 5) {
                    throw { "object" : currentTextRef };
                }

                if(isNaN(currentTextRef.value)) {
                    throw { "object" : currentTextRef };
                }

            }


        }

        return true;
    } catch(oE) {

        document.querySelector("#errorMsg").textContent = "Ange " + oE.object.getAttribute("title") + "!";
        oE.object.focus();

        oE.object.setSelectionRange(0, oE.object.value.length);

        console.log(oE);
        return false;
    }





}
