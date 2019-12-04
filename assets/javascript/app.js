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
    timer: 10,
    interval: null,
    correctCount: 0,
    incorrectCount: 0,
    chosenAnswer: "",
    currentIndex: 0,
    currentQuestion: {},

    // Question Array
    questions: [{
            question: "What animal can Harry speak to?",
            choices: ["Mouse", "Toad", "Snake", "Cat"],
            answer: 2,
        },
        {
            question: "Who do people consider 'Loony'?",
            choices: ["Hermione", "Ron", "Neville", "Luna"],
            answer: 3,
        },
        {
            question: "How does the baslisk move from one part of the school to the other?",
            choices: ["Shape", "Invisible", "Pipes", "Blending"],
            answer: 2,
        },
        {
            question: "Who does Harry marry?",
            choices: ["Ginny", "Luna", "Hermione", "Cho"],
            answer: 0,
        },
        {
            question: "Who killed Severus Snape?",
            choices: ["Bellatrix", "Nagini", "Voldemort", "Lucius"],
            answer: 1,
        },
        {
            question: "What is the name of Harry's godfather who escaped from Azkaban",
            choices: ["Barty Crouch Jr", "Rodolphus Lestrange", "Igor Karkaroff", "Sirius Black"],
            answer: 3,
        },
        {
            question: "What is Remus Lupin's boggart?",
            choices: ["A Dementor", "A Werewolf", "Voldemort", "A Full Moon"],
            answer: 3,
        },
        {
            question: "Who was Harry supposed to rescue in the Second Task of the Triwizard Tournament?",
            choices: ["Ron Weasley", "Cho Chang", "Hermione Granger", "Ginny Weasley"],
            answer: 3,
        },
        {
            question: "Which of these is not one of Voldemort's horcruxes?",
            choices: ["Hufflepuff's Cup", "Slytherin's Locket", "Elder Wand", "Tom Riddle's Diary"],
            answer: 2,
        },
        {
            question: "Who created the Philosopher's Stone?",
            choices: ["Albus Dumbledore", "Nicolas Flamel", "Voldemort", "James Potter"],
            answer: 1,
        },

    ],





    // To start timer and game
    // $("#start").on("click", play);


    questionRenderer: function () {
        //set currentQuestion
        this.currentQuestion = this.questions[this.currentIndex];

        //display question
        $("#question").text(this.currentQuestion.question);

        //display answers
        for (var i = 0; i < this.currentQuestion.choices.length; i++) {
            var newAns = $("<a href='#' class='answer'>").text(this.currentQuestion.choices[i]);
            $("#choices").append(newAns);
        }

        //countdown timer
        $("#countdown").text(triviaGame.timer);
        this.interval = setInterval(function () {
            triviaGame.timer--;
            $("#countdown").text(triviaGame.timer);
            if (triviaGame.timer <= 0) {
                triviaGame.play();
            }
        }, 1000);
    },

    play: function () {
        //CORRECT ANSWER LOGIC:
        if (this.chosenAnswer == this.currentQuestion.choices[this.currentQuestion.answer]) {
            this.correctCount++;
            this.currentIndex++;

            //reset time-remaining
            clearInterval(this.interval);
            this.timer = 10;

            //remove answers from game area and hide it
            $("#choices").empty();
            $("#game").attr("class", "hidden");

            //add text to result area and show it
            $("#result-area").append("<h2>Correct! Nice job!</h2>");
            $("#result-area").append("<h4>Next question coming up...</h4>");
            $("#result-area").attr("class", "");

            //run this after 5 seconds
            setTimeout(function () {
                //if at the end of questions array
                if (triviaGame.currentIndex >= triviaGame.questions.length) {
                    triviaGame.endGame();
                }

                //if not at the end
                else {
                    //hide result area and show game area
                    $("#result-area").empty();
                    $("#result-area").attr("class", "hidden");
                    $("#game").attr("class", "");

                    //show next question
                    triviaGame.questionRenderer();
                }
            }, 2000);
        }

        //WRONG ANSWER / TIMEOUT LOGIC:
        else {
            this.incorrectCount++;
            this.currentIndex++;

            //reset timer
            clearInterval(this.interval);

            //remove answers from game area and hide it
            $("#choices").empty();
            $("#game").attr("class", "hidden");

            //if time ran out
            if (this.timer <= 0) {
                //add text to result area and show it
                $("#result-area").append("<h2>Out of time! The correct answer was: '" + this.currentQuestion.choices[this.currentQuestion.answer] + "'</h2>");
                $("#result-area").append("<h4>Next question coming up...</h4>");
                $("#result-area").attr("class", "");
                this.timer = 10;
            }

            //if wrong answer was chosen
            else {
                //add text to result area and show it
                $("#result-area").append("<h2>Womp womp! The correct answer was: '" + this.currentQuestion.choices[this.currentQuestion.answer] + "'</h2>");
                $("#result-area").append("<h4>Next question coming up...</h4>");
                $("#result-area").attr("class", "");
                this.timer = 10;
            }

            //run this after 5 seconds
            setTimeout(function () {
                //if at the end of questions array
                if (triviaGame.currentIndex >= triviaGame.questions.length) {
                    triviaGame.endGame();
                }

                //if not at the end
                else {
                    //hide result area and show game area
                    $("#result-area").empty();
                    $("#result-area").attr("class", "hidden");
                    $("#game").attr("class", "");

                    //show next question
                    triviaGame.questionRenderer();
                }
            }, 2000);
        }
    },

	//show end screen
	endGame: function() {
		clearInterval(this.interval);

		$("#game").attr("class", "hidden");
		$("#result-area").attr("class", "hidden");
		$("#end-screen").attr("class", "");

		$("#correct").text("Correct Answers: " +this.correctCount);
		$("#incorrect").text("Incorrect Answers: " +this.incorrectCount);
	},

	//reset and restart game
	resetGame: function() {
		//empty out all changing text
		$("#question").empty();
		$("#choices").empty();
		$("#result-area").empty();
		$("#correct").empty();
		$("#incorrect").empty();

		//reset all variables
		this.currentIndex = 0;
		this.correctCount = 0;
		this.incorrectCount = 0;
		this.currentQuestion = {};
		this.chosenAnswer = "";
		this.timer = 10;
		clearInterval(this.interval);
		
		//show / hide sections
		$("#end-screen").attr("class", "hidden");
		$("#result-area").attr("class", "hidden");
		$("#game").attr("class", "");

		//randomize question order and restart game
		this.questionRenderer();
	},

    // function countdown() {
    //     gameTimer--;
    //     $("#time-remaining").text(gameTimer)
    // }

    // play()

};

$(document).ready(function () {
    console.log("ready!");
    triviaGame.questionRenderer();

    //listener for clicking on an answer
    $("body").on("click", ".answer", function () {
        triviaGame.chosenAnswer = $(this).text();
        triviaGame.play();
    });

    //listener for restart button
    $("body").on("click", "#restart-button", function () {
        triviaGame.resetGame();
    });
});