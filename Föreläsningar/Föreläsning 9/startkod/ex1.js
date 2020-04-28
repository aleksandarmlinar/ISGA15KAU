//ex1.js

/*

	I följande räknestuga¨/workshop/F9 skall du med JavaScript modifiera tabellen i ex1.html.
	Om användaren har JavaScript aktiverat i sin webbläsare skall du när sidan är
    laddad och Document Object Model (DOM) finns byggd exekvera den anonyma funktionen i vilken du
    skall du anropa funktionen createColumn(). I createColumn() skall du
    skall lägga till en ny kolumn till varje rad och dess värde skall vara summan av alla talen på aktuell rad.

	Därefter skall du också skriva koden för funktionen viewValueInSpan() i vilken du skall ta reda
    på värdet i aktuell td (cell) som användaren låter pekaren "sväva över". Värdet i aktuellt td-element
    skall tillsammans med kolumn och rad för td-elementet skrivas ut till span-elementet.

*/
"use strict";

window.addEventListener("load", function(){


	let tableRef = document.querySelector("table");
	tableRef.remove();
	createColumn(tableRef);
	document.querySelector("div[class=table-responsive]").appendChild(tableRef);




	function createColumn(tableNodeRef){

		let rowSum = 0;
		let tRef = null;
		let tdRef = null;
		let tdTextRef = null;
		let i = 0;
		let tRefs = tableNodeRef.querySelectorAll("tr");

		for(i = 0; i < tRefs.length; i++){
			tRef = tRefs.item(i);
			rowSum = sumRow(tRef);


			tdRef = document.createElement("td");
			tdTextRef = document.createTextNode(rowSum);
			tdRef.appendChild(tdTextRef);
			tRef.appendChild(tdRef);
			tdRef.style.fontWeight = "bold";
			tdRef.style.backgroundColor = "lightblue";
		}

	}


	function sumRow(trNodeRef){

		let rowSum = 0;
		let firstChildValue = 0;
		let tdRef = null;
		let tdRefs = trNodeRef.querySelectorAll("td");

		for(let i = 0; i < tdRefs.length; i++){
			tdRef = tdRefs.item(i);
				if(tdRef.firstChild === null ||
					tdRef.firstChild.nodeValue.trim() === "" ||
					isNaN(tdRef.firstChild.nodeValue ) ){
						tdRef.style.backgroundColor = "red";
						firstChildValue = 0;
				} else {
					firstChildValue = parseInt(tdRef.firstChild.nodeValue);
				}

				rowSum += firstChildValue;
		}

		return rowSum;
	}

	function viewValueInSpan(oEvent){

	}

});
