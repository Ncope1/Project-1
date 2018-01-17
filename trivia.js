var allQuestions = [
    {
        question: "What is Beyoncé’s middle name?",
        answer1: "Erica",
        answer2: "Sasha",
        answer3: "Giselle",
        answer4: "Gabrielle",
        actualAnswer: "c",
    },
    {
        question: "What is Beyoncé’s favorite color?",
        answer1: "Blue",
        answer2: "Green",
        answer3: "Yellow",
        answer4: "Red",
        actualAnswer: "a",
    },
    {
        question: "What year was Beyoncé born?",
        answer1: "1984",
        answer2: "1982",
        answer3: "1981",
        answer4: "1983",
        actualAnswer: "c",
    },
    {
        question: "What are the names of Beyoncé’s parents?",
        answer1: "Matthew and Tina Knowles",
        answer2: "Martin and Gina Knowles",
        answer3: "Solange and Jeffery Knowles",
        answer4: "Tina and Richard Lawson",
        actualAnswer: "a",
    },
    {
        question: "How many children does Beyoncé have?",
        answer1: "One",
        answer2: "Two",
        answer3: "Three",
        answer4: "Four",
        actualAnswer: "c",
    },
    {
        question: "What group is Beyoncé associated with?",
        answer1: "TLC",
        answer2: "SWV",
        answer3: "TOTAL",
        answer4: "Destiny’s Child",
        actualAnswer: "d",
    },
    ]
let changeQuestion = document.getElementsByClassName('option')
    
    function firstQuestion () {
        // document.getElementById('Question1').innerHTML = allQuestions[0].question
        document.getElementById('option-c').addEventListener('click', function() {
            game.score ++
        })

    firstQuestion()


        // for (var i = 0; i < 4; i++) {
        //     changeQuestion[i].addEventListener('click', function(callBack) {
        //         document.getElementById('Question1').innerHTML = allQuestions[0].question
        //         document.getElementById('option-a').innerHTML = allQuestions[0].answer1
                
        //         let a = document.getElementsByClassName('option').innerHTML = allQuestions[0].answer1
        //         let b = document.getElementsByClassName('option').innerHTML = allQuestions[0].answer2
        //         let c = document.getElementsByClassName('option').innerHTML = allQuestions[0].answer3
        //         let d = document.getElementsByClassName('option').innerHTML = allQuestions[0].answer4
        //         console.log(`I clicked on ${this.classList[1]}`)
        //             if (this.classList[1] == 'c') {
        //                 game.score++
        //                 userScore()
        //                 console.log('Right answer!')
        //                 console.log(`game score is ${game.score}`)
        //             } else {
        //                 console.log('Wrong answer!')
        //             }
        //         })
        //     }
        }
firstQuestion()
function secondQuestion () {
    for (var i = 0; i < 4; i++) {
        changeQuestion[i].addEventListener('click', function(callBack) {
            document.getElementById('question2')[1].innerHTML = allQuestions[1].question
            let a = document.getElementsByClassName('option')[4].innerHTML = allQuestions[1].answer1
            let b = document.getElementsByClassName('option')[5].innerHTML = allQuestions[1].answer2
            let c = document.getElementsByClassName('option')[6].innerHTML = allQuestions[1].answer3
            let d = document.getElementsByClassName('option')[7].innerHTML = allQuestions[1].answer4
            console.log(`I clicked on ${this.classList[1]}`)
                if (this.classList[1] == 'a') {
                    game.score++
                    userScore()
                    console.log('Right answer!')
                    console.log(`game score is ${game.score}`)
                } else {
                    console.log('Wrong answer!')
                }
            })
        }
    }
secondQuestion()
var game = {
    score: 0
}
        
function userScore () {
     document.getElementsByClassName('score')[0].textContent = `Score: ${game.score}`
}

































//displays the question on the page
// function displayOnPage () {
//     if (trivia.hasEnded()) {
//         showScores ()
//     } 
//     else {
//         //display question based on the html "question" tag
//         var element = document.getElementById("question")
//        element.innerHTML = trivia.getQuestionIndex().text
  
//        //display options
//        var options = trivia.getQuestionIndex().option
//        for(var i = 0; i < options.length; i++) {
//            var span = document.getElementById("option" + i)
//            span.innerHTML = options[i]
//            guess("btn" + i, options[i])
//        }                            
//     }
//   }
  
//   //check user's guess for correct answer and moves to next question
//   function guess (id, guess) {
//     var button = document.getElementById(id)
//     button.onclick = function () {
//         trivia.guess(guess)
//         displayOnPage()
//     }
//   }
  
  
//   //created score board at end to also display score results out of 6
//   function showScores () {
//     var gameOverHtml = "<h1>Game Over!</h1>"
//     gameOverHtml += "<h2 class='score'> Your score: " + trivia.score + "</h2>"
//     var element = document.getElementById("trivia")       
//     element.innerHTML = gameOverHtml
//   }
//   //constructor functions created on questions.js and trivia_controller.js are being used inside this array
//   var questions = [
//     new Question("What is Beyoncé's middle name?", ["Erica", "Sasha", "Giselle", "Gabrielle"], "Giselle"),
//     new Question("What is Beyoncé's favorite color?", ["Blue", "Green", "Yellow", "Red"], "Blue"),
//     new Question("What year was Beyoncé born?", ["1984", "1982", "1981", "1983"], "1981"),
//     new Question("What are the names of Beyoncé's parents?", ["Matthew and Tina Knowles", "Martin and Gina Knowles", "Solange and Jeffery Knowles", "Tina and Richard Lawson"], "Matthew and Tina Knowles"),
//     new Question("How many children does Beyoncé have?", ["One", "Two", "Three", "Four"], "Three"),
//     new Question("What group is Beyoncé associated with?", ["TLC", "SWV", "TOTAL", "Destiny's Child"], "Destiny's Child")
//   ]
//   //Storing a variable into array: https://stackoverflow.com/questions/18546038/store-javascript-variable-into-array
//   //Storing multiple values: https://www.freecodecamp.org/challenges/store-multiple-values-in-one-variable-using-javascript-arrays
  
//   var trivia = new Trivia (questions) //object for the trivia controller
  
//   displayOnPage()