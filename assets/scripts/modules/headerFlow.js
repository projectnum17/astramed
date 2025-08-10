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

    const initMobileMenu = () => {
        const openMenu = document.querySelector('.js-header-burger');
        const menuBox = document.querySelector('.js-mobile-menu');

        if (!openMenu || !menuBox) return;

        openMenu.addEventListener('click', () => {
            const isOpened = menuBox.classList.toggle('is-open');
            openMenu.classList.toggle('is-transform');

            if (!isOpened) {
                const allSubmenus = menuBox.querySelectorAll(
                    '.dd-menu-wrap.is-open'
                );
                allSubmenus.forEach((sm) => sm.classList.remove('is-open'));
            }
        });

        menuBox.addEventListener('click', (e) => {
            const submenuBtn = e.target.closest('.js-mobile-submenu');
            const backBtn = e.target.closest('.dd-menu-back');

            if (submenuBtn) {
                const submenuWrap = submenuBtn.nextElementSibling;
                if (submenuWrap) {
                    submenuWrap.classList.add('is-open');
                }
            }

            if (backBtn) {
                const ddWrap = backBtn.closest('.dd-menu-wrap');
                if (ddWrap) {
                    ddWrap.classList.remove('is-open');
                }
            }
        });
    };
    if (innerWidth < 1200) {
        initMobileMenu();
    }

    window.addEventListener('resize', () => {
        if (innerWidth < 1200) {
            initMobileMenu();
        }
    });

    initSearchPanel();
    initServicePanel();
};

export default headerFlow;
