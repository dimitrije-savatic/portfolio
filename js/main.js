const backToTop = document.getElementById('back-to-top');
const burgerMenuClosed = document.getElementById('burger-links');
const burgerMenuOpened = document.getElementById('burger-links-open');
const burgerMenu = document.getElementById('burger-menu');
const links = document.querySelectorAll('.burger-link');

// back to top button
window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
        backToTop.style.display = 'flex';
    } else {
        backToTop.style.display = 'none';
    }
})

backToTop.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    })
})

//burger menu
document.addEventListener("DOMContentLoaded", () => {
    const burger = document.getElementById("burger-links");
    const navMenu = document.getElementById("burger-menu");
    const burgerOpen = document.getElementById("burger-links-open");


    burger.addEventListener("click", () => {
        navMenu.classList.toggle("show");
        burger.classList.toggle('hide');
        burgerOpen.classList.toggle('show');
        document.body.classList.toggle("overflow");
    });

    burgerOpen.addEventListener('click', () => {
        navMenu.classList.toggle('show');
        burger.classList.toggle('hide');
        burgerOpen.classList.toggle('show');
        document.body.classList.toggle("overflow");
    })

    links.forEach(link => {
        link.addEventListener('click', () => {
            navMenu.classList.toggle('show');
            burger.classList.toggle('hide');
            burgerOpen.classList.toggle('show');
            document.body.classList.toggle("overflow");
        })
    });
});
