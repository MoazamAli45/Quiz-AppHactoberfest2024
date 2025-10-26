console.log('Moazam');

const question = [
  {
    ques: 'Which of the following is the markup language?',
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
  {
    ques: 'What does the acronym "HTTP" stand for?',
    a: 'Hyper Text Transfer Protocol',
    b: 'Hyper Text Transmission Protocol',
    c: 'High Text Transfer Protocol',
    d: 'Hyperlink Text Transfer Protocol',
    correct: 'a',
  },
  {
    ques: 'Which of the following is a JavaScript Library?',
    a: 'React',
    b: 'Laravel',
    c: 'Django',
    d: 'Ruby on Rails',
    correct: 'a',
  },
  {
    ques: 'Which CSS property controls the text size?',
    a: 'font-size',
    b: 'text-size',
    c: 'font-style',
    d: 'text-style',
    correct: 'a',
  },
  {
    ques: 'What is the purpose of the &lt;div&gt; tag in HTML?',
    a: 'To create a division or section',
    b: 'To define a hyperlink',
    c: 'To create a list',
    d: 'To insert an image',
    correct: 'a',
  },
  {
    ques: 'Which of the following is NOT a programming language?',
    a: 'Python',
    b: 'HTML',
    c: 'Java',
    d: 'C++',
    correct: 'b',
  },
  {
    ques: 'Which HTML element is used to define the title of a document?',
    a: '&lt;title&gt;',
    b: '&lt;head&gt;',
    c: '&lt;meta&gt;',
    d: '&lt;link&gt;',
    correct: 'a',
  },
  {
    ques: 'What is the correct HTML element for inserting a line break?',
    a: '&lt;break&gt;',
    b: '&lt;br&gt;',
    c: '&lt;lb&gt;',
    d: '&lt;line&gt;',
    correct: 'b',
  },
  {
    ques: 'Which CSS property is used to change the text color?',
    a: 'text-color',
    b: 'font-color',
    c: 'text-style',
    d: 'color',
    correct: 'd',
  },
  {
    ques: 'What is the correct way to declare a variable in JavaScript?',
    a: 'var myVar;',
    b: 'variable myVar;',
    c: 'v myVar;',
    d: 'declare myVar;',
    correct: 'a',
  },
  {
    ques: 'Which method is used to add an element at the end of an array in JavaScript?',
    a: 'append()',
    b: 'push()',
    c: 'add()',
    d: 'insert()',
    correct: 'b',
  },
   {
    ques: 'What is the purpose of the "display: flex;" property in CSS?',
    a: 'Makes text flexible',
    b: 'Creates a flexible layout container',
    c: 'Displays images',
    d: 'Changes font size',
    correct: 'b',
  },
  {
    ques: 'Which HTTP status code means "Not Found"?',
    a: '200',
    b: '500',
    c: '404',
    d: '301',
    correct: 'c',
  },
  {
    ques: 'What is the purpose of "npm" in web development?',
    a: 'Node Package Manager',
    b: 'New Programming Method',
    c: 'Network Protocol Manager',
    d: 'Node Project Maker',
    correct: 'a',
  },
  {
    ques: 'Which Git command is used to save changes to the local repository?',
    a: 'git push',
    b: 'git save',
    c: 'git commit',
    d: 'git add',
    correct: 'c',
  },
  {
    ques: 'Which HTML attribute is used to define inline styles?',
    a: 'class',
    b: 'style',
    c: 'css',
    d: 'styles',
    correct: 'b',
  },
  {
    ques: 'Which JavaScript method removes the last element from an array?',
    a: 'remove()',
    b: 'delete()',
    c: 'pop()',
    d: 'shift',
    correct: 'c',
  },
  {
    ques: 'Which JavaScript function is used to parse a JSON string?',
    a: 'JSON.parse()',
    b: 'JSON.stringify()',
    c: 'parseJSON()',
    d: 'convertJSON()',
    correct: 'a',
  },
  
];
var choosenAnswer = [];
const total = question.length;
const display = document.querySelector('.box');
const progressBar = document.querySelector('.progress-bar');
let index = 0;
let right = 0;
let wrong = 0;
let timerInterval; // Variable to hold the timer interval
let timeLeft = 300;

// Load questions
// Load questions
// Variable to hold the timer interval
let timeElapsed = 0; // Track time elapsed in seconds

// Load questions
const loadQues = function () {
  if (index < total) {
    const data = question[index];
    display.innerHTML = `
      <div id="timer" style="font-size: 1.5rem; color: #3498db; margin-bottom: 20px;">${formatTime(timeElapsed)}</div>
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

    // Show or hide the Prev button
    document.querySelector('.submit2').style.display = index === 0 ? 'none' : 'block';

    // Start the timer only on the first question
    if (index === 0) {
      startTimer();
    }
  } else {
    endQuiz();
  }
};

function startTimer() {
  clearInterval(timerInterval);
  timeElapsed = 0; // Reset time
  document.getElementById('timer').textContent = formatTime(timeElapsed);
  
  timerInterval = setInterval(() => {
    timeElapsed++;
    document.getElementById('timer').textContent = formatTime(timeElapsed);
  }, 1000);
}

function formatTime(seconds) {
  const minutes = Math.floor(seconds / 60);
  const remainingSeconds = seconds % 60;
  return `${String(minutes).padStart(2, '0')}:${String(remainingSeconds).padStart(2, '0')}`;
}


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
  console.log(answer);
  saveAnswers(index, answer, data.correct);
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

const saveAnswers = (index, choosen, answer) => {
  console.log(index);
  var answerFormat = {
    index: index,
    choosen: choosen,
    answer: answer,
  };

  if (choosenAnswer.length <= 0) {
    choosenAnswer.push(answerFormat);
  } else {
    let found = false;

    for (let i = 0; i < choosenAnswer.length; i++) {
      if (index == choosenAnswer[i].index) {
        // If index matches, replace the existing answer
        choosenAnswer.splice(i, 1, answerFormat);
        found = true;
        console.log('if worked');
        break;
      }
    }

    // If the index was not found, push the new answer
    if (!found) {
      choosenAnswer.push(answerFormat);
      console.log('else worked');
    }
  }
  console.log(choosenAnswer);
};


var i = 0;
function showAnswer() {
  if (i < total) {
    const data = question[i]; // Get current question data
    const choosenData = choosenAnswer.find(item => item.index === i); // Find chosen answer by index
    const choosenAns = choosenData ? choosenData.choosen : "Not answered"; // Handle case when no answer chosen

    display.innerHTML = `
      <div class="progress-container">
        <div class="progress-bar" style="width: ${
          ((i + 1) / total) * 100
        }%;"></div>
      </div>
      <h1 class="Ques">Q${i+ 1}) ${data.ques}</h1>
      <div class="row">
        <div class="options">Chosen Answer:</div>
        <label for="option1">${choosenAns}</label> 
      </div>
      <div class="row">
        <div class="options">Correct Answer:</div>
        <label for="option1">${data.correct}</label>
      </div>
      <div class="submitRow">
        <button class="btn2 submit2">Prev</button>
        <button class="btn submit">Next</button>
      </div>
      <p id="error-message" style="color: red;"></p>
    `;

    // Attach event listeners for navigation
    document.querySelector('.submit').onclick = nextQ;
    document.querySelector('.submit2').onclick = prevQues;

    // Hide Prev button on the first question
    if (index === 0) {
      document.querySelector('.submit2').style.display = 'none';
    } else {
      document.querySelector('.submit2').style.display = 'block';
    }

    // Update progress bar (you already have this inline, so this can be removed)
    // const progressPercentage = ((index + 1) / total) * 100;
    // progressBar.style.width = `${progressPercentage}%`;

  } else {
    endQuiz();
  }
}
function nextQ() {
  if (i < total - 1) {
    i++; // Move to next question
    showAnswer(); // Update the display
  } else {
    endQuiz(); // End quiz if at last question
  }
}
// Navigate to previous question
const prevQ = function () {
  if (index > 0) {
    index--;
    loadQues();
  }
};
const prevQues = function () {
  if (i > 0) {
    i--;
    loadQues();
  }
};
// End the quiz and display results
const endQuiz = () => {
  clearInterval(timerInterval);
  display.innerHTML = '';

  // Calculate total time taken
  const timeTaken = formatTime(timeElapsed);

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
    <div class="results-box">
      <h3 class="marks">Correct Options: ${right}/${total}</h3>
      <h3 class="time-taken" style="font-size: 1.5rem;">Time Taken: ${timeTaken}</h3>
      <br><br><h2 class="result">${resultMessage}</h2>
    </div>
    <button class="btn again" onclick="againStart()">Try Again</button>
    <button class="btn again" onclick="showAnswer()">See Answers</button>
  `;
};



// Restart the quiz
const againStart = () => {
  index = 0;
  right = 0;
  wrong = 0;
  choosenAnswer = [];
  loadQues();
};

// Load the first question
loadQues();
