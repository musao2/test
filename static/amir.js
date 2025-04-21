const savollar = [
    {
        savol: "Amir Temur qachon tug‘ilgan?",
        variantlar: ["1336", "1350", "1310", "1375"],
        togri: 0
    },
    {
        savol: "Amir Temur qayerda tug‘ilgan?",
        variantlar: ["Samarqand", "Shahrisabz", "Buxoro", "Termiz"],
        togri: 1
    },
    {
        savol: "Amir Temurning to‘liq ismi?",
        variantlar: ["Temur Malik", "Amir Temur", "Temur G‘uriy", "Temur ibn Tarag‘ay"],
        togri: 3
    },
    {
        savol: "U qaysi davlat asoschisi bo‘lgan?",
        variantlar: ["Shayboniylar", "Xorazmshohlar", "Temuriylar", "Karaxoniylar"],
        togri: 2
    },
    {
        savol: "Amir Temur poytaxt qilgan shahar?",
        variantlar: ["Xiva", "Samarqand", "Buxoro", "Balx"],
        togri: 1
    },
    {
        savol: "Amir Temurning mashhur yozuvi?",
        variantlar: ["Haqq yo‘lida", "Adolat ustuvor", "Kuch – adolatda", "Ilm kuchdir"],
        togri: 2
    },
    {
        savol: "Temurning eng mashhur avlodi kim?",
        variantlar: ["Mirzo Ulug‘bek", "Jaloliddin Manguberdi", "Muhammad Sulton", "Alisher Navoiy"],
        togri: 0
    },
    {
        savol: "Temurning qabr joylashgan joyi?",
        variantlar: ["Gur Amir maqbarasi", "Registon", "Shohi Zinda", "Toshkent"],
        togri: 0
    },
    {
        savol: "Amir Temurning asosiy maqsadi nima bo‘lgan?",
        variantlar: ["Dushmanlarga qarshi kurash", "Ilm tarqatish", "Kuchli markaziy davlat barpo etish", "Tijoratni rivojlantirish"],
        togri: 2
    },
    {
        savol: "Amir Temur qaysi yili vafot etgan?",
        variantlar: ["1405", "1399", "1380", "1415"],
        togri: 0
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
        document.getElementById("savolMatni").textContent = "Test yakunlandi!";
        document.getElementById("variantlar").innerHTML = "";
        document.getElementById("natija").textContent = `Umumiy ball: ${ball} / 100`;
    }
}

savolniChiqarish();
