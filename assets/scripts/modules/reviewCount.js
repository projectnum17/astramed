const reviewCount = (selector) => {
    const totalValue = document.querySelector('#totalReviews');
    const wordElem = document.querySelector('#totalReviewsText');
    const reviewBoxes = document.querySelectorAll(selector);

    if (!reviewBoxes.length || !totalValue || !wordElem) return;

    const count = reviewBoxes.length;

    totalValue.textContent = count;

    const getReviewWord = (num) => {
        const lastTwo = num % 100;
        const lastOne = num % 10;

        if (lastTwo >= 11 && lastTwo <= 14) return 'відгуків';
        if (lastOne === 1) return 'відгук';
        if (lastOne >= 2 && lastOne <= 4) return 'відгуки';
        return 'відгуків';
    };

    wordElem.textContent = getReviewWord(count);
};

export default reviewCount;
