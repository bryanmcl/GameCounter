let team1Score = document.getElementById("team1-score")
let team2Score = document.getElementById("team2-score")

let score1 = 0
let score2 = 0

function increment(number, team){
    if(team === 1){
        score1 += number
        team1Score.textContent = score1
    }
    else {
        score2 += number
        team2Score.textContent = score2
    }
}

function resetGame(){
    score1 = 0
    score2 = 0

    team1Score.textContent = 0
    team2Score.textContent = 0
}