const savollar = [
    {
        savol: "‘O‘qish’ so‘zi qanday so‘z turkumiga kiradi?",
        variantlar: ["Fe’l", "Ot", "Sifat", "Raqam"],
        togri: 1
    },
    {
        savol: "To‘g‘ri yozilgan so‘zni toping:",
        variantlar: ["yozish", "yozish", "yozish", "yozish"],
        togri: 2
    },
    {
        savol: "‘U o‘qidi.’ gapida fe’l qaysi?",
        variantlar: ["u", "o‘qidi", "ketdi", "gapda yo‘q"],
        togri: 1
    },
    {
        savol: "‘Chiroyli’ qanday so‘z turkumi?",
        variantlar: ["Sifat", "Fe’l", "Olmosh", "Ot"],
        togri: 0
    },
    {
        savol: "‘Men’ so‘zi qanday so‘z turkumi?",
        variantlar: ["Ot", "Olmosh", "Fe’l", "Sifat"],
        togri: 1
    },
    {
        savol: "‘Chiroyli’ qanday so‘z turkumi?",
        variantlar: ["Sifat", "Fe’l", "Olmosh", "Ot"],
        togri: 0
    },
    {
        savol: "To‘g‘ri yozilgan variantni tanlang:",
        variantlar: ["bo‘lgan", "bo‘lish", "bo‘lgan", "bo‘lish"],
        togri: 0
    },
    {
        savol: "‘Kitob’ so‘zi qanday so‘z turkumi?",
        variantlar: ["Fe’l", "Ot", "Sifat", "Raqam"],
        togri: 1
    },
    {
        savol: "To‘g‘ri yozilgan variantni tanlang:",
        variantlar: ["qul", "qul", "qol", "qo‘l"],
        togri: 3
    },
    {
        savol: "‘Ona’ so‘zi nima bildiradi?",
        variantlar: ["Ot", "Olmosh", "Sifat", "Raqam"],
        togri: 0
    }
];

let hozirgi = 0;
let ball = 0;

function savolniYukla() {
    const s = savollar[hozirgi];
    document.getElementById("savol").textContent = `${hozirgi + 1}. ${s.savol}`;

    const variantlarQuti = document.getElementById("variantlar");
    variantlarQuti.innerHTML = "";

    s.variantlar.forEach((v, i) => {
        const btn = document.createElement("button");
        btn.textContent = v;
        btn.className = "variant";
        btn.onclick = () => javobTekshir(i);
        variantlarQuti.appendChild(btn);
    });
}

function javobTekshir(tanlangan) {
    if (tanlangan === savollar[hozirgi].togri) {
        ball += 10;
    }
    hozirgi++;
    if (hozirgi < savollar.length) {
        savolniYukla();
    } else {
        document.getElementById("savol").remove();
        document.getElementById("variantlar").remove();
        document.getElementById("natija").textContent = `Your score: ${ball} / 100`;
    }
}

savolniYukla();
