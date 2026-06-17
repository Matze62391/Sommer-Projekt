let Nummer = Math.floor(Math.random() * 100) + 1;
let versuche = 0;

const vermutung = document.getElementById("guess");
const check_button = document.getElementById("check_button");
const restart_button = document.getElementById("restart_button");
const message = document.getElementById("message");
const tries = document.getElementById("versuche");

check_button.addEventListener("click", () => {
  const guess = Number(vermutung.value);

  if (vermutung.value === "" || isNaN(guess) || guess < 1 || guess > 100) {
    message.textContent = "Bitte gib eine Zahl von 1 bis 100 ein.";
    return;
  }

  versuche++;
  tries.textContent = versuche;

  if (guess === Nummer) {
    message.textContent = `Richtig! Du hast die Zahl in ${versuche} Versuchen erraten.`;
  } else if (guess < Nummer) {
    message.textContent = "Zu niedrig!";
  } else {
    message.textContent = "Zu hoch!";
  }
});

restart_button.addEventListener("click", () => {
  Nummer = Math.floor(Math.random() * 100) + 1;
  versuche = 0;
  tries.textContent = versuche;
  message.textContent = "Neues Spiel gestartet!";
  vermutung.value = "";
});