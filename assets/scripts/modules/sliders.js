const sliders = () => {
    if (typeof Swiper === 'undefined') return;
    const doctorsSlider = () => {
        const sliderEl = document.querySelector('.js-doctors-slider');
        if (!sliderEl) return;

        const getAutoplay = () => {
            if (window.innerWidth < 768) {
                return {
                    delay: 3000,
                    disableOnInteraction: true,
                };
            }
            return false;
        };

        let swiper = new Swiper(sliderEl, {
            slidesPerView: 3,
            spaceBetween: 41,
            grabCursor: true,
            speed: 900,
            autoplay: getAutoplay(),
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

        window.addEventListener('resize', () => {
            const newAutoplay = getAutoplay();
            swiper.params.autoplay = newAutoplay;

            if (newAutoplay) {
                swiper.autoplay.start();
            } else {
                swiper.autoplay.stop();
            }
        });
    };

    const reviewsSlider = () => {
        const sliderEl = document.querySelector('.js-reviews-slider');
        if (!sliderEl) return;

        const getAutoplay = () => {
            if (window.innerWidth < 768) {
                return {
                    delay: 3000,
                    disableOnInteraction: true,
                };
            }
            return false;
        };

        let swiper = new Swiper(sliderEl, {
            slidesPerView: 3,
            spaceBetween: 40,
            grabCursor: true,
            speed: 900,
            autoplay: getAutoplay(),
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

        window.addEventListener('resize', () => {
            const newAutoplay = getAutoplay();
            swiper.params.autoplay = newAutoplay;

            if (newAutoplay) {
                swiper.autoplay.start();
            } else {
                swiper.autoplay.stop();
            }
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
        });
    };

    doctorsSlider();
    reviewsSlider();
    gallerySlider();
    licensesSlider();
};

export default sliders;
