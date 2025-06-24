const backToTop = document.getElementById('back-to-top');
const burgerMenuClosed = document.getElementById('burger-links');
const burgerMenuOpened = document.getElementById('burger-links-open');
const burgerMenu = document.getElementById('burger-menu');


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

document.addEventListener("DOMContentLoaded", () => {
  const burger = document.getElementById("burger-links");
  const navMenu = document.getElementById("burger-menu");

  burger.addEventListener("click", () => {
    navMenu.classList.toggle("show");
  });
});
