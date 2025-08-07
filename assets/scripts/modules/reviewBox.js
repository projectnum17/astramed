const reviewBox = () => {
    const reviewItems = document.querySelectorAll('.js-review-box');
    const popup = document.querySelector('.js-review-modal');
    const popupBody = popup.querySelector('.js-review-body');
    const popupClose = popup.querySelector('.js-review-close');

    if (!reviewItems.length) return;

    reviewItems.forEach((box) => {
        const reviewTextEl = box.querySelector('.js-review-text');
        const reviewMore = box.querySelector('.js-review-popup');
        if (!reviewTextEl || !reviewMore) return;

        const fullText = reviewTextEl.textContent.trim();

        if (fullText.length > 200) {
            const shortText = fullText.slice(0, 200) + '...';
            reviewTextEl.textContent = shortText;
            reviewMore.style.display = '';
        } else {
            reviewMore.style.display = 'none';
        }

        reviewMore.addEventListener('click', () => {
            popup.classList.add('is-shown');
            document.body.classList.add('is-locked');

            const head = box.querySelector('.reviews-box__head').outerHTML;
            const text = `<p class="reviews-box__text">${fullText}</p>`;
            popupBody.innerHTML = head + text;
        });
    });

    const closePopup = () => {
        popup.classList.remove('is-shown');
        document.body.classList.remove('is-locked');
    };

    popupClose.addEventListener('click', closePopup);
    popup.addEventListener('click', (e) => {
        if (e.target === popup) closePopup();
    });

    popup.addEventListener('transitionend', () => {
        if (!popup.classList.contains('is-shown')) {
            popupBody.innerHTML = '';
        }
    });
};

export default reviewBox;
