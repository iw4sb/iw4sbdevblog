const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightboxImg');


document.querySelectorAll('.clickable').forEach(img => {
    img.addEventListener('click', function() {
        lightbox.style.display = 'flex';
        lightboxImg.src = this.src;
        lightboxImg.alt = this.alt;
    });
});

// Function to close the lightbox
function closeLightbox() {
    lightbox.style.display = 'none';
}
