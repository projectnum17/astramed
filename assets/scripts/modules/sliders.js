const sliders = () => {
    if (typeof Swiper === 'undefined') return;
    const doctorsSlider = () => {
        const sliderEl = document.querySelector('.js-doctors-slider');
        if (!sliderEl) return;

        new Swiper(sliderEl, {
            slidesPerView: 3,
            spaceBetween: 41,
            grabCursor: true,
            speed: 900,
            // autoplay: {
            //     delay: 3000,
            //     disableOnInteraction: true,
            // },
            navigation: {
                prevEl: '.js-doctors-prev',
                nextEl: '.js-doctors-next',
            },
            pagination: {
                el: '.js-doctors-prog',
                type: 'progressbar',
            },
        });
    };

    const reviewsSlider = () => {
        const sliderEl = document.querySelector('.js-reviews-slider');
        if (!sliderEl) return;

        new Swiper(sliderEl, {
            slidesPerView: 3,
            spaceBetween: 40,
            grabCursor: true,
            speed: 900,
            // autoplay: {
            //     delay: 3000,
            //     disableOnInteraction: true,
            // },
            navigation: {
                prevEl: '.js-reviews-prev',
                nextEl: '.js-reviews-next',
            },
            pagination: {
                el: '.js-reviews-prog',
                type: 'progressbar',
            },
        });
    };

    doctorsSlider();
    reviewsSlider();
};

export default sliders;
