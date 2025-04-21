const questions = [
    {
      question: "What is your name?",
      options: ["My name is John", "I’m fine", "Yes, I do", "Ten o’clock"],
      correct: 0
    },
    {
      question: "How old are you?",
      options: ["I’m fine", "I’m 20 years old", "From London", "Yes, she is"],
      correct: 1
    },
    {
      question: "Where are you from?",
      options: ["Blue", "From Canada", "Fine, thanks", "Yes, I do"],
      correct: 1
    },
    {
      question: "What time is it?",
      options: ["At home", "In the morning", "It’s five o’clock", "Fine, thanks"],
      correct: 2
    },
    {
      question: "Can you swim?",
      options: ["Yes, I can", "No, I’m not", "I’m 15", "Fine"],
      correct: 0
    },
    {
      question: "Where do you live?",
      options: ["I’m from Spain", "In a small town", "Yes, I do", "At five o’clock"],
      correct: 1
    },
    {
      question: "Do you like music?",
      options: ["Yes, I do", "At home", "I’m fine", "London"],
      correct: 0
    },
    {
      question: "What color is the sky?",
      options: ["Yes, I am", "It’s blue", "Ten", "Spain"],
      correct: 1
    },
    {
      question: "What do you do?",
      options: ["I’m a student", "I like it", "Yes, he is", "It’s blue"],
      correct: 0
    },
    {
      question: "Is she your sister?",
      options: ["No, she isn’t", "I’m fine", "Yes, I do", "Blue"],
      correct: 0
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
  