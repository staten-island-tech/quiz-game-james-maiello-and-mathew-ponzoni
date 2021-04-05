function Question(text, answers, correct) {
    this.text = text;
    this.answers = answers;
    this.correct = correct;
}

Question.prototype.correctAnswer = function(choice) {
    return chocie === this.answers;

}