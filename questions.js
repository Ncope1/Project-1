
//This object is the constructor function that gives the questions its properites (questions, answer options, correct answer)
class Question {
    constructor(text, option, answer) {
        this.text = text
        this.option = option
        this.answer = answer
        this.correctAnswer = function (choice) {
            return choice === this.answer
            } 
        }
    }

