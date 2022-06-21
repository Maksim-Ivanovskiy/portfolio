const hamburger = document.querySelector('.hamburger'),
      menu = document.querySelector('.menu'),
      closeElem = document.querySelector('.menu__close');

hamburger.addEventListener('click', () => {
    menu.classList.add('active');
});

closeElem.addEventListener('click', () => {
    menu.classList.remove('active');
});

const counters = document.querySelectorAll('.skills__ratings-counter'),
      lines = document.querySelectorAll('.skills__ratings-line span');

counters.forEach((item, i) => {
    lines[i].style.width = item.innerHTML;
})

const cb = (entries) => {
    const [entry] = entries
    const aside = document.querySelector('aside')
    entry.isIntersecting ? aside.classList.add('reverse') : aside.classList.remove('reverse')
};

const changeColor = () => {
    const promo = document.querySelector('.promo')
    const observer = new IntersectionObserver(cb, { root: null, threshold: 0.5 })
    observer.observe(promo)
}

document.addEventListener('DOMContentLoaded', () => {
    changeColor()
})
