import { sdk } from "@farcaster/miniapp-sdk";

sdk.actions.ready(); // notify Farcaster that the app is ready

const message = document.getElementById("message") as HTMLParagraphElement;
const buttonsDiv = document.getElementById("buttons") as HTMLDivElement;

let randomNumber: number | null = null;

function renderStart() {
  message.textContent = "Press Start to play";
  buttonsDiv.innerHTML = "";
  const startBtn = document.createElement("button");
  startBtn.textContent = "Start Game";
  startBtn.onclick = () => startGame();
  buttonsDiv.appendChild(startBtn);
}

function startGame() {
  randomNumber = Math.floor(Math.random() * 5) + 1;
  message.textContent = "Pick a number between 1 and 5";
  buttonsDiv.innerHTML = "";
  for (let i = 1; i <= 5; i++) {
    const btn = document.createElement("button");
    btn.textContent = i.toString();
    btn.onclick = () => checkGuess(i);
    buttonsDiv.appendChild(btn);
  }
}

function checkGuess(num: number) {
  if (num === randomNumber) {
    message.textContent = `🎉 Correct! The number was ${randomNumber}`;
  } else {
    message.textContent = `❌ Wrong! The number was ${randomNumber}`;
  }
  buttonsDiv.innerHTML = "";
  const restartBtn = document.createElement("button");
  restartBtn.textContent = "Play Again";
  restartBtn.onclick = () => renderStart();
  buttonsDiv.appendChild(restartBtn);
}

renderStart();
