document.addEventListener('DOMContentLoaded', function() {
    const photos = document.querySelectorAll('.photo');
    let currentIndex = 0;

    function showPhoto(index) {
        photos.forEach((photo, i) => {
            photo.classList.toggle('active', i === index);
        });
    }

    document.getElementById('prev').addEventListener('click', function() {
        currentIndex = (currentIndex > 0) ? currentIndex - 1 : photos.length - 1;
        showPhoto(currentIndex);
    });

    document.getElementById('next').addEventListener('click', function() {
        currentIndex = (currentIndex < photos.length - 1) ? currentIndex + 1 : 0;
        showPhoto(currentIndex);
    });

    showPhoto(currentIndex);
});
