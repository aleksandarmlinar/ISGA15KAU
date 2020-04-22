//ex1.js

/*

	I följande räknestuga¨/workshop/F9 skall du med JavaScript modifiera tabellen i ex1.html.
	Om användaren har JavaScript aktiverat i sin webbläsare skall du när sidan är
    laddad och Document Object Model (DOM) finns byggd exekvera den anonyma funktionen i vilken du
    skall du anropa funktionen createColumn(). I createColumn() skall du
    skall lägga till en ny kolumn till varje rad och dess värde skall vara summan av alla talen på aktuell rad.
	
	Därefter skall du också skriva koden för funktionen viewValueInSpan() i vilken du skall ta reda
    på värdet i aktuell td (cell) som användaren låter pekaren "sväva över" skrivas ut till span-elementet.
	
*/
"use strict";

window.addEventListener("load", function () {

    let tableRef = document.querySelector("table");
    tableRef.remove();

    createColumn(tableRef);

    document.querySelector("div[class=table-responsive]").appendChild(tableRef);

    tableRef.addEventListener("mouseover", viewValueInSpan);

    tableRef.addEventListener("mouseout", function() {
        document.querySelector("span").firstChild.nodeValue = "";
    });


});

function createColumn(tableNodeRef) {

    let rowSum = 0;
    let trRef = null;
    let tdRef = null;
    let tdTextRef = null;
    let i = 0;

    let trRefs = tableNodeRef.querySelectorAll("tr");
    for( i = 0; i < trRefs.length; i++) {

        trRef = trRefs.item(i);
        rowSum = sumRow(trRef);

        tdRef = document.createElement("td");
        tdTextRef = document.createTextNode(rowSum);

        tdRef.appendChild(tdTextRef);
        trRef.appendChild(tdRef);

        tdRef.style.fontWeight = "bold";
        tdRef.style.backgroundColor = "lightblue";

    }
    
}

function sumRow(trNodeRef) {

    let rowSum = 0;
    let firstChildValue = 0;
    let tdRef = null;
    let tdRefs = trNodeRef.querySelectorAll("td");

    for(let i = 0; i < tdRefs.length; i++) {

        tdRef = tdRefs.item(i);

        if( tdRef.firstChild === null || 
            tdRef.firstChild.nodeValue.trim() === "" || 
            isNaN( tdRef.firstChild.nodeValue) ){

                tdRef.style.backgroundColor = "red";
                firstChildValue = 0;
            } else {
                firstChildValue = parseInt(tdRef.firstChild.nodeValue);
            }
      
        rowSum += firstChildValue;
    }


    return rowSum;

}

function viewValueInSpan(oEvent) {

    let spanRef = document.querySelector("span");
    let currentValue = 0;

    if( oEvent.target.nodeName === "TD") {

        if( oEvent.target.firstChild === null || oEvent.target.firstChild.nodeValue.trim() === "") {
            currentValue = "Saknas";      
        } else {
            currentValue = oEvent.target.firstChild.nodeValue;
        }

    }

    if(spanRef.firstChild === null) {
        spanRef.appendChild( document.createTextNode( currentValue ));
    } else {
        spanRef.firstChild.nodeValue = currentValue;
    }
}
	

	
	
	
	
	
	
	
	
	
	












