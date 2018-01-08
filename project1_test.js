var allQuestions = [
    {
        question: "What is Beyoncé's middle name?",
        answer1: "Erica",
        answer2: "Sasha",
        answer3: "Giselle",
        answer4: "Gabrielle",
        actualAnswer: "c",
        round: 1
    },
    {
        question: "What is Beyoncé's favorite color?",
        answer1: "Blue",
        answer2: "Green",
        answer3: "Yellow",
        answer4: "Red",
        actualAnswer: "a",
        round: 2
    },
    {
        question: "What year was Beyoncé born?",
        answer1: "1984",
        answer2: "1982",
        answer3: "1981",
        answer4: "1983",
        actualAnswer: "c",
        round: 3
    },
    {
        question: "What are the names of Beyoncé's parents?",
        answer1: "Matthew and Tina Knowles",
        answer2: "Martin and Gina Knowles",
        answer3: "Solange and Jeffery Knowles",
        answer4: "Tina and Richard Lawson",
        actualAnswer: "a",
        round: 4
    },
    {
        question: "How many children does Beyoncé have?",
        answer1: "One",
        answer2: "Two",
        answer3: "Three",
        answer4: "Four",
        actualAnswer: "c",
        round: 5
    },
    {
        question: "What group is Beyoncé associated with?",
        answer1: "TLC",
        answer2: "SWV",
        answer3: "TOTAL",
        answer4: "Destiny's Child",
        actualAnswer: "d",
        round: 6
    }
]

//grabs all trivia-answers dom elements so that they can be clicked
let changeQuestion = document.getElementsByClassName('trivia-answers')

//lets original sets original page to first question
// document.getElementsByClassName('trivia-question')[0].innerHTML = 'Are you ready?!'
// document.getElementsByClassName('trivia-answers')[0].innerHTML = 'Ok'
// document.getElementsByClassName('trivia-answers')[1].innerHTML = 'then'
// document.getElementsByClassName('trivia-answers')[2].innerHTML = 'click'
// document.getElementsByClassName('trivia-answers')[3].innerHTML = 'any button'
document.getElementsByClassName('question-number')[0].textContent = `${allQuestions[0].round}/${allQuestions.length}`

function firstQuestion () {
    document.getElementsByClassName('trivia-question')[0].innerHTML = allQuestions[0].question
            let a = document.getElementsByClassName('trivia-answers')[0]
            console.log(`a is ${a}`)
            a.innerHTML = allQuestions[0].answer1
            console.log(`a is ${a}`)
            let b = document.getElementsByClassName('trivia-answers')[1] 
            b.innerHTML = allQuestions[0].answer2
            let c = document.getElementsByClassName('trivia-answers')[2]
            c.innerHTML = allQuestions[0].answer3
            let d = document.getElementsByClassName('trivia-answers')[3]
            d.innerHTML = allQuestions[0].answer4
    for (var i = 0; i < 4; i++) {
        changeQuestion[i].addEventListener('click', function(callBack) {
            
            document.getElementsByClassName('question-number')[0].textContent = `${allQuestions[0].round}/${allQuestions.length}`
            console.log(`I clicked on ${this.classList[1]}`)
                if (this.classList[1] == 'c') {
                    game.score++
                    userScore()
                   // alert('Right answer!')
                    console.log(`game score is ${game.score}`)
                    secondQuestion()
                } else {
                   // alert('Wrong answer!')
                    secondQuestion()
                }
            })
            // changeQuestion[i].removeEventListener('click', function() {
            //     'click', function(callBack) {
            //         document.getElementsByClassName('trivia-question')[0].innerHTML = allQuestions[0].question
            //         let a = document.getElementsByClassName('trivia-answers')[0].innerHTML = allQuestions[0].answer1
            //         let b = document.getElementsByClassName('trivia-answers')[1].innerHTML = allQuestions[0].answer2
            //         let c = document.getElementsByClassName('trivia-answers')[2].innerHTML = allQuestions[0].answer3
            //         let d = document.getElementsByClassName('trivia-answers')[3].innerHTML = allQuestions[0].answer4
            //         console.log('score test')
            // }
            // })
          }
        }
firstQuestion()

//change answers to new answer after clicking on an answer
function secondQuestion () {
        document.getElementsByClassName('trivia-question')[0].innerHTML = allQuestions[1].question
        let a = document.getElementsByClassName('trivia-answers')[0]
        a.innerHTML = allQuestions[1].answer1
        let b = document.getElementsByClassName('trivia-answers')[1]
        b.innerHTML = allQuestions[1].answer2
        let c = document.getElementsByClassName('trivia-answers')[2]
        c.innerHTML = allQuestions[1].answer3
        let d = document.getElementsByClassName('trivia-answers')[3]
        d.innerHTML = allQuestions[1].answer4
for (var i = 0; i < 4; i++) {
    changeQuestion[i].addEventListener('click', function(callBack) {
        document.getElementsByClassName('question-number')[0].textContent = `${allQuestions[1].round}/${allQuestions.length}`
        console.log(`I clicked on ${this.classList[1]}`)
            if (this.classList[1] == 'a') {
                game.score++
                userScore()
                //alert('Right answer!')
                console.log(`game score is ${game.score}`)
                thirdQuestion()
            } else {
                //alert('Wrong answer!')
                thirdQuestion()
            }
        })
    }
}

function thirdQuestion () {
    document.getElementsByClassName('trivia-question')[0].innerHTML = allQuestions[2].question
    let a = document.getElementsByClassName('trivia-answers')[0]
    a.innerHTML = allQuestions[2].answer1
    let b = document.getElementsByClassName('trivia-answers')[1]
    b.innerHTML = allQuestions[2].answer2
    let c = document.getElementsByClassName('trivia-answers')[2]
    c.innerHTML = allQuestions[2].answer3
    let d = document.getElementsByClassName('trivia-answers')[3]
    d.innerHTML = allQuestions[2].answer4
    for (var i = 0; i < 4; i++) {
        changeQuestion[i].addEventListener('click', function(callback) {
        document.getElementsByClassName('question-number')[0].textContent = `${allQuestions[2].round}/${allQuestions.length}`
                if (this.classList[1] == 'c') {
                    // game.score++
                    userScore()
                   // alert('Right answer!')
                    console.log(`game score is ${game.score}`)
                    fourthQuestion()
                } else {
                    //alert('Wrong answer!')
                    fourthQuestion()
                }
        })
    }
}

function fourthQuestion () {
    document.getElementsByClassName('trivia-question')[0].innerHTML = allQuestions[3].question
    let a = document.getElementsByClassName('trivia-answers')[0]
    a.innerHTML = allQuestions[3].answer1
    let b = document.getElementsByClassName('trivia-answers')[1]
    b.innerHTML = allQuestions[3].answer2
    let c = document.getElementsByClassName('trivia-answers')[2]
    c.innerHTML = allQuestions[3].answer3
    let d = document.getElementsByClassName('trivia-answers')[3].innerHTML = allQuestions[3].answer4
    for (var i = 0; i < 4; i++) {
        changeQuestion[i].addEventListener('click', function(callback) {
        document.getElementsByClassName('question-number')[0].textContent = `${allQuestions[3].round}/${allQuestions.length}`
        if (this.classList[1] == 'a') {
            userScore()
            //alert('Right answer!')
            console.log(`game score is ${game.score}`)
            fifthQuestion()
        } else {
           // alert('Wrong answer!')
            fifthQuestion()
        }
        })
    }
    
}

function fifthQuestion () {
    document.getElementsByClassName('trivia-question')[0].innerHTML = allQuestions[4].question
    let a = document.getElementsByClassName('trivia-answers')[0]
    a.innerHTML = allQuestions[4].answer1
    let b = document.getElementsByClassName('trivia-answers')[1]
    b.innerHTML = allQuestions[4].answer2
    let c = document.getElementsByClassName('trivia-answers')[2]
    c.innerHTML = allQuestions[4].answer3
    let d = document.getElementsByClassName('trivia-answers')[3]
    d.innerHTML = allQuestions[4].answer4
    for (var i = 0; i < 4; i++) {
        changeQuestion[i].addEventListener('click', function() {
        document.getElementsByClassName('question-number')[0].textContent = `${allQuestions[4].round}/${allQuestions.length}`
        if (this.classList[1] == 'c') {
            userScore()
            //alert('Right answer!')
            console.log(`game score is ${game.score}`)
            sixthQuestion()
        } else {
            //alert('Wrong answer!')
            sixthQuestion()
        }
        })
    }
}

function sixthQuestion () {
    document.getElementsByClassName('trivia-question')[0].innerHTML = allQuestions[5].question
    let a = document.getElementsByClassName('trivia-answers')[0]
    a.innerHTML = allQuestions[5].answer1
    let b = document.getElementsByClassName('trivia-answers')[1]
    b.innerHTML = allQuestions[5].answer2
    let c = document.getElementsByClassName('trivia-answers')[2]
    c.innerHTML = allQuestions[5].answer3
    let d = document.getElementsByClassName('trivia-answers')[3]
    d.innerHTML = allQuestions[5].answer4
    for (var i = 0; i < 4; i++) {
        changeQuestion[i].addEventListener('click', function() {
        document.getElementsByClassName('question-number')[0].textContent = `${allQuestions[5].round}/${allQuestions.length}`
        if (this.classList[1] == 'd') {
            userScore()
            //alert('Right answer!')
            console.log(`game score is ${game.score}`)
            showScores()
        } else {
            //alert('Wrong answer!')
            showScores()
        }
        })
    }
}
function showScores () {
    var gameOverHtml = "<h1>Game Over!</h1>"
    gameOverHtml += "<h2 id='score'> Your score: " + trivia.score + "</h2>"
}
// })() //end of top function


console.log('last set')
//end game and show final score

var game = {
    score: 0
}

function userScore () {
    document.getElementsByClassName('score')[0].textContent = `Score: ${game.score}`
}
































/*  
//displys the question on the page
function displayOnPage () {
    if (trivia.hasEnded()) {
        showScores ()
    } 
    else {
        //display question based on the html "question" tag
        var element = document.getElementById("question")
       element.innerHTML = trivia.getQuestionIndex().text

       //display options
       var options = trivia.getQuestionIndex().option
       for(var i = 0; i < options.length; i++) {
           var span = document.getElementById("option" + i)
           span.innerHTML = options[i]
           guess("btn" + i, options[i])
       }                            
    }
}

//check user's guess for correct answer and moves to next question
function guess (id, guess) {
    var button = document.getElementById(id)
    button.onclick = function () {
        trivia.guess(guess)
        displayOnPage()
    }
}

//created score board at end to also display score results out of 6
function showScores () {
    var gameOverHtml = "<h1>Game Over!</h1>"
    gameOverHtml += "<h2 id='score'> Your score: " + trivia.score + "</h2>"
    var element = document.getElementById("trivia")       
    element.innerHTML = gameOverHtml
}
//constructor functions created on questions.js and trivia_controller.js are being used inside this array
var questions = [
    new Question("What is Beyoncé's middle name?", ["Erica", "Sasha", "Giselle", "Gabrielle"], "Giselle"),
    new Question("What is Beyoncé's favorite color?", ["Blue", "Green", "Yellow", "Red"], "Blue"),
    new Question("What year was Beyoncé born?", ["1984", "1982", "1981", "1983"], "1981"),
    new Question("What are the names of Beyoncé's parents?", ["Matthew and Tina Knowles", "Martin and Gina Knowles", "Solange and Jeffery Knowles", "Tina and Richard Lawson"], "Matthew and Tina Knowles"),
    new Question("How many children does Beyoncé have?", ["One", "Two", "Three", "Four"], "Three"),
    new Question("What group is Beyoncé associated with?", ["TLC", "SWV", "TOTAL", "Destiny's Child"], "Destiny's Child")
]
//Storing a variable into array: https://stackoverflow.com/questions/18546038/store-javascript-variable-into-array
//Storing multiple values: https://www.freecodecamp.org/challenges/store-multiple-values-in-one-variable-using-javascript-arrays

var trivia = new Trivia (questions) //object for the trivia controller

displayOnPage()
*/