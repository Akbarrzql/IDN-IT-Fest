//NavbarScroll
const jumpTo = (id) => {
    document.getElementsByClassName(id)[0].scrollIntoView({
        behavior: "smooth",
    });
};

var slideIndex = 0;

//end NavbarScroll

document.getElementById("mds1").onclick = function () {
    location.href = "berusaha.html";
  };
  
  document.getElementById("mds2").onclick = function () {
    location.href = "berhenti.html";
  };
  
  document.getElementById("mds3").onclick = function () {
    location.href = "memiliki.html";
  };
  
  document.getElementById("mds4").onclick = function () {
    location.href = "jangan.html";
  };
  
  document.getElementById("mds5").onclick = function () {
    location.href = "percaya.html";
  };
  
  document.getElementById("mds6").onclick = function () {
    location.href = "mengenali.html";
  };
  
  document.getElementById("mds7").onclick = function () {
    location.href = "fokus-pada-kebahagiaan-dirimu.html";
  };
  
  document.getElementById("mds8").onclick = function () {
    location.href = "tidak.html";
  };
  
  document.getElementById("mds9").onclick = function () {
    location.href = "fokus-pada-hal-positif.html";
  };
  
  document.getElementById("mds10").onclick = function () {
    location.href = "fokus-pada-tujuan.html";
  };
  
  document.getElementById("mds11").onclick = function () {
    location.href = "ekspresikan.html";
  };
  
  document.getElementById("mds12").onclick = function () {
    location.href = "cintai.html";
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