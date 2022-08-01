if (window.matchMedia("(max-width: 768px)").matches) {
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
    ],
  });
}
