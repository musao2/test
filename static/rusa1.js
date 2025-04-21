const questions = [
    {
        question: "Когда произошла Великая Октябрьская революция?",
        options: ["1917", "1905", "1922", "1939"],
        answer: 0
    },
    {
        question: "Кто был первым президентом США?",
        options: ["Джордж Вашингтон", "Авраам Линкольн", "Томас Джефферсон", "Джон Адамс"],
        answer: 0
    },
    {
        question: "Когда началась Первая мировая война?",
        options: ["1914", "1939", "1941", "1870"],
        answer: 0
    },
    {
        question: "Какой год стал началом Второй мировой войны?",
        options: ["1939", "1914", "1945", "1933"],
        answer: 0
    },
    {
        question: "Кто был императором России в 1812 году?",
        options: ["Александр I", "Пётр I", "Николай II", "Екатерина II"],
        answer: 0
    },
    {
        question: "Когда был подписан акт о капитуляции Японии в Второй мировой войне?",
        options: ["1945", "1944", "1943", "1942"],
        answer: 0
    },
    {
        question: "Что случилось в 1989 году?",
        options: ["Падение Берлинской стены", "Начало Революции 1905 года", "Октябрьская революция", "Распад Советского Союза"],
        answer: 0
    },
    {
        question: "Какая страна была родиной Римской империи?",
        options: ["Италия", "Греция", "Франция", "Испания"],
        answer: 0
    },
    {
        question: "Когда была подписана Декларация независимости США?",
        options: ["1776", "1789", "1791", "1801"],
        answer: 0
    },
    {
        question: "Кто был лидером Французской революции?",
        options: ["Максимилиан Робеспьер", "Наполеон Бонапарт", "Шарль де Голль", "Жорж Жак Дантон"],
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
