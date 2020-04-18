"use strict";

function countNumberOfChars( inTextAreaRef ) {
	document.querySelector( "#nbrOfChars" ).textContent = inTextAreaRef.value.length;
}

function setFocusOnForm() {
	document.querySelector( "#txtNamn" ).focus();
}

function resetForm() {
	//textContent, innerHTML, outerHTML
	document.querySelector( "#nbrOfChars" ).textContent = 0;
	document.querySelector( "#errorMsg" ).textContent = "";
	document.querySelector( "#txtNamn" ).focus();
}

function checkForm() {
	
	//Returnerar sant eller falskt!
	try {
		
		let textRefs = document.querySelectorAll( "input[type=text], textarea" );
		let currentTextRef = null;
		//console.log(textRefs);
		
		for(let counter = 0; counter < textRefs.length; counter++){
			
			currentTextRef = textRefs.item(counter);
			
			if(currentTextRef.value.length === 0) {
				
				//throw new Error("Feltexten!");
				throw { "object" : currentTextRef };
			}
			
			console.log(currentTextRef.getAttribute("title"));
			
			if(currentTextRef.getAttribute("title") === "Postnummer") {
				
				if(currentTextRef.value.length !== 5) {
					throw { "object" : currentTextRef };
				}
				
				if(isNaN(currentTextRef.value)) {
					throw { "object" : currentTextRef };
				}
				
			}
		}
		
		
		return true;
	} catch( oE ) {
		//1. Felmeddelande till användaren
		document.querySelector( "#errorMsg" ).textContent = "Ange " + oE.object.getAttribute("title") + "!";
		//2. Markören i DOM-objektet som inte uppfyller villkoren
		oE.object.focus();
		//3. Markera texten som finns i textrutan -> Kommer bara att beröra postnummer!
		oE.object.setSelectionRange(0, oE.object.value.length);
		console.log(oE);
		//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Error
		//Feltexten vid throw new Error("Feltexten...") finns i egenskapen message!
		//window.alert( oE.message );
		return false;
	}
	
}











