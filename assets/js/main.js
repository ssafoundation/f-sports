$(document).ready(function () {
  $(".hero__slider__image").owlCarousel({
    items: 1,
    dots: false,
    nav: false,
  });
  $(".owl-carousel").owlCarousel({
    items: 4,
  });

  // ==============================
  $(window).on("scroll", function () {
    var scroll = $(window).scrollTop();
    if (scroll < 1) {
      $(".header-main-area").removeClass("scroll-header");
    } else {
      $(".header-main-area").addClass("scroll-header");
    }
  });
});
