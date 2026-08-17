// ================================================================
// DAY 5 STARTER TEMPLATE — script.js
// Shared by all 3 pages. This already works — feel free to add
// more interactive features of your own below!
// ================================================================


// ----------------------------------------------------------------
// Mobile menu toggle (works on every page, since every page has
// the same #menu-toggle and #nav-menu elements)
// ----------------------------------------------------------------
const menuBtn = document.getElementById("menu-toggle");
const navMenu = document.getElementById("nav-menu");

if (menuBtn) {
  menuBtn.addEventListener("click", function () {
    navMenu.classList.toggle("open");
  });
}


// ----------------------------------------------------------------
// Contact form — shows a friendly message instead of reloading
// the page (only runs on contact.html, since that's the only page
// with a #contact-form)
// ----------------------------------------------------------------
const contactForm = document.getElementById("contact-form");

if (contactForm) {
  contactForm.addEventListener("submit", function (event) {
    event.preventDefault();
    alert("Thanks! We'll get back to you soon.");
    contactForm.reset();
  });
}


// ----------------------------------------------------------------
// "Read more" toggle (about.html) — Day 4: classList.toggle
// ----------------------------------------------------------------
const moreBtn = document.getElementById("more-btn");
const extraText = document.getElementById("extra-text");

if (moreBtn) {
  moreBtn.addEventListener("click", function () {
    extraText.classList.toggle("visible");
  });
}


// ----------------------------------------------------------------
// Gallery photo highlight (index.html) — Day 4: querySelectorAll
// + classList, one card "selected" at a time
// ----------------------------------------------------------------
const galleryCards = document.querySelectorAll(".gallery-card");

galleryCards.forEach(function (card) {
  card.addEventListener("click", function () {
    galleryCards.forEach(function (c) {
      c.classList.remove("selected");
    });
    card.classList.add("selected");
  });
});


// ----------------------------------------------------------------
// "Back to top" button (every page) — Day 4: scroll event + scrollTo
// ----------------------------------------------------------------
const topBtn = document.getElementById("top-btn");

if (topBtn) {
  window.addEventListener("scroll", function () {
    if (window.scrollY > 300) {
      topBtn.classList.add("visible");
    } else {
      topBtn.classList.remove("visible");
    }
  });

  topBtn.addEventListener("click", function () {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
}


// ----------------------------------------------------------------
// Add your own JavaScript below! Some ideas:
// - a countdown or live clock
// - a simple image slideshow
// - anything else you want your site to do
// ----------------------------------------------------------------
