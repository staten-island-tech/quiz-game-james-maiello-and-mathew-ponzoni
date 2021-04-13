const question = document.getElementById('question');
const choices = Array.from(document.getElementsByClassName('choice-text'));
const questionCounterText = document.getElementById('questionCounter');
const scoreText = document.getElementById('score');


let currentQuestion = {};
let acceptingAnswers = false;
let score = 0;
let questionCounter = 0;
let availableQuesions = [];

let questions = [
    {
        question: "Which State has the highest population?",
        choice1: "New York",
        choice2: "California",
        choice3: "Texas",
        choice4: "Florida",
        answer: 2,
    },
    {
        question: "Which state is the largest in area?",
        choice1: "Alaska",
        choice2: "California",
        choice3: "Texas",
        choice4: "Montana",
        answer: 1,
    },
    {
        question: "Which state has the least population?",
        choice1: "Alaska",
        choice2: "Maine",
        choice3: "Wyoming",
        choice4: "South Dakota",
        answer: 3,
    },
    {
        question: "Which state is the smallest in area?",
        choice1: "Deleware",
        choice2: "Rhode Island",
        choice3: "New Jersey",
        choice4: "Connecticut",
        answer: 2,
    },
    {
        question: "Which state has the tallest building?",
        choice1: "New York",
        choice2: "Illinois",
        choice3: "Florida",
        choice4: "California",
        answer: 1,
    },
    {
        question: "Which was the first official state of the US?",
        choice1: "Washington DC",
        choice2: "New Jersey",
        choice3: "Maryland",
        choice4: "Delaware",
        answer: 4,
    },
    {
        question: "Which was the last state to become a state of the US?",
        choice1: "Oklahoma",
        choice2: "Alaska",
        choice3: "Arizona",
        choice4: "Hawaii",
        answer: 4,
    },
    {
        question: "In which state were the most presidents born in?",
        choice1: "Ohio",
        choice2: "Virginia",
        choice3: "Massachusetts",
        choice4: "Georgia",
        answer: 2,
    },
    {
        question: "Which state is Bismarck the capital of?",
        choice1: "North Dakota",
        choice2: "Nebraska",
        choice3: "Louisiana",
        choice4: "Kansas",
        answer: 1,
    },
    {
        question: "Which state has the highest population density?",
        choice1: "New York",
        choice2: "California",
        choice3: "Ohio",
        choice4: "New Jersey",
        answer: 4,
    },

];

const CORRECT_BONUS = 10;
const MAX_QUESTIONS = 10;

startGame = () => {
    questionCounter = 0;
    score = 0;
    availableQuesions = [...questions];
    getNewQuestion();
};

getNewQuestion = () => {
    if (availableQuesions.length === 0 || questionCounter >= MAX_QUESTIONS) {
        localStorage.setItem("mostRecentScore", score);
        return window.location.assign('end.html');
    }
    questionCounter++;
    questionCounterText.innerText = questionCounter + "/" + MAX_QUESTIONS;

    const questionIndex = Math.floor(Math.random() * availableQuesions.length);
    currentQuestion = availableQuesions[questionIndex];
    question.innerText = currentQuestion.question;

    choices.forEach((choice) => {
        const number = choice.dataset['number'];
        choice.innerText = currentQuestion['choice' + number];
    });

    availableQuesions.splice(questionIndex, 1);
    acceptingAnswers = true;
};

choices.forEach((choice) => {
    choice.addEventListener('click', (e) => {
        if (!acceptingAnswers) return;
        
        acceptingAnswers = false;
        const selectedChoice = e.target;
        const selectedAnswer = selectedChoice.dataset['number'];
        const classToApply = selectedAnswer == currentQuestion.answer ? 'correct' : 'incorrect';

        if(classToApply === 'correct') {
            incrementScore(CORRECT_BONUS);
        }

        selectedChoice.parentElement.classList.add(classToApply);
        setTimeout( () => {
            selectedChoice.parentElement.classList.remove(classToApply);
            getNewQuestion();
        }, 1000);
       
    });
});

incrementScore = num => {
 score +=num;
 scoreText.innerText = score;
}
startGame();

