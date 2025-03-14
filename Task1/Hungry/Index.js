const menuBtn = document.getElementById("menu-btn");
const navLinks = document.getElementById("nav-links");
const menuBtnIcon = menuBtn.querySelector("i");

menuBtn.addEventListener("click",(e) => {
    navLinks.classList.toggle("open");

    const isOpen = navLinks.classList.contains("open");
    menuBtnIcon.setAttribute("class",isOpen ? "ri-close-line" : "ri-menu-line")
});

navLinks.addEventListener("click", (e) => {
    navLinks.classList.remove("open");
    menuBtnIcon.setAttribute("class","ri-menu-2-line")
})

const scrollRevealOption ={
    distance: "50px",
    origin:"bottom",
    duration: 1000,
};

ScrollReveal().reveal(".container__left .container__btn" ,{
    ...scrollRevealOption,
    delay: 500,
});
ScrollReveal().reveal(".container__right h4" ,{
    ...scrollRevealOption,
    delay: 2000,
});
ScrollReveal().reveal(".container__right h2" ,{
    ...scrollRevealOption,
    delay: 2500,
});
ScrollReveal().reveal(".container__right h3" ,{
    ...scrollRevealOption,
    delay: 3000,
});
ScrollReveal().reveal(".container__right p" ,{
    ...scrollRevealOption,
    delay: 3500,
});

ScrollReveal().reveal(".container__right .img1" ,{
    ...scrollRevealOption,
    delay: 4000,
});

ScrollReveal().reveal(".container__right .img2" ,{
    ...scrollRevealOption,
    delay: 4000,
});

ScrollReveal().reveal(".location" ,{
    ...scrollRevealOption,
    origin:"left",
    delay: 5000,
});
ScrollReveal().reveal(".socials span" ,{
    ...scrollRevealOption,
    origin:"top",
    delay: 5600,
    interval: 500,
});

