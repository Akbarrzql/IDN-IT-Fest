const timeout = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

const start = async() => {
    let startContent = document.getElementById("start-container");
    startContent.classList.remove("visible");
    startContent.classList.add("hidden");
    document.removeEventListener("click", start);
    musicPlay1();
    await timeout(1000);
    startSatu();
};

const startSatu = async() => {
    let startMotivasi = document.getElementById("start-motivasi");
    startMotivasi.classList.remove("hidden");
    startMotivasi.classList.add("visible");
    await timeout(4000);
    startMotivasi.classList.remove("visible");
    startMotivasi.classList.add("hidden");
    imgSendiri1();
};

const contentMotivator = async() => {
    let mainContent = document.getElementById("motivaator");
    mainContent.classList.remove("d-none");
    let contentMotivator = document.querySelectorAll("#contentMotivator");
    for (i = 0; i < contentMotivator.length; i++) {
        contentMotivator[i].classList.remove("hidden");
        contentMotivator[i].classList.add("visible");
    }
};

const imgSendiri1 = async() => {
    let imgSatu = document.getElementById("img-sendiri-1");
    startTextAnimation();
    imgSatu.classList.remove("hidden");
    imgSatu.classList.add("visible");

    document.removeEventListener("click", imgSendiri1);
};

const imgSendiri2 = async() => {
    let imgDua = document.getElementById("img-sendiri-2");
    imgDua.classList.remove("hidden");
    imgDua.classList.add("visible");
};

const imgSendiri3 = async() => {
    let imgTiga = document.getElementById("img-sendiri-3");
    imgTiga.classList.remove("hidden");
    imgTiga.classList.add("visible");
};

const imgSendiri4 = async() => {
    let imgEmpat = document.getElementById("img-sendiri-4");
    imgEmpat.classList.remove("hidden");
    imgEmpat.classList.add("visible");
};

const imgSendiri5 = async() => {
    let imgLima = document.getElementById("img-sendiri-5");
    imgLima.classList.remove("hidden");
    imgLima.classList.add("visible");
};

const imgSendiri6 = async() => {
    let imgLima = document.getElementById("img-sendiri-6");
    imgLima.classList.remove("hidden");
    imgLima.classList.add("visible");
};

const sixPerson = async() => {
    let sixPerson = document.getElementById("six-person");
    sixPerson.classList.remove("hidden");
    sixPerson.classList.add("visible");
};

const mainText = async(text, ms) => {
    let mainContent = document.getElementById("story-main-text");

    // write text
    await timeout(1000);
    mainContent.innerHTML = text;
    mainContent.classList.add("visible");
    // hide text
    await timeout(ms);
    mainContent.classList.remove("visible");
    mainContent.classList.add("hidden");
};

const duaText = async(text, ms) => {
    let duaContent = document.getElementById("story-dua-text");

    // write text
    await timeout(1000);
    duaContent.innerHTML = text;
    duaContent.classList.add("visible");
    // hide text
    await timeout(ms);
    duaContent.classList.remove("visible");
    duaContent.classList.add("hidden");
};

const removeMainStory = async() => {
    let mainStory = document.getElementById("main-storyBoard");
    mainStory.classList.remove("visible");
    mainStory.classList.add("hidden");
    await timeout(2000);
    mainStory.classList.add("d-none");
};
const startTextAnimation = async() => {
    await mainText("Ini adalah Budi.", 4000);
    await mainText(
        "Awalnya, Budi adalah orang yang pendiam, dan tidak mau bersosialisasi.",
        4000
    );
    await mainText(
        "Selama masa pandemi, Budi banyak menghabiskan waktu di rumah.",
        4000
    );
    await mainText("Sehingga, Budi menjadi orang yang penyendiri. ", 4000);
    await mainText(
        "Mengakibatkan, Budi tidak mempunyai seorang teman pun.",
        4000
    );
    await mainText("Seringkali Budi merasa kesepian.", 4000);
    await mainText("Budi juga ingin berubah, seperti anda.", 4000);
    await mainText("Dia pelan pelan membangkitkan rasa percaya dirinya.", 4000);
    await mainText(
        "Membuka diri, mulai menjalin pertemanan dengan orang lain.",
        4000
    );

    await mainText("Akhirnya, Budi membuka diri untuk mencari teman.", 4000);
    await mainText("Tentunya di lingkungan yang positif.", 4000);

    // await mainText(
    //     "Karena merasa cocok, Budi mulai menemukan titik terang dalam bersosialisasi",
    //     100
    // );

    imgSendiri2();
    await mainText("Perlahan, Budi menemukan teman baru.", 3000);
    await timeout(1000);
    await imgSendiri6();
    await timeout(500);
    imgSendiri4();
    await timeout(500);
    imgSendiri3();
    await timeout(500);
    await mainText(
        "Dari waktu ke waktu, akhirnya teman Budi menjadi banyak",
        3000
    );
    await imgSendiri5();
    await timeout(3000);
    removeMainStory();
    await timeout(2000);

    await duaText("Sekarang, Budi sudah berubah", 3000);
    await duaText("Budi lebih bahagia.", 3000);

    sixPerson();
    await duaText("Ini adalah hasil dari tekad untuk berubah Budi.", 3000);
    await duaText("Budi dikelilingi oleh teman teman yang bermanfaat.", 3000);
    await duaText(
        "Hubungan <i>Take and Give</i> yang positif pun juga Budi alami.",
        3000
    );
    await duaText("Adapula manfaat lainnya yang Budi terima.", 3000);
    await duaText("Sepertiii....", 2000);
    await duaText("Berbagi cerita dengan teman temannya.", 3000);
    await duaText("Menolong, dan ditolong teman temannya.", 3000);
    await duaText(
        "Budi juga bisa berbagi kebahagiaan dengan teman temannya.",
        3000
    );
    await duaText("Dan masih banyak lagi manfaat lainnya.", 3000);
    await duaText("Bagi Budi, bersosialisasi itu menyenangkan.", 3000);
    await duaText("");
};

const musicPlay1 = () => {
    document.getElementById("audio1").play();
};

const musicPlay2 = () => {
    document.getElementById("audio2").play();
};

document.addEventListener("click", start);