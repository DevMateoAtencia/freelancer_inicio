let navbar = document.querySelector(".header .nav__menu");
let menuBtn = document.querySelector("#menu-btn");

menuBtn.onclick = () => {
  menuBtn.classList.toggle("fa-times");
  navbar.classList.toggle("active");
};

window.onscroll = () => {
  menuBtn.classList.remove("fa-times");
  navbar.classList.remove("active");
};

$(document).ready(function () {
  $(window).on("scroll", function () {
    let posicion = $("#primary").offset();
    if ($(window).scrollTop() >= posicion.top) {
      $("header").removeClass("transparent");
    } else {
      $("header").addClass("transparent");
    }
  });
});
