const menuBtn = document.getElementById("menuBtn");
const mobileNav = document.getElementById("mobileNav");

if (menuBtn && mobileNav) {
  menuBtn.addEventListener("click", () => {
    mobileNav.classList.toggle("open");
  });

  mobileNav.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => mobileNav.classList.remove("open"));
  });
}

const yearEl = document.getElementById("year");
if (yearEl) yearEl.textContent = new Date().getFullYear();

const form = document.getElementById("contactForm");
const note = document.getElementById("formNote");

if (form && note) {
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const data = new FormData(form);
    const name = (data.get("name") || "").toString().trim() || "there";

    note.textContent =
      `Thanks, ${name}. This form is currently a demo. Next step is connecting it to email (Formspree) or a backend.`;

    form.reset();
  });
}
