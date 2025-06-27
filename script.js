console.log("Welcome to Tic Tac Toe!")
let music = new Audio("music.mp3");
let ting = new Audio("ting.mp3");
let gameover = false;

let turn = "X"
//function to change the turn 
const changeTurn = () => {
    return turn === "X" ? "O" : "X"
}

//function to check for a win
const checkWin = () => {
    let boxTexts = document.getElementsByClassName("box-text");
   let wins = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6]
   ]
   wins.forEach(e => {
      if(boxTexts[e[0]].innerText === boxTexts[e[1]].innerText && 
         boxTexts[e[0]].innerText === boxTexts[e[2]].innerText && 
         boxTexts[e[0]].innerText !== ''){
            document.querySelector('.info').innerText = boxTexts[e[0]].innerText + " Won";
            gameover = true;
            document.querySelector('.img-box').getElementsByTagName('img')[0].style.width = "120px";
            Array.from(document.getElementsByClassName("box-out")).forEach(element => {
                element.style.pointerEvents = "none";
            })
         }
   })
}

//Game Logic
let boxes = document.getElementsByClassName("box-out");
Array.from(boxes).forEach(element => {
    let boxText = element.querySelector('.box-text')
    element.addEventListener('click',()=>{
        if(boxText.innerText === ''){
            boxText.innerText = turn;
            turn = changeTurn();
            ting.play();
            checkWin();
            {
                if (!gameover) {
                    document.querySelector('.info').innerText = "Turn for " + turn;
                }
            }
        }
    })
});

//Add onclick listener to reset button
reset.addEventListener('click', () => {
    let boxTexts = document.querySelectorAll('.box-text');
    Array.from(boxTexts).forEach(element => {
        element.innerText = ""
    });
    turn = "X";
    gameover = false;
    document.querySelector('.info').innerText = "Turn for " + turn;
    document.querySelector('.img-box').getElementsByTagName('img')[0].style.width = "0";
    Array.from(document.getElementsByClassName("box-out")).forEach(element => {
        element.style.pointerEvents = "auto";
    })
})