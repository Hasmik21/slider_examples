window.addEventListener('load', function () {
    carouselRun();
}, false);

function carouselRun() {
    let carousel = document.querySelector("#carousel");
    let scene = document.querySelector("#slider");
    let carousel_items_Arrey = document.querySelectorAll(".carousel_item");
    let carousel_btn = document.querySelector("#carousel_btn");
    let n = carousel_items_Arrey.length;
    let curr_carousel_items_Arrey = 0;
    let theta = Math.PI * 2 / n;
    let interval = null;
    let autoCarousel = carousel.dataset.auto;

    setupCarousel(n, parseFloat(getComputedStyle(carousel_items_Arrey[0]).width));
    window.addEventListener('resize', function () {
        clearInterval(interval);
        setupCarousel(n, parseFloat(getComputedStyle(carousel_items_Arrey[0]).width));
    }, false);
    setupNavigation();


    function setupCarousel(n, width) {
        var apothem = width / (2 * Math.tan(Math.PI / n));
        scene.style.transformOrigin = `50% 50% ${- apothem}px`;

        for (i = 1; i < n; i++) {
            carousel_items_Arrey[i].style.transformOrigin = `50% 50% ${- apothem}px`;
            carousel_items_Arrey[i].style.transform = `rotateY(${i * theta}rad)`;
        }

        if (autoCarousel === "true") {
            setCarouselInterval();
        }
    };

    function setCarouselInterval() {
        interval = setInterval(function () {
            curr_carousel_items_Arrey++;
            scene.style.transform = `rotateY(${(curr_carousel_items_Arrey) * -theta}rad)`;
        }, 3000);
    };

    function setupNavigation() {
        carousel_btn.addEventListener('click', function (e) {
            e.preventDefault();
            var target = e.target;

            if (target.classList.contains('next')) {
                curr_carousel_items_Arrey++;
            } else if (target.classList.contains('prev')) {
                curr_carousel_items_Arrey--;
            }
            clearInterval(interval);
            scene.style.transform = `rotateY(${curr_carousel_items_Arrey * -theta}rad)`;

            if (autoCarousel === "true") {
                setTimeout(setCarouselInterval(), 3000);
            }
        }, true);
    }
};