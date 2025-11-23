// Wrap in an IIFE to avoid leaking globals
(function () {
    const containerImg = document.getElementById('container-img');
    if (!containerImg) {
        console.warn('Gallery: container with id "container-img" not found. Aborting image render.');
        return;
    }

    class GalleryImage {
        constructor(name, src, message) {
            this.name = name;
            this.src = src;
            this.message = message;
        }
    }

    const images = [
        new GalleryImage('Woman', './assets/beauti.webp', 'What it feels to be free?'),
        new GalleryImage('Feather', './assets/fly.jpg', 'We build our skills to freedom'),
        new GalleryImage('Parrot', './assets/parrot.jpg', 'The freedom repeats'),
        new GalleryImage('Fox', './assets/fox.jpeg', 'Wild life knows freedom'),
        new GalleryImage('River', './assets/river.jpg', 'Nature flows freely'),
        new GalleryImage('Stars', './assets/stars.jpg', 'The whole universe brights in freedom'),
        // duplicates preserved from original list
        new GalleryImage('Woman', './assets/beauti.webp', 'What it feels to be free?'),
        new GalleryImage('Feather', './assets/fly.jpg', 'We build our skills to freedom'),
        new GalleryImage('Parrot', './assets/parrot.jpg', 'The freedom repeats'),
        new GalleryImage('Fox', './assets/fox.jpeg', 'Wild life knows freedom')
    ];

    images.forEach(img => {
        const figure = `
            <figure class="img__element" tabindex="0">
                <img src="${img.src}" alt="${img.name}" loading="lazy" role="listitem" class="img__photo">
                <figcaption>${img.message}</figcaption>
            </figure>`;

        containerImg.insertAdjacentHTML('beforeend', figure);
    });

})();

