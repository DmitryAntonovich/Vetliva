// function rightModalToggler() {
//   console.log("modal toggler");

//   $(".header-burger").click(() => {
//     modalShow($(".right-modal"));

//     $(".left-modal__bg").removeClass("left-modal__bg");
//     $(".left-modal__content").removeClass("left-modal__content");

//     $(".modal-actions").removeClass("modal-menu__hide");
//     $(".modal-booking_filter").css("display", "none");
//   });
// }

function rightModalToggler() {
  modalShow($(".right-modal"));

  $(".left-modal__bg").removeClass("left-modal__bg");
  $(".left-modal__content").removeClass("left-modal__content");

  $(".modal-actions").removeClass("modal-menu__hide");
  $(".modal-booking_filter").css("display", "none");
}

$(".booking-filter").click(function () {
  modalShow($(".right-modal"));
  $(".modal-nav").addClass("modal-nav__left");

  hideRates();

  $(".right-modal__bg").addClass("left-modal__bg ");
  $(".right-modal__content").addClass("left-modal__content ");

  $(".modal-booking_filter").css("display", "flex");
  $(".modal-actions").addClass("modal-menu__hide");
});

$(".modal-nav").click(() => {
  modalHide($(".right-modal"));
});

$(".right-modal__bg").click(() => {
  modalHide($(".right-modal"));
});

// modal-menu__hide
$(".modal-menu__rates").click(function () {
  $(".modal-actions").addClass("modal-menu__hide");
  $(".modal-actions__rates").addClass("modal-actions__rates__active");
  $(".modal-nav__back").addClass("modal-nav__back__active");

  $(".modal-nav__left").removeClass("modal-nav__left");
});

$(".modal-nav__back").click(hideRates);

function hideRates() {
  $(".modal-actions").removeClass("modal-menu__hide");
  $(".modal-actions__rates").removeClass("modal-actions__rates__active");
  $(".modal-nav__back").removeClass("modal-nav__back__active");
}

$(".booking-filter__drop").click(function () {
  expandFilter($(this));
});

function expandFilter(item) {
  // console.log(item.children(".booking-filter_tab__arrow"));
  item
    .children(".booking-filter_tab__arrow")
    .toggleClass("booking-filter__arrow__rotate");

  item.parent().next().toggleClass("booking-filter_details__hide");
}

function modalShow(item) {
  item.css({
    display: "flex",
    visibility: "visible",
    opacity: "1",
  });
  $("body").css("overflow", "hidden");
  item.addClass("block__active");
}

function modalHide(item) {
  item.css({
    display: "none",
    visibility: "none",
    opacity: "0",
  });
  $("body").css("overflow", "auto");
  $(".modal-nav__left").removeClass("modal-nav__left");
}
