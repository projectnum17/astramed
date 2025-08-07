const pricesPageFlow = () => {
    const searchField = document.querySelector('.js-prices-field');
    const searchClear = document.querySelector('.js-prices-clear');
    const priceGroups = document.querySelectorAll('.js-prices-group');
    const noResults = document.querySelector('.js-no-results');

    if (!searchField || !searchClear || !priceGroups.length) return;

    const openService = document.querySelectorAll('.js-open-item');
    if (!openService.length) return;

    openService.forEach((box) => {
        box.addEventListener('click', () => {
            const isAlreadyOpen = box.classList.contains('is-open');

            if (isAlreadyOpen) {
                box.classList.remove('is-open');
                box.classList.add('is-closing');

                const onTransitionEnd = (e) => {
                    if (e.propertyName === 'align-items') {
                        box.classList.remove('is-closing');
                        box.removeEventListener(
                            'transitionend',
                            onTransitionEnd
                        );
                    }
                };

                box.addEventListener('transitionend', onTransitionEnd);
            } else {
                openService.forEach((el) => {
                    el.classList.remove('is-open', 'is-closing');
                });
                box.classList.add('is-open');
            }
        });
    });

    const filterServices = (query) => {
        const lowerQuery = query.trim().toLowerCase();
        const hasQuery = lowerQuery.length > 0;

        let totalMatches = 0;

        priceGroups.forEach((group) => {
            const items = group.querySelectorAll('.js-prices-card');
            let matchCount = 0;

            items.forEach((item) => {
                const clonedItem = item.cloneNode(true);
                clonedItem
                    .querySelectorAll('.js-appointment-open')
                    .forEach((el) => el.remove());

                const text = clonedItem.textContent.toLowerCase();
                const isMatch = text.includes(lowerQuery);

                item.style.display = isMatch || !hasQuery ? '' : 'none';
                if (isMatch) matchCount++;
            });

            totalMatches += matchCount;

            const openItem = group.querySelector('.js-open-item');

            if (!hasQuery) {
                group.style.display = '';
                if (openItem) {
                    openItem.classList.remove('is-open', 'is-closing');
                }
            } else {
                group.style.display = matchCount > 0 ? '' : 'none';
                if (openItem) {
                    if (matchCount > 0) {
                        openItem.classList.add('is-open');
                    } else {
                        openItem.classList.remove('is-open', 'is-closing');
                    }
                }
            }
        });

        if (noResults) {
            if (hasQuery && totalMatches === 0) {
                noResults.classList.add('is-show');
            } else {
                noResults.classList.remove('is-show');
            }
        }
    };

    searchField.addEventListener('input', (e) => {
        const query = e.target.value;
        const hasQuery = query.trim().length > 0;
        searchClear.classList.toggle('is-shown', hasQuery);
        filterServices(query);
    });

    searchClear.addEventListener('click', () => {
        searchField.value = '';
        searchField.focus();
        searchClear.classList.remove('is-shown');
        filterServices('');
    });
};

export default pricesPageFlow;
