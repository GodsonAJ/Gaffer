const body = document.body;
const themeToggle = document.getElementById("themeToggle");
const themeIcon = document.getElementById("themeIcon");
const logo = document.getElementById("logo");

let isDark = true;

themeToggle.addEventListener("click", () => {
  isDark = !isDark;

  if (isDark) {
    body.classList.remove("light");
    body.classList.add("dark");

    logo.src = "./assets/images/logo-dark-theme.svg";
    themeIcon.src = "./assets/images/icon-sun.svg";
  } else {
    body.classList.remove("dark");
    body.classList.add("light");

    logo.src = "./assets/images/logo-light-theme.svg";
    themeIcon.src = "./assets/images/icon-moon.svg";
  }
});

