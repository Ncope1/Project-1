//this is the game functionality - keeping track of the score, current question and if the game has ended 
function Trivia (questions) {
    this.score = 0
    this.questions = questions
    this.questionIndex = 0
}

Trivia.prototype.getQuestionIndex = function () {
    return this.questions[this.questionIndex]
}

Trivia.prototype.hasEnded = function () {
    return this.questions.length === this.questionIndex
}

Trivia.prototype.guess = function (answer) {

    if (this.getQuestionIndex().correctAnswer(answer)) {
        this.score++

    }
    this.questionIndex++
}

//Prototype Resource: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/prototype
//Prototype Resource: https://www.airpair.com/javascript/posts/how-does-javascript-prototype-work
