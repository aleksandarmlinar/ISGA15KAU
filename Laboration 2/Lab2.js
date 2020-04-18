//Lab2.js
'use strict';
//validera

function showOptionsInfo(){
//console.log("showOptionsInfo()");
 let optionsRef = document.querySelectorAll("select option");
	if(optionsRef.item(0).value === "saknas"){
		document.querySelector("#errorMsg").textContent = "Välj en bil!";
		}
}

function validateForm(formRef){ 
	showOptionsInfo();
	console.log("validateForm()");
		try{
      let textRefs = document.querySelectorAll("input[type = text], textarea");
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
				oError.object.focus();
				console.log(oError);
        return false;


    }
	return false;
}

	//reset
function resetForm(){
//console.log("resetForm()");
document.querySelector("#errorMsg").textContent = "";
}

window.addEventListener("load", function(){

});
