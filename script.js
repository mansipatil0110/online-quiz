const questions = [

    {
        question: "What does HTML stand for?",

        answers: [
            "Hyper Text Markup Language",
            "High Text Machine Language",
            "Hyperlink Text Management Language",
            "Home Tool Markup Language"
        ],

        correct: 0
    },

    {
        question: "Which language is used to style a webpage?",

        answers: [
            "HTML",
            "CSS",
            "Python",
            "SQL"
        ],

        correct: 1
    },

    {
        question: "Which language is used to make webpages interactive?",

        answers: [
            "CSS",
            "HTML",
            "JavaScript",
            "SQL"
        ],

        correct: 2
    },

    {
        question: "Which of the following is a programming language?",

        answers: [
            "Python",
            "HTML",
            "CSS",
            "XML"
        ],

        correct: 0
    },

    {
        question: "What does CSS stand for?",

        answers: [
            "Computer Style Sheets",
            "Creative Style System",
            "Cascading Style Sheets",
            "Colorful Style Sheets"
        ],

        correct: 2
    },

    {
        question: "Which symbol is used for an ID selector in CSS?",

        answers: [
            ".",
            "#",
            "*",
            "@"
        ],

        correct: 1
    },

    {
        question: "Which tag is used to create a hyperlink in HTML?",

        answers: [
            "<link>",
            "<a>",
            "<href>",
            "<url>"
        ],

        correct: 1
    },

    {
        question: "Which language is used to manage data in databases?",

        answers: [
            "HTML",
            "CSS",
            "SQL",
            "JavaScript"
        ],

        correct: 2
    },

    {
        question: "Which keyword is used to declare a variable in JavaScript?",

        answers: [
            "var",
            "variable",
            "int",
            "string"
        ],

        correct: 0
    },

    {
        question: "Which company developed JavaScript?",

        answers: [
            "Microsoft",
            "Google",
            "Netscape",
            "Apple"
        ],

        correct: 2
    }

];


let currentQuestion = 0;

let score = 0;


const questionElement =
    document.getElementById("question");

const answerButtons =
    document.getElementById("answer-buttons");

const nextButton =
    document.getElementById("next-btn");

const scoreElement =
    document.getElementById("score");

const questionNumber =
    document.getElementById("question-number");

const progressBar =
    document.getElementById("progress-bar");

const resultBox =
    document.getElementById("result-box");

const quizBox =
    document.querySelector(".quiz-box");

const finalScore =
    document.getElementById("final-score");

const resultMessage =
    document.getElementById("result-message");

const restartButton =
    document.getElementById("restart-btn");


function startQuiz() {

    currentQuestion = 0;

    score = 0;

    scoreElement.innerText = score;

    quizBox.style.display = "block";

    resultBox.style.display = "none";

    showQuestion();
}


function showQuestion() {

    answerButtons.innerHTML = "";

    nextButton.style.display = "none";


    const question =
        questions[currentQuestion];


    questionElement.innerText =
        question.question;


    questionNumber.innerText =
        currentQuestion + 1;


    progressBar.style.width =
        ((currentQuestion + 1) / questions.length) * 100 + "%";


    question.answers.forEach((answer, index) => {

        const button =
            document.createElement("button");


        button.innerText =
            answer;


        button.classList.add("answer-btn");


        button.addEventListener("click", function() {

            selectAnswer(index, button);

        });


        answerButtons.appendChild(button);

    });

}


function selectAnswer(selectedIndex, selectedButton) {

    const correctAnswer =
        questions[currentQuestion].correct;


    const buttons =
        document.querySelectorAll(".answer-btn");


    buttons.forEach(button => {

        button.disabled = true;

    });


    if (selectedIndex === correctAnswer) {

        selectedButton.classList.add("correct");

        score++;

        scoreElement.innerText = score;

    } else {

        selectedButton.classList.add("wrong");

        buttons[correctAnswer].classList.add("correct");

    }


    nextButton.style.display = "block";

}


nextButton.addEventListener("click", function() {

    currentQuestion++;


    if (currentQuestion < questions.length) {

        showQuestion();

    } else {

        showResult();

    }

});


function showResult() {

    quizBox.style.display = "none";

    resultBox.style.display = "block";


    finalScore.innerText =
        score + " / " + questions.length;


    if (score === 10) {

        resultMessage.innerText =
            "🏆 Excellent! Perfect Score!";

    } else if (score >= 7) {

        resultMessage.innerText =
            "👏 Great Job!";

    } else if (score >= 5) {

        resultMessage.innerText =
            "👍 Good Try!";

    } else {

        resultMessage.innerText =
            "📚 Keep Studying and Try Again!";

    }

}


restartButton.addEventListener("click", function() {

    startQuiz();

});


startQuiz();