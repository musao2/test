const questions = [
    {
        question: "If I _____ enough money, I would travel the world.",
        options: ["have", "had", "will have", "has"],
        correct: 1
    },
    {
        question: "She has been working here _____ 2018.",
        options: ["for", "since", "by", "from"],
        correct: 1
    },
    {
        question: "You _____ smoke here. It’s prohibited.",
        options: ["should", "must", "mustn’t", "can"],
        correct: 2
    },
    {
        question: "He’s interested _____ learning languages.",
        options: ["on", "at", "in", "to"],
        correct: 2
    },
    {
        question: "We _____ to the party if we finish work early.",
        options: ["go", "are going", "will go", "gone"],
        correct: 2
    },
    {
        question: "I have never _____ sushi before.",
        options: ["ate", "eat", "eaten", "eating"],
        correct: 2
    },
    {
        question: "I asked him _____ he could help me.",
        options: ["that", "if", "what", "why"],
        correct: 1
    },
    {
        question: "Let’s go out, _____?",
        options: ["shall we", "do we", "don’t we", "won’t we"],
        correct: 0
    },
    {
        question: "I regret _____ her the truth.",
        options: ["to tell", "telling", "tell", "told"],
        correct: 1
    },
    {
        question: "It’s the best film I have _____ seen.",
        options: ["never", "ever", "always", "already"],
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
