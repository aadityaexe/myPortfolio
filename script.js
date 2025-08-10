const hambtn = document.getElementById("hambtn");
const mobileMenu = document.getElementById("mobileMenu");

function toggleMenu() {
  const isOpen = hambtn.classList.toggle("open");
  hambtn.setAttribute("aria-expanded", String(isOpen));
  mobileMenu.style.maxHeight = isOpen ? "320px" : "0";
}

// Toggle menu on button click
hambtn.addEventListener("click", (e) => {
  e.stopPropagation(); // Prevent outside click from firing
  toggleMenu();
});

// Close mobile menu when clicking outside
document.addEventListener("click", () => {
  if (hambtn.classList.contains("open")) {
    hambtn.classList.remove("open");
    mobileMenu.style.maxHeight = "0";
    hambtn.setAttribute("aria-expanded", "false");
  }
});

// Close menu when clicking a link
mobileMenu.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    hambtn.classList.remove("open");
    mobileMenu.style.maxHeight = "0";
    hambtn.setAttribute("aria-expanded", "false");
  });
});
