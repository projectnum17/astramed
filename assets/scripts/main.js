'use strict';

import forms from './modules/forms.js';
import appointmentForm from './modules/appointmentForm.js';
import feedbackForm from './modules/feedbackForm.js';
import appointmentModal from './modules/appointmentModal.js';
import feedbackModal from './modules/feedbackModal.js';
import videoObserver from './modules/videoObserver.js';
import sliders from './modules/sliders.js';
import reviewBox from './modules/reviewBox.js';

document.addEventListener('DOMContentLoaded', () => {
    forms();
    appointmentForm();
    feedbackForm();
    appointmentModal();
    feedbackModal();
    videoObserver();
    sliders();
    reviewBox();
});
