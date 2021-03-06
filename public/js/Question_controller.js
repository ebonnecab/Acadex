class Quiz {
  constructor(questions) {
    this.questions = questions
    this.score = 0
    this.questionIndex = 0;
  }
}

Quiz.prototype.getQuestionIndex = function () {
  return this.questions[this.questionIndex]
}
Quiz.prototype.isEnded = function () {
  console.log("Quiz ended");

  return this.questions.length === this.questionIndex
}

Quiz.prototype.guess = function (answer) {
  this.questionIndex++;
  if (this.getQuestionIndex().correctAnswer(answer)) {
    this.score++;
  };
}