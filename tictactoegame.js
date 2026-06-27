const boxes = document.querySelectorAll(".box");
const resetBtn = document.querySelector("#reset");
const status = document.querySelector("#status");

let turnO = true;
let gameOver = false;

const winPatterns = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

boxes.forEach((box) => {
  box.addEventListener("click", () => {
    if (gameOver || box.innerText !== "") return;

    if (turnO) {
      box.innerText = "O";
      turnO = false;
    } else {
      box.innerText = "X";
      turnO = true;
    }

    box.disabled = true;
    checkwinner();
  });
});

const disableboxes = () => {
  boxes.forEach((box) => {
    box.disabled = true;
  });
  gameOver = true;
};

const checkwinner = () => {
  for (let pattern of winPatterns) {
    const pos1val = boxes[pattern[0]].innerText;
    const pos2val = boxes[pattern[1]].innerText;
    const pos3val = boxes[pattern[2]].innerText;

    if (pos1val !== "" && pos2val !== "" && pos3val !== "") {
      if (pos1val === pos2val && pos2val === pos3val) {
        disableboxes();
        status.textContent = `Congratulations bro !`;
        return;
      }
    }
  }
};

const resetGame = () => {
  boxes.forEach((box) => {
    box.innerText = "";
    box.disabled = false;
  });
  status.textContent = "";
  turnO = true;
  gameOver = false;
};

resetBtn.addEventListener("click", resetGame);