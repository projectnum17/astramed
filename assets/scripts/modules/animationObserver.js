const animateCount = (el, duration = 500) => {
    const targetStr = el.textContent.trim();
    const match = targetStr.match(/^(\d+)(\+)?$/);
    if (!match) return;

    const target = parseInt(match[1], 10);
    const suffix = match[2] || '';

    let current = 0;

    let step;
    if (target < 100) {
        step = 1;
    } else if (target < 1000) {
        step = 10;
    } else {
        step = 1000;
    }

    const totalSteps = Math.ceil(target / step);
    const stepDuration = duration / totalSteps;

    const increment = () => {
        current += step;
        if (current > target) current = target;

        el.textContent = current + suffix;

        if (current < target) {
            setTimeout(increment, stepDuration);
        } else {
            el.textContent = target + suffix;
        }
    };

    increment();
};

const animationObserver = () => {
    const animationElements = document.querySelectorAll('.js-animation');
    const animationBg = document.querySelectorAll('.js-animation-bg');
    const animationScale = document.querySelectorAll('.js-animation-scale');
    if (!animationElements.length && !animationBg.length && !animationScale.length) return;

    const observer = new IntersectionObserver(
        (entries, obs) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('_animated');

                    const counter = entry.target.querySelector(
                        '.js-animation-count'
                    );
                    if (counter) {
                        animateCount(counter);
                    }

                    obs.unobserve(entry.target);
                }
            });
        },
        {
            threshold: 0.1,
            // rootMargin: '0px 0px -10% 0px',
        }
    );

    animationElements.forEach((el) => observer.observe(el));
    animationBg.forEach((el) => observer.observe(el));
    animationScale.forEach((el) => observer.observe(el));
};

export default animationObserver;
