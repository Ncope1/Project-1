function Trivia (questions) {
    this.score = 0
    this.questions = questions
    this.questionIndex = 0
}

Trivia.prototype.getQuestionIndex = function () {
    return this.questions[this.questionIndex]
}

Trivia.prototype.hasEnded = function () {
    return this.question.length === this.questionIndex
}

Trivia.prototype.guess = function (answer) {
    this.questionIndex++

    if(this.getQuestionIndex().correctAnswer(answer)) {
        this.score++
        
    }
}