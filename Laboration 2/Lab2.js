//Lab2.js
'use strict';


function setFocusOnForm(){
	console.log("setFocusOnForm()");
  document.querySelector("#cbofabrikat").focus();
	//document.getElementById("txtkommentar").disabled = true;
}

function validateForm(){
	console.log("validateForm()");

	let textRefs = document.querySelectorAll(".form-control");
	console.log(textRefs);













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
				document.querySelector("#errorMsg").innerHTML = "OBS! Du måste skriva in minst " + (count - kommentar) + " tecken till!";
			} else {
				document.querySelector("#errorMsg").innerHTML ="";
		}
}
