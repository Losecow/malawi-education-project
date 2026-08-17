// ================================================================
// DAY 4 — FILL-IN-THE-BLANK PRACTICE ANSWERS (teacher reference)
// ================================================================
// Matches the 4 practice slides in day4-javascript.pptx.
// Show this AFTER students have tried filling in the blanks
// themselves — not before!
// ================================================================


// PRACTICE 1 — Button Click -> Alert
const helloBtn = document.getElementById("hello-btn");

helloBtn.addEventListener("click", function () {
  alert("Hello!");
});


// PRACTICE 2 — Mobile Menu Toggle
const menuBtn = document.getElementById("menu-toggle");
const navMenu = document.getElementById("nav-menu");

menuBtn.addEventListener("click", function () {
  navMenu.classList.toggle("open");
});


// PRACTICE 3 — Highlight a Clicked Gallery Card
const cards = document.querySelectorAll(".card");

cards.forEach(function (card) {
  card.addEventListener("click", function () {
    cards.forEach(function (c) {
      c.classList.remove("selected");
    });
    card.classList.add("selected");
  });
});


// PRACTICE 4 — Show or Hide Extra Text
const moreBtn = document.getElementById("more-btn");
const extraText = document.getElementById("extra-text");

moreBtn.addEventListener("click", function () {
  extraText.classList.toggle("visible");
});


// PRACTICE 5 — A "Back to Top" Button
const topBtn = document.getElementById("top-btn");

window.addEventListener("scroll", function () {
  if (window.scrollY > 300) {
    topBtn.classList.add("visible");
  } else {
    topBtn.classList.remove("visible");
  }
});

topBtn.addEventListener("click", function () {
  window.scrollTo({ top: 0 });
});
