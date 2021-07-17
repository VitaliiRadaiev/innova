{
    let slider = document.querySelector('.promo-header__body');
    if(slider) {
        let urls = [];

        let promoItems = document.querySelectorAll('.promo-header__item');
        if(promoItems.length) {
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
            effect: 'fade',
            observer: true,
            observeParents: true,
            slidesPerView: 1,
            spaceBetween: 0,
            speed: 800,
            preloadImages: false,
            lazy: {
            	loadPrevNext: true,
            },
            pagination: {
            	el: slider.querySelector('.swiper-pagination'),
            	clickable: true,
                renderBullet: function(index, className) {
                    console.log(index);
                    return '<span class="'+ className +'"> <img src="' + urls[index] + '" alt=""></span>';
                }
            },
            //watchSlidesVisibility: true,

            /*
            breakpoints: {
                320: {
                    slidesPerView: 1,
                    spaceBetween: 0,
                    autoHeight: true,
                },
                768: {
                    slidesPerView: 2,
                    spaceBetween: 20,
                },
                992: {
                    slidesPerView: 3,
                    spaceBetween: 20,
                },
                1268: {
                    slidesPerView: 4,
                    spaceBetween: 30,
                },
            },
            */
        });
    }

}