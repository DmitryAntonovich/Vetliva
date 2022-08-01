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
