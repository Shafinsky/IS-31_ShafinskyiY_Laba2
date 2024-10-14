
document.querySelectorAll('.photo-gallery').forEach(gallery => {
    const images = gallery.querySelectorAll('img');
    let currentIndex = 0;

    gallery.querySelector('.prev-photo').addEventListener('click', () => {
        images[currentIndex].classList.add('hidden');
        currentIndex = (currentIndex - 1 + images.length) % images.length;
        images[currentIndex].classList.remove('hidden');
    });

    gallery.querySelector('.next-photo').addEventListener('click', () => {
        images[currentIndex].classList.add('hidden');
        currentIndex = (currentIndex + 1) % images.length;
        images[currentIndex].classList.remove('hidden');
    });

    images.forEach((img, index) => {
        if (index !== 0) img.classList.add('hidden');
    });
});