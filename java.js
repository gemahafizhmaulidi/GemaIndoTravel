const header = document.querySelector("header");
window.addEventListener("scroll", function() {
  header.classList.toggle("sticky", this.window.scrollY > 0);
});

let currentIndex = 0;
const carouselItems = document.querySelectorAll('.carousel-item');

function changeSlide(n) {
  currentIndex += n;

  if (currentIndex < 0) {
    currentIndex = carouselItems.length - 1;
  } else if (currentIndex >= carouselItems.length) {
    currentIndex = 0;
  }

  const translateX = currentIndex * -100;
  document.querySelector('.carousel').style.transform = `translateX(${translateX}%)`;
}

document.addEventListener("DOMContentLoaded", function() {
  const loginForm = document.getElementById("login-form");
  const signUpButton = document.querySelector(".nav-btn");
  const loginSection = document.getElementById("loginsection");
  const closeButton = document.createElement("button");
  closeButton.textContent = "Close";
  closeButton.classList.add("close-button");
  loginSection.appendChild(closeButton);

  signUpButton.addEventListener("click", function() {
    loginSection.classList.toggle("open");
  });

  closeButton.addEventListener("click", function() {
    loginSection.classList.remove("open");
  });

  loginForm.addEventListener("submit", function(e) {
    e.preventDefault();

    const name = document.getElementById("name").value;
    const password = document.getElementById("password").value;

    if (name === "" || password === "") {
      alert("Please enter your name and password.");
    } else {
      alert("Login successful! Welcome, " + name + "!");
      // You can redirect the user to another page or perform other actions here
    }
  });
});
