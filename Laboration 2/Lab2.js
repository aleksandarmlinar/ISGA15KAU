'use strict';

	//reset
  function resetForm(){
  //console.log("resetForm()");
  document.querySelector("#errorMsg").textContent = "";
  document.querySelector("#cbofabrikat").focus();
  document.querySelector("#errorMsg").removeAttribute("class");
  }

//validera
function validateForm(){
  document.querySelector("#errorMsg").setAttribute("class", "alert alert-danger");
	console.log("validateForm()");
		try{
        // Kolla alla input
        let textRefs = document.querySelectorAll("input[type = text]");
        let selectRefs = document.querySelector("select");
        let textAreaRef = document.querySelector("textarea");
        let chkBoxRef = document.querySelector("input[type = checkbox]");
        let currentRef = null;

            //kontrollera alla select fält
            if(selectRefs.value === "saknas"){
              selectRefs.focus();
              //console.log(selectRefs.value);
              //throw {"object": selectRefs};
               throw new Error("Du måste välja en annan rad i 'Välj fabrikat' listan!");
            };


            //Kontrollera input
           for (var i = 0; i < textRefs.length; i++) {
                currentRef = textRefs.item(i);
              if(textRefs.item(0).value === ""){
                  textRefs.item(0).focus();
                  throw new Error("Ange modell!");
              };

              if(textRefs.item(1).value === ""){
                textRefs.item(1).focus();
                throw new Error("Ange mätarställning!");
              };
            };

            if(currentRef.getAttribute("id") === "txtmatarstallning"){
               if(isNaN(currentRef.value)){
               throw new Error("Du måste ange värdet i siffror.");
               };
            };

            //kontrollera textfältet
            if(chkBoxRef.checked === true){
                if(textAreaRef.value.length < 5){
                  throw new Error("Du måste skriva minst 5 tecken under 'Övriga kommentarer'.");
                };
            };



			return true;
		} catch(oError){

          document.querySelector("#errorMsg").innerHTML = oError.message;

      return false;
    }
}
