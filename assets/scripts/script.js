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

<<<<<<< HEAD
$(".nav-booking").click(function () {
  $(".booking-options").toggleClass("booking-options__active");
  $(".nav-booking").children("svg").toggleClass("arrow-top");
});

$(".tourists__select__count").click(function () {
  $(".tourists-options").toggleClass("tourists-options__active");
  $(".tourists__select__count").children("svg").toggleClass("arrow-top");
=======
//password show/hide
$(".show-pass__wrapper").click(function () {
  if ($(".reg-form__pass").attr("type") == "password") {
    $(".show-pass").attr("src", "../../images/passShowed.png");
    $(".show-pass").addClass("view-pass");
    $(".reg-form__pass").attr("type", "text");
  } else {
    $(".show-pass").attr("src", "../../images/passHide.png");
    $(".show-pass").removeClass("view-pass");
    $(".reg-form__pass").attr("type", "password");
  }
  return false;
});

$(".show-pass-confirm__wrapper").click(function () {
  if ($(".reg-form__pass_confirm").attr("type") == "password") {
    $(".show-pass-confirm").attr("src", "../../images/passShowed.png");
    $(".show-pass-confirm").addClass("view-pass");
    $(".reg-form__pass_confirm").attr("type", "text");
  } else {
    $(".show-pass-confirm").attr("src", "../../images/passHide.png");
    $(".show-pass-confirm").removeClass("view-pass");
    $(".reg-form__pass_confirm").attr("type", "password");
  }
  return false;
});

// auth/reg controll

$(".auth-login").click(function () {
  $(".auth-login").toggleClass("auth-register");
  $(".btn-cross").toggleClass("btn-cross__white");

  $(".auth-form__authorize").toggleClass("auth-form__authorize__hide");
  $(".auth-form__registration").toggleClass("auth-form__registration__hide");

  $(".auth-form__nav").toggleClass("auth-form__nav__authorize");

  $(".auth-login").text(
    $(this).text() == "Войти" ? "Зарегистрироваться" : "Войти"
  );

  if ($(".greetings__text").text() == "Добро пожаловать") {
    $(".greetings__text").text("Ещё нет аккаунта?");
    $(".auth-nav__text").text("создайте свой аккаунт, чтобы оставаться с нами");
  } else {
    $(".greetings__text").text("Добро пожаловать");
    $(".auth-nav__text").text(
      "войдите в свой аккаунт, чтобы оставаться с нами"
    );
  }
});

$(".tab-auth").click(function () {
  $(".auth-form__authorize").removeClass("auth-form__authorize__hide");
  $(".auth-form__registration").addClass("auth-form__registration__hide");

  // $(".auth-form__nav").toggleClass("auth-form__nav__authorize");

  $(".auth-tab__active").removeClass("auth-tab__active");
  $(".tab-auth").addClass("auth-tab__active");
});

$(".tab-reg").click(function () {
  $(".auth-form__registration").removeClass("auth-form__registration__hide");
  $(".auth-form__authorize").addClass("auth-form__authorize__hide");

  // $(".auth-form__nav").toggleClass("auth-form__nav__authorize");

  $(".tab-auth").removeClass("auth-tab__active");
  $(".tab-reg").addClass("auth-tab__active");
>>>>>>> cb296ba0a329365029bc8998ca17eaf0d09db674
});
