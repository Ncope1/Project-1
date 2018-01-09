//this is the game functionality - keeping track of the score and the number of questions the trivia contains. also contains the current question and if the game has ended 

//this is the game functionality - keeping track of the score and the number of questions the trivia contains. also contains the current question and if the game has ended 
class Trivia {
    constructor(questions) {//constructor function
    this.score = 0
    this.questions = questions
    this.questionIndex = 0
    this.getQuestionIndex = function () //gets index of current question
        {
            return this.questions[this.questionIndex]
        }
    this.guess = function () {
        return this.questions.length === this.questionIndex
    }
    this.guess = function (answer) //checks if the current answer is equal to the answer selected by the user
    {
        if (this.getQuestionIndex().correctAnswer(answer)) {
            this.score++ //increase score within the condition
            var scoreSpan = document.getElementsByClassName('score')[0]
            scoreSpan.innerHTML = this.score
        }
        this.questionIndex++
    }
    this.hasEnded = function () {
        return this.questions.length === this.questionIndex
    }
    
}
}


// Trivia.prototype.getQuestionIndex = function () //gets index of current question
// {
//     return this.questions[this.questionIndex]
// }

// Trivia.prototype.hasEnded = function () {
//     return this.questions.length === this.questionIndex
// }

// Trivia.prototype.guess = function (answer) //checks if the current answer is equal to the answer selected by the user
// {
//     if (this.getQuestionIndex().correctAnswer(answer)) {
//         this.score++ //increase score within the condition

//     }
//     this.questionIndex++
// }


