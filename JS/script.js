const swiper = new Swiper ('.swiper', {
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
        dynamicBullets: true,
    },
    keyboard: {
        enabled:true,
    },
    autoHeight: true,
    loop: true,
});

const humb = document.querySelector('#humb');
const popup = document.querySelector('#popup');
const menu = document.querySelector('#menu').cloneNode(1);
const body = document.body;
const links = Array.from(menu.children);

humb.addEventListener('click', humbHandler);

function humbHandler (e) {
    e.preventDefault();
    popup.classList.toggle("open");
    humb.classList.toggle('active');
    body.classList.toggle('noscroll')
    renderPopup();
}

function renderPopup() {
    popup.appendChild(menu);
}
links.forEach((link) => {
    link.addEventListener("click", closeOnClick);
});

function closeOnClick() {
    popup.classList.remove("open");
    humb.classList.remove("active");
    body.classList.remove("noscroll");
}
