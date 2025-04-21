const savollar = [
    {
        savol: "'Birinchi’ so'zi qanday so'z turkumiga kiradi?",
        variantlar: ["Fe’l", "Ot", "Sifat", "Raqam"],
        togri: 2
    },
    {
        savol: "'Yaxshi’ so'zi qanday so'z turkumiga kiradi?",
        variantlar: ["Sifat", "Fe’l", "Olmosh", "Ot"],
        togri: 0
    },
    {
        savol: "'O'qigan’ so'zi qanday morfema bilan tugaydi?",
        variantlar: ["Qo'shma so'z", "Hosila so'z", "Ixtisoslashgan so'z", "Yagona so'z"],
        togri: 1
    },
    {
        savol: "'U qayerga bormoqda?’ gapidagi savol so'zi qaysi?",
        variantlar: ["qayer", "bormoqda", "u", "gapda yo'q"],
        togri: 0
    },
    {
        savol: "'Ajoyib’ so'zi qanday so'z turkumiga kiradi?",
        variantlar: ["Sifat", "Fe’l", "Ot", "Olmosh"],
        togri: 0
    },
    {
        savol: "'Yaxshi’ so'zi qanday gapda ishlatiladi?",
        variantlar: ["Men yaxshiman", "Men yaxshi", "Men yaxshi", "Men yaxshiman"],
        togri: 0
    },
    {
        savol: "'U qanday yigit?’ gapida qanday so'z turkumi ishlatilgan?",
        variantlar: ["Sifat", "Fe’l", "Olmosh", "Ot"],
        togri: 0
    },
    {
        savol: "To'g'ri yozilgan variantni tanlang:",
        variantlar: ["kitoblar", "kitoblar", "kitoblar", "kitoblar"],
        togri: 1
    },
    {
        savol: "'O'qish’ so'zi qanday so'z turkumiga kiradi?",
        variantlar: ["Fe’l", "Ot", "Sifat", "Raqam"],
        togri: 1
    },
    {
        savol: "'O'ylash’ so'zi qanday so'z turkumiga kiradi?",
        variantlar: ["Fe’l", "Ot", "Sifat", "Raqam"],
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
