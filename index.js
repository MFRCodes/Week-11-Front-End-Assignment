let boxesPlayed = [];
let currentPlayer = "X";

let championedCombinations = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
  [1, 4, 7],
  [2, 5, 8],
  [3, 6, 9],
  [1, 5, 9],
  [3, 5, 7],
];

// On lines 1-13, I created an array titled "boxesPlayed". This is what allows the games to keep track of whose turn it is.
// I then created a variable titled "currentPlayer" and used "X" as the first value because in Tic-Tac-Toe, player "X" typically
// plays first. I then declared a variable called "championedCombinations" which has an array with a group of arrays within it.
// Lines 5-12 list the combination of boxes that as a group represent each section of the grid.

function checkForTheChampion() {
  for (let combination of championedCombinations) {
    let [a, b, c] = combination;
    let boxA = document.getElementById(a.toString()).innerHTML;
    let boxB = document.getElementById(b.toString()).innerHTML;
    let boxC = document.getElementById(c.toString()).innerHTML;
    if (boxA !== "" && boxA === boxB && boxA === boxC) {
      document.getElementById('championAlert').innerText = "The champion is " + currentPlayer;
      document.getElementById('championAlert').classList.remove('d-none');
      return;
    }
  }
  if (boxesPlayed.length === 9) {
    document.getElementById('championAlert').innerText = "No one wins!";
    document.getElementById('championAlert').classList.remove('d-none');
  }
}

// On lines 20-36, I created a function to fugure out when there is and isn't a  winner. In the "championedCombinations" array, 
// the function will iterate through all possible winning combos. The function then gets whatever is inside of the boxes from 
// the combos via "documents.getElementById.innerHTML" for boxes A-C. In this case, "X" or "O" is what's inside each box.
// Lines 23-25 specifically is what checks to see if any of the values in the cells as a group, result in a win. On lines 27-29
// when someone wins, the champion is printed on the screen. Here, "currentPlayer" is the variable. On lines 32 to 36, if no one wins
// "No one wins" will be printed on the screen.

document.addEventListener("DOMContentLoaded", function() {  
  document.getElementById('restartBtn').addEventListener('click', function() {
    document.querySelectorAll('.box').forEach(box => {
      box.innerText = '';
    });
    boxesPlayed = [];
    currentPlayer = "X";
    document.getElementById('championAlert').classList.add('d-none');
    updateTurnAnnouncement();
  });

//   The code on line 45, is to prevent things from being missing in the DOM. It will only run when the HTML page is properly loaded.
// On line 46, a clickable button with the ID "restartBtn" is declared. On line 47, the code allows the grid to be cleared, hence restarting
// the game. This is done by the content inside the box classes  being cleared. Lines 50-53 resets the arrays to keep score and calls the
// the function to keep up with whose turn it is to play. 

  for (let i = 1; i <= 9; i++) {
    let box = document.getElementById(i.toString());
    box.addEventListener("click", function() {
      if (this.innerHTML === '') {
        this.innerHTML = currentPlayer;
        boxesPlayed.push(i);
        checkForTheChampion();
        currentPlayer = currentPlayer === "X" ? "O" : "X";
        updateTurnAnnouncement();
      }
    });
  }

  updateTurnAnnouncement();
});

// On lines 61-75, I created a for loop to iterate through the boxes on the grid. Each box has an "EventListener" assigned to it and that
// lets the code know when someone clicks on the box. Lines 64-69 specifically deal with the click event handler. Line 64, evaluates 
// if a box on the grid is avaliable to be clicked. line 65, is what allows each box to either indicate "X" or "O". Line 66, takes the index
// of a box that was already played, and addds it to "boxesPlayed" array. Line 67, checks to see if tehre's a winner. Line 68, allows
// the game to switch turns between the players. And line 69, keeps whose turn it is, updated.

function updateTurnAnnouncement() {
  document.getElementById('turnAnnouncement').innerText = "It's Your Turn: " + currentPlayer;
}


//  lines 83-84, indicates which specific player's turn it is.