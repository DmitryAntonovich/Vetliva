// if (window.matchMedia("(max-width: 768px)").matches) {

if ($(window).width() <= 768) {
  $(".blog-content").slick({
    responsive: [
      {
        breakpoint: 768,
        settings: {
          arrows: false,
          centerMode: false,
          centerPadding: "0px",
          slidesToShow: 2,
          slidesToScroll: 1,
          variableWidth: true,
          infinite: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          arrows: false,
          centerMode: false,
          centerPadding: "0px",
          slidesToShow: 1,
          slidesToScroll: 1,
          variableWidth: true,
          infinite: true,
        },
      },
    ],
  });
}
