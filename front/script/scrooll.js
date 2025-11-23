//Smooth horizontal scrolling
function setupSmoothHorizontalScroll(containerSelector, speed = 0) {
    const containers = document.querySelectorAll(containerSelector);
    containers.forEach(container => {
        let scrollAmount = 0;
        let isScrolling = false;

        function smoothScroll() {
            isScrolling = true;
            // move a fraction of the remaining distance each frame
            container.scrollLeft += scrollAmount * 0.2;
            scrollAmount *= 0.8; // friction (0.8 = smooth deceleration)

            // stop when movement is very small
            if (Math.abs(scrollAmount) > 0.5) {
                requestAnimationFrame(smoothScroll);
            } else {
                isScrolling = false;

            }
        }

        container.addEventListener('wheel', (event) => {
            //          event.preventDefault();  it's preventing the scroll along the y axe of the page
            scrollAmount += event.deltaY * speed;
            if (!isScrolling) smoothScroll();
        });
    });
}
