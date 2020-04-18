"use strict";

function setFocus() {
    console.log("setFocus()");
    document.querySelector("[name=Name]").focus();
}

function validateForm(formRef) {
    console.log("validateForm()");

    try {
       
        let name = formRef.querySelector("[name=Name]").value;
        let familyName = formRef.querySelector("[name=Familyname]").value;

        console.log(name, familyName);

        if(name === "") {
            throw new Error("Ange förnamn!");
        }

        if(familyName === "") {
            throw new Error("Ange efternamn!");
        }

        return true;

    } catch(oError) {
        document.querySelector("#errorMsg").textContent = oError.message;
        return false;
    }
}

function resetFormPage() {
    console.log("resetFormPage()");
    document.querySelector("#errorMsg").textContent = "";
    setFocus();

}

function checkTextField(inputRef) {
    console.log("checkTextField()");
    console.log( inputRef.value );
}