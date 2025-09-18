let saveEl = document.getElementById("save-el")
let countEl = document.getElementById("count-el")
let count = 0

function increment() {
    count += 1
    countEl.textContent = count
}

function save() {
    let countStr = count + " - "
    saveEl.textContent += countStr
    countEl.textContent = 0
    count = 0
}

let homeScoreBtnOne = document.getElementById("home-score-btn-1")
let homeStoreEl =document.getElementById("home-score")
let homeScore = 0

function increaseHomeScoreOne(){
    homeScore += 1
    homeStoreEl.textContent = homeScore
}
function increaseHomeScoreTwo(){
    homeScore += 0.5
    homeStoreEl.textContent = homeScore
}

let awayScoreBtnOne = document.getElementById("away-score-btn-1")
let awayStoreEl =document.getElementById("away-score")
let awayScore = 0

function increaseAwayScoreOne(){
    awayScore += 1
    awayStoreEl.textContent = awayScore
}
function increaseAwayScoreTwo(){
    awayScore += 0.5
    awayStoreEl.textContent = awayScore
}

function resetScore(){
    awayScore = 0
    awayStoreEl.textContent = awayScore
    homeScore = 0
    homeStoreEl.textContent = homeScore
}