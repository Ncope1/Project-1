function Question(text, option, answer){
    this.text = text
    this.option = option
    this.answer = answer
}

Question.prototype.correctAnswer = function (choice) {
    return choice === this.answer
}