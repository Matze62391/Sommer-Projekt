document.addEventListener("DOMContentLoaded", function () {
  const chessboard = document.getElementById("chessboard");
  const rows = 8;
  const cols = 8;

  // Define chessboard layout
  const chessboardLayout = [
    ["R", "N", "B", "Q", "K", "B", "N", "R"],
    ["P", "P", "P", "P", "P", "P", "P", "P"],
    ["", "", "", "", "", "", "", ""],
    ["", "", "", "", "", "", "", ""],
    ["", "", "", "", "", "", "", ""],
    ["", "", "", "", "", "", "", ""],
    ["p", "p", "p", "p", "p", "p", "p", "p"],
    ["r", "n", "b", "q", "k", "b", "n", "r"],
  ];

  // Function to create cells for the chessboard
  function createCell(row, col, piece) {
    const cell = document.createElement("div");
    cell.classList.add("cell");
    cell.classList.add((row + col) % 2 === 0 ? "white" : "black");
    cell.innerHTML = piece;
    return cell;
  }

  // Generate the chessboard grid
  for (let row = 0; row < rows; row++) {
    for (let col = 0; col < cols; col++) {
      const piece = chessboardLayout[row][col];
      const cell = createCell(row, col, piece);
      chessboard.appendChild(cell);
    }
  }
});