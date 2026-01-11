document.addEventListener('DOMContentLoaded', function () {
    new Splide('.splide', {
        type: 'loop',
        perPage: 2,
        rewind: true,
        drag: 'free',
        autoplay: true,
        interval: 3000,
        pauseOnHover: true,
        breakpoints: {
            768: {
                perPage: 1,
            },
        },
    }).mount();
});
