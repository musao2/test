const savollar = [
    {
        savol: "No sooner had she finished her speech _____ the audience started clapping.",
        variantlar: ["when", "than", "then", "that"],
        togri: 1
    },
    {
        savol: "It’s imperative that he _____ present at the meeting.",
        variantlar: ["is", "be", "was", "being"],
        togri: 1
    },
    {
        savol: "Scarcely had we sat down _____ the lights went out.",
        variantlar: ["than", "when", "and", "that"],
        togri: 1
    },
    {
        savol: "Were he to arrive now, we _____ surprised.",
        variantlar: ["are", "will be", "would be", "had been"],
        togri: 2
    },
    {
        savol: "He behaved as though he _____ everything.",
        variantlar: ["know", "knows", "knew", "had known"],
        togri: 2
    },
    {
        savol: "She would have gone to the party if she _____ invited.",
        variantlar: ["was", "had been", "would be", "were"],
        togri: 1
    },
    {
        savol: "Little _____ about the consequences of his decision.",
        variantlar: ["he knew", "knew he", "did he know", "does he know"],
        togri: 2
    },
    {
        savol: "I wish I _____ how to solve this problem.",
        variantlar: ["know", "knew", "have known", "had known"],
        togri: 1
    },
    {
        savol: "Not until the end of the movie _____ what was happening.",
        variantlar: ["we understood", "we did understand", "did we understand", "understood we"],
        togri: 2
    },
    {
        savol: "He acts as if he _____ the boss.",
        variantlar: ["is", "were", "was", "be"],
        togri: 1
    }
];

let joriySavol = 0;
let ball = 0;

function savolniKorsat() {
    const data = savollar[joriySavol];
    document.getElementById("savol-matni").textContent = data.savol;

    const javoblarQutisi = document.getElementById("javoblar");
    javoblarQutisi.innerHTML = "";

    data.variantlar.forEach((javob, index) => {
        const tugma = document.createElement("button");
        tugma.textContent = javob;
        tugma.onclick = () => javobniTekshir(index);
        javoblarQutisi.appendChild(tugma);
    });
}

function javobniTekshir(tanlangan) {
    const togri = savollar[joriySavol].togri;
    if (tanlangan === togri) {
        ball += 10;
        document.getElementById("ball").textContent = ball;
    }

    joriySavol++;
    if (joriySavol < savollar.length) {
        savolniKorsat();
    } else {
        document.getElementById("savol-qutisi").innerHTML = `<h2>Quiz finished!</h2><p>Your score: ${ball}</p>`;
    }
}

savolniKorsat();
