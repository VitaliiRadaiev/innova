{
    let gallerSliders = document.querySelectorAll('.gallery__slider');
    if(gallerSliders.length) {
        gallerSliders.forEach(slider => {
            let dataSlider = new Swiper(slider.querySelector('.swiper-container'), {
                observer: true,
                observeParents: true,
                slidesPerView: 1,
                spaceBetween: 0,
                speed: 800,
                preloadImages: false,
                lazy: {
                	loadPrevNext: true,
                },
                watchSlidesVisibility: true,
                navigation: {
                    nextEl: slider.querySelector('.gallery__btn-right'),
                    prevEl: slider.querySelector('.gallery__btn-left'),
                },
            });
            
        })
    }

    let navItems = document.querySelectorAll('.gallery__nav-item');
    if(navItems.length) {
        navItems.forEach(item => {
            let id = item.dataset.tab;
            let slider = document.querySelector(`.gallery__slider[data-tab="${id}"]`);
            if(id && slider) {
                item.addEventListener('click', () => {
                    item.classList.add('active');
                    slider.classList.add('active');

                    navItems.forEach(i => {
                        if(i === item) return;
                        let id = i.dataset.tab;
                        let slider = document.querySelector(`.gallery__slider[data-tab="${id}"]`);

                        i.classList.remove('active');
                        slider.classList.remove('active');
                    })
                })
            }
        })
    }
}