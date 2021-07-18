{
    let hero = document.querySelector('.hero');
    if(hero) {
        let img = hero.querySelector('.hero__img');
        let header = document.querySelector('.header');
        if(img && header) {
            const minusMarginTop = () => {
                img.style.marginTop = -(header.clientHeight + 18) + 'px';
            }

            minusMarginTop();
            window.addEventListener('resize', minusMarginTop);
        }
    }
}