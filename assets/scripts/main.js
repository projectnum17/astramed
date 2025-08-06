'use strict';

import forms from './modules/forms.js';
import appointmentModal from './modules/appointmentModal.js';
import videoObserver from './modules/videoObserver.js';

document.addEventListener('DOMContentLoaded', () => {
    forms();
    appointmentModal();
    videoObserver();
});
