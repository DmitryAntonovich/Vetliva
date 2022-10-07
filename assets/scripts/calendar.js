function initCalendar() {
  today = new Date();

  $(".date__from").dateRangePicker({
    separator: " to ",
    language: "ru",
    startDate: today,
    format: "DD.MM.YYYY",
    stickyMonths: true,

    customArrowPrevSymbol: `<svg class="cu-p main-arrow rotate-right" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M0.617962 5.67354C-0.0915052 4.96258 -0.207119 3.66485 0.359752 2.77504C0.926622 1.88523 1.96134 1.74023 2.6708 2.4512L7.5 7.29658L12.3292 2.4512C13.0387 1.74023 14.0734 1.88523 14.6402 2.77504C15.2071 3.66485 15.0915 4.96258 14.382 5.67354L8.55223 11.5229C7.96475 12.1376 7.09456 12.1711 6.47358 11.5488L0.617962 5.67354Z" fill="#264B87"></path>
    </svg>`,
    customArrowNextSymbol: `<svg class="cu-p main-arrow rotate-left" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M0.617962 5.67354C-0.0915052 4.96258 -0.207119 3.66485 0.359752 2.77504C0.926622 1.88523 1.96134 1.74023 2.6708 2.4512L7.5 7.29658L12.3292 2.4512C13.0387 1.74023 14.0734 1.88523 14.6402 2.77504C15.2071 3.66485 15.0915 4.96258 14.382 5.67354L8.55223 11.5229C7.96475 12.1376 7.09456 12.1711 6.47358 11.5488L0.617962 5.67354Z" fill="#264B87"></path>
    </svg>`,

    getValue: function () {
      if ($(".datepicker_from").val() && $(".datepicker_to").val())
        return $(".datepicker_from").val() + " to " + $(".datepicker_to").val();
      else return "";
    },
    setValue: function (s, s1, s2) {
      $(".datepicker_from").val(s1);
      $(".datepicker_to").val(s2);

      setDaysCount($(".selected-days-num").html());
    },
  });

  $(".date__to").dateRangePicker({
    separator: " to ",
    language: "ru",
    startDate: today,
    format: "DD.MM.YYYY",
    stickyMonths: true,

    customArrowPrevSymbol: `<svg class="cu-p main-arrow rotate-right" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M0.617962 5.67354C-0.0915052 4.96258 -0.207119 3.66485 0.359752 2.77504C0.926622 1.88523 1.96134 1.74023 2.6708 2.4512L7.5 7.29658L12.3292 2.4512C13.0387 1.74023 14.0734 1.88523 14.6402 2.77504C15.2071 3.66485 15.0915 4.96258 14.382 5.67354L8.55223 11.5229C7.96475 12.1376 7.09456 12.1711 6.47358 11.5488L0.617962 5.67354Z" fill="#264B87"></path>
    </svg>`,
    customArrowNextSymbol: `<svg class="cu-p main-arrow rotate-left" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M0.617962 5.67354C-0.0915052 4.96258 -0.207119 3.66485 0.359752 2.77504C0.926622 1.88523 1.96134 1.74023 2.6708 2.4512L7.5 7.29658L12.3292 2.4512C13.0387 1.74023 14.0734 1.88523 14.6402 2.77504C15.2071 3.66485 15.0915 4.96258 14.382 5.67354L8.55223 11.5229C7.96475 12.1376 7.09456 12.1711 6.47358 11.5488L0.617962 5.67354Z" fill="#264B87"></path>
    </svg>`,

    getValue: function () {
      if ($(".datepicker_from").val() && $(".datepicker_to").val())
        return $(".datepicker_from").val() + " to " + $(".datepicker_to").val();
      else return "";
    },
    setValue: function (s, s1, s2) {
      $(".datepicker_from").val(s1);
      $(".datepicker_to").val(s2);

      setDaysCount($(".selected-days-num").html());
    },
  });

  $(".day").hover(setDaysCount($(".selected-days-num").html()));

  daysCount = $(".selected-days-num").html();
  $(".month-wrapper").after(`<div class="days-сount">${daysCount} дней</div>`);
}

function setDaysCount(count) {
  $(".days-сount").html(`${count} дней`);
}

initCalendar();
