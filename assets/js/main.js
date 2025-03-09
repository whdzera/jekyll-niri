
document.addEventListener("DOMContentLoaded", function () {
  // Theme toggle functionality
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

  // Update icon based on initial mode
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

  // Mobile navbar toggle
  const navbarBurger = document.querySelector('.navbar-burger');
  if (navbarBurger) {
    navbarBurger.addEventListener('click', () => {
      const target = document.getElementById(navbarBurger.dataset.target);
      navbarBurger.classList.toggle('is-active');
      target.classList.toggle('is-active');
    });
  }
  
  // Add animation to cards on scroll
  const animateOnScroll = () => {
    const cards = document.querySelectorAll('.post-card');
    cards.forEach(card => {
      const cardTop = card.getBoundingClientRect().top;
      const windowHeight = window.innerHeight;
      if (cardTop < windowHeight * 0.9) {
        card.classList.add('animate__fadeIn');
        card.style.opacity = 1;
      }
    });
  };
  
  window.addEventListener('scroll', animateOnScroll);
  animateOnScroll(); // Run on initial load
});