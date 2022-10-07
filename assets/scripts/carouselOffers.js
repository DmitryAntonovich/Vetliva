$(".offers-main__slider").slick({
  arrows: false,
  variableWidth: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  swipe: false,
  centerMode: false,
  infinite: true,
  variableWidth: true,
  asNavFor: ".offers-sub__slider",
  responsive: [
    {
      breakpoint: 768,
      settings: {
        arrows: false,
        // centerMode: true,
        centerPadding: "0px",
        slidesToShow: 1,
        variableWidth: true,
      },
    },
  ],
});

$(".offers-sub__slider").slick({
  arrows: false,
  variableWidth: true,
  slidesToShow: 2,
  slidesToScroll: 2,
  swipe: false,
  centerMode: false,
  infinite: true,
  responsive: [
    {
      breakpoint: 768,
      settings: {
        arrows: false,
        // centerMode: true,
        centerPadding: "0px",
        slidesToShow: 1,
        variableWidth: true,
        centerMode: true,
      },
    },
  ],
});

$(".offers-nav__left").click(() => {
  offersMove("Prev", 1);
});
$(".offers-nav__right").click(() => {
  offersMove("Next", 1);
});

function offersMove(way, slides) {
  $(".offers-main__slider").slick(`slick${way}`);
  for (i = 0; i < slides; i++) {
    $(".offers-sub__slider").slick(`slick${way}`);
  }
}

if (window.matchMedia("(max-width: 768px)").matches) {
  $(".text-mobile").css("display", "block");
  $(".text-desktop").css("display", "none");
} else {
  $(".text-desktop").css("display", "block");
  $(".text-mobile").css("display", "none");
}
