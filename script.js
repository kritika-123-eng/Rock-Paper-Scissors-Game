let rock = document.querySelector(".rock");
let paper = document.querySelector(".paper");
let scissors = document.querySelector(".scissors");
let yourPoints = document.querySelector(".your-points");
let aiPoints = document.querySelector(".ai-points");
let name1 = document.querySelector(".name1");
let name2 = document.querySelector(".name2");
let start = document.querySelector(".start");
let reset = document.querySelector(".reset");
let count = document.querySelector(".count");

let gameStarted = false;

start.addEventListener("click", () => {
    if (!gameStarted) {
        gameStarted=true
        start.innerText = "Pick Your Move";
    }
})

rock.addEventListener("click", () => {
    if(!gameStarted) {return}
    
    name1.innerText = "Rock"
    aiMove()
    checkWinner()
})

paper.addEventListener("click", () => {
    if(!gameStarted) {return}

    name1.innerText = "Paper"
    aiMove()
    checkWinner()
})
scissors.addEventListener("click", () => {
    if(!gameStarted) {return}

    name1.innerText = "Scissors"
    aiMove()
    checkWinner()
})

reset.addEventListener("click", ()=>{
    resetGame();
})

function aiMove() {
    let random = Math.random()
    if (random <= 0.33) {
        name2.innerText = "Rock"
    }
    else if (random <= 0.66) {
        name2.innerText = "Paper"
    }
    else {
        name2.innerText = "Scissors"
    }
}


function checkWinner() {
    if (name1.innerText === name2.innerText) {
        start.innerText = "It's a Draw! 🤝"
        start.style.backgroundColor = "#280622"
    }
    else if ((name1.innerText === "Rock" && name2.innerText === "Scissors") || (name1.innerText === "Scissors" && name2.innerText === "Paper") || (name1.innerText === "Paper" && name2.innerText === "Rock")) {
        start.innerText = "You Win"
        start.style.backgroundColor = "#466D40"
        yourPoints.innerText = Number(yourPoints.innerText) + 1
    }
    else {
        start.innerText = "You Lose"
        start.style.backgroundColor = "#db1828"
        aiPoints.innerText = Number(aiPoints.innerText) + 1
    }
    count.innerText = Number(count.innerText) + 1;
}

function resetGame(){
    gameStarted = false
    start.innerText = "Start Game"
    start.style.backgroundColor = "#280622"
    count.innerText = 0
    yourPoints.innerText = 0
    aiPoints.innerText =0
    name1.innerText = ""
    name2.innerText = ""
}