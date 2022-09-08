document.getElementById("beranda").onclick = function() {
    location.href = "/index.html";
};

document.getElementById("mds1").onclick = function() {
    location.href = "/blog/Page/berusaha.html";
};

document.getElementById("mds2").onclick = function() {
    location.href = "/blog/Page/berhenti.html";
};

document.getElementById("mds3").onclick = function() {
    location.href = "/blog/Page/memiliki.html";
};

document.getElementById("mds4").onclick = function() {
    location.href = "/blog/Page/jangan.html";
};

document.getElementById("mds5").onclick = function() {
    location.href = "/blog/Page/percaya.html";
};

document.getElementById("mds6").onclick = function() {
    location.href = "/blog/Page/mengenali.html";
};

document.getElementById("mds7").onclick = function() {
    location.href = "/blog/Page/fokus-pada-kebahagiaan-dirimu.html";
};

document.getElementById("mds8").onclick = function() {
    location.href = "/blog/Page/tidak.html";
};

document.getElementById("mds9").onclick = function() {
    location.href = "/blog/Page/fokus-pada-hal-positif.html";
};

document.getElementById("mds10").onclick = function() {
    location.href = "/blog/Page/fokus-pada-tujuan.html";
};

document.getElementById("mds11").onclick = function() {
    location.href = "/blog/Page/ekspresikan.html";
};

document.getElementById("mds12").onclick = function() {
    location.href = "/blog/Page/cintai.html";
};

function revealMds() {
    var reveals = document.querySelectorAll(".reveal-mds");

    for (var i = 0; i < reveals.length; i++) {
        var windowHeight = window.innerHeight;
        var elementTop = reveals[i].getBoundingClientRect().top;
        var elementVisible = 0;

        if (elementTop < windowHeight - elementVisible) {
            reveals[i].classList.add("active");
        } else {
            reveals[i].classList.remove("active");
        }
    }
}

window.addEventListener("scroll", revealMds);