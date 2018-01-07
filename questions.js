/*
//This object is the constructor function that gives the questions its properites (questions, answer options, correct answer)
function Question(text, option, answer){
    this.text = text
    this.option = option
    this.answer = answer
}
//select the constructor function & use a prototype because I'm writing this function outside of the constructor. Its adding functionality to compare the user's guess to the correct answer
Question.prototype.correctAnswer = function (choice) //parameter containing the user clicked option//
{
    return choice === this.answer
}

//"This" Resource: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/this
//Prototype Resource: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/prototype
//Prototype Resources: https://www.airpair.com/javascript/posts/how-does-javascript-prototype-work
*/

