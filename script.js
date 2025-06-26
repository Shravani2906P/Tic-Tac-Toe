console.log("Welcome to Tic Tac Toe!")
let music = new Audio("music.mp3");
let ting = new Audio("ting.mp3");
let gameover = new Audio("gameover.mp3");

let turn = "X"
//function to change the turn 
const changeTurn = () => {
    return turn === "X" ? "O" : "X"
}

//function to check for a win
const checkWin = () => {

}

//Game Logic
let boxes = document.getElementsByClassName("box");
Array.from(boxes).forEach(element => {
    element.addEventListener("click", () => {
        element.querySelector(".box-text").innerText = turn;
        turn = changeTurn();
    });
});