// slide otomatis //

var slideIndex = 0;
carousel();

function carousel() {
  var i;
  var x = document.getElementsByClassName("image-slide");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none"; 
  }
  slideIndex++;
  if (slideIndex > x.length) {slideIndex = 1} 
  x[slideIndex-1].style.display = "block"; 
  setTimeout(carousel, 1000); 
}

// end //

// frogres scrolling animation

function progress() {
    var windowScrollTop = $(window).scrollTop();
    var docHeight = $(document).height();
    var windowHeight = $(window).height();
    var progress = (windowScrollTop / (docHeight - windowHeight)) * 100;

    var $bgColor = progress > 99 ? "#fff" : "#fff";
    var $textColor = progress > 99 ? "#fff" : "#333";

    $("h1")
        .text(Math.round(progress) + "%")
        .css({ color: $textColor });

    $(".fill")
        .height(progress + "%")
        .css({ backgroundColor: $bgColor });
}
progress();
$(document).on("scroll", progress);

// 