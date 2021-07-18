{
    let stepSlide = document.querySelector('.step-slider');
    if(stepSlide) {
        let dataSlider = new Swiper(stepSlide, {
            observer: true,
            observeParents: true,
            slidesPerView: 1,
            spaceBetween: 20,
            autoHeight: true,
            speed: 800,
        });

        let buttonsNext = stepSlide.querySelectorAll('.step-slider__btn-next');
        if(buttonsNext.length) {
            buttonsNext.forEach(btn => {
                btn.addEventListener('click', () => {
                    dataSlider.slideNext();
                })
            })
        }

        let buttonsPrev = stepSlide.querySelectorAll('.step-slider__btn-prev');
        if(buttonsPrev.length) {
            buttonsPrev.forEach(btn => {
                btn.addEventListener('click', () => {
                    dataSlider.slidePrev();
                })
            })
        }
    }
}