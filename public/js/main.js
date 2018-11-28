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



const text = "Which emotion does this display?"
const questions = [
  new Question(text, ["Happy", "Sad", "Mad", "Annoyed"], "Happy"),
  new Question(text, ["Mad", "Sad", "Happy", "Be Quiet"], "Mad"),
  new Question(text, ["Happy", "Annoyed", "Mad", "Sad"], "Sad"),
  new Question(text, ["Happy", "Sad", "Mad", "Annoyed"], "Annoyed"),
  new Question(text, ["Calm", "Sad", "Mad", "Annoyed"], "Calm"),
]




const quiz = new Quiz(questions);
showQuestions()

