const canvas = document.getElementById("game");
const ctx = canvas.getContext("2d");

const paddleHeight = 60;
const paddleWidth = 10;
const speed = 4;
const gay = 100;

// --- Spieler 1 (links, Pfeiltasten) ---
let y1 = 120;
let upPressed = false;
let downPressed = false;

// --- NEU: Spieler 2 (rechts, W/S) ---
let y2 = 120;
let wPressed = false;
let sPressed = false;

document.addEventListener("keydown", (e) => {
  if (e.key === "ArrowUp") upPressed = true;
  if (e.key === "ArrowDown") downPressed = true;
  if (e.key === "w") wPressed = true;
  if (e.key === "s") sPressed = true;
});

document.addEventListener("keyup", (e) => {
  if (e.key === "ArrowUp") upPressed = false;
  if (e.key === "ArrowDown") downPressed = false;
  if (e.key === "w") wPressed = false;
  if (e.key === "s") sPressed = false;
});

// --- Ball ---
let ballX = 200;
let ballY = 125;
let ballDX = 3;
let ballDY = 3;

// --- Punkte ---
let score1 = 0;
let score2 = 0;

function play() {
  // Spieler 1 bewegen
  if (upPressed) y1 -= speed;
  if (downPressed) y1 += speed;

  if (y1 < 0) y1 = 0;
  if (y1 > canvas.height - paddleHeight) y1 = canvas.height - paddleHeight;

  // Spieler 2 bewegen
  if (wPressed) y2 -= speed;
  if (sPressed) y2 += speed;

  if (y2 < 0) y2 = 0;
  if (y2 > canvas.height - paddleHeight) y2 = canvas.height - paddleHeight;

  // Ball bewegen
  ballX += ballDX;
  ballY += ballDY;

  // Ball prallt oben/unten ab
  if (ballY <= 0 || ballY >= canvas.height) ballDY *= -1;

  // Ball trifft Spieler 1 Paddle (links)
  if (ballX <= 20 && ballY >= y1 && ballY <= y1 + paddleHeight) {
    ballDX *= -1;
  }

  // Ball trifft Spieler 2 Paddle (rechts)
  if (ballX >= canvas.width - 20 && ballY >= y2 && ballY <= y2 + paddleHeight) {
    ballDX *= -1;
  }

  // Ball geht links raus -> Punkt für Spieler 2
  if (ballX < 0) {
    score2++;
    ballX = canvas.width / 2;
    ballY = canvas.height / 2;
  }

  // Ball geht rechts raus -> Punkt für Spieler 1
  if (ballX > canvas.width) {
    score1++;
    ballX = canvas.width / 2;
    ballY = canvas.height / 2;
  }

  // Zeichnen
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  // Paddle Spieler 1 
  ctx.fillRect(10, y1, paddleWidth, paddleHeight);

  // Paddle Spieler 2 
  ctx.fillRect(canvas.width - 20, y2, paddleWidth, paddleHeight);

  // Ball
  ctx.fillRect(ballX, ballY, 8, 8);

  // Punktestand
  ctx.font = "20px monospace";
  ctx.fillText(score1, 160, 30);
  ctx.fillText(score2, 220, 30);

  requestAnimationFrame(play);
}

play();
