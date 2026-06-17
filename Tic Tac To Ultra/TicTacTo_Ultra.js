/* Classic */

let player1 = "X";
let player2 = "O";

let aktueller_player = player1;
let felder_clasic = document.querySelectorAll(".cell_c");

let felder = ["","","","","","","","",""];

const win = [
    [0,1,2],[3,4,5],[6,7,8],
    [0,3,6],[1,4,7],[2,5,8],
    [0,4,8],[2,4,6]
];

felder_clasic.forEach((feld, index) => {
    feld.addEventListener("click", () => {
        feldKlick(index);
    });
});

function feldKlick(index) {
    if (felder[index] !== "") return;

    felder[index] = aktueller_player;
    felder_clasic[index].textContent = aktueller_player;

    let winner = check_win(felder);

    if (winner !== null) {
        alert(winner + " hat gewonnen!");
        return;
    }

    aktueller_player = aktueller_player === "X" ? "O" : "X";
}

function check_win(felder) {
    for (let combo of win) {
        let a = combo[0];
        let b = combo[1];
        let c = combo[2];

        if (
            felder[a] !== "" &&
            felder[a] === felder[b] &&
            felder[b] === felder[c]
        ) {
            return felder[a];
        }
    }
    return null;
}

/* Reset Classic */

document.getElementById("reset-button").addEventListener("click", () => {
    felder = ["","","","","","","","",""];
    felder_clasic.forEach(f => f.textContent = "");
    aktueller_player = player1;
});

/* Toggle Classic / Ultra */

const toggle = document.getElementById("mode-toggle");
const modeText = document.getElementById("mode-text");

const ultraGame = document.querySelector(".game-board");
const classicGame = document.querySelector(".classic");

toggle.checked = false;
ultraGame.style.display = "none";
classicGame.style.display = "grid";
modeText.textContent = "Classic";

toggle.addEventListener("change", () => {
    if (toggle.checked) {
        ultraGame.style.display = "grid";
        classicGame.style.display = "none";
        modeText.textContent = "Ultra";
    } else {
        ultraGame.style.display = "none";
        classicGame.style.display = "grid";
        modeText.textContent = "Classic";
    }
});

/* Ultra */

let p1 = "X";
let p2 = "O";

let cur = p1;
let next = null;

let small = Array(9).fill(null).map(() => Array(9).fill(""));
let big = Array(9).fill("");

let winp = [
    [0,1,2],[3,4,5],[6,7,8],
    [0,3,6],[1,4,7],[2,5,8],
    [0,4,8],[2,4,6]
];

function w(b) {
    for (let c of winp) {
        let a = c[0], d = c[1], e = c[2];
        if (b[a] && b[a] === b[d] && b[d] === b[e]) return b[a];
    }
    return "";
}

function clickU(e) {
    let id = e.target.id;
    if (!id.startsWith("small")) return;

    let p = id.split("-");
    let s = parseInt(p[1]);
    let b = parseInt(p[2]);

    if (next !== null && next !== b) return;
    if (small[b][s] !== "") return;
    if (big[b] !== "") return;

    small[b][s] = cur;
    e.target.textContent = cur;

    let ws = w(small[b]);
    if (ws) {
        big[b] = ws;
        let bb = document.getElementById("big-" + b);
        bb.classList.add(ws === "X" ? "winX" : "winO");
        bb.setAttribute("data-win", ws);
    }

    let wb = w(big);
    if (wb) {
        alert(cur + " gewinnt");
        return;
    }

    next = s;
    if (big[next] !== "") next = null;

    cur = cur === "X" ? "O" : "X";
}

document.querySelectorAll(".cell").forEach(c => {
    c.addEventListener("click", clickU);
});
