// Only load YouTube when someone selects Play, keeping the page lightweight.
const videoButton = document.querySelector('.video-preview');

if (videoButton) {
    videoButton.addEventListener('click', function () {
        const videoId = videoButton.dataset.video;
        const iframe = document.createElement('iframe');

        // Use standard YouTube so existing YouTube sign-in cookies can work.
        iframe.src = `https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0&playsinline=1`;
        iframe.title = 'Discover Syria video';
        iframe.allow = 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share';
        iframe.referrerPolicy = 'strict-origin-when-cross-origin';
        iframe.allowFullscreen = true;

        videoButton.replaceWith(iframe);
    });
}
