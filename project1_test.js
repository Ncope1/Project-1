function populate () {
    if (trivia.hasEnded()) {
        showScores ()
    }
    else {
        //display question
        var element = document.getElementById("question")
       element.innerHTML = trivia.getQuestionIndex().text

       //display options
       var options = trivia.getQuestionIndex().option
       for(var i = 0; i< options.length; i++) {
           var span = document.getElementById("option" + i)
           span.innerHTML = options[i]
           guess("btn" + i, options[i])
       }

    }
}

function guess (id, guess) {
    var button = document.getElementById(id)
    button.onclick = function () {
        trivia.guess(guess)
        populate()
    }
}

function showScores () {
    var gameOverHtml = "<h1>Result</h1>"
    gameOverHtml += "<h2 id='score'> Your scores: " + trivia.score + "</h2>"
    var element = document.getElementById("trivia")
    element.innerHTML = gameOverHtml
}


var questions = [
    new Question("What is Beyoncé's middle name?", ["Erica", "Sasha", "Giselle", "Gabrielle"], "Giselle"),
    new Question("What is Beyoncé's favorite color?", ["Blue", "Green", "Yellow", "Red"], "Blue"),
    new Question("What year was Beyoncé born?", ["1984", "1982", "1981", "1983"], "1981"),
    new Question("What are the names of Beyoncé's parents?", ["Matthew and Tina Knowles", "Martin and Gina Knowles", "Solange and Jeffery Knowles", "Tina and Richard Lawson"], "Matthew and Tina Knowles"),
    new Question("How many children does Beyoncé have?", ["One", "Two", "Three", "Four"], "Three"),
    new Question("What group is Beyoncé associated with?", ["TLC", "SWV", "TOTAL", "Destiny's Child"], "Destiny's Child")
]

var trivia = new Trivia (questions)

populate()