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
    await timeout(4500);
    startMotivasi.classList.remove("visible");
    startMotivasi.classList.add("hidden");
    imgSendiri1();
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

const removeSixPerson = async() => {
    let sixPerson = document.getElementById("six-person");
    sixPerson.classList.remove("visible");
    sixPerson.classList.add("hidden");
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
    await mainText("Ini adalah Budi.", 3000);
    await mainText(
        "Awalnya, Budi adalah orang yang pendiam dan tidak mau bersosialisasi.",
        4500
    );
    await mainText(
        "Ditambah selama pandemi, Ia banyak menghabiskan waktu di rumah,",
        4500
    );
    await mainText("sehingga  menjadi orang yang penyendiri,", 4000);
    await mainText("dan, Ia tidak mempunyai seorang teman pun.", 4000);
    await mainText("Seringkali Budi merasa kesepian.", 3500);
    await mainText("Budi juga ingin berubah, seperti anda.", 4000);
    await mainText("Dia pelan-pelan membangkitkan rasa percaya dirinya.", 4000);
    await mainText(
        "Membuka diri, mulai menjalin pertemanan dengan orang lain.",
        4500
    );
    await mainText("Akhirnya, Budi membuka diri untuk mencari teman.", 4500);
    await mainText("Tentunya di lingkungan yang positif.", 4500);
    imgSendiri2();
    await mainText("Perlahan, Budi menemukan teman baru.", 4500);
    await timeout(1000);
    await imgSendiri6();
    await timeout(500);
    imgSendiri4();
    await timeout(500);
    imgSendiri3();
    await timeout(500);
    await mainText("Perlahan namun pasti, teman Budi bertambah banyak", 4500);
    await imgSendiri5();
    await timeout(4500);
    removeMainStory();
    await timeout(2000);
    await duaText("Sekarang, Budi sudah berubah", 4500);
    await duaText("Budi lebih bahagia.", 3000);
    sixPerson();
    await duaText("Ini adalah hasil dari tekad Budi untuk berubah.", 4500);
    await duaText("Budi dikelilingi oleh teman teman yang bermanfaat.", 4500);
    await duaText(
        "Hubungan <i>Give and Take</i> yang positif pun juga Budi alami.",
        4500
    );
    await duaText("Adapula manfaat lainnya yang Budi terima.", 4000);
    await duaText("Sepertiii....", 2000);
    await duaText("Berbagi cerita dengan teman temannya.", 4000);
    await duaText("Menolong, dan ditolong mereka.", 4000);
    await duaText("Budi juga bisa berbagi kebahagiaan dengan mereka.", 4000);
    await duaText("Dan masih banyak lagi manfaat lainnya.", 4000);
    await duaText(
        "Bagi Budi, bersosialisasi menjadi hal yang menyenangkan.",
        4000
    );
    await duaText("Budi menyadari bahwa, ", 3000);

    await duaText(
        "sebagai manusia, kita tidak akan pernah bisa hidup sendiri.",
        4500
    );
    await duaText(
        "Kita memerlukan tempat untuk membagi segala hal yang kita <i>'punya.'</i>.",
        4500
    );
    await duaText(
        "<i>And even though it takes time, still, a small progress is better than nothing.</i>",
        4500
    );
    await duaText(
        "<i>So, take your time, enjoy the progress and cherish all the moments you <center>experience</center>.</i>",
        4500
    );
    await duaText("<i>And, don't forget to be kind to yourself.</i>", 4500);
    removeSixPerson();
    contentHasFinished();
};

const contentHasFinished = () => {
    let startContent = document.getElementById("start-container");
    let startDescText = document.getElementById("start-desc-text");
    startContent.classList.remove("hidden");
    startDescText.innerText = "Mulai lagi?";
    startDescText.fontFamily = "Jura";
    startContent.classList.add("visible");
    document.addEventListener("click", start);
};

const musicPlay1 = () => {
    document.getElementById("audio1").play();
};

const musicPlay2 = () => {
    document.getElementById("audio2").play();
};

document.addEventListener("click", start);