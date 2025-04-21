const savollar = [
    {
        savol: "‘Katta’ so‘zi qanday so‘z turkumiga kiradi?",
        variantlar: ["Fe’l", "Ot", "Sifat", "Raqam"],
        togri: 2
    },
    {
        savol: "‘Uchish’ so‘zi qanday morfema bilan tugaydi?",
        variantlar: ["Qo‘shma so‘z", "Hosila so‘z", "Ixtisoslashgan so‘z", "Yagona so‘z"],
        togri: 1
    },
    {
        savol: "‘Boshqa’ so‘zi qanday gapda ishlatiladi?",
        variantlar: ["Men boshqa bormoqchiman", "Men boshqani kutaman", "Men boshqa o‘yladim", "Men boshqa yo‘lga boryapman"],
        togri: 1
    },
    {
        savol: "‘Boshqaruvchi’ so‘zi qanday so‘z turkumiga kiradi?",
        variantlar: ["Fe’l", "Ot", "Sifat", "Raqam"],
        togri: 1
    },
    {
        savol: "‘Tabiiy’ so‘zi qanday so‘z turkumiga kiradi?",
        variantlar: ["Sifat", "Fe’l", "Olmosh", "Ot"],
        togri: 0
    },
    {
        savol: "‘Oq’ so‘zi qanday so‘z turkumiga kiradi?",
        variantlar: ["Fe’l", "Olmosh", "Sifat", "Ot"],
        togri: 2
    },
    {
        savol: "‘Bu ishni kim qilgan?’ gapida savol so‘zi qanday so‘z turkumidan?",
        variantlar: ["Ot", "Olmosh", "Sifat", "Fe’l"],
        togri: 0
    },
    {
        savol: "‘Tez’ so‘zi qanday so‘z turkumiga kiradi?",
        variantlar: ["Sifat", "Fe’l", "Ot", "Raqam"],
        togri: 0
    },
    {
        savol: "‘Chiroyli’ so‘zi qanday so‘z turkumiga kiradi?",
        variantlar: ["Sifat", "Olmosh", "Fe’l", "Ot"],
        togri: 0
    },
    {
        savol: "‘Erkin’ so‘zi qanday so‘z turkumiga kiradi?",
        variantlar: ["Sifat", "Fe’l", "Ot", "Raqam"],
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
        document.getElementById("natija").textContent = `Sizning ballingiz: ${ball} / 100`;
    }
}

savolniYukla();
