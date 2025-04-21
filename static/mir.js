const savollar = [
    {
        savol: "Mirzo Ulug‘bek qachon tug‘ilgan?",
        variantlar: ["1394", "1409", "1370", "1412"],
        togri: 0
    },
    {
        savol: "Mirzo Ulug‘bek kim bo‘lgan?",
        variantlar: ["Shoir", "Sulton", "Olim va hukmdor", "Qo‘mondon"],
        togri: 2
    },
    {
        savol: "Ulug‘bek qaysi shaharni ilm markaziga aylantirgan?",
        variantlar: ["Buxoro", "Samarqand", "Toshkent", "Hirot"],
        togri: 1
    },
    {
        savol: "Mirzo Ulug‘bekning mashhur yulduzlar jadvali nomi?",
        variantlar: ["Astronomiya asosi", "Ziji Jadidi Ko‘ragoniy", "Yulduzlar ilmi", "Samoviy jadval"],
        togri: 1
    },
    {
        savol: "Ulug‘bek kimning nabirasi?",
        variantlar: ["Shayboniy", "Amir Temur", "Alisher Navoiy", "Jaloliddin Manguberdi"],
        togri: 1
    },
    {
        savol: "Samarqanddagi mashhur observatoriyasining xarobalari qayerda?",
        variantlar: ["Registon", "Afrosiyob", "Shahrisabz", "Xiva"],
        togri: 1
    },
    {
        savol: "Mirzo Ulug‘bekning to‘liq ismi nima?",
        variantlar: ["Muhammad Tarag‘ay", "Jaloliddin Mirzo", "Alimxon Ulug‘bek", "Abdullo Ulug‘bek"],
        togri: 0
    },
    {
        savol: "Ulug‘bek nechanchi asrda yashagan?",
        variantlar: ["IX", "XV", "XVII", "XIII"],
        togri: 1
    },
    {
        savol: "Ulug‘bekning astronomiyaga qo‘shgan hissasi nimada?",
        variantlar: ["Quyosh tizimini yaratdi", "Teleskopni ixtiro qildi", "1018 ta yulduzni aniqladi", "Oyga uchdi"],
        togri: 2
    },
    {
        savol: "Ulug‘bekning o‘limi qanday bo‘lgan?",
        variantlar: ["Tinch hayotda vafot etgan", "Dushman tomonidan o‘ldirilgan", "Kasallikdan", "Safarda"],
        togri: 1
    }
];

let joriy = 0;
let ball = 0;

function savolniChiqarish() {
    const s = savollar[joriy];
    document.getElementById("savolMatni").textContent = `${joriy + 1}. ${s.savol}`;
    const variantlarDiv = document.getElementById("variantlar");
    variantlarDiv.innerHTML = "";

    s.variantlar.forEach((v, i) => {
        const tugma = document.createElement("div");
        tugma.className = "variant";
        tugma.textContent = v;
        tugma.onclick = () => javobniTekshir(i);
        variantlarDiv.appendChild(tugma);
    });
}

function javobniTekshir(tanlov) {
    if (tanlov === savollar[joriy].togri) {
        ball += 10;
    }
    joriy++;
    if (joriy < savollar.length) {
        savolniChiqarish();
    } else {
        document.getElementById("savolMatni").textContent = "Test tugadi!";
        document.getElementById("variantlar").innerHTML = "";
        document.getElementById("natija").textContent = `Umumiy ball: ${ball} / 100`;
    }
}

savolniChiqarish();
