"use strict";

//Tre funktioner
function showCheckBoxInfo(chkBoxRef) {

    console.log( chkBoxRef );
    console.log( chkBoxRef.checked );

}
function showSelectInfo(formRef) {

    let selectRef = formRef.querySelector("select");

    console.log( selectRef );
    console.log( selectRef.selectedIndex );
    console.log( selectRef.options );
    console.log( selectRef.options.item(0) );
    console.log( selectRef.options[0] );

    console.log( selectRef.options.item(selectRef.selectedIndex).value );
    console.log( selectRef.options[selectRef.selectedIndex].value );
}
function showOptionsInfo(formRef) {

    let optionsRef = formRef.querySelectorAll("select option");

    console.log( formRef );
    console.log( optionsRef );

    for(let i = 0; i < optionsRef.length; i++) {
        console.log( optionsRef.item( i ) );
        console.log( optionsRef.item(i).value );
    }

}