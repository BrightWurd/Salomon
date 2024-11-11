let hoverSlide = $(".Navigation-buttons2");

let menuBtn = $(".menu-btn").on("click", () => {
  hoverSlide.addClass("move-in");
});

$(".Navigation-buttons2").on("click", () => {
  $(".Navigation-buttons2").removeClass("move-in");
});
