const showMoreContent = (elements, parentButton, button, visibleCount) => {
    const contentCards = document.querySelectorAll(elements);
    if (!contentCards.length) return;

    const parentBtn = document.querySelector(parentButton);
    if (!parentBtn) return;

    const showMoreBtn = parentBtn.querySelector(button);

    let hasHiddenContent = false;

    contentCards.forEach((card, index) => {
        if (index > visibleCount) {
            card.style.display = 'none';
            hasHiddenContent = true;
        }
    });

    if (hasHiddenContent) {
        parentBtn.style.display = '';
        showMoreBtn.addEventListener('click', () => {
            contentCards.forEach((card) => {
                card.style.display = '';
            });
            parentBtn.style.display = 'none';
        });
    } else {
        parentBtn.style.display = 'none';
    }
};

export default showMoreContent;
