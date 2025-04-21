const questions = [
    {
        question: "Что из этих фраз является формой сослагательного наклонения?",
        options: ["Я бы купил машину", "Я купил машину", "Я куплю машину", "Я купил бы машину"],
        answer: 0
    },
    {
        question: "Какой из этих вариантов является корректным?",
        options: ["Мне нравиться читать книги", "Мне нравятся читать книги", "Мне нравится читать книги", "Мне нравится читать книгими"],
        answer: 2
    },
    {
        question: "Что из этих предложений правильное?",
        options: ["Я делаю домашку", "Я делаю домашняя работу", "Я делаю домашнее задание", "Я делаю задание дома"],
        answer: 2
    },
    {
        question: "Какой из этих глаголов является неправильным?",
        options: ["Писать", "Есть", "Читать", "Бежать"],
        answer: 1
    },
    {
        question: "Что такое дополнение в русском языке?",
        options: ["Часть речи, отвечающая на вопросы кто? что?", "Часть речи, отвечающая на вопросы как? когда?", "Часть речи, отвечающая на вопросы где? куда?", "Часть речи, отвечающая на вопросы что? где?"],
        answer: 0
    },
    {
        question: "Какое из этих предложений не имеет ошибок?",
        options: ["Я очень рад встретиться с вами", "Я очень рад встречаться с вами", "Я очень рад встречать с вами", "Я очень рад встречать вас"],
        answer: 0
    },
    {
        question: "Что из этого является относительным местоимением?",
        options: ["Какой", "Никто", "Всё", "Каждый"],
        answer: 0
    },
    {
        question: "Какую форму имеет глагол в предложении: 'Я бы хотел стать врачом'?",
        options: ["Повелительное наклонение", "Инфинитив", "Сослагательное наклонение", "Будущее время"],
        answer: 2
    },
    {
        question: "Что из этих слов является наречием?",
        options: ["Быстро", "Красиво", "Молодой", "Интересный"],
        answer: 0
    },
    {
        question: "Какое из этих предложений правильно?",
        options: ["Я умею плавать и бегать", "Я умею плавать и бегать у меня", "Я умею плавать, бегать и я", "Я умею плавать, и бегать"],
        answer: 0
    }
];

let currentQuestion = 0;
let score = 0;

function loadQuestion() {
    if (currentQuestion >= questions.length) {
        alert(`Тест завершён!\nПравильных ответов: ${score} из ${questions.length}`);
        document.getElementById("result-box").classList.remove("hidden");
        document.getElementById("score").textContent = `${score} из ${questions.length}`;
        document.getElementById("question-box").classList.add("hidden");
        return;
    }

    const q = questions[currentQuestion];
    document.getElementById("question-text").textContent = q.question;

    const optionsDiv = document.getElementById("options");
    optionsDiv.innerHTML = "";

    q.options.forEach((option, index) => {
        const div = document.createElement("div");
        div.textContent = option;
        div.className = "option";
        div.onclick = () => {
            if (index === q.answer) score++;
            currentQuestion++;
            loadQuestion();
        };
        optionsDiv.appendChild(div);
    });
}

loadQuestion();
