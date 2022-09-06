// slide otomatis //

//NavbarScroll
const jumpTo = (id) => {
  document.getElementsByClassName(id)[0].scrollIntoView({
    behavior: "smooth",
  });
};

var slideIndex = 0;
carousel();

//end NavbarScroll

function carousel() {
  var i;
  var x = document.getElementsByClassName("image-slide");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > x.length) {
    slideIndex = 1;
  }
  x[slideIndex - 1].style.display = "block";
  setTimeout(carousel, 2500);
}

// end //
