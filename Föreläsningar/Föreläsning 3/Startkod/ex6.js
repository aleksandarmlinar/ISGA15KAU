'use strict';

function setFocus(){
  console.log("setFocus();");
  document.querySelector("[name = Name]").focus();
}

function validateForm(formRef){
  console.log("validateForm();");

  try {

      let namn = formRef.querySelector("[name=Name]").value;
      let efternamn = formRef.querySelector("[name=Familyname]").value;

      console.log(namn, efternamn);

      if(namn === ""){
        throw new Error("Ange förnamn!");
      }

      if(efternamn === ""){
        throw new Error("Ange efternamn!");
      }

      return false;

  } catch(oError) {
    document.querySelector("#errorMsg").textContent = oError.message;

    return false;
  }
}


function checkTextField(inputRef){
  console.log("checkTextField();");
  console.log(inputRef.value);

}

function resetForm(){
  console.log("resetForm();");
  document.querySelector("#errorMsg").textContent = "";
  setFocus();
}
