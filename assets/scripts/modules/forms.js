const forms = () => {
    const forms = document.querySelectorAll('form');
    if (!forms.length) return;

    forms.forEach((form) => {
        const phoneField = form.querySelector('input[type="tel"]');
        if (phoneField) {
            phoneField.addEventListener('input', (e) => {
                const x = e.target.value
                    .replace(/\D/g, '')
                    .match(/(\d{0,3})(\d{0,3})(\d{0,2})(\d{0,2})/);

                e.target.value = !x[2]
                    ? x[1]
                    : '(' +
                      x[1] +
                      ') ' +
                      x[2] +
                      (x[3] ? ' ' + x[3] : '') +
                      (x[4] ? ' ' + x[4] : '');
            });
        }

        form.addEventListener('submit', (e) => {
            e.preventDefault();
            form.reset();
        });
    });
};

export default forms;
