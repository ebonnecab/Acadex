class Question {
  constructor(text, choices, answer, picture) {
    // TODO:What's the text that we want to show
    this.text = text
    this.choices = choices
    this.answer = answer
  }
}
Question.prototype.correctAnswer = function (choice) {
  return choice === this.answer;
}