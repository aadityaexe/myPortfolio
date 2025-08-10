// Hamburger toggle + mobile menu
const hambtn = document.getElementById("hambtn");
const mobileMenu = document.getElementById("mobileMenu");

function toggleMenu() {
  const isOpen = hambtn.classList.toggle("open");
  hambtn.setAttribute("aria-expanded", String(isOpen));
  if (isOpen) {
    mobileMenu.style.maxHeight = "320px";
  } else {
    mobileMenu.style.maxHeight = "0";
  }
}

hambtn.addEventListener("click", toggleMenu);

// Close mobile menu when clicking outside
document.addEventListener("click", (e) => {
  if (
    !hambtn.contains(e.target) &&
    !mobileMenu.contains(e.target) &&
    mobileMenu.style.maxHeight !== "0"
  ) {
    hambtn.classList.remove("open");
    mobileMenu.style.maxHeight = "0";
    hambtn.setAttribute("aria-expanded", "false");
  }
});

document.getElementById("toggle-skills").addEventListener("click", function () {
  const extra = document.getElementById("extra-skills");
  if (extra.classList.contains("hidden")) {
    extra.classList.remove("hidden");
    this.textContent = "Show Less";
  } else {
    extra.classList.add("hidden");
    this.textContent = "Show All Skills";
  }
});
