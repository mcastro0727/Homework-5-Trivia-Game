// Page with 'Start' button to start timer and game
// Set timer for game
// OPEN NEW PAGE
// Multiple choice questions
// Allow player one choice per question
// 'Finish' at end of questions page
// NEW PAGE
// Tally Correct, Incorrect, and Uanswered Questions

$(document).ready(function () {
    console.log("ready!");


    // Lots of variables
    var gameTimer = 60;
    var timeRemaining;

    // To start timer and game
    $("#start").on("click", play);


    function play() {
        clearInterval(timeRemaining);
        timeRemaining = setInterval(countdown, 1000);
        console.log(timeRemaining)
    }


    function countdown() {
        gameTimer--;
        $("#time-remaining").text(gameTimer)
    }

    play()


});





function questionRenderer() {
    //set currentQuestion
    this.currentQuestion = this.questions[this.currentIndex];

    //display question on page
    $("#question").text(this.currentQuestion.question);

    //display answers on page
    for (var i = 0; i < this.currentQuestion.answers.length; i++) {
        var newAns = $("<a href='#' class='answer'>").text(this.currentQuestion.answers[i]);
        $("#answers").append(newAns);
    }

    //countdown timer
    $("#countdown").text(trivia.timer);
    this.interval = setInterval(function () {
        trivia.timer--;
        $("#countdown").text(trivia.timer);
        if (trivia.timer <= 0) {
            trivia.progressGame();
        }
    }, 1000);
};


// Question Array
var game = {
    questions: [{
            q1: "What animal can Harry speak to?",
            a1: ["Mouse", "Toad", "Snake", "Cat"],
            s1: 2,
        },
        {
            q2: "Who do people consider 'Loony'?",
            a2: ["Hermione", "Ron", "Neville", "Luna"],
            s2: 3,
        },
        {
            q3: "How does the baslisk move from one part of the school to the other?",
            a3: ["Shape", "Invisible", "Pipes", "Blending"],
            s3: 2,
        },
        {
            q4: "Who does Harry marry?",
            a4: ["Ginny", "Luna", "Hermione", "Cho"],
            s4: 0,
        },
        {
            q5: "Who killed Severus Snape?",
            a5: ["Bellatrix", "Nagini", "Voldemort", "Lucius"],
            s5: 1,
        },
        {
            q6: "What is the name of Harry's godfather who escaped from Azkaban",
            a6: ["Barty Crouch Jr", "Rodolphus Lestrange", "Igor Karkaroff", "Sirius Black"],
            s6: 3,
        },
        {
            q7: "What is Remus Lupin's boggart?",
            a7: ["A Dementor", "A Werewolf", "Voldemort", "A Full Moon"],
            s7: 3,
        },
        {
            q8: "Who was Harry supposed to rescue in the Second Task of the Triwizard Tournament?",
            a8: ["Ron Weasley", "Cho Chang", "Hermione Granger", "Ginny Weasley"],
            s8: 3,
        },
        {
            q9: "Which of these is not one of Voldemort's horcruxes?",
            a9: ["Hufflepuff's Cup", "Slytherin's Locket", "Elder Wand", "Tom Riddle's Diary"],
            s9: 2,
        },
        {
            q10: "Who created the Philosopher's Stone?",
            a10: ["Albus Dumbledore", "Nicolas Flamel", "Voldemort", "James Potter"],
            s10: 1,
        },

    ],
}