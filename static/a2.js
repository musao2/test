const questions = [
    {
        question: "I _____ to the cinema yesterday.",
        options: ["go", "went", "gone", "going"],
        correct: 1
    },
    {
        question: "She is _____ than her sister.",
        options: ["tall", "taller", "tallest", "as tall"],
        correct: 1
    },
    {
        question: "They _____ in London for five years.",
        options: ["lived", "have lived", "live", "are living"],
        correct: 1
    },
    {
        question: "Would you like _____ tea?",
        options: ["any", "a", "some", "many"],
        correct: 2
    },
    {
        question: "I don’t have _____ money.",
        options: ["some", "any", "many", "no"],
        correct: 1
    },
    {
        question: "We _____ finish the homework before class.",
        options: ["must", "can", "should", "might"],
        correct: 0
    },
    {
        question: "There are _____ apples on the table.",
        options: ["much", "some", "a", "any"],
        correct: 1
    },
    {
        question: "He’s the _____ player in the team.",
        options: ["better", "good", "best", "well"],
        correct: 2
    },
    {
        question: "I enjoy _____ to music.",
        options: ["listen", "to listen", "listening", "listened"],
        correct: 2
    },
    {
        question: "What _____ you do at the weekend?",
        options: ["do", "did", "does", "done"],
        correct: 1
    }
];

let currentQuestion = 0;
let score = 0;

function showQuestion() {
    const questionData = questions[currentQuestion];
    document.getElementById("question-text").textContent = questionData.question;

    const optionsContainer = document.getElementById("options");
    optionsContainer.innerHTML = "";

    questionData.options.forEach((option, index) => {
        const btn = document.createElement("button");
        btn.textContent = option;
        btn.onclick = () => handleAnswer(index);
        optionsContainer.appendChild(btn);
    });
}

function handleAnswer(selected) {
    const correct = questions[currentQuestion].correct;
    if (selected === correct) {
        score += 10;
        document.getElementById("score").textContent = score;
    }

    currentQuestion++;
    if (currentQuestion < questions.length) {
        showQuestion();
    } else {
        document.getElementById("question-box").innerHTML = `<h2>Quiz finished!</h2><p>Your score: ${score}</p>`;
    }
}

showQuestion();
