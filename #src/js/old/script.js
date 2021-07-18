$('.intro').slick({

    asNavFor: '.intro__arrows',
    arrows: false,

    slidesToShow: 1,
    slidesToScroll: 1,
    vertical: true,
    verticalSwiping: true,

    infinite: true,



});
const slider = $('.intro');
slider.bind('wheel', wheelSlider);
slider.on('afterChange', (event, slick, currentSlide) => currentSlide + 1 === slick.slideCount && slider.unbind('wheel', wheelSlider));

function wheelSlider(e) {
    e.preventDefault();
    if (e.originalEvent.deltaY > 0) {
        $(this).slick('slickNext');
    } else {
        $(this).slick('slickPrev');
    }
};
$('.intro__arrows').slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    asNavFor: '.intro',
    dots: true,
    vertical: true,
    centerMode: true,
    focusOnSelect: true,



});
$('.completed__block').slick({

    // asNavFor: '.intro__arrows',

    asNavFor: '.completed__topright',
    slidesToShow: 1,
    slidesToScroll: 1,
    infinite: true,
    adaptiveHeight: true,
    prevArrow: '.completed__arrleft',
    nextArrow: '.completed__arrright',
});


$('.completed__topright').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    asNavFor: '.completed__block',

    prevArrow: false,
    nextArrow: '.completed__toparr',
});








$('.services__slider').slick({
    slidesToShow: 5,
    slidesToScroll: 5,

    dots: false,
    // centerMode: true,
    infinite: true,

    prevArrow: '.articles__leftarr',
    nextArrow: '.articles__righttarr',




    responsive: [{
            breakpoint: 1770,
            settings: {
                slidesToShow: 4,
            }
        },
        {
            breakpoint: 1490,
            settings: {
                slidesToShow: 3,
            }
        },
        {
            breakpoint: 1111,
            settings: {
                slidesToShow: 2,
            }
        },
        {
            breakpoint: 1111,
            settings: {
                slidesToShow: 2,
            }
        },
        {
            breakpoint: 767,
            settings: {
                slidesToShow: 1,
            }
        },


    ],
});






$('.main-slider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: false,
    arrows: false,
    infinite: true,
    asNavFor: '.thumb-slider'
});

$('.thumb-slider').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    dots: false,
    infinite: true,

    asNavFor: '.main-slider',
    focusOnSelect: true,
    centerMode: false,
    vertical: true,
});
$('#company').slick({
    slidesToShow: 1,
    slidesToScroll: 1,

    infinite: true,
    prevArrow: '.company__arrleft',
    nextArrow: '.company__arrright',


});


let contain = document.querySelector('#contain');
let menu = document.querySelector('.header__menu_mob ');
let list = document.querySelector('.header__menu_mob ');
contain.addEventListener('click', function(t) {
    contain.classList.toggle('change');


    menu.classList.toggle('actived');
});






$(document).ready(function() {
    $('#tab1').hover(
        function() {
            $('#col1').addClass('actived'); // Добавляем класс bounce
        },
        function() {
            $('#col1').removeClass('actived'); // Убираем класс bounce
        }
    )
});
$(document).ready(function() {
    $('#tab2').hover(
        function() {
            $('#col2').addClass('actived'); // Добавляем класс bounce
        },
        function() {
            $('#col2').removeClass('actived'); // Убираем класс bounce
        }
    )
});
$(document).ready(function() {
    $('#tab3').hover(
        function() {
            $('#col3').addClass('actived'); // Добавляем класс bounce
        },
        function() {
            $('#col3').removeClass('actived'); // Убираем класс bounce
        }
    )
});


// let tab1 = document.querySelector('#tab1');
// let tab2 = document.querySelector('#tab2');
// let tab3 = document.querySelector('#tab3');
// let col1 = document.querySelector('#col1');
// let col2 = document.querySelector('#col2');
// let col3 = document.querySelector('#col3');
// let intblock = document.querySelector('.intro');




// intblock.addEventListener('click', function(t) {
//     col1.classList.add('hidden');
//     col2.classList.add('hidden');
//     col3.classList.add('hidden');
// });
// tab1.addEventListener('click', function(t) {
//     col1.classList.remove('hidden');
//     col2.classList.add('hidden');
//     col3.classList.add('hidden');
// });
// tab2.addEventListener('click', function(t) {

//     col1.classList.add('hidden');
//     col2.classList.remove('hidden');
//     col3.classList.add('hidden');
// });
// tab3.addEventListener('click', function(t) {
//     col1.classList.add('hidden');
//     col3.classList.remove('hidden');
//     col2.classList.add('hidden');

// });