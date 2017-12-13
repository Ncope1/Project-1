function Question(text, option, answer){
    this.text = text
    this.option = option
    this.answer = answer
}

Question.prototype.correctAnswer = function (choice) {
    return choice === this.answer
}

//This Resource: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/this

//Prototype Resource: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/prototype