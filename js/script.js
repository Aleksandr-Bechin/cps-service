let init = false;
let brandsIsHidden = true;
let swiper;
const swiperContainer = document.querySelector('.swiper');
const brandsReadMoreBtn = document.querySelector('.brands__read-more-button');

function swiperCard() {
    if (window.innerWidth <= 768) {
        if (!init) {
            init = true;
            swiper = new Swiper('.swiper', {
                loop: true,
                slidesPerView: "1.5",

                autoplay: {
                    delay: 2500,
                    disableOnInteraction: false,
                },
                pagination: {
                    el: '.swiper-pagination',
                    clickable: true,
                },

            });
        }
    } else if (init) {
        swiper.destroy();
        init = false;

    }
}

function expandBlock() {
    if (brandsIsHidden) {
        swiperContainer.classList.remove('hidden');
        brandsReadMoreBtn.textContent = 'Скрыть';
        brandsIsHidden = false;
        brandsReadMoreBtn.classList.add('show');
    }

    else if (!brandsIsHidden) {
        swiperContainer.classList.add('hidden');
        brandsReadMoreBtn.textContent = 'Показать все';
        brandsIsHidden = true;
        brandsReadMoreBtn.classList.remove('show');
    }
}

swiperCard();
window.addEventListener('resize', swiperCard);
brandsReadMoreBtn.addEventListener('click', expandBlock)