document.addEventListener("DOMContentLoaded", function () {
  const toggleButton = document.getElementById("toggle-button");
  const themeIcon = document.getElementById("theme-icon");
  const currentTheme = localStorage.getItem("theme");

  // Set default theme to Dark Mode
  if (!currentTheme) {
    document.documentElement.classList.add("is-dark");
    localStorage.setItem("theme", "dark");
  } else if (currentTheme === "dark") {
    document.documentElement.classList.add("is-dark");
  } else {
    document.documentElement.classList.remove("is-dark");
  }

  function updateIcon() {
    if (document.documentElement.classList.contains("is-dark")) {
      themeIcon.classList.replace("fa-moon", "fa-sun");
    } else {
      themeIcon.classList.replace("fa-sun", "fa-moon");
    }
  }

  // Perbarui ikon sesuai mode awal
  updateIcon();

  toggleButton.addEventListener("click", () => {
    requestAnimationFrame(() => {
      document.documentElement.classList.toggle("is-dark");
      if (document.documentElement.classList.contains("is-dark")) {
        localStorage.setItem("theme", "dark");
      } else {
        localStorage.setItem("theme", "light");
      }
      updateIcon();
    });
  });
});
