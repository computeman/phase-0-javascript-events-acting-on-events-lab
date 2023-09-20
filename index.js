// // Your code here
const dodger = document.getElementById("dodger");
const game = document.getElementById("game");
dodger.style.backgroundColor = "#FF69B4";

function moveDodgerLeft() {
  const leftNumbers = dodger.style.left.replace("px", "");
  const left = parseInt(leftNumbers, 10);
  if (left > 0) {
    dodger.style.left = `${left - 5}px`;
  }
}

document.addEventListener("keydown", function (e) {
  if (e.key === "ArrowLeft") {
    moveDodgerLeft();
  }
});


function moveDodgerRight() {
  const gameRightEdge = game.offsetLeft + game.offsetWidth;
  const dodgerRightEdge = dodger.offsetLeft + dodger.offsetWidth;
  const leftNumbers = dodger.style.left.replace("px", "");
  const left = parseInt(leftNumbers, 10);

  if (dodgerRightEdge <= 400) {
    dodger.style.left = `${left + 5}px`;
  }
}

document.addEventListener("keydown", function (e) {
  if (e.key === "ArrowRight") {
    moveDodgerRight();
  }
});

