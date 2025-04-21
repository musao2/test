const savollar = [
    {
        savol: "‘Kitob’ so‘zi qanday so‘z turkumiga kiradi?",
        variantlar: ["Fe’l", "Ot", "Sifat", "Raqam"],
        togri: 1
    },
    {
        savol: "To‘g‘ri yozilgan so‘zni toping:",
        variantlar: ["maktap", "maqtab", "maktab", "maktob"],
        togri: 2
    },
    {
        savol: "‘U o‘qishga ketdi.’ gapida fe’l qaysi?",
        variantlar: ["u", "o‘qishga", "ketdi", "gapda yo‘q"],
        togri: 2
    },
    {
        savol: "‘Ona’ so‘zi nima bildiradi?",
        variantlar: ["Harakat", "Buyruq", "Shaxs", "Raqam"],
        togri: 2
    },
    {
        savol: "‘Chiroyli’ qanday so‘z turkumi?",
        variantlar: ["Sifat", "Fe’l", "Olmosh", "Ot"],
        togri: 0
    },
    {
        savol: "Gapdagi so‘zlar to‘g‘ri tartibda joylashgan variantni tanlang:",
        variantlar: ["Kitob men o‘qiyapman", "Men kitob o‘qiyapman", "O‘qiyapman men kitob", "Kitob o‘qiyapman men"],
        togri: 1
    },
    {
        savol: "‘U keldi.’ bu qanday gap?",
        variantlar: ["So‘roq", "Buyruq", "Hikoya", "Hayrat"],
        togri: 2
    },
    {
        savol: "To‘g‘ri yozilgan variantni toping:",
        variantlar: ["qo‘l", "qul", "qul’", "qol"],
        togri: 0
    },
    {
        savol: "‘Men’ so‘zi qanday so‘z turkumi?",
        variantlar: ["Ot", "Olmosh", "Fe’l", "Sifat"],
        togri: 1
    },
    {
        savol: "Qaysi so‘zda bo‘g‘in soni eng ko‘p?",
        variantlar: ["kitob", "daraxt", "maktab", "universitet"],
        togri: 3
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
