// Page with 'Start' button to start timer and game
// Set timer for game
// OPEN NEW PAGE
// Multiple choice questions
// Allow player one choice per question
// 'Finish' at end of questions page
// NEW PAGE
// Tally Correct, Incorrect, and Uanswered Questions

$(document).ready(function() {
    console.log( "ready!" );


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




// Make array
var items = [
    {
        question:"something somehtin soetrhintg",
        a: [ans1, ans2, ans3],
        correctAns: ans2
    }
]

function questionRenderer(objPassed){
    var qDisplay = $("<p>")
    qDisplay.text(objPassed.question)

    for (let i = 0; i < objPassed.length; i++) {
        var ansDisplay = $("<input type='radio'>")
        ansDisplay.attr("name", objPassed.name)
        ansDisplay.attr("value", objPassed.ans[i])

        var textAns = $("<p>")
        textAns.text(objPassed.ans[i])
        
        textAns.append(ansDisplay)




        $("#choices").append(textAns)


        $("#question").append(qDisplay)



        $("#btn").on("click", function (){
            var x = $("#choices").q1
        })
    }
}

var game = {
    questions: [
        {
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