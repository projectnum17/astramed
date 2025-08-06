const appointmentModal = () => {
    const openTriggers = document.querySelectorAll('.js-appointment-open');
    if (!openTriggers.length) return;

    const appModal = document.querySelector('.appointment-modal');
    if (!appModal) return;

    const closeTrigger = appModal.querySelector('.js-appointment-close');
    const modalContent = appModal.querySelector('.js-appointment-box');

    const openModal = () => {
        appModal.classList.add('is-shown');
        document.body.classList.add('is-locked');
    };

    const closeModal = () => {
        appModal.classList.remove('is-shown');
        document.body.classList.remove('is-locked');
    };

    openTriggers.forEach((trigger) => {
        trigger.addEventListener('click', openModal);
    });

    closeTrigger.addEventListener('click', closeModal);

    appModal.addEventListener('click', (e) => {
        if (!modalContent.contains(e.target)) {
            closeModal();
        }
    });

    const updateStyledSelect = (select, styledSelect, list, value) => {
        const option =
            select.querySelector(`option[value="${value}"]`) ||
            select.options[0];
        const li =
            list.querySelector(`li[rel="${value}"]`) ||
            list.querySelector('li');

        styledSelect.textContent = option ? option.text : '';
        styledSelect.classList.toggle('placeholder', value === '' || !value);

        list.querySelectorAll('.is-selected').forEach((el) =>
            el.classList.remove('is-selected')
        );
        if (li) li.classList.add('is-selected');
    };

    const lightweightDropdown = (selectElement) => {
        if (!selectElement || !(selectElement instanceof HTMLSelectElement))
            return;

        const numberOfOptions = selectElement.options.length;
        if (numberOfOptions === 0) return;

        selectElement.classList.add('select-hidden');

        const wrapper = document.createElement('div');
        wrapper.className = 'select-wrap';

        selectElement.parentNode.insertBefore(wrapper, selectElement);
        wrapper.appendChild(selectElement);

        const styledSelect = document.createElement('div');
        styledSelect.className = 'select-styled placeholder';
        wrapper.appendChild(styledSelect);

        const list = document.createElement('ul');
        list.className = 'select-options hidden';
        wrapper.appendChild(list);

        for (let i = 0; i < numberOfOptions; i++) {
            const option = selectElement.options[i];
            const li = document.createElement('li');
            li.textContent = option.text || '';
            li.setAttribute('rel', option.value);
            list.appendChild(li);
        }

        updateStyledSelect(
            selectElement,
            styledSelect,
            list,
            selectElement.value
        );

        styledSelect.addEventListener('click', (e) => {
            e.stopPropagation();

            document.querySelectorAll('.select-styled.active').forEach((el) => {
                if (el !== styledSelect) {
                    el.classList.remove('active');
                    el.nextElementSibling?.classList.replace('show', 'hidden');
                }
            });

            styledSelect.classList.toggle('active');
            list.classList.toggle('hidden');
            list.classList.toggle('show');
        });

        list.addEventListener('click', (e) => {
            if (e.target.tagName !== 'LI') return;

            const selectedValue = e.target.getAttribute('rel');
            selectElement.value = selectedValue;
            updateStyledSelect(
                selectElement,
                styledSelect,
                list,
                selectedValue
            );

            styledSelect.classList.remove('active');
            list.classList.replace('show', 'hidden');

            selectElement.dispatchEvent(new Event('change'));
        });

        selectElement.addEventListener('change', () => {
            updateStyledSelect(
                selectElement,
                styledSelect,
                list,
                selectElement.value
            );
        });
    };

    const selectedItems = document.querySelectorAll('.js-select');
    selectedItems.forEach((select) => lightweightDropdown(select));

    document.addEventListener('click', () => {
        document.querySelectorAll('.select-styled.active').forEach((styled) => {
            styled.classList.remove('active');
            styled.nextElementSibling?.classList.replace('show', 'hidden');
        });
    });

    const form = document.querySelector('.js-appointment-form');
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        form.reset();
        form.querySelectorAll('.js-select').forEach((select) => {
            select.dispatchEvent(new Event('change'));
        });
    });
};

export default appointmentModal;
