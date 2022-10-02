let newScoreHome = document.getElementById("home-score")
let newScoreGuest = document.getElementById("guest-score")
let homeCounter = 0
let guestCounter = 0

function homeIncrementOne(){
    homeCounter += 1
    newScoreHome.innerText = homeCounter
}
function homeIncrementTwo(){
    homeCounter += 2
    newScoreHome.innerText = homeCounter
}
function homeIncrementThree(){
    homeCounter += 3
    newScoreHome.innerText = homeCounter
}
function guestIncrementOne(){
    guestCounter += 1
    newScoreGuest.innerText = guestCounter
}
function guestIncrementTwo(){
    guestCounter += 2
    newScoreGuest.innerText = guestCounter
}
function guestIncrementThree(){
    guestCounter += 3
    newScoreGuest.innerText = guestCounter
}
