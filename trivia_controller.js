/*
//this is the game functionality - keeping track of the score and the number of questions the trivia contains. also contains the current question and if the game has ended 
function Trivia (questions) //constructor function
{
    this.score = 0
    this.questions = questions
    this.questionIndex = 0
}

Trivia.prototype.getQuestionIndex = function () //gets index of current question
{
    return this.questions[this.questionIndex]
}

Trivia.prototype.hasEnded = function () {
    return this.questions.length === this.questionIndex
}

Trivia.prototype.guess = function (answer) //checks if the current answer is equal to the answer selected by the user
{
    if (this.getQuestionIndex().correctAnswer(answer)) {
        this.score++ //increase score within the condition

    }
    this.questionIndex++
}

//Prototype Resource: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/prototype
//Prototype Resource: https://www.airpair.com/javascript/posts/how-does-javascript-prototype-work
*/
