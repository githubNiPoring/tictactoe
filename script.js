var cells = document.querySelectorAll("td");
var player = "X";
var winCombinations = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
  [1, 4, 7],
  [2, 5, 8],
  [3, 6, 9],
  [1, 5, 9],
  [3, 5, 7],
];
var isGameOver = false;
var resetButton = document.querySelector("#reset-button");
var moves = 0;

for (var i = 0; i < cells.length; i++) {
  cells[i].addEventListener("click", function () {
    if (this.textContent === "" && !isGameOver) {
      this.textContent = player;
      checkForWin();
      player = player === "X" ? "O" : "X";
      moves++;
    }
  });
}

resetButton.addEventListener("click", function () {
  reset();
});

function checkForWin() {
  for (var i = 0; i < winCombinations.length; i++) {
    var combination = winCombinations[i];
    var a = document.querySelector("#cell-" + combination[0]).textContent;
    var b = document.querySelector("#cell-" + combination[1]).textContent;
    var c = document.querySelector("#cell-" + combination[2]).textContent;
    if (a === "" || b === "" || c === "") {
      continue;
    }
    if (a === b && b === c) {
      isGameOver = true;
      alert(a + " wins!");
      break;
    }
  }
  if (!isGameOver) {
    checkForDraw();
  }
}

function checkForDraw() {
  if (moves === 8) {
    alert("It's a draw!");
    isGameOver = true;
  }
}

function reset() {
  for (var i = 0; i < cells.length; i++) {
    cells[i].textContent = "";
  }
  player = "X";
  isGameOver = false;
  moves = 0;
}

// var darkModeButton = document.querySelector("#dark-mode-button");
// var body = document.querySelector("body");
// var table = document.querySelector("table");
// var cells = document.querySelectorAll("td");
// var isDarkMode = false;

// darkModeButton.addEventListener("click", function () {
//   if (isDarkMode) {
//     body.classList.remove("dark");
//     table.classList.remove("dark");
//     for (var i = 0; i < cells.length; i++) {
//       cells[i].classList.remove("dark");
//     }
//     isDarkMode = false;
//   } else {
//     body.classList.add("dark");
//     table.classList.add("dark");
//     for (var i = 0; i < cells.length; i++) {
//       cells[i].classList.add("dark");
//     }
//     isDarkMode = true;
//   }
// });
var darkModeButton = document.querySelector("#dark-mode-button");
var body = document.querySelector("body");
var table = document.querySelector("table");
var cells = document.querySelectorAll("td");
var isDarkMode = false;

darkModeButton.addEventListener("click", function () {
  if (isDarkMode) {
    body.classList.remove("dark");
    table.classList.remove("dark");
    for (var i = 0; i < cells.length; i++) {
      cells[i].classList.remove("dark");
    }
    isDarkMode = false;
  } else {
    body.classList.add("dark");
    table.classList.add("dark");
    for (var i = 0; i < cells.length; i++) {
      cells[i].classList.add("dark");
    }
    isDarkMode = true;
  }
});
