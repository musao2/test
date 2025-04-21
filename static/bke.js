const savollar = [
    {
        savol: "JavaScript nimani ta’riflaydi?",
        javoblar: ["Interaktiv dasturlash tili", "HTMLning kengaytmasi", "Pythonning versiyasi", "CSS stilini o‘zgartirish"],
        togri: 0
    },
    {
        savol: "Python ning sintaksisida qanday operator ishlatiladi?",
        javoblar: ["=", "==", "===", "<>"],
        togri: 1
    },
    {
        savol: "JavaScriptda qanday qilib massiv yaratish mumkin?",
        javoblar: ["let arr = [1, 2, 3]", "let arr = (1, 2, 3)", "arr = {1, 2, 3}", "arr = 1, 2, 3"],
        togri: 0
    },
    {
        savol: "Pythonda o‘zgaruvchini qanday e'lon qilish mumkin?",
        javoblar: ["x = 10", "let x = 10", "const x = 10", "var x = 10"],
        togri: 0
    },
    {
        savol: "JavaScriptda funksiyani qanday yaratish mumkin?",
        javoblar: ["function myFunction() {}", "myFunction() => {}", "def myFunction():", "function = myFunction() {}"],
        togri: 0
    },
    {
        savol: "Pythonning qaysi sintaksisida funksiya e'lon qilinadi?",
        javoblar: ["def myFunction():", "function myFunction() {}", "myFunction() => {}", "function = myFunction() {}"],
        togri: 0
    },
    {
        savol: "JavaScriptda DOM nima?",
        javoblar: ["Document Object Model", "Data Object Model", "Design Object Model", "Document Object Marker"],
        togri: 0
    },
    {
        savol: "Pythonda qanday qilib sikl yaratish mumkin?",
        javoblar: ["for i in range(5):", "while i<5:", "for i<5:", "foreach(i<5):"],
        togri: 0
    },
    {
        savol: "JavaScriptda qanday qilib HTML elementiga kirish mumkin?",
        javoblar: ["document.getElementById()", "document.getElementByTagName()", "document.createElement()", "document.querySelector()"],
        togri: 0
    },
    {
        savol: "Pythonda qanday qilib fayl ochish mumkin?",
        javoblar: ["open('file.txt')", "create('file.txt')", "file.open('file.txt')", "open_file('file.txt')"],
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
