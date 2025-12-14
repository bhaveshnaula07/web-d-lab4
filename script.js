const quizQuestions = [
  {
    question: "What does HTML stand for?",
    answer: "hypertext markup language"
  },
  {
    question: "Which language is used for styling web pages?",
    answer: "css"
  },
  {
    question: "Which keyword is used to declare a variable in JavaScript?",
    answer: "let"
  },
  {
    question: "What method is used to display a popup message in JavaScript?",
    answer: "alert"
  },
  {
    question: "Which function is used to take user input in JavaScript?",
    answer: "prompt"
  },
  { 
    question: "Which HTML tag is used to create a hyperlink?",
    answer: "a"
  },
  {
    question: "Which JavaScript loop is used when the number of iterations is known?",
    answer: "for"
  },
];

// Function to run the quiz
function runQuiz() {
  let score = 0;

  for (let i = 0; i < quizQuestions.length; i++) {
    let userAnswer = prompt(quizQuestions[i].question);

    if (userAnswer === null) {
      alert("Quiz cancelled.");
      return;
    }

    userAnswer = userAnswer.toLowerCase().trim();

    if (userAnswer === quizQuestions[i].answer) {
      alert("Correct!");
      score++;
    } else {
      alert(
        "Wrong! The correct answer is: " +
        quizQuestions[i].answer
      );
    }
  }

  alert(
    "Quiz Completed!\nYour final score is " +
    score +
    " out of " +
    quizQuestions.length
  );
}

// Start the quiz
runQuiz();