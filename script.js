/* =========================
   MOBILE MENU
========================= */

const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");

menuToggle.addEventListener("click", () => {
    navLinks.classList.toggle("active");

    const icon = menuToggle.querySelector("i");

    if (navLinks.classList.contains("active")) {
        icon.classList.remove("fa-bars");
        icon.classList.add("fa-xmark");
    } else {
        icon.classList.remove("fa-xmark");
        icon.classList.add("fa-bars");
    }
});


/* Close mobile menu after clicking a link */

document.querySelectorAll(".nav-links a").forEach(link => {

    link.addEventListener("click", () => {

        navLinks.classList.remove("active");

        const icon = menuToggle.querySelector("i");

        icon.classList.remove("fa-xmark");
        icon.classList.add("fa-bars");

    });

});


/* =========================
   MENU FILTER
========================= */

const menuTabs = document.querySelectorAll(".menu-tab");
const menuCards = document.querySelectorAll(".menu-card");

function showCategory(category) {

    menuCards.forEach(card => {

        const cardCategory = card.dataset.category;

        if (cardCategory === category) {
            card.style.display = "block";
        } else {
            card.style.display = "none";
        }

    });

}


menuTabs.forEach(tab => {

    tab.addEventListener("click", () => {

        menuTabs.forEach(item => {
            item.classList.remove("active");
        });

        tab.classList.add("active");

        const category = tab.dataset.category;

        showCategory(category);

    });

});


/* Show coffee items initially */

showCategory("coffee");