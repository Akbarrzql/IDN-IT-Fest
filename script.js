// slide otomatis //

//NavbarScroll
const jumpTo = (id) => {
  document.getElementsByClassName(id)[0].scrollIntoView({
    behavior: "smooth",
  });
};

let slideIndex = 0;
showSlides();

function showSlides() {
  let i;
  let slides = document.getElementsByClassName("Slides-card");
  let dots = document.getElementsByClassName("dot-slide");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {
    slideIndex = 1;
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active-card", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active-card";
  setTimeout(showSlides, 3000); // Change image every 3 seconds
}

//event listener

document.getElementById("mds1").onclick = function () {
  location.href = "./blog/Page/berusaha.html";
};

document.getElementById("mds2").onclick = function () {
  location.href = "./blog/Page/berhenti.html";
};

document.getElementById("mds3").onclick = function () {
  location.href = "./blog/Page/memiliki.html";
};

document.getElementById("mds4").onclick = function () {
  location.href = "./blog/Page/jangan.html";
};

document.getElementById("mds5").onclick = function () {
  location.href = "./blog/Page/percaya.html";
};

document.getElementById("mds6").onclick = function () {
  location.href = "./blog/Page/mengenali.html";
};

document.getElementById("mds7").onclick = function () {
  location.href = "./blog/Page/fokus-pada-kebahagiaan-dirimu.html";
};

document.getElementById("mds8").onclick = function () {
  location.href = "./blog/Page/tidak.html";
};

document.getElementById("mds9").onclick = function () {
  location.href = "./blog/Page/fokus-pada-hal-positif.html";
};

document.getElementById("mds10").onclick = function () {
  location.href = "./blog/Page/fokus-pada-tujuan.html";
};

document.getElementById("mds11").onclick = function () {
  location.href = "./blog/Page/ekspresikan.html";
};

document.getElementById("mds12").onclick = function () {
  location.href = "./blog/Page/cintai.html";
};

const tablet = window.matchMedia("(max-width: 970px)");
const procesSpecial = document.getElementById("process-special");

function tabletResize(tablet) {
  if (tablet.matches) {
    procesSpecial.style.marginBottom = "10rem";
  } else {
    procesSpecial.style.marginBottom = "0rem";
  }
}
tablet.addListener(tabletResize);
tabletResize(tablet);

function reveal() {
  var reveals = document.querySelectorAll(".reveal");

  for (var i = 0; i < reveals.length; i++) {
    var windowHeight = window.innerHeight;
    var elementTop = reveals[i].getBoundingClientRect().top;
    var elementVisible = 150;

    if (elementTop < windowHeight - elementVisible) {
      reveals[i].classList.add("active");
    } else {
      reveals[i].classList.remove("active");
    }
  }
}

window.addEventListener("scroll", reveal);

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

// end //
