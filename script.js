let hoverSlide = $(".Navigation-buttons2");

let menuBtn = $(".menu-btn").on("click", () => {
  hoverSlide.addClass("move-in");
});

$(".Navigation-buttons2").on("click", () => {
  $(".Navigation-buttons2").removeClass("move-in");
});

$(document).on("scroll", () => {
  if ($(window).scrollTop() > 400) {
    $("nav").addClass("blur");
    $(".menu-btn,.search-btn").addClass("maker");
  } else {
    $("nav").removeClass("blur");
    $(".menu-btn,.search-btn").removeClass("maker");
  }
});

$(".register").on("click", () => {
  window.location.href = "Masters.html";
});

$("#Cotonou").on("click", () => {
  window.location.href = "AboutCotonu.html";
});

$("#Excursion").on("click", () => {
  window.location.href = "Excursion.html";
});

$("#schoolBuilding").on("click", () => {
  window.location.href = "OurUniversity.html";
});
