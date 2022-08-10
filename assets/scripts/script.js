$(function () {
  $("#datepicker_from").datepicker();
  $("#datepicker_from").datepicker("option", "dateFormat", "dd.mm.yy");

  $("#datepicker_from").datepicker("option", $.datepicker.regional["ru"]);
});

$(function () {
  $("#datepicker_to").datepicker();
  $("#datepicker_to").datepicker("option", "dateFormat", "dd.mm.yy");

  $("#datepicker_to").datepicker("option", $.datepicker.regional["ru"]);
});

$(".modal-lang").click(function () {
  $(".modal-lang__options").toggleClass("modal-lang__active");
  $(".modal-lang").children(".modal-arrow").toggleClass("modal-arrow__active");
});

$(".modal-currency__current").click(function () {
  $(".modal-currency__current").toggleClass("modal-lang__select__active");
  $(".modal-currency__select").toggleClass("modal-currency__select__active");
});

$(".modal-currency__select__item").click(function () {
  $(".modal-currency__current").toggleClass("modal-lang__select__active");
  $(".modal-currency__select").toggleClass("modal-currency__select__active");
});

$(".modal-lang__current").click(function () {
  $(".modal-lang-list").toggleClass("modal-lang-list__active");
});

$(".modal-lang-item").click(function () {
  $(".modal-lang-list").toggleClass("modal-lang-list__active");
  $(".modal-lang__current").children("span").html($(this).text());
});

$(".modal-currency__select__item").click(function () {
  $(".modal-currency__current").children("span").html($(this).text());
});

// modal-menu__hide
$(".modal-menu__rates").click(function () {
  $(".modal-actions").addClass("modal-menu__hide");
  $(".modal-actions__rates").addClass("modal-actions__rates__active");
  $(".modal-nav__back").addClass("modal-nav__back__active");
});

$(".modal-nav__back").click(function () {
  $(".modal-actions").removeClass("modal-menu__hide");
  $(".modal-actions__rates").removeClass("modal-actions__rates__active");
  $(".modal-nav__back").removeClass("modal-nav__back__active");
});

$(".nav-booking").click(function () {
  $(".booking-options").toggleClass("booking-options__active");
  $(".nav-booking").children("svg").toggleClass("arrow-top");
});

$(".tourists__select__count").click(function () {
  $(".tourists-options").toggleClass("tourists-options__active");
  $(".tourists__select__count").children("svg").toggleClass("arrow-top");
});
