console.log('Moazam');

const question = [
  {
    ques: 'Which of the following is the markup Language?',
    a: 'HTML',
    b: 'CSS',
    c: 'JavaScript',
    d: 'PHP',
    correct: 'a',
  },
  {
    ques: 'In which year was JavaScript launched?',
    a: '1996',
    b: '1995',
    c: '1998',
    d: '2000',
    correct: 'b',
  },
  {
    ques: 'What does CSS stand for?',
    a: 'Cascade Style Sheet',
    b: 'Cascading Style Sheet',
    c: 'Hyper Text Markup Language',
    d: 'JSON',
    correct: 'b',
  },
];

const total = question.length;
const display = document.querySelector('.box');
const progressBar = document.querySelector('.progress-bar');
let index = 0;
let right = 0;
let wrong = 0;

// Load questions
const loadQues = function () {
  if (index < total) {
    const data = question[index];
    display.innerHTML = `
      <div class="progress-container">
        <div class="progress-bar" style="width: ${((index + 1) / total) * 100}%;"></div>
      </div>
      <h1 class="Ques">Q${index + 1}) ${data.ques}</h1>
      <div class="row">
        <input type="radio" class="options" id="option1" value="a" name="ques" />
        <label for="option1">${data.a}</label>
      </div>
      <div class="row">
        <input type="radio" class="options" id="option2" value="b" name="ques" />
        <label for="option2">${data.b}</label>
      </div>
      <div class="row">
        <input type="radio" class="options" id="option3" value="c" name="ques" />
        <label for="option3">${data.c}</label>
      </div>
      <div class="row">
        <input type="radio" class="options" id="option4" value="d" name="ques" />
        <label for="option4">${data.d}</label>
      </div>
      <div class="submitRow">
      <button class="btn2 submit2">Prev</button>
        <button class="btn submit">Submit</button>
      </div>
      <p id="error-message" style="color: red;"></p>
    `;

    // Update progress bar
    const progressPercentage = ((index + 1) / total) * 100;
    progressBar.style.width = `${progressPercentage}%`;

    // Attach event listeners
    document.querySelector('.submit').onclick = getResult;
    document.querySelector('.submit2').onclick = prevQ;
    if(index == 0){
      document.querySelector('.submit2').style.display = "none";
    }
  } else {
    endQuiz();
  }
};

// Get result and validate
const getResult = function () {
  const data = question[index];
  const answer = checkAnswer();
  const errorMessage = document.getElementById('error-message');

  if (!answer) {
    errorMessage.textContent = 'Please select an answer before submitting.';
    return;
  } else {
    errorMessage.textContent = ''; // Clear the error message
  }

  if (answer === data.correct) {
    right++;
  } else {
    wrong++;
  }

  index++;
  loadQues();
};

// Check selected answer
const checkAnswer = function () {
  const options = document.querySelectorAll('.options');
  let answer;
  options.forEach(input => {
    if (input.checked) {
      answer = input.value;
    }
  });
  return answer;
};

// Navigate to previous question
const prevQ = function () {
  if (index > 0) {
    index--;
    loadQues();
  }
};

// End the quiz and display results
const endQuiz = () => {
  display.innerHTML = '';
  let resultMessage = '';
  if (right === total) {
    resultMessage = `Excellent👏`;
  } else if (right === total - 1) {
    resultMessage = `Good 👍`;
  } else if (right === total - 2) {
    resultMessage = `Satisfactory `;
  } else {
    resultMessage = `Better Luck Next time`;
  }

  display.innerHTML = `
    <h2 class="head">Thank you for solving the quiz!</h2>
    <h3 class="marks">Correct Options: ${right}/${total}</h3>
    <h2 class="result">${resultMessage}</h2>
    <button class="btn again" onclick="againStart()">Try Again</button>
  `;
};

// Restart the quiz
const againStart = () => {
  index = 0;
  right = 0;
  wrong = 0;
  loadQues();
};

// Load the first question
loadQues();
