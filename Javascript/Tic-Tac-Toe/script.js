let outer = document.getElementById("outer");
let chance = false; // if chance is false put 0 otheriwse put 1 .
let arr = Array(9).fill(undefined);
let result=document.getElementById("result");

document.addEventListener("DOMContentLoaded", () => {
  outer.addEventListener("click", (e) => {
    let cell = e.target;
    let cellNum = cell.getAttribute("data-cell");

    if (cell.getAttribute("data-clicked")) {
      return;
    }
    cell.setAttribute("data-clicked", true);
    if (chance == true) {
      cell.textContent = "X";
      cell.style.backgroundColor = "green"; 
      cell.style.color="red"
      arr[cellNum] = "X";
      winning("X");
    } else {
      cell.textContent = "O";
      cell.style.backgroundColor = "yellow"; 
      cell.style.color="red"
      arr[cellNum] = "O";
      winning("O");
    }
    chance = !chance;
  });

  function winning(char) {
    if (arr[0] == char && arr[1] == char && arr[2] == char) {
      result.textContent = `${char} wins`;
    } else if (arr[3] == char && arr[4] == char && arr[5] == char) {
      result.textContent = `${char} wins`;
    } else if (arr[6] == char && arr[7] == char && arr[8] == char) {
      result.textContent = `${char} wins`;
    } else if (arr[0] == char && arr[4] == char && arr[8] == char) {
      result.textContent = `${char} wins`;
    } else if (arr[2] == char && arr[4] == char && arr[6] == char) {
      result.textContent = `${char} wins`;
    } else if (arr[0] == char && arr[3] == char && arr[6] == char) {
      result.textContent = `${char} wins`;
    } else if (arr[2] == char && arr[5] == char && arr[8] == char) {
      result.textContent = `${char} wins`;
    }
  }
});
