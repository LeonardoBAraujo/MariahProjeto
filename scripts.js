// document = ir no HTML
// querySelector = busca o que eu quiser que ele busque

document.addEventListener('DOMContentLoaded', () => {
    const album = document.querySelector('.album');
    let currentPage = 0;
    
    window.addEventListener('wheel', (event) => {
        if (event.deltaY > 0) {
            nextPage();
        } else {
            previousPage();
        }
    });

    function nextPage() {
        if (currentPage < album.children.length - 1) {
            currentPage++;
            updateAlbum();
        }
    }

    function previousPage() {
        if (currentPage > 0) {
            currentPage--;
            updateAlbum();
        }
    }

    function updateAlbum() {
        const height = album.children[0].clientHeight + 20; // Adding margin
        album.style.transform = `translateY(${-currentPage * height}px)`;
    }
});
