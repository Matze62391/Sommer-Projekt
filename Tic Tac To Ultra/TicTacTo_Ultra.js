/* Classic */

// Spieler-Symbole festlegen
let player1 = "X";
let player2 = "O";

// Startspieler setzen
let aktueller_player = player1;

// Alle HTML-Felder des Spielfelds holen
let felder_clasic = document.querySelectorAll(".cell_c");

// Array für den Spielstatus (welches Feld ist belegt)
let felder = ["","","","","","","","",""];

// Gewinnkombinationen (Index-Positionen im Array)
const win = [
    [0,1,2],[3,4,5],[6,7,8],      // Reihen
    [0,3,6],[1,4,7],[2,5,8],      // Spalten
    [0,4,8],[2,4,6]               // Diagonalen
];

// Klick-Event für jedes Feld setzen
felder_clasic.forEach((feld, index) => {
    feld.addEventListener("click", () => {
        feldKlick(index);         // Funktion mit Feld-Index aufrufen
    });
});

function feldKlick(index) {

    // Wenn Feld schon belegt ist → nichts machen
    if (felder[index] !== "") return;

    // Spielerzeichen ins Array eintragen
    felder[index] = aktueller_player;

    // Zeichen auch im HTML anzeigen
    felder_clasic[index].textContent = aktueller_player;

    // Prüfen ob jemand gewonnen hat
    let winner = check_win(felder);

    // Wenn Gewinner gefunden → Meldung anzeigen
    if (winner !== null) {
        alert(winner + " hat gewonnen!");
        return;                   // Spiel stoppen
    }

    // Spieler wechseln (X → O oder O → X)
    aktueller_player = aktueller_player === "X" ? "O" : "X";
}

function check_win(felder) {

    // Jede Gewinnkombination durchgehen
    for (let combo of win) {

        // Einzelne Positionen der Kombination holen
        let a = combo[0];
        let b = combo[1];
        let c = combo[2];

        // Prüfen ob alle drei Felder gleich sind und nicht leer
        if (
            felder[a] !== "" &&
            felder[a] === felder[b] &&
            felder[b] === felder[c]
        ) {
            return felder[a];     // Gewinner zurückgeben
        }
    }

    // Kein Gewinner gefunden
    return null;
}

// Reset-Button setzt das Spiel zurück
document.getElementById("reset-button").addEventListener("click", () => {

    // Spielfeld-Array leeren
    felder = ["","","","","","","","",""];

    // HTML-Felder leeren
    felder_clasic.forEach(f => f.textContent = "");

    // Spieler wieder auf X setzen
    aktueller_player = player1;
});
