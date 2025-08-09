const pricesPageFlow = () => {
    const searchField = document.querySelector('.js-prices-field');
    const searchClear = document.querySelector('.js-prices-clear');
    const priceGroups = Array.from(
        document.querySelectorAll('.js-prices-group')
    );
    const noResults = document.querySelector('.js-no-results');

    if (!searchField || !searchClear || !priceGroups.length) {
        return;
    }

    const groups = priceGroups.map((group) => {
        const tabsParent = group.querySelector('.js-tabs-parent');
        const tabButtons = tabsParent
            ? Array.from(tabsParent.querySelectorAll('.js-tab-child'))
            : [];
        const tabBoxes = Array.from(group.querySelectorAll('.js-tab-box'));
        const flatItems = tabBoxes.length
            ? []
            : Array.from(group.querySelectorAll('.js-prices-card'));

        return { group, tabsParent, tabButtons, tabBoxes, flatItems };
    });

    const openService = document.querySelectorAll('.js-open-item');
    if (openService.length) {
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
                    openService.forEach((el) =>
                        el.classList.remove('is-open', 'is-closing')
                    );
                    box.classList.add('is-open');
                }
            });
        });
    }

    const setActiveTabForGroup = (gd, index) => {
        if (!gd || !gd.tabButtons.length || !gd.tabBoxes.length) return;
        if (index < 0 || index >= gd.tabBoxes.length) index = 0;
        gd.tabButtons.forEach((btn, i) =>
            btn.classList.toggle('is-active', i === index)
        );
        gd.tabBoxes.forEach((box, i) => {
            const shouldShow = i === index;
            box.classList.toggle('is-show', shouldShow);
            box.classList.toggle('is-fade', shouldShow);
            box.classList.toggle('is-hide', !shouldShow);
        });
    };

    groups.forEach((gd) => {
        if (!gd.tabsParent) return;
        gd.tabsParent.addEventListener('click', (e) => {
            const target = e.target.closest('.js-tab-child');
            if (!target) return;
            const index = gd.tabButtons.indexOf(target);
            if (index === -1) return;

            if (searchField.value.trim().length > 0) {
                searchField.value = '';
                searchClear.classList.remove('is-shown');
                filterServices('');
            }

            setActiveTabForGroup(gd, index);
        });
    });

    const filterServices = (query) => {
        const lowerQuery = query.trim().toLowerCase();
        const hasQuery = lowerQuery.length > 0;
        let totalMatches = 0;

        groups.forEach((gd) => {
            if (gd.tabBoxes.length) {
                let bestTabIndex = -1;
                let bestCount = 0;
                let groupHasMatches = false;

                gd.tabBoxes.forEach((box, boxIndex) => {
                    const items = Array.from(
                        box.querySelectorAll('.js-prices-card')
                    );
                    let matchCount = 0;

                    items.forEach((item) => {
                        const text = item.textContent.toLowerCase();
                        const isMatch = !hasQuery || text.includes(lowerQuery);
                        item.style.display = isMatch ? '' : 'none';
                        if (isMatch && hasQuery && text.includes(lowerQuery)) {
                            matchCount++;
                        }
                    });

                    if (matchCount > 0) {
                        groupHasMatches = true;
                        totalMatches += matchCount;
                        if (matchCount > bestCount) {
                            bestCount = matchCount;
                            bestTabIndex = boxIndex;
                        }
                    }
                });

                const groupOpenItem = gd.group.querySelector('.js-open-item');
                if (groupOpenItem) {
                    if (!hasQuery) {
                        groupOpenItem.classList.remove('is-open', 'is-closing');
                    } else {
                        groupOpenItem.classList.toggle(
                            'is-open',
                            groupHasMatches
                        );
                        groupOpenItem.classList.remove('is-closing');
                    }
                }

                if (!hasQuery) {
                    gd.group.style.display = '';
                    setActiveTabForGroup(gd, 0);
                    gd.tabBoxes.forEach((box) =>
                        Array.from(
                            box.querySelectorAll('.js-prices-card')
                        ).forEach((it) => (it.style.display = ''))
                    );
                } else {
                    if (bestTabIndex !== -1) {
                        gd.group.style.display = '';
                        setActiveTabForGroup(gd, bestTabIndex);
                    } else {
                        gd.group.style.display = 'none';
                    }
                }
            } else {
                let matchCount = 0;
                gd.flatItems.forEach((item) => {
                    const text = item.textContent.toLowerCase();
                    const isMatch = !hasQuery || text.includes(lowerQuery);
                    item.style.display = isMatch ? '' : 'none';
                    if (isMatch && hasQuery && text.includes(lowerQuery))
                        matchCount++;
                });

                const openItem = gd.group.querySelector('.js-open-item');
                if (openItem) {
                    if (!hasQuery) {
                        openItem.classList.remove('is-open', 'is-closing');
                    } else {
                        openItem.classList.toggle('is-open', matchCount > 0);
                        openItem.classList.remove('is-closing');
                    }
                }

                gd.group.style.display =
                    !hasQuery || matchCount > 0 ? '' : 'none';
                totalMatches += matchCount;
            }
        });

        if (noResults) {
            noResults.classList.toggle(
                'is-show',
                hasQuery && totalMatches === 0
            );
        }
    };

    searchField.addEventListener('input', (e) => {
        const query = e.target.value;
        searchClear.classList.toggle('is-shown', query.trim().length > 0);
        filterServices(query);
    });

    searchClear.addEventListener('click', () => {
        searchField.value = '';
        searchField.focus();
        searchClear.classList.remove('is-shown');
        filterServices('');
    });

    groups.forEach((gd) => {
        if (gd.tabBoxes.length) setActiveTabForGroup(gd, 0);
    });

    filterServices('');
};

export default pricesPageFlow;
