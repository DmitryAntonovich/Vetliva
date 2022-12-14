$(".guide-carousel").slick({
  dots: false,
  infinite: true,
  speed: 300,
  slidesToShow: 1,
  slidesToScroll: 1,
  centerPadding: "20px",
  adaptiveHeight: true,
  arrows: false,
  centerMode: true,
  variableWidth: true,
  asNavFor: ".guide-dots",
  swipe: false,
  responsive: [
    {
      breakpoint: 1281,
      settings: {
        centerMode: false,
        slidesToShow: 1,
        arrows: false,
        swipe: true,
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
      },
    },
  ],
});

$(".guide-dots").slick({
  slidesToShow: 3,
  slidesToScroll: 1,
  infinite: true,
  asNavFor: ".guide-carousel",
  dots: false,
  centerMode: false,
  focusOnSelect: true,
  arrows: false,
  swipe: false,
  responsive: [
    {
      breakpoint: 1281,
      settings: {
        arrows: false,
        centerMode: false,
        slidesToShow: 3,
        swipe: false,
      },
    },
    {
      breakpoint: 769,
      settings: {
        arrows: false,
        centerMode: false,
        centerPadding: "20px",
        slidesToShow: 2,
        swipe: false,
      },
    },
  ],
});

$(".guide-nav__right").click(() => {
  $(".guide-carousel").slick("slickNext");
});

$(".guide-nav__left").click(() => {
  $(".guide-carousel").slick("slickPrev");
});
