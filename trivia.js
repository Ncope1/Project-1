/*
// Hey Natalee, this code will do the same thing as your code but is a lot DRY-er!
// first, we grab all items with the class correct on then, then add an event listener
// on click, then increase the score.

let score = 0

Array.from(document.querySelectorAll('.correct')).forEach(
  question => question.addEventListener('click', () => {
    document.querySelector('.score').innerHTML = `Score: ${score++}`
  })
)
*/

// I don't think this is being used, would remove unused code
let changeQuestion = document.getElementsByClassName('option')

function firstQuestion () {
  // remove commented out code!
  // document.getElementById('Question1').innerHTML = allQuestions[0].question

  // I would use more semantic naming than option-a, b, c etc. I would just add the class
  // correct to the correct ones then css classes to the others

  // This also doesn't need to be a function since you call it immediately after creating it
  var correctAnswer = document.getElementById('option-c')
  correctAnswer.addEventListener('click', function () {
    // I would also remove console.log debuggers in production
    console.log('working')
    game.score++
    console.log(game.score)
    userScore()
  })
}
firstQuestion()

function secondQuestion () {
  correctAnswer = document.getElementById('option-e')
  correctAnswer.addEventListener('click', function () {
    game.score++
    userScore()
  })
}
secondQuestion()

function thirdQuestion () {
  correctAnswer = document.getElementById('option-k')
  correctAnswer.addEventListener('click', function () {
    game.score++
    userScore()
  })
}
thirdQuestion()

function fourthQuestion () {
  correctAnswer = document.getElementById('option-m')
  correctAnswer.addEventListener('click', function () {
    game.score++
    userScore()
  })
}
fourthQuestion()

function fifthQuestion () {
  correctAnswer = document.getElementById('option-s')
  correctAnswer.addEventListener('click', function () {
    game.score++
    userScore()
  })
}
fifthQuestion()

function sixthQuestion () {
  correctAnswer = document.getElementById('option-x')
  correctAnswer.addEventListener('click', function () {
    game.score++
    userScore()
  })
}
sixthQuestion()

// Since there's only one thing in here, this should just be a variable!
var game = {
  score: 0
}

function userScore () {
  // can also use queryselector to get one
  document.getElementsByClassName('score')[0].innerHTML = `Score: ${game.score}`
}
