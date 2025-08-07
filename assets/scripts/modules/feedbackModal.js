const feedbackModal = () => {
    const openTriggers = document.querySelectorAll('.js-feedback-open');
    if (!openTriggers.length) return;

    const appModal = document.querySelector('.js-feedback-modal');
    if (!appModal) return;

    const closeTrigger = appModal.querySelector('.js-feedback-close');
    const modalContent = appModal.querySelector('.js-feedback-box');

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

};

export default feedbackModal;
