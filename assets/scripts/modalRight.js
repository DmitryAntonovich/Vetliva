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
  //   item.css({
  //     display: "flex",
  //     visibility: "visible",
  //     opacity: "1",
  //     transition: "all 1s",
  //   });

  item.css({
    transition: "all 0.1s",
    display: "flex",
  });

  item.animate({
    visibility: "visible",
    opacity: "1",
  });
}

function modalHide(item) {
  item.animate({
    visibility: "none",
    opacity: "0",
  });

  item.css({
    display: "none",
    // visibility: "none",
    // opacity: "0",
  });
}
