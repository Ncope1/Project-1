//This object gives the questions its properites (questions, answer options, correct answer)
function Question(text, option, answer){
    this.text = text
    this.option = option
    this.answer = answer
}
//adding functionality to compare the user's guess to the correct answer
Question.prototype.correctAnswer = function (choice) {
    return choice === this.answer
}

//"This" Resource: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/this
//Prototype Resource: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/prototype
//Prototype Resources: https://www.airpair.com/javascript/posts/how-does-javascript-prototype-work