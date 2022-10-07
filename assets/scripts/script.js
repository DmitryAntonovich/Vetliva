// $(function () {\
//   $(".datepicker_from").datepicker();
//   $(".datepicker_from").datepicker("option", "dateFormat", "dd.mm.yy");

//   $(".datepicker_from").datepicker("option", $.datepicker.regional["ru"]);
// });

// $(function () {
//   $(".datepicker_to").datepicker();
//   $(".datepicker_to").datepicker("option", "dateFormat", "dd.mm.yy");

//   $(".datepicker_to").datepicker("option", $.datepicker.regional["ru"]);
// });

// $(function () {
//   $.datepicker.regional["ru"] = {
//     closeText: "Закрыть",
//     prevText: "Пред",
//     nextText: "След",
//     currentText: "Сегодня",
//     monthNames: [
//       "Январь",
//       "Февраль",
//       "Март",
//       "Апрель",
//       "Май",
//       "Июнь",
//       "Июль",
//       "Август",
//       "Сентябрь",
//       "Октябрь",
//       "Ноябрь",
//       "Декабрь",
//     ],
//     monthNamesShort: [
//       "Янв",
//       "Фев",
//       "Мар",
//       "Апр",
//       "Май",
//       "Июн",
//       "Июл",
//       "Авг",
//       "Сен",
//       "Окт",
//       "Ноя",
//       "Дек",
//     ],
//     dayNames: [
//       "воскресенье",
//       "понедельник",
//       "вторник",
//       "среда",
//       "четверг",
//       "пятница",
//       "суббота",
//     ],
//     dayNamesShort: ["вск", "пнд", "втр", "срд", "чтв", "птн", "сбт"],
//     dayNamesMin: ["Вс", "Пн", "Вт", "Ср", "Чт", "Пт", "Сб"],
//     weekHeader: "Нед",
//     dateFormat: "dd.mm.yy",
//     firstDay: 1,
//     isRTL: false,
//     showMonthAfterYear: false,
//     yearSuffix: "",
//   };
//   $.datepicker.setDefaults($.datepicker.regional["ru"]);

//   var dateFormat = "dd.mm.yy",
//     from = $(".datepicker_from")
//       .datepicker({
//         defaultDate: "+1w",
//         changeMonth: true,
//         numberOfMonths: 2,
//         dateFormat: "dd.mm.yy",
//       })
//       .on("change", function () {
//         to.datepicker("option", "minDate", getDate(this));
//       }),
//     to = $(".datepicker_to")
//       .datepicker({
//         defaultDate: "+1w",
//         changeMonth: true,
//         numberOfMonths: 2,
//         dateFormat: "dd.mm.yy",
//       })
//       .on("change", function () {
//         from.datepicker("option", "maxDate", getDate(this));
//       });

//   function getDate(element) {
//     var date;
//     try {
//       date = $.datepicker.parseDate(dateFormat, element.value);
//     } catch (error) {
//       date = null;
//     }

//     return date;
//   }
// });

// $(".ui-datepicker-div").after(".booking-form__params");

// import starRating from "../libs/star-rating-svg-master/";

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

//onclick show options
$(".nav-booking").click(function () {
  $(".booking-options").toggleClass("booking-options__active");
  $(".nav-booking__svg").toggleClass("nav-booking__svg__active");
});

$(".tourists__select__count").click(function () {
  $(".tourists-options").toggleClass("tourists-options__active");
  $(".tourists-count__arrow").toggleClass("svg-arrow__active");
});

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

  $(".auth-tab__active").removeClass("auth-tab__active");
  $(".tab-auth").addClass("auth-tab__active");
});

$(".tab-reg").click(function () {
  $(".auth-form__registration").removeClass("auth-form__registration__hide");
  $(".auth-form__authorize").addClass("auth-form__authorize__hide");

  $(".tab-auth").removeClass("auth-tab__active");
  $(".tab-reg").addClass("auth-tab__active");
});

$(".find-region__select").click(function () {
  $(".booking-options__search").toggleClass("booking-options__active");
});
$(".booking-option__search").click(function () {
  $(".booking-options__search").toggleClass("booking-options__active");
});

$(".booking-sort_type").click(function () {
  $(".booking-sort_type__arrow").toggleClass("main-arrow__active");
  $(".booking-sort_options").toggleClass("booking-sort_options__active");
});

$(".find-category__select").click(function () {
  $(".booking-category_type__arrow").toggleClass("main-arrow__active");
  $(".booking-type_options").toggleClass("booking-sort_options__active");
});

$(".card-rate__select").click(function () {
  $(this.nextElementSibling).toggleClass("card-select_options__active");
  $(this)
    .children("div.card-rate__select__arrow")
    .toggleClass("card-rate__select__arrow__active");
});

$(".nav-lang__wrapper").click(() => {
  $(".header__modal-lang__options").toggleClass("modal-lang__options__active");
  $(".header-lang__svg").toggleClass("header-lang__svg__active");
});

$(".card-select__option").click(function () {
  $(this).parent().parent().toggleClass("card-select_options__active");
  $(this)
    .children("div.card-rate__select__arrow")
    .toggleClass("card-rate__select__arrow__active");

  $(this)
    .parents(".card-rate")
    .children(".card-rate__select")
    .children(".card-rate__select__arrow")
    .toggleClass("card-rate__select__arrow__active");
});

//active booking tab

$(".form-content__item").click(function () {
  $(".tab_active").removeClass("tab_active");
  $(this).addClass("tab_active");
});

//table chess active tabs
function chessActiveAfter() {
  items = document.querySelectorAll(".placechess-room__info__active");
  items.forEach((item) => {
    if (
      item.nextElementSibling !== null &&
      item.nextElementSibling.classList.contains(
        "placechess-room__info__active"
      )
    ) {
      item.nextElementSibling.classList.add(
        "placechess-room__info__active__chain"
      );
    }
  });
}

chessActiveAfter();

//text toggle

function windowSizeText() {
  if ($(window).width() <= "768") {
    $(".text-desktop").css("display", "none");
    $(".text-mobile").css("display", "block");
    $(".booking-sort_title").css("display", "none");
    $(".placechess-rooms__type").css("display", "none");
  } else {
    $(".placechess-rooms__type").css("display", "block");
    $(".text-desktop").css("display", "block");
    $(".text-mobile").css("display", "none");
    $(".booking-sort_title").css("display", "block");
  }
}

//Interactive map
$(".city").click(function () {
  // console.log("test");
  if (!$(this).children(".map-fill__zone").hasClass("map-color")) {
    $(this).children(".map-fill__zone").addClass("map-color");
    $(this).children(".map-fill__point").addClass("map-color__point");
  } else {
    $(this).children(".map-fill__zone").removeClass("map-color");
    $(this).children(".map-fill__point").removeClass("map-color__point");
  }
});

adultMinusAction = $(".adults__decrement");
adultPlusAction = $(".adults__increment");

childMinusAction = $(".childs__decrement");
childPlusAction = $(".childs__increment");

adultMinusAction.click(function () {
  decrement($(".adults__count"));
});

adultPlusAction.click(function () {
  increment($(".adults__count"));
});

childMinusAction.click(function () {
  decrement($(".childs__count"));
});

childPlusAction.click(function () {
  increment($(".childs__count"));
});

function increment(field) {
  value = Number(field.html());
  field.html(value + 1);
  value == 10 ? field.html(10) : field.html(value + 1);

  setTourists();
}

function decrement(field) {
  value = Number(field.html());
  value == 0 ? field.html(0) : field.html(value - 1);
  setTourists();
}

function setTourists() {
  adultsCount = Number($(".adults__count").html());
  childsCount = Number($(".childs__count").html());

  touristsCount = $(".tourists__count").html();
  touristsString = touristsCount.split(" ");

  touristsCount = adultsCount + childsCount;

  if (touristsCount > 1 && touristsCount <= 4) {
    touristsStr = "гостя";
  } else {
    touristsStr = "гостей";
  }
  if (touristsCount > 0 && touristsCount <= 1) {
    touristsStr = "гость";
  }

  $(".tourists__count").html(`
    ${touristsCount} ${touristsStr}
  `);

  console.log(touristsCount);
}

windowSizeText();

$(window).on("load resize", windowSizeText);
