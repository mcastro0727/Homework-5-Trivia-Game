// Page with 'Start' button to start timer and game
// Set timer for game
// OPEN NEW PAGE
// Multiple choice questions
// Allow player one choice per question
// 'Finish' at end of questions page
// NEW PAGE
// Tally Correct, Incorrect, and Uanswered Questions


// Lots of variables
var gameTimer = 60;
var timeRemaining;

// function play() {
//    clearInterval(timeRemaining);
//    timeRemaining = setInterval(countdown, 1000)
// }

function countdown() {
    gameTimer--;
    $("#time-remaining").html(gameTimer)
}