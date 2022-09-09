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
        variableWidth: true,
        centerMode: true,
        centerPadding: "40px",
        slidesToShow: 1,
        swipe: true,
        dots: true,
      },
    },
  ],
});
