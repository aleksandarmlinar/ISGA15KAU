"use strict";

//Tre funktioner
function showCheckBoxInfo(chkBoxRef){
//console.log("showCheckBoxInfo()");
console.log(chkBoxRef);
console.log(chkBoxRef.checked);
}
function showSelectInfo(formRef){
 //console.log("showSelectInfo()")
 let selectRef = formRef.querySelector("select");
 console.log(selectRef);
 console.log(selectRef.selectedIndex);
 console.log(selectRef.options);
 console.log(selectRef.options.item(0));
 console.log(selectRef.options[0]);
 console.log(selectRef.options.item(selectRef.selectedIndex).value);
 console.log(selectRef.options[selectRef.selectedIndex].value);
}
function showOptionsInfo(formRef){
//console.log("showOptionsInfo()");
 let optionsRef = formRef.querySelectorAll("select option");
 console.log(formRef);
 console.log(optionsRef);
  for (var i = 0; i < optionsRef.length; i++) {
        console.log(optionsRef.item(i));
        console.log(optionsRef.item(i).value);
  }

}
