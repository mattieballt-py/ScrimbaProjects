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

let homeScore = 0;
let awayScore = 0;
let homeStoreEl, awayStoreEl;

window.addEventListener('DOMContentLoaded', function() {
    homeStoreEl = document.getElementById("home-score");
    awayStoreEl = document.getElementById("away-score");
    homeStoreEl.textContent = homeScore;
    awayStoreEl.textContent = awayScore;
});

function increaseHomeScoreOne() {
    homeScore += 1;
    if (!homeStoreEl) homeStoreEl = document.getElementById("home-score");
    homeStoreEl.textContent = homeScore;
}

function increaseHomeScoreTwo() {
    homeScore += 0.5;
    if (!homeStoreEl) homeStoreEl = document.getElementById("home-score");
    homeStoreEl.textContent = homeScore;
}

function increaseAwayScoreOne() {
    awayScore += 1;
    if (!awayStoreEl) awayStoreEl = document.getElementById("away-score");
    awayStoreEl.textContent = awayScore;
}

function increaseAwayScoreTwo() {
    awayScore += 0.5;
    if (!awayStoreEl) awayStoreEl = document.getElementById("away-score");
    awayStoreEl.textContent = awayScore;
}

function resetScore() {
    homeScore = 0;
    awayScore = 0;
    if (!homeStoreEl) homeStoreEl = document.getElementById("home-score");
    if (!awayStoreEl) awayStoreEl = document.getElementById("away-score");
    homeStoreEl.textContent = homeScore;
    awayStoreEl.textContent = awayScore;
}