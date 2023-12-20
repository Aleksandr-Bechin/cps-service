import 'normalize.css';
import 'swiper/css';
import 'swiper/css/pagination';
import Swiper from 'swiper';
import { Pagination } from 'swiper/modules';
import '../scss/style.scss';

const brandsSwiperContainer = document.querySelector('.brands__swiper');
const brandsReadMoreBtn = document.querySelector('.brands__read-more-button');
const techTypesReadMoreBtn = document.querySelector('.tech-types__read-more-button');
const techTypesSwiperContainer = document.querySelector('.tech-types__swiper');
const burgerButton = document.querySelector('.header__button');
const burgerMenu = document.querySelector('.side-menu');
const burgerCloseButton = document.querySelector('.side-menu__close-button');
const introDescription = document.querySelector('.intro__description');
const introReadMoreBtn = document.querySelector('.intro__read-more-button');
const menuBackground = document.querySelector('.menu-background');
const feedbackButtons = document.querySelectorAll('.get-feedback');
const feedbackCloseButton = document.querySelector('.feedback__close-button');
const feedbackMenu = document.querySelector('.feedback');
const callButtons = document.querySelectorAll('.get-call');
const callCloseButton = document.querySelector('.call__close-button');
const callMenu = document.querySelector('.call');
const popupCollection = document.querySelectorAll('.popup');

function initSwipers() {
    if (window.innerWidth <= 767) {
        const brandsSwiper = new Swiper('.brands__swiper', {
            modules: [Pagination],
            loop: true,
            slidesPerView: '1.4',
            pagination: {
                el: '.brands__swiper-pagination',
                clickable: true
            },
            breakpoints: {
                374: {
                    spaceBetween: 8
                }
            }
        });

        const techTypesSwiper = new Swiper('.tech-types__swiper', {
            modules: [Pagination],
            loop: true,
            slidesPerView: '1.7',
            spaceBetween: 24,
            pagination: {
                el: '.tech-types__swiper-pagination',
                clickable: true
            }
        });

        const pricesSwiper = new Swiper('.prices__swiper', {
            modules: [Pagination],
            loop: true,
            slidesPerView: '1.3',
            spaceBetween: 30,
            pagination: {
                el: '.prices__swiper-pagination',
                clickable: true
            }
        });
    }
}

function expandBlock(block, button, hiddenClass) {
    if (block.classList.contains(hiddenClass)) {
        button.textContent = 'Скрыть';
    } else {
        button.textContent = 'Показать всё';
    }
    block.classList.toggle(hiddenClass);
    button.classList.toggle('show');
}

function showPopup(popup) {
    menuBackground.classList.toggle('show-background');
    popup.classList.toggle('show-popup');
}

function closeAllPopups() {
    for (let i = 0; i < popupCollection.length; i++) {
        popupCollection[i].classList.remove('show-popup');
        menuBackground.classList.remove('show-background');
    }
}

initSwipers();

brandsReadMoreBtn.addEventListener('click', () => expandBlock(brandsSwiperContainer, brandsReadMoreBtn, 'hidden'));

techTypesReadMoreBtn.addEventListener('click', () => expandBlock(techTypesSwiperContainer, techTypesReadMoreBtn, 'hidden'));

introReadMoreBtn.addEventListener('click', () => expandBlock(introDescription, introReadMoreBtn, 'intro__description_hidden'));

burgerButton.addEventListener('click', () => showPopup(burgerMenu));

document.addEventListener('keydown', (event) => {
    if (event.code === 'Escape') {
        closeAllPopups();
    }
});

burgerCloseButton.addEventListener('click', () => showPopup(burgerMenu));
feedbackCloseButton.addEventListener('click', () => showPopup(feedbackMenu));
callCloseButton.addEventListener('click', () => showPopup(callMenu));

menuBackground.addEventListener('click', closeAllPopups);

feedbackButtons.forEach((item) =>
    item.addEventListener('click', () => {
        closeAllPopups();
        showPopup(feedbackMenu);
    })
);

callButtons.forEach((item) =>
    item.addEventListener('click', () => {
        closeAllPopups();
        showPopup(callMenu);
    })
);
