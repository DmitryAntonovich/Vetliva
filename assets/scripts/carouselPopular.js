$(".popular-slider__main").slick({
  // dots: true,
  arrows: false,
  variableWidth: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  swipe: false,
  centerMode: true,
  infinite: true,
  responsive: [
    {
      breakpoint: 1280,
      settings: {
        arrows: false,
        variableWidth: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        swipe: false,
        centerMode: true,
        infinite: true,
      },
    },
    {
      breakpoint: 768,
      settings: {
        arrows: false,
        centerMode: false,
        centerPadding: "40px",
        slidesToShow: 1,
        swipe: true,
        dots: true,
      },
    },
  ],
});

$(".popular-slider__sub").slick({
  slidesToShow: 3,
  slidesToScroll: 3,
  arrows: false,
  infinite: true,
  variableWidth: true,

  responsive: [
    {
      breakpoint: 1280,
      settings: {
        variableWidth: true,
        swipe: true,
        centerMode: false,
        infinite: true,
      },
    },
    {
      breakpoint: 768,
      settings: {
        arrows: false,
        centerMode: false,
        centerPadding: "0px",
        slidesToShow: 2,
        variableWidth: true,
      },
    },
  ],
});

$(".popular-nav__left").click(() => {
  popularMove("Prev", 3);
});
$(".popular-nav__right").click(() => {
  popularMove("Next", 3);
});

function popularMove(way, slides) {
  $(".popular-slider__main").slick(`slick${way}`);
  for (i = 0; i < slides; i++) {
    $(".popular-slider__sub").slick(`slick${way}`);
  }
}
