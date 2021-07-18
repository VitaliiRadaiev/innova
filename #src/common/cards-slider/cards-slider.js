{
    let cardsSliders = document.querySelectorAll('.cards-slider');
    if(cardsSliders.length) {
        cardsSliders.forEach(cardsSlider => {
            let dataSlider = new Swiper(cardsSlider.querySelector('.swiper-container'), {
                freeMode: true,
                slidesPerView: 'auto',
                spaceBetween: 0,
                speed: 800,
                preloadImages: false,
                lazy: {
                    loadPrevNext: true,
                },
                watchSlidesVisibility: true,
                // Arrows
                navigation: {
                    nextEl: cardsSlider.querySelector('.cards-slider__btn-right'),
                    prevEl: cardsSlider.querySelector('.cards-slider__btn-left'),
                },
            });
        })
    }
}