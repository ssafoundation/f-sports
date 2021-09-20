$(document).ready(function () {
  $(".hero__slider__image").owlCarousel({
    items: 1,
    dots: false,
    nav: false,
  });
  $(".fixer-slider-main-wrap").owlCarousel({
    items: 4,
  });
  $(".upcoming-match-list-wrap").owlCarousel({
    items: 2,
    margin: 20,
    nav: true,
    navText: [
      "<img src='assets/img/left-arrow.svg'>",
      "<img src='assets/img/right-arrow.svg'>",
    ],
  });
  $(".best-player-slider-inner-wrap").owlCarousel({
    items: 1,
    loop: true,
    nav: true,
    navText: [
      `<i class="fal fa-long-arrow-left"></i>`,
      `<i class="fal fa-long-arrow-right"></i>`,
    ],
  });
  $(".store-product-slider").owlCarousel({
    items: 4,
    loop: true,
    margin: 25,
    nav: true,
    navText: [
      `<i class="fal fa-long-arrow-left"></i>`,
      `<i class="fal fa-long-arrow-right"></i>`,
    ],
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
