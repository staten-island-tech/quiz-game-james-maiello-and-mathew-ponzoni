function Quiz(questions) {
    this.score = 0;
    this.questionIndex = 0;
    this.questions = questions;
}

Quiz.prototype.getQuestionIndex = function() {
    return this.questions[this.questionIndex];
}

Quiz.prototype.isEnded = function() {
    return this.questions.length === this.questionsIndex;
}

Quiz.prototype.guess = function(answer) {
    this.questionIndex++;
    if(this.getQuestionIndex().correctAnswer(answer)) {
        this.score++;
    }
}
