const timeout = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

const start = async() => {
    let startContent = document.getElementById("start-container");
    startContent.classList.remove("visible");
    startContent.classList.add("hidden");
    document.removeEventListener("click", start);
    startSatu();
    musicPlay1();
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

const mainText = async(text, ms = 6000) => {
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
    await timeout(100);
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
    await mainText("Ini adalah budi", 100);
    await mainText(
        "Awalnya, budi adalah orang yang pendiam, dan tidak mau bersosialisasi.",
        100
    );
    await mainText(
        "Selama masa pandemi, Budi banyak menghabiskan waktu di rumah.",
        100
    );
    await mainText("Sehingga, Budi menjadi orang individualisme. ", 100);
    await mainText("Mengakibatkan, Budi tidak mempunyai seorang teman pun.", 100);
    await mainText("Seringkali Budi merasa kesepian.", 100);
    await mainText("Budi juga ingin berubah, seperti anda.", 100);
    await mainText("Dia pelan pelan membangkitkan rasa percaya dirinya.", 100);
    await mainText(
        "Membuka diri, mulai menjalin pertemanan dengan orang lain.",
        100
    );

    await mainText("Akhirnya, Budi membuka diri untuk mencari teman.", 100);
    await mainText("Tentunya di lingkungan yang positif.", 4000);

    // await mainText(
    //     "Karena merasa cocok, Budi mulai menemukan titik terang dalam bersosialisasi",
    //     100
    // );

    imgSendiri2();
    await duaText("Perlahan, budi menemukan teman baru.", 4000);
    await timeout(1000);
    await imgSendiri6();
    await timeout(500);
    imgSendiri4();
    await timeout(500);
    imgSendiri3();
    await timeout(500);
    await duaText(
        "Dari waktu ke waktu, akhirnya teman budi menjadi banyak",
        4000
    );
    await imgSendiri5();
    await timeout(4000);
    removeMainStory();
};

const musicPlay1 = () => {
    document.getElementById("audio1").play();
};

const musicPlay2 = () => {
    document.getElementById("audio2").play();
};

document.addEventListener("click", start);