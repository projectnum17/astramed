const feedbackForm = () => {
    const forms = document.querySelectorAll('.js-feedback-form');
    if (!forms.length) return;

    const ratingStars = () => {
        const ratingBlocks = document.querySelectorAll('.js-rating-stars');

        ratingBlocks.forEach((rating) => {
            const stars = rating.querySelectorAll('.js-rating-btn');
            const input = rating.querySelector('input[name="rating"]');

            let selected = 0;

            stars.forEach((star, idx) => {
                star.addEventListener('mouseenter', () => {
                    stars.forEach((s, i) => {
                        s.classList.toggle('is-hover', i <= idx);
                    });
                });

                star.addEventListener('mouseleave', () => {
                    stars.forEach((s) => s.classList.remove('is-hover'));
                });

                star.addEventListener('click', () => {
                    selected = idx + 1;
                    input.value = selected;

                    stars.forEach((s, i) => {
                        s.classList.toggle('is-colored', i < selected);
                    });
                });
            });
        });
    };

    const clearRatingStars = (formElement) => {
        const ratingBlocks = formElement.querySelectorAll('.js-rating-stars');

        ratingBlocks.forEach((rating) => {
            const stars = rating.querySelectorAll('.js-rating-btn');
            const input = rating.querySelector('input[name="rating"]');

            stars.forEach((star) => {
                star.classList.remove('is-colored', 'is-hover');
            });

            if (input) input.value = '0';
        });
    };

    forms.forEach((form) => {
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            form.reset();
            clearRatingStars(form);
        });
    });

    ratingStars();
};

export default feedbackForm;
