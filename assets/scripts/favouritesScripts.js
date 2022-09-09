$(".card_image").slick({
  arrows: false,
  variableWidth: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  swipe: false,
  centerMode: true,
  infinite: true,
  arrows: true,
  responsive: [
    {
      breakpoint: 1281,
      settings: {
        arrows: true,
        variableWidth: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        swipe: true,
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

$(".favourite-nav_item").click(function () {
  $(".favourite-nav_item__active").removeClass("favourite-nav_item__active");
  $(this).addClass("favourite-nav_item__active");
});
