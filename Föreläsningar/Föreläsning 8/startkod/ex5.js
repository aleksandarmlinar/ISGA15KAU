"use strict";




window.addEventListener("load", function(){


	const JSONBook = {
		"Author" : "Jeremy Keith & Jeffrey Sambells",
		"Title" : "DOM Scripting Web Design with JavaScript and the Document Object Model",
		"Publisher" : "Apress",
		"Year" : "1990"
	};

	let keyArray = Object.keys(JSONBook);
	let valueArray = Object.values(JSONBook);
	let nbr = keyArray.length;
	let pRef = document.querySelector("#keysandvalues");
	let bRef = null;
	let iRef = null;
	let bTextRef = null;
	let iTextRef = null;

	for(var i = 0; i < nbr; i++){
		bRef = document.createElement("b");
		bTextRef = document.createTextNode(keyArray[i]);
		bRef.appendChild(bTextRef);
		pRef.appendChild(bRef);

		iRef = document.createElement("i");
		iTextRef = document.createTextNode(valueArray[i]);
		iRef.appendChild(iTextRef);
		pRef.appendChild(iRef);
	}
	console.log(keyArray, valueArray);


});
