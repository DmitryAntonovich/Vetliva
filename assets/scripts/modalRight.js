$(".header-burger").click(() => {
  modalShow($(".right-modal"));
});

$(".modal-nav").click(() => {
  modalHide($(".right-modal"));
});

$(".right-modal__bg").click(() => {
  modalHide($(".right-modal"));
});

function modalShow(item) {
  item.css({
    display: "flex",
    visibility: "visible",
    opacity: "1",
  });

  // item.animate({

  // });
}

function modalHide(item) {
  // item.animate({
  //   visibility: "none",
  //   opacity: "0",
  // });

  item.css({
    display: "none",
    visibility: "none",
    opacity: "0",
  });
}
