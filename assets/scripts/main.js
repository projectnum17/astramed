'use strict';

// components
import forms from './modules/forms.js';
import appointmentForm from './modules/appointmentForm.js';
import feedbackForm from './modules/feedbackForm.js';
import appointmentModal from './modules/appointmentModal.js';
import feedbackModal from './modules/feedbackModal.js';
import videoObserver from './modules/videoObserver.js';
import sliders from './modules/sliders.js';
import reviewBox from './modules/reviewBox.js';
import blogCard from './modules/blogCard.js';

// pages
import pricesPageFlow from './modules/pricesPage.js';
import articlePageFlow from './modules/articlePage.js';

// func
import showMoreContent from './modules/showMoreContent.js';
import reviewCount from './modules/reviewCount.js';

document.addEventListener('DOMContentLoaded', () => {
    // components
    forms();
    appointmentForm();
    feedbackForm();
    appointmentModal();
    feedbackModal();
    videoObserver();
    sliders();
    reviewBox();
    blogCard();
    // pages
    pricesPageFlow();
    articlePageFlow();

    // func
    showMoreContent('.js-offer-card', '.js-offer-parent', '.js-offer-more', 5);
    showMoreContent('.js-blog-card', '.js-blog-parent', '.js-blog-more', 8);
    showMoreContent(
        '.main--reviews .js-review-box',
        '.js-reviews-parent',
        '.js-reviews-more',
        7
    );
    reviewCount('.main--home .js-review-box');
    reviewCount('.main--reviews .js-review-box');
});
