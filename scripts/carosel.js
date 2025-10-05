const carousel = document.querySelector('.carousel-container');
const leftBtn = document.querySelector('.carousel-btn.left');
const rightBtn = document.querySelector('.carousel-btn.right');

let scrollAmount = 0;
const scrollPerClick = 300;

leftBtn.addEventListener('click', () => {
    carousel.scrollBy({ left: -scrollPerClick, behavior: 'smooth' });
});
rightBtn.addEventListener('click', () => {
    carousel.scrollBy({ left: scrollPerClick, behavior: 'smooth' });
});

setInterval(() => {
    if (scrollAmount >= carousel.scrollWidth - carousel.clientWidth) {
        scrollAmount = 0;
        carousel.scrollTo({ left: 0, behavior: 'smooth' });
    } else {
        scrollAmount += scrollPerClick;
        carousel.scrollBy({ left: scrollPerClick, behavior: 'smooth' });
    }
}, 4000); 