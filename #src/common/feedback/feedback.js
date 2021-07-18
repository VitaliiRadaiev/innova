{
    let feedbackSlider = document.querySelector('.feedback__slider');
    if(feedbackSlider) {
        let dataSlider = new Swiper(feedbackSlider, {
            slidesPerView: 'auto',
            spaceBetween: 21,
            autoHeight: true,
            speed: 800,
        });
    }
}