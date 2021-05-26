import Swiper from 'swiper/bundle'

export function Sliders() {

    const sliderReviews = new Swiper('.reviews__slider', {
        navigation: {
            nextEl: '.reviews__slider .slider-nav__control--right',
            prevEl: '.reviews__slider .slider-nav__control--left',
        },
        slidesPerView: 3,
        spaceBetween: 16,
        breakpoints: {
            0: {slidesPerView: 1},
            640: {slidesPerView: 2},
            992: {slidesPerView: 3}
        }
    })
    
    const sliderExperts = new Swiper('.experts__slider', {
        navigation: {
            nextEl: '.experts__slider .slider-nav__control--right',
            prevEl: '.experts__slider .slider-nav__control--left',
        },
        slidesPerView: 3,
        spaceBetween: 16,
        breakpoints: {
            0: {slidesPerView: 2},
            640: {slidesPerView: 3},
            992: {slidesPerView: 4},
            1280: {slidesPerView: 3}
        }
    })

}