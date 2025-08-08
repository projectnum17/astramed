const articlePageFlow = () => {
    const videoWrapper = document.querySelector('.js-article-video');
    const playVideo = videoWrapper?.querySelector('.js-article-play');
    const videoItem = videoWrapper?.querySelector('video');
    const videoSource = videoItem?.querySelector('source');

    if (!videoWrapper || !videoItem || !videoSource) return;

    videoItem.removeAttribute('controls');

    const loadVideo = () => {
        if (videoSource.dataset.src && !videoSource.src) {
            videoSource.src = videoSource.dataset.src;
            videoItem.load();
        }
    };

    videoItem.addEventListener('play', () => {
        videoWrapper.classList.add('is-playing');
        videoItem.setAttribute('controls', '');
    });

    videoItem.addEventListener('pause', () => {
        videoWrapper.classList.remove('is-playing');
    });

    videoItem.addEventListener('ended', () => {
        videoWrapper.classList.remove('play');
        videoItem.removeAttribute('controls');
    });

    playVideo.addEventListener('click', () => {
        if (videoItem.paused) {
            loadVideo();
            videoItem.play();
        } else {
            videoItem.pause();
        }
    });
};

export default articlePageFlow;
