{
    let slider = document.querySelector('.promo-header__body');
    if (slider) {
        let urls = [];

        let promoItems = document.querySelectorAll('.promo-header__item');
        if (promoItems.length) {
            promoItems.forEach(item => {
                let img = item.querySelector('.promo-header__bg img');
                let src = img.getAttribute('src') || img.getAttribute('data-src');
                let layer = item.querySelector('.promo-header__top-layer');

                layer.style.backgroundImage = `url(${src})`;
                urls.push(src);
            })
        }



        let dataSlider = new Swiper(slider, {
            autoHeight: true,
            
            observer: true,
            observeParents: true,
            slidesPerView: 1,
            spaceBetween: 0,
            speed: 800,
            preloadImages: false,
            lazy: {
                loadPrevNext: true,
            },
            mousewheel: {
                sensitivity: 1,
                releaseOnEdges: true,
            },
            pagination: {
                el: slider.querySelector('.swiper-pagination'),
                clickable: true,
                renderBullet: function (index, className) {
                    return '<span class="' + className + '"> <img src="' + urls[index] + '" alt=""></span>';
                }
            },
            breakpoints: {
                320: {
                    direction: "horizontal",
                    effect: 'fade',
                },
                992: {
                    direction: "vertical",
                    effect: 'slide',
                },
            },
        });
    }

    //_is-form-open
    let header = document.querySelector('.header');
    let social = document.querySelector('.side-social');
    let promoHeader = document.querySelector('.promo-header');
    let promoForm = document.querySelector('.promo-header-form');
    let btnClose = document.querySelector('.promo-header-form__close');
    let buttonsTriggers = document.querySelectorAll('.promo-header__btn');

    if(buttonsTriggers.length) {
        buttonsTriggers.forEach(btn => {
            btn.addEventListener('click', (e) => {
                e.preventDefault();
                if(header) header.classList.add('_is-form-open');
                if(social) social.classList.add('_is-form-open');
                if(promoHeader) promoHeader.classList.add('_is-form-open');
                if(promoForm) promoForm.classList.add('open');
            })
        })
    }

    if(btnClose) {
        btnClose.addEventListener('click', () => {
            if(header) header.classList.remove('_is-form-open');
                if(social) social.classList.remove('_is-form-open');
                if(promoHeader) promoHeader.classList.remove('_is-form-open');
                if(promoForm) promoForm.classList.remove('open');
        })
    }
}