document.addEventListener("DOMContentLoaded", function () {
    const toggleButton = document.getElementById("toggle-button");
    const themeIcon = document.getElementById("theme-icon");
    const currentTheme = localStorage.getItem("theme");

    // Light Mode sebagai default (Dark Mode hanya aktif jika sebelumnya dipilih)
    if (currentTheme === "dark") {
        document.documentElement.classList.add("is-dark");
    } else {
        document.documentElement.classList.remove("is-dark");
        localStorage.setItem("theme", "light"); // Pastikan default tersimpan
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
        document.documentElement.classList.toggle("is-dark");

        if (document.documentElement.classList.contains("is-dark")) {
            localStorage.setItem("theme", "dark");
        } else {
            localStorage.setItem("theme", "light");
        }

        updateIcon();
    });
});