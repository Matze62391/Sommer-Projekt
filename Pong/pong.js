const canvas = document.getElementById("game");
const ctx = canvas.getContext("2d");

let y = 120;
let upPressed = false;
let downPressed = false;

document.addEventListener("keydown", (e) => {
  if (e.key === "ArrowUp") upPressed = true;
  if (e.key === "ArrowDown") downPressed = true;
});

document.addEventListener("keyup", (e) => {
  if (e.key === "ArrowUp") upPressed = false;
  if (e.key === "ArrowDown") downPressed = false;
});

function play() {
  const paddleHeight = 30;
  const speed = 4;

  if (upPressed) y -= speed;
  if (downPressed) y += speed;

  if (y < 0) y = 0;
  if (y > canvas.height - paddleHeight) y = canvas.height - paddleHeight;

  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.fillRect(10, y, 10, paddleHeight);

  requestAnimationFrame(play);
}

play();
