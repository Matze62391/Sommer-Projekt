let currentPlayer = "X";
let nextBig = null;

const smallBoards = Array(9).fill(null).map(() => Array(9).fill(""));
const bigBoard = Array(9).fill("");

const winPatterns = [
    [0,1,2],[3,4,5],[6,7,8],
    [0,3,6],[1,4,7],[2,5,8],
    [0,4,8],[2,4,6]
];

function checkWin(board) {
    for (let p of winPatterns) {
        const [a,b,c] = p;
        if (board[a] && board[a] === board[b] && board[b] === board[c]) return board[a];
    }
    return "";
}

function handleClick(e) {
    const id = e.target.id;
    if (!id.startsWith("small")) return;

    const [_, s, b] = id.split("-").join(".").split(".");
    const bigIndex = parseInt(b);
    const smallIndex = parseInt(s);

    if (nextBig !== null && nextBig !== bigIndex) return;
    if (smallBoards[bigIndex][smallIndex] !== "") return;
    if (bigBoard[bigIndex] !== "") return;

    smallBoards[bigIndex][smallIndex] = currentPlayer;
    e.target.textContent = currentPlayer;

    const wSmall = checkWin(smallBoards[bigIndex]);
    if (wSmall) {
        bigBoard[bigIndex] = wSmall;
        const big = document.getElementById("big-" + bigIndex);
        big.classList.add(wSmall === "X" ? "winX" : "winO");
    }

    const wBig = checkWin(bigBoard);
    if (wBig) {
        alert(currentPlayer + " gewinnt");
        return;
    }

    nextBig = smallIndex;
    if (bigBoard[nextBig] !== "") nextBig = null;

    currentPlayer = currentPlayer === "X" ? "O" : "X";
}

document.querySelectorAll(".cell").forEach(c => c.addEventListener("click", handleClick));

document.getElementById("reset-button").addEventListener("click", () => {
    location.reload();
});

const themeButton = document.getElementById("theme-button");

if (localStorage.getItem("theme") === "light") {
    document.body.classList.add("light");
}

themeButton.addEventListener("click", () => {
    document.body.classList.toggle("light");
    localStorage.setItem("theme",
        document.body.classList.contains("light") ? "light" : "dark"
    );
});
