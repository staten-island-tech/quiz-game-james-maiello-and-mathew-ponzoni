var questions = {
     new Question("Which state has the highest population?", ["New York", "Texas", "California", "Florida"], "California"),
     new Question("Which state has the largest Land Mass?", ["Alaska", "California", "New York", "Montana"], "Alaska"),
     new Question("Whcih state has the lowest population?", ["Alaska", "Maine", "Wyoming", "South Dakota"], "Wyoming"),
    
}

var quiz = new Quiz(questions);

populate();

function populate() {
    if(quiz.isEnded()){

    }
    else{
        var element = document.getElementById("question");
        element.innerHTML = quiz.getQuestionIndex().text;
    }
}


