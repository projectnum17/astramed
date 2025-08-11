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
            navigation: {
                prevEl: '.js-doctors-prev',
                nextEl: '.js-doctors-next',
            },
            pagination: {
                el: '.js-doctors-prog',
                type: 'progressbar',
            },
            breakpoints: {
                0: {
                    slidesPerView: 1.2,
                    spaceBetween: 8,
                },
                768: {
                    slidesPerView: 2,
                    spaceBetween: 20,
                },
                992: {
                    slidesPerView: 3,
                    spaceBetween: 20,
                },
                1199: {
                    slidesPerView: 3,
                    spaceBetween: 41,
                },
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
            navigation: {
                prevEl: '.js-reviews-prev',
                nextEl: '.js-reviews-next',
            },
            pagination: {
                el: '.js-reviews-prog',
                type: 'progressbar',
            },
            breakpoints: {
                0: {
                    slidesPerView: 1.2,
                    spaceBetween: 16,
                },
                768: {
                    slidesPerView: 2,
                    spaceBetween: 20,
                },
                992: {
                    slidesPerView: 3,
                    spaceBetween: 20,
                },
                1199: {
                    slidesPerView: 3,
                    spaceBetween: 40,
                },
            },
        });
    };

    const gallerySlider = () => {
        const sliderEl = document.querySelector('.js-gallery-carousel');
        if (!sliderEl) return;

        new Swiper(sliderEl, {
            slidesPerView: 3,
            spaceBetween: 20,
            grabCursor: true,
            speed: 900,
            navigation: {
                prevEl: '.js-gallery-prev',
                nextEl: '.js-gallery-next',
            },
            pagination: {
                el: '.js-gallery-prog',
                type: 'progressbar',
            },
            breakpoints: {
                0: {
                    slidesPerView: 1.2,
                    spaceBetween: 10,
                },
                768: {
                    slidesPerView: 2,
                    spaceBetween: 20,
                },
                1199: {
                    slidesPerView: 3,
                    spaceBetween: 20,
                },
            },
        });
    };

    const licensesSlider = () => {
        const sliderEl = document.querySelector('.js-licenses-slider');
        if (!sliderEl) return;

        new Swiper(sliderEl, {
            slidesPerView: 'auto',
            spaceBetween: 20,
            grabCursor: true,
            speed: 900,
            navigation: {
                prevEl: '.js-licenses-prev',
                nextEl: '.js-licenses-next',
            },
            pagination: {
                el: '.js-licenses-prog',
                type: 'progressbar',
            },
            breakpoints: {
                0: {
                    slidesPerView: 1,
                    spaceBetween: 10,
                },
                768: {
                    slidesPerView: 'auto',
                    spaceBetween: 20,
                },
                1199: {
                    slidesPerView: 'auto',
                    spaceBetween: 20,
                },
            },
        });
    };

    doctorsSlider();
    reviewsSlider();
    gallerySlider();
    licensesSlider();
};

export default sliders;
