const headerFlow = () => {
    const initSearchPanel = () => {
        const headerPanel = document.querySelector('.js-header'),
            showPanelBtn = document.querySelector('.js-main-s'),
            hidePanelBtn = document.querySelector('.js-main-s-cancel'),
            searchField = document.querySelector('.js-main-s-field');

        if (!headerPanel || !showPanelBtn || !hidePanelBtn || !searchField)
            return;

        const showSearchPanel = () => {
            headerPanel.classList.add('is-search');
            searchField.focus();
        };
        const hideSearchPanel = () => {
            headerPanel.classList.remove('is-search');
            searchField.blur();
            setTimeout(() => {
                searchField.value = '';
            }, 300);
        };

        showPanelBtn.addEventListener('click', showSearchPanel);
        hidePanelBtn.addEventListener('click', hideSearchPanel);
    };

    const initServicePanel = () => {
        const showPanelBtn = document.querySelector('.js-services-btn');
        const panelItem = document.querySelector('.js-services-panel');
        const header = document.querySelector('.js-header');

        if (!showPanelBtn || !panelItem || !header) return;

        const showPanel = () => {
            panelItem.classList.add('is-shown');
        };

        const hidePanel = (e) => {
            if (
                !header.contains(e.relatedTarget) &&
                !panelItem.contains(e.relatedTarget)
            ) {
                panelItem.classList.remove('is-shown');
            }
        };

        showPanelBtn.addEventListener('click', showPanel);
        panelItem.addEventListener('mouseleave', hidePanel);
    };

    initSearchPanel();
    initServicePanel();
};

export default headerFlow;
