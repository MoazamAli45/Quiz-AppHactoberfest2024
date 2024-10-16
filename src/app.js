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
const ques = document.querySelector('.Ques');
const options = document.querySelectorAll('.options');
const btn = document.querySelector('.submit');
const backBtn = document.querySelector('.back');


let index = 0;
let right = 0;

// Function to load question
const loadQues = () => {
    if (index < total) {
        let data = question[index];
        ques.innerText = `Q${index + 1}) ${data.ques}`;
        options[0].nextElementSibling.innerText = data.a;
        options[1].nextElementSibling.innerText = data.b;
        options[2].nextElementSibling.innerText = data.c;
        options[3].nextElementSibling.innerText = data.d;

        backBtn.style.display = index === 0 ? 'none' : 'block';
    } else {
        endQuiz();
    }
};

// Function to get the result
const getResult = () => {
    let data = question[index];
    const answer = checkAnswer();
    if (answer === data.correct) {
        right++;
    }
    index++;
    reset();
    loadQues();
};

// Function to reset options
const reset = () => {
    options.forEach(input => {
        input.checked = false;
    });
};

// Function to check selected answer
const checkAnswer = () => {
    let answer;
    options.forEach(input => {
        if (input.checked) {
            answer = input.value;
        }
    });
    return answer;
};

// Function to end the quiz
const endQuiz = () => {
    display.innerHTML = '';
    let resultMessage;

    if (right === total) {
        resultMessage = `Excellent👏`;
    } else if (right === total - 1) {
        resultMessage = `Good 👍`;
    } else if (right === total - 2) {
        resultMessage = `Satisfactory`;
    } else {
        resultMessage = `Better Luck Next time`;
    }

    display.innerHTML = `
        <h2 class="head">Thank you for solving the quiz!!</h2>
        <h3 class="marks">Correct Options: ${right}/${total}</h3>
        <h2 class="result">${resultMessage}</h2>
    `;

    backBtn.style.display = 'none'; // Hide the back button
    
};

// Function to go back to the previous question
const goBack = () => {
    if (index > 0) {
        index--;
        loadQues();
    }
};



// Initial load of questions
loadQues();
btn.addEventListener('click', getResult);
backBtn.addEventListener('click', goBack);

