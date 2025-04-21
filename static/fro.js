const savollar = [
    {
        savol: "HTML ning to‘g‘ri shakli qanday?",
        javoblar: ["<html>...</html>", "<head>...</head>", "<body>...</body>", "<header>...</header>"],
        togri: 0
    },
    {
        savol: "CSS nimani ta’riflaydi?",
        javoblar: ["Funktsiyalar", "Stil", "Dasturlash tili", "Ma'lumotlar bazasi"],
        togri: 1
    },
    {
        savol: "JavaScript nima uchun ishlatiladi?",
        javoblar: ["Veb sahifalarni qurish", "Veb sahifalarni bezash", "Interaktivlik qo‘shish", "Ma'lumotlar saqlash"],
        togri: 2
    },
    {
        savol: "CSS ni qanday qilib HTML faylga ulash mumkin?",
        javoblar: ["<link rel='stylesheet' href='style.css'>", "<script src='style.css'></script>", "<style src='style.css'></style>", "<link src='style.css'>"],
        togri: 0
    },
    {
        savol: "JavaScript fayllari qanday kengaytma bilan bo‘ladi?",
        javoblar: [".html", ".css", ".js", ".java"],
        togri: 2
    },
    {
        savol: "HTML da qanday elementlar bo‘ladi?",
        javoblar: ["<div>", "<form>", "<input>", "<all>"],
        togri: 0
    },
    {
        savol: "CSS ning eng asosiy vazifasi nima?",
        javoblar: ["Ma'lumotlarni saqlash", "Veb sahifani joriy qilish", "Sahifaning ko‘rinishini bezash", "Sahifani tashkil etish"],
        togri: 2
    },
    {
        savol: "JavaScript orqali nima bajarish mumkin?",
        javoblar: ["Dasturlash", "Sahifa elementlarini yaratish", "Sahifa interaktivligini ta'minlash", "HTML strukturasini yaratish"],
        togri: 2
    },
    {
        savol: "‘<div>’ elementining roli nima?",
        javoblar: ["Matnni ko‘rsatish", "Sahifa ichida blok yaratish", "Sahifada linklarni ko‘rsatish", "Sahifa tuzilmasini o‘zgartirish"],
        togri: 1
    },
    {
        savol: "‘<p>’ elementi nimani ifodalaydi?",
        javoblar: ["Paragraf", "List", "Rasm", "Link"],
        togri: 0
    }
];

let hozirgiSavol = 0;
let ball = 0;

function savolniYukla() {
    const joriy = savollar[hozirgiSavol];
    document.getElementById("savol").textContent = `${hozirgiSavol + 1}. ${joriy.savol}`;

    const javoblarQuti = document.getElementById("javoblar");
    javoblarQuti.innerHTML = "";

    joriy.javoblar.forEach((javob, index) => {
        const tugma = document.createElement("button");
        tugma.textContent = javob;
        tugma.className = "javob-duxi";
        tugma.onclick = () => javobniTekshir(index);
        javoblarQuti.appendChild(tugma);
    });
}

function javobniTekshir(tanlangan) {
    if (tanlangan === savollar[hozirgiSavol].togri) {
        ball += 10;
    }
    hozirgiSavol++;
    if (hozirgiSavol < savollar.length) {
        savolniYukla();
    } else {
        document.getElementById("savol").remove();
        document.getElementById("javoblar").remove();
        document.getElementById("natija").textContent = `Sizning ballingiz: ${ball} / 100`;
    }
}

savolniYukla();
