window.addEventListener("scroll", function () {
  const navbar = document.querySelector(".navbar-container");

  if (window.scrollY > 100) {
    navbar.classList.add("navbar-fixed");
  } else {
    navbar.classList.remove("navbar-fixed");
  }
});

// kontak
const image = document.querySelector(".left-side img");
const confirmationModal = document.getElementById("confirmation-modal");
const closeModalButton = document.querySelector(".close");
const form = document.querySelector("form");

image.addEventListener("mouseover", () => {
  image.style.transform = "scale(1.1)";
});

image.addEventListener("mouseout", () => {
  image.style.transform = "scale(1)";
});

form.addEventListener("submit", (e) => {
  e.preventDefault();

  form.style.display = "none";
  confirmationModal.style.display = "block";
});

closeModalButton.addEventListener("click", () => {
  confirmationModal.style.display = "none";
});

window.addEventListener("click", (e) => {
  if (e.target === confirmationModal) {
    confirmationModal.style.display = "none";
  }
});
