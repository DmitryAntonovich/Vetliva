$(".popularoffers-slider").slick({
  arrows: true,
  variableWidth: true,
  slidesToShow: 3,
  slidesToScroll: 3,
  swipe: true,
  centerMode: false,
  infinite: true,
  responsive: [
    {
      breakpoint: 1280,
      settings: {
        arrows: true,
        variableWidth: true,
        slidesToShow: 3,
        slidesToScroll: 3,
        swipe: true,
        centerMode: false,
        infinite: true,
      },
    },
    {
      breakpoint: 768,
      settings: {
        arrows: false,
        variableWidth: true,
        centerMode: false,
        centerPadding: "40px",
        slidesToShow: 2,
        swipe: true,
        dots: true,
      },
    },
  ],
});
