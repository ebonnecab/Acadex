function showQuestions() {
  if (quiz.isEnded()) {
    // showScores();
  } else {
    // show question
    let element = document.getElementById("question")
    element.innerHTML = quiz.getQuestionIndex().text;

    let choices = quiz.getQuestionIndex().choices;
    for (let i = 0; i < choices.length; i++) {
      let element = document.getElementById(`choice${i}`)
      element.innerHTML = choices[i]
      guess("btn" + i, choices[i])
    }
    showProgress()

  }
}

function guess(id, guess) {
  var button = document.getElementById(id)
  button.onclick = function () {
    quiz.guess(guess)
    showQuestions()
  }
}

function showScores() {
  let gameOverHTML = `<h1>Result</h1>`
  gameOver += `<h2 id='score'> Your scores: ${quiz.score}</h2>`
  let element = document.getElementById("quiz")
  element.innerHTML = gameOverHTML
}

function showProgress() {
  let currentQuestionNumber = quiz.questionIndex + 1;
  let element = document.getElementById("progress")
  element.innerHTML = `Question ${currentQuestionNumber} of ${quiz.questions.length}`
}



const question = "How is Jordan feeling today?"
const questions = [
  new Question(question, ["Happy", "Sad", "Mad", "Annoyed"], "Happy"),
  new Question(question, ["Mad", "Sad", "Happy", "Be Quiet"], "Mad"),
  new Question(question, ["Happy", "Annoyed", "Mad", "Sad"], "Sad"),
  new Question(question, ["Happy", "Sad", "Mad", "Annoyed"], "Annoyed"),
  new Question(question, ["Calm", "Sad", "Mad", "Annoyed"], "Calm"),
]




const quiz = new Quiz(questions);
showQuestions()