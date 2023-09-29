const questions = [
    {
        question: "What is the extension of HTML?",
        answers: [
            { text: "Hyper Text Marketing Language", correct: false},
            { text: "Hyper Text Markup Language", correct: true},
            { text: "Hyperlinks and Text Markup Language", correct: false},
            { text: "Home Tool Markup Language", correct: false},

            
        ]
    },
    {
        question: "Elements in the HTML defines?",
        answers: [
            { text: "Headings", correct: true},
            { text: "Hyperlink", correct: false},
            { text: "Hyper Text", correct: false},
            { text: "Html-text", correct: false},

            
        ]
    },
    {
        question: "For displaying a webpage within a webpage, HTML uses?",
        answers: [
            { text: "Classes", correct: false},
            { text: "Div element", correct: false},
            { text: "Span Element", correct: false},
            { text: "Iframes", correct: true},

            
        ]
    },
    {
        question: "Which is the smallest continent in the world?",
        answers: [
            { text: "Asia", correct: false},
            { text: "Australia", correct: true},
            { text: "Africa", correct: false},
            { text: "Antarctica", correct: false},

            
        ]
    },
    {
        question: "Who painted the Mona Lisa?",
        answers: [
            { text: "Pablo Picasso", correct: false},
            { text: "Vincent van Gogh", correct: false},
            { text: "Leonardo da Vinci", correct: true},
            { text: "Michelangelo", correct: false},

            
        ]
    },
    {
        question: "What is the largest species of shark?",
        answers: [
            { text: "Great White Shark", correct: false},
            { text: "Whale Shark", correct: true},
            { text: "Tiger Shark", correct: false},
            { text: "Hammerhead Shark", correct: false},

            
        ]
    },
    {
        question: "Which is the largest desert in the world?",
        answers: [
            { text: "Kalahari", correct: false},
            { text: "Gobi", correct: false},
            { text: "Sahara", correct: false},
            { text: "Antarctica", correct: true},

            
        ]
    }
    
    
];

const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");   

let currentQuestionIndex = 0;
let score = 0;

function startQuiz(){
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Next";
    showQuestion();
}
function showQuestion(){
    resetState();
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + ". " + currentQuestion.question;

    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        answerButtons.appendChild(button);
        if(answer.correct){
            button.dataset.correct = answer.correct;
        }
        button.addEventListener("click", selectAnswer);

    });
}


function resetState(){
    nextButton.style.display = "none";
    while(answerButtons.firstChild){
        answerButtons.removeChild(answerButtons.firstChild);
    }
}
function selectAnswer(e){
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct === "true";
    if(isCorrect){
        selectedBtn.classList.add("correct");
        score++;
    }else{
        selectedBtn.classList.add("incorrect");
    }
    Array.from(answerButtons.children).forEach(button => {
        if(button.dataset.correct === "true"){
            button.classList.add("correct");
        }
        button.disabled = true;
    });
    nextButton.style.display = "block";
}
function showScore(){
    resetState();
    questionElement.innerHTML = `You scored ${score} out of ${questions.length}!`;
    nextButton.innerHTML = "play Again";
    nextButton.style.display = "block";
}
function handleNextButton(){
    currentQuestionIndex++;
    if(currentQuestionIndex < questions.length){
        showQuestion();
    }
    else{
        showScore();
    }
}
nextButton.addEventListener("click", ()=>{
    if(currentQuestionIndex < questions.length){
        handleNextButton();
    }
    else{
        startQuiz();
    }
});
startQuiz();
