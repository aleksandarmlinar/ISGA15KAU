//Lab2.js
'use strict';

/*function setFocusOnForm(){
	console.log("setFocusOnForm()");
  document.querySelector("#cbofabrikat").focus();
	//document.querySelector("#txtkommentar").disabled = true;
}
// select

function showSelectInfo(formRef){
	let selectRef = formRef.querySelector("select");
	// console.log(selectRef);
	// console.log(selectRef.selectedIndex);
	// console.log(selectRef.options);
	console.log(selectRef.options[selectRef.selectedIndex].value);

}

//checkbox, bara en liten test
/*function showCheckBoxInfo(chkBoxRef){
	if(chkBoxRef.checked === true){
	document.querySelector("#txtkommentar").disabled = false;
	} else {
	document.querySelector("#txtkommentar").disabled = true;
	}
}
*/
//validera
function validateForm(formRef){
  //ska returnera sant eller falskt
	console.log("validateForm()");

    try{
			let selectRef = formRef.querySelector("select");
      let textRefs = document.querySelectorAll("select, input[type = text], textarea");
      let currentTextRef = null;
          for (var i = 0; i < textRefs.length; i++) {
          currentTextRef = textRefs.item(i);//kan använda som vektor också (textrefs[i])
          console.log(currentTextRef.getAttribute("id"));
            if(currentTextRef.value.length === 0){
              //throw new Error("Någon textruta saknar värde!");
              throw {"object": currentTextRef};
            }

        }

			return true;
		} catch(oError){

        document.querySelector("#errorMsg").textContent = "Ange " + oError.object.getAttribute("title") + "!";
				//document.querySelector("#errorMsg").textContent = "Du kan inte välja " + oError.object.getAttribute("select") + "!";
				oError.object();
				console.log(oError);
        return false;


    }












	return false;
}

	//reset
function resetForm(){
//console.log("resetForm()");
setFocusOnForm();
document.querySelector("#errorMsg").textContent = "";

}

//textarea
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
