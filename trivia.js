let changeQuestion = document.getElementsByClassName('option')
    
function firstQuestion () {
    // document.getElementById('Question1').innerHTML = allQuestions[0].question
    var correctAnswer = document.getElementById('option-c')
    correctAnswer.addEventListener('click', function() {
        console.log('working')
        game.score++
        console.log(game.score)
        userScore()
    })
}
firstQuestion()


function secondQuestion () {
    correctAnswer = document.getElementById('option-e')
    correctAnswer.addEventListener('click', function() {
      game.score++
      userScore()
    })
}
secondQuestion()


function thirdQuestion () {
    correctAnswer = document.getElementById('option-k')
    correctAnswer.addEventListener('click', function() {
      game.score++
      userScore()
    })
}
thirdQuestion()


function fourthQuestion () {
    correctAnswer = document.getElementById('option-m')
    correctAnswer.addEventListener('click', function() {
      game.score++
      userScore()
    })
    }
fourthQuestion()



function fifthQuestion () {
    correctAnswer = document.getElementById('option-s')
    correctAnswer.addEventListener('click', function() {
      game.score++
      userScore()
    })
    }
fifthQuestion()


function sixthQuestion () {
    correctAnswer = document.getElementById('option-x')
    correctAnswer.addEventListener('click', function() {
      game.score++
      userScore()
    })
    }
sixthQuestion()


var game = {
    score: 0
}
        
function userScore () {
     document.getElementsByClassName('score')[0].innerHTML = `Score: ${game.score}`
}

