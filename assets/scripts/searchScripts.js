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

//Interactive map
$(".citySearch").click(function () {
  console.log("test");
  if (!$(this).children(".map-fill__zone").hasClass("map-color")) {
    $(this).children(".map-fill__zone").addClass("map-color");
    $(this).children(".map-fill__point").addClass("map-color__point");
  } else {
    $(this).children(".map-fill__zone").removeClass("map-color");
    $(this).children(".map-fill__point").removeClass("map-color__point");
  }
});
