// Page with 'Start' button to start timer and game
// Set timer for game
// OPEN NEW PAGE
// Multiple choice questions
// Allow player one choice per question
// 'Finish' at end of questions page
// NEW PAGE
// Tally Correct, Incorrect, and Uanswered Questions

// Lots of variables
var triviaGame = {
        correctCount: 0,
        incorrectCount: 0,
        chosenAnswer: "",
        currentIndex: 0,
        currentQuestion: {},
        timer: 10,
        interval: null,





    // To start timer and game
    // $("#start").on("click", play);


    questionRenderer = () => {
        //set currentQuestion
        this.currentQuestion = this.questions[this.currentIndex];
    
        //display question
        $("#question").text(this.currentQuestion.question);
    
        //display answers
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
                trivia.play();
            }
        }, 1000);
    },

    play = () => {
        //CORRECT ANSWER LOGIC:
        if (this.chosenAnswer == this.currentQuestion.answers[this.currentQuestion.solution]) {
            this.correctCount++;
            this.currentIndex++;

            //reset timer
            clearInterval(this.interval);
            this.timer = 10;

            //remove answers from game area and hide it
            $("#answers").empty();
            $("#game").attr("class", "hidden");

            //add text to result area and show it
            $("#result-area").append("<h2>Correct! You picked the right answer.</h2>");
            $("#result-area").append("<h4>Next question in 3 seconds...</h4>");
            $("#result-area").attr("class", "");

            //run this after 5 seconds
            setTimeout(function () {
                //if at the end of questions array
                if (trivia.currentIndex >= trivia.questions.length) {
                    trivia.endGame();
                }

                //if not at the end
                else {
                    //hide result area and show game area
                    $("#result-area").empty();
                    $("#result-area").attr("class", "hidden");
                    $("#game").attr("class", "");

                    //show next question
                    trivia.questionRenderer();
                }
            }, 3000);
        }

        //WRONG ANSWER / TIMEOUT LOGIC:
        else {
            this.incorrectCount++;
            this.currentIndex++;

            //reset timer
            clearInterval(this.interval);

            //remove answers from game area and hide it
            $("#answers").empty();
            $("#game").attr("class", "hidden");

            //if time ran out
            if (this.timer <= 0) {
                //add text to result area and show it
                $("#result-area").append("<h2>Time Up! The correct answer was: '" + this.currentQuestion.answers[this.currentQuestion.solution] + "'</h2>");
                $("#result-area").append("<h4>Next question in 3 seconds...</h4>");
                $("#result-area").attr("class", "");
                this.timer = 10;
            }

            //if wrong answer was chosen
            else {
                //add text to result area and show it
                $("#result-area").append("<h2>Incorrect! The correct answer was: '" + this.currentQuestion.answers[this.currentQuestion.solution] + "'</h2>");
                $("#result-area").append("<h4>Next question in 3 seconds...</h4>");
                $("#result-area").attr("class", "");
                this.timer = 10;
            }

            //run this after 5 seconds
            setTimeout(function () {
                //if at the end of questions array
                if (trivia.currentIndex >= trivia.questions.length) {
                    trivia.endGame();
                }

                //if not at the end
                else {
                    //hide result area and show game area
                    $("#result-area").empty();
                    $("#result-area").attr("class", "hidden");
                    $("#game").attr("class", "");

                    //show next question
                    trivia.questionRenderer();
                }
            }, 3000);
        }
    },


    // function countdown() {
    //     gameTimer--;
    //     $("#time-remaining").text(gameTimer)
    // }

    // play()








// Question Array
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
};

$(document).ready(function () {
            console.log("ready!");
            trivia.questionRenderer();

            //listener for clicking on an answer
            $("body").on("click", ".answer", function() {
                trivia.chosenAnswer = $(this).text();
                trivia.play();
            });
        
        })