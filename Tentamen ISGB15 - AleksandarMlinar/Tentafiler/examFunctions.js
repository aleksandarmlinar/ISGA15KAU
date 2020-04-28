"use strict";

/**
 * Globalt objekt som innehåller de attribut som ni skall använda.
 * Initieras genom anrop till funktionern initGlobalObject().
 */
let oGameData = {};

/**
 * Kontrollerar för tre i rad (horisontellt, vertikalt och diagonalt (* 2)).
 * Returnerar 0 om det inte är någon vinnare,
 * returnerar 1 om spelaren med ett kryss (X) är vinnare,
 * returnerar 2 om spelaren med en cirkel (O) är vinnare eller
 * returnerar 3 om det är oavgjort.
 * Funktionen tar inte emot några värden.
 */
function checkForGameOver() {

    let hasWinner = checkhorizontal() +
        checkVertical() +
        checkDiagonalLeftToRight() +
        checkDiagonalRightToLeft() +
        checkForDraw();

    return hasWinner;

}

/**
 * Kontrollerar för tre i rad horisontellt.
 * Returnerar 0 om det inte är någon vinnare,
 * returnerar 1 om spelaren med ett kryss (X) är vinnare eller
 * returnerar 2 om spelaren med en cirkel (O) är vinnare.
 * Funktionen tar inte emot några värden.
 */
function checkhorizontal() {
    let trRefs = document.querySelectorAll("tr");
    let tdRefs = null;
    let tdRef = null;
    let i = 0;
    let j = 0;
    let players = [];
    players[0] = 0;
    players[1] = 0;

    for(i = 0; i < trRefs.length; i++) {
        tdRefs = trRefs.item( i ).querySelectorAll("td");

        for(j = 0; j < tdRefs.length; j++) {
            tdRef = tdRefs.item ( j );

            if(tdRef.textContent === "X") {
                players[0]++
            } else if(tdRef.textContent === "O") {
                players[1]++;
            }
        }

        if( players[0] === 3) {
            return 1;
        } else if( players[1] === 3) {
            return 2;
        } else {
            players[0] = 0;
            players[1] = 0;
        }
    }

    return 0;
}

/**
 * Kontrollerar för tre i rad vertikalt.
 * Returnerar 0 om det inte är någon vinnare,
 * returnerar 1 om spelaren med ett kryss (X) är vinnare eller
 * returnerar 2 om spelaren med en cirkel (O) är vinnare.
 * Funktionen tar inte emot några värden.
 */
function checkVertical() {
    let trRefs = document.querySelectorAll("tr");
    let tdRefs = null;
    let tdRef = null;
    let i = 0;
    let j = 0;
    let players = [];
    players[0] = 0;
    players[1] = 0;

    for(i = 0; i < trRefs.length; i++) {
        tdRefs = trRefs.item( i ).querySelectorAll("td");

        for(j = 0; j < tdRefs.length; j++) {
            tdRef = trRefs.item( j ).querySelectorAll("td").item( i );

            if(tdRef.textContent === "X") {
                players[0]++
            } else if(tdRef.textContent === "O") {
                players[1]++;
            }
        }

        if( players[0] === 3) {
            return 1;
        } else if( players[1] === 3) {
            return 2;
        } else {
            players[0] = 0;
            players[1] = 0;
        }

    }

    return 0;
}

/**
 * Kontrollerar för tre i rad diagonalt.
 * Returnerar 0 om det inte är någon vinnare,
 * returnerar 1 om spelaren med ett kryss (X) är vinnare eller
 * returnerar 2 om spelaren med en cirkel (O) är vinnare.
 * Funktionen tar inte emot några värden.
 */
function checkDiagonalLeftToRight() {
    let trRefs = document.querySelectorAll("tr");
    let tdRef = null;
    let i = 0;
    let players = [];
    players[0] = 0;
    players[1] = 0;

    for(i = 0; i < trRefs.length; i++){
        tdRef = trRefs.item( i ).querySelectorAll("td").item( i );

        if(tdRef.textContent === "X") {
            players[0]++
        } else if(tdRef.textContent === "O") {
            players[1]++;
        }

    }

    if( players[0] === 3) {
            return 1;
        } else if( players[1] === 3) {
            return 2;
        } else {
            players[0] = 0;
            players[1] = 0;
        }

    return 0;
}

/**
 * Kontrollerar för tre i rad diagonalt.
 * Returnerar 0 om det inte är någon vinnare,
 * returnerar 1 om spelaren med ett kryss (X) är vinnare eller
 * returnerar 2 om spelaren med en cirkel (O) är vinnare.
 * Funktionen tar inte emot några värden.
 */
function checkDiagonalRightToLeft() {
    let trRefs = document.querySelectorAll("tr");
    let tdRef = null;
    let column = trRefs.item( 0 ).querySelectorAll("td").length - 1;
    let i = 0;
    let players = [];
    players[0] = 0;
    players[1] = 0;

    for(i = 0; i < trRefs.length; i++) {
        tdRef = trRefs.item( i ).querySelectorAll("td").item( column );
        column--;

        if(tdRef.textContent === "X") {
            players[0]++
        } else if(tdRef.textContent === "O") {
            players[1]++;
        }
    }

    if( players[0] === 3) {
            return 1;
    } else if( players[1] === 3) {
        return 2;
    } else {
        players[0] = 0;
        players[1] = 0;
    }
    return 0;
}

/**
 * Kontrollerar om alla spelfält har brickor eller inte.
 * Retunerar sant om alla spelfält har brickor eller falskt om så inter är fallet.
 * Funktionen tar inte emot några värden.
 */
function checkForDraw() {
    if( oGameData.numberOfBricks === document.querySelectorAll("td").length ) {
        return 3;
    } else {
        return 0;
    }
}

/**
 * Initerar det globala objektet med de attribut som ni skall använda er av.
 * Funktionen tar inte emot några värden.
 * Funktionen returnerar inte något värde.
 */
function initGlobalObject() {
    console.log("initGlobalObject körs");
    //Indikerar tecknet som skall användas för spelare ett.
    oGameData.playerOne = "X";

    //Indikerar tecknet som skall användas för spelare två.
    oGameData.playerTwo = "O";

    //Kan anta värdet X eller O och indikerar vilken spelare som för tillfället skall lägga sin "bricka".
    oGameData.currentPlayer = "";

    //Nickname för spelare ett som tilldelas från ett formulärelement,
    oGameData.nickNamePlayerOne = "";

    //Nickname för spelare två som tilldelas från ett formulärelement.
    oGameData.nickNamePlayerTwo = "";

    //Färg för spelare ett som tilldelas från ett formulärelement.
    oGameData.colorPlayerOne = "";

    //Färg för spelare två som tilldelas från ett formulärelement.
    oGameData.colorPlayerTwo = "";

    //Antalet "brickor" som finns utlagda i aktuellt spel.
    oGameData.numberOfBricks = 0;

    //"Flagga" som indikerar om användaren klickt för checkboken för VG-uppgiften
    oGameData.timerEnabled = false;

    //Timerid för VG-uppgiften
    oGameData.timerId = null;

}

function removeListenerFromTable() {
    document.querySelector("table").removeEventListener("click", executeMove);
}
function addListenerToTable() {
    document.querySelector("table").addEventListener("click", executeMove);
}
