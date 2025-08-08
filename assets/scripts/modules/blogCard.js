const blogCard = () => {
    const blogCards = document.querySelectorAll('.js-blog-card');
    if (!blogCards.length) return;

    blogCards.forEach((card) => {
        const cardTitle = card.querySelector('.js-blog-title');
        const cardText = card.querySelector('.js-blog-text');

        const fullTitle = cardTitle.textContent.trim();
        const fullText = cardText.textContent.trim();

        if (fullTitle.length > 50) {
            cardTitle.textContent = fullTitle.slice(0, 50) + '...';
        }

        if (fullText.length > 110) {
            cardText.textContent = fullText.slice(0, 110) + '...';
        }
    });
};

export default blogCard;
