//Lab2.js
'use strict';


function setFocusOnForm(){
	console.log("setFocusOnForm()");
  document.querySelector("#cbofabrikat").focus();
	//document.getElementById("txtkommentar").disabled = true;
}

function validateForm(){
  //ska returnera sant eller falskt
	console.log("validateForm()");

    try{
      let textRefs = document.querySelectorAll("input[type = text], textarea");
    	   console.log(textRefs);
        let currentTextRef = null;

          for (var counter = 0; counter < textRefs.length; counter++) {
          currentTextRef = textRefs.item(counter);//kan använda som vector också[]

          console.log(currentTextRef.getAttribute("id"));

            if(currentTextRef.value.length === 0){
              //throw new Error("Någon textruta saknar värde!");
              throw {"object" : currentTextRef};
            }
              //String length = 5
              //Värdet = siffror
            if(currentTextRef !== 5){
              throw {"object" : currentTextRef};
            }
            if(isNaN(currentTextRef.value)){
              throw {"object" : currentTextRef};
            }

        }

      return true;
    } catch(oError){

        document.querySelector("#errorMsg").textContent = "Ange " + oError.object.getAttribute("title") + "!";
        console.log(oError);
        return false;


    }












	return false;

}
function resetForm(){
	console.log("resetForm()");
  setFocusOnForm();
	document.querySelector("#txtkommentar").textContent = "";

}


//textarean
function countNrOfChars(textAreaRef){
	console.log("countNrOfChars()");
	let count = 5;
	let kommentar = document.querySelector("#txtkommentar").value.length;
	var kryss = document.querySelector("#cbokommentar");
		if(kryss.checked == true && kommentar < 5){
				document.querySelector("#errorMsg").innerHTML = "OBS! Du måste skriva minst " + (count - kommentar) + " tecken till!";
			} else {
				document.querySelector("#errorMsg").innerHTML ="";
		}
}
