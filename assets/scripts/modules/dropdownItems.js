const dropdownItems = () => {
    const dropDownBoxes = document.querySelectorAll('.js-drop');

    if (!dropDownBoxes.length) return;

    dropDownBoxes[0].classList.add('is-open');

    dropDownBoxes.forEach((box) => {
        box.addEventListener('click', () => {
            const isOpen = box.classList.contains('is-open');
            dropDownBoxes.forEach((el) => el.classList.remove('is-open'));
            if (!isOpen) box.classList.add('is-open');
        });
    });
};

export default dropdownItems;
