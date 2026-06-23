// Chess Game Logic
// Using only Arrays, DOM, and Strings as per constraints

// Board representation: 8x8 array
// Each cell: null for empty, or string like 'wp' for white pawn, 'bk' for black king, etc.
// First letter: color (w/b), second letter: piece (K, Q, R, B, N, P)
let board = [
  ["bR", "bN", "bB", "bQ", "bK", "bB", "bN", "bR"],
  ["bP", "bP", "bP", "bP", "bP", "bP", "bP", "bP"],
  [null, null, null, null, null, null, null, null],
  [null, null, null, null, null, null, null, null],
  [null, null, null, null, null, null, null, null],
  [null, null, null, null, null, null, null, null],
  ["wP", "wP", "wP", "wP", "wP", "wP", "wP", "wP"],
  ["wR", "wN", "wB", "wQ", "wK", "wB", "wN", "wR"],
];

let selectedRow = -1; // -1 indicates no selection
let selectedCol = -1;

// Wait for DOM to load
document.addEventListener("DOMContentLoaded", () => {
  const boardContainer = document.getElementById("board");
  createBoardSquares(boardContainer);
  renderBoard();
});

// Create the 64 square divs and append to container
function createBoardSquares(container) {
  for (let row = 0; row < 8; row++) {
    for (let col = 0; col < 8; col++) {
      const square = document.createElement("div");
      square.classList.add("square");
      // Determine color: light if (row+col) even, dark if odd
      if ((row + col) % 2 === 0) {
        square.classList.add("white");
      } else {
        square.classList.add("black");
      }
      square.id = `square-${row}-${col}`;
      // Add click listener
      square.addEventListener("click", () => handleSquareClick(row, col));
      container.appendChild(square);
    }
  }
}

// Render the board based on the board array
function renderBoard() {
  // Clear any existing piece images
  const squares = document.querySelectorAll(".square");
  squares.forEach((square) => {
    // Remove any existing img elements
    const imgs = square.querySelectorAll("img");
    imgs.forEach((img) => img.remove());
  });

  // Place pieces based on board array
  for (let row = 0; row < 8; row++) {
    for (let col = 0; col < 8; col++) {
      const piece = board[row][col];
      if (piece !== null) {
        const square = document.getElementById(`square-${row}-${col}`);
        const img = document.createElement("img");
        img.src = getImagePath(piece);
        img.alt = piece;
        // Optional: add class for piece type if needed
        square.appendChild(img);
      }
    }
  }

  // Highlight selected piece if any
  const allImages = document.querySelectorAll(".square img");
  allImages.forEach((img) => img.classList.remove("selected-piece"));
  if (selectedRow !== -1 && selectedCol !== -1) {
    const selectedSquare = document.getElementById(
      `square-${selectedRow}-${selectedCol}`,
    );
    const selectedImg = selectedSquare.querySelector("img");
    if (selectedImg) {
      selectedImg.classList.add("selected-piece");
    }
  }
}

// Get image path for a piece code
function getImagePath(piece) {
  const color = piece[0]; // 'w' or 'b'
  let pieceType = piece[1]; // 'K', 'Q', 'R', 'B', 'N', 'P'
  // Convert to lowercase filename: king, queen, rook, bishop, knight, pawn
  let filename = "";
  switch (pieceType) {
    case "K":
      filename = "king";
      break;
    case "Q":
      filename = "queen";
      break;
    case "R":
      filename = "rook";
      break;
    case "B":
      filename = "bishop";
      break;
    case "N":
      filename = "knight";
      break;
    case "P":
      filename = "pawn";
      break;
  }
  return `images/pieces/${color === "w" ? "white" : "black"}/${filename}.png`;
}

// Handle click on a square
function handleSquareClick(row, col) {
  if (selectedRow === -1) {
    // First click: select a piece if present
    if (board[row][col] !== null) {
      selectedRow = row;
      selectedCol = col;
      renderBoard(); // to show selection highlight
    }
  } else {
    // Second click: attempt to move piece
    const srcRow = selectedRow;
    const srcCol = selectedCol;
    const piece = board[srcRow][srcCol];

    // Move the piece to the target square (no validation)
    board[row][col] = piece;
    board[srcRow][srcCol] = null;

    // Clear selection
    selectedRow = -1;
    selectedCol = -1;
    renderBoard();
  }
}
