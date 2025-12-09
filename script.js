// Mobile nav toggle
const navToggle = document.getElementById("navToggle");
const navLinks = document.getElementById("navLinks");

if (navToggle && navLinks) {
  navToggle.addEventListener("click", () => {
    navLinks.classList.toggle("open");
  });

  // Close nav on link click (mobile)
  navLinks.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      navLinks.classList.remove("open");
    });
  });
}

// Year in footer
const yearEl = document.getElementById("year");
if (yearEl) {
  yearEl.textContent = new Date().getFullYear();
}

// Simple reviews slider
const slider = document.getElementById("reviewsSlider");
const dotsContainer = document.getElementById("sliderDots");

if (slider && dotsContainer) {
  const cards = slider.querySelectorAll(".review-card");
  const dots = dotsContainer.querySelectorAll(".dot");
  let current = 0;

  function showSlide(index) {
    cards.forEach((c, i) => c.classList.toggle("active", i === index));
    dots.forEach((d, i) => d.classList.toggle("active", i === index));
    current = index;
  }

  dots.forEach((dot) => {
    dot.addEventListener("click", () => {
      const index = parseInt(dot.dataset.index, 10);
      showSlide(index);
    });
  });

  // Auto-rotate every 6 seconds
  setInterval(() => {
    const next = (current + 1) % cards.length;
    showSlide(next);
  }, 6000);
}

// FAQ accordion
document.querySelectorAll(".faq-item").forEach((item) => {
  const button = item.querySelector(".faq-question");
  button.addEventListener("click", () => {
    item.classList.toggle("open");
  });
});

// Simple fake submit handlers (front-end only)
// Later you can connect to Formspree / backend

function handleSimpleForm(formId) {
  const form = document.getElementById(formId);
  if (!form) return;
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    alert("Thank you! We have received your request. Jan Seva Plus will contact you soon.");
    form.reset();
  });
}

handleSimpleForm("heroForm");
handleSimpleForm("contactForm");
