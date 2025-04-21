const savollar = [
    {
        savol: "Alisher Navoiy qachon tug‘ilgan?",
        variantlar: ["1441", "1501", "1465", "1420"],
        togri: 0
    },
    {
        savol: "Alisher Navoiy qaysi tilda asarlar yozgan?",
        variantlar: ["Ruscha", "Arabcha", "Forscha", "Turkcha"],
        togri: 3
    },
    {
        savol: "Alisher Navoiy qayerda tug‘ilgan?",
        variantlar: ["Samarqand", "Buxoro", "Hirot", "Toshkent"],
        togri: 2
    },
    {
        savol: "\"Xamsa\" deb nomlangan asarlar turkumi nechta dostonni o‘z ichiga oladi?",
        variantlar: ["3", "4", "5", "6"],
        togri: 2
    },
    {
        savol: "Navoiy qaysi hukmdor saroyida xizmat qilgan?",
        variantlar: ["Amir Temur", "Ulug‘bek", "Husayn Boyqaro", "Shayboniyxon"],
        togri: 2
    },
    {
        savol: "Alisher Navoiy qanday taxallusda yozgan?",
        variantlar: ["Shohnoma", "Sakkokiy", "Navoiy", "Bedil"],
        togri: 2
    },
    {
        savol: "Alisher Navoiy qachon vafot etgan?",
        variantlar: ["1501", "1441", "1510", "1470"],
        togri: 0
    },
    {
        savol: "Alisher Navoiy nechta tilda ijod qilgan?",
        variantlar: ["1", "2", "3", "4"],
        togri: 1
    },
    {
        savol: "Navoiyga oid qaysi asar 20 asrda maktab darsligiga kiritilgan?",
        variantlar: ["Farhod va Shirin", "Layli va Majnun", "Saddi Iskandariy", "Mahbub ul-qulub"],
        togri: 0
    },
    {
        savol: "“Mahbub ul-qulub” asarining ma’nosi nima?",
        variantlar: ["Dilbarlar makoni", "Yaxshilar hayoti", "Qalblar kitobi", "Donishmandlar manzili"],
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
