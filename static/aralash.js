const savollar = [
    {
        savol: "Amir Temur qaysi yilda tug'ilgan?",
        variantlar: ["1404", "1336", "1320", "1358"],
        togri: 1
    },
    {
        savol: "Boshqaruv usuli bo'yicha Rim imperiyasi qanday davlat edi?",
        variantlar: ["Respublikachilik", "Monarxiya", "Aristokratiya", "Anarkiya"],
        togri: 1
    },
    {
        savol: "Buyuk Ipak yo'li nima edi?",
        variantlar: ["Harbiy yo'l", "Savdo yo'li", "Dengiz yo'li", "Haj yo'li"],
        togri: 1
    },
    {
        savol: "O'zbekiston Respublikasi mustaqillikka erishgan yil?",
        variantlar: ["1990", "1992", "1989", "1991"],
        togri: 3
    },
    {
        savol: "Napoleon Bonapart qaysi davlat hukmdori bo'lgan?",
        variantlar: ["Italiya", "Fransiya", "Angliya", "Germaniya"],
        togri: 1
    },
    {
        savol: "1941–1945-yillar orasida sodir bo'lgan urush?",
        variantlar: ["Birinchi jahon urushi", "Sovuq urush", "Ikkinchi jahon urushi", "Fuqarolar urushi"],
        togri: 2
    },
    {
        savol: "Ulug'bek kim bo'lgan?",
        variantlar: ["Shoir", "Din peshvosi", "Olim va hukmdor", "Harbiy sarkarda"],
        togri: 2
    },
    {
        savol: "Toshkent shahri qaysi yilda O'zbekiston poytaxti bo'lgan?",
        variantlar: ["1991", "1865", "1966", "1930"],
        togri: 3
    },
    {
        savol: "Pifagor qaysi soha bilan mashhur?",
        variantlar: ["Astronomiya", "Matematika", "Tarix", "Arxitektura"],
        togri: 1
    },
    {
        savol: "Buxoro amirligi qachon tugatilgan?",
        variantlar: ["1917", "1938", "1945", "1920"],
        togri: 3
    }
];

let joriy = 0;
let ball = 0;

function savolniChiqarish() {
    const s = savollar[joriy];
    document.getElementById("savolMatni").textContent = `${joriy + 1}. ${s.savol}`;

    const variantlarDiv = document.getElementById("variantlar");
    variantlarDiv.innerHTML = "";

    s.variantlar.forEach((variant, index) => {
        const tugma = document.createElement("div");
        tugma.className = "variant";
        tugma.textContent = variant;
        tugma.onclick = () => javobniTekshir(index);
        variantlarDiv.appendChild(tugma);
    });
}

function javobniTekshir(tanlangan) {
    if (tanlangan === savollar[joriy].togri) {
        ball += 10;
    }

    joriy++;

    if (joriy < savollar.length) {
        savolniChiqarish();
    } else {
        document.getElementById("savolMatni").textContent = "Test yakunlandi!";
        document.getElementById("variantlar").innerHTML = "";
        document.getElementById("natija").textContent = `Umumiy ball: ${ball} / 100`;
    }
}

savolniChiqarish();
