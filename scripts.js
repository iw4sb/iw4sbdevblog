const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightboxImg');

// Add click event listeners to images
document.querySelectorAll('.clickable').forEach(img => {
    img.addEventListener('click', function() {
        lightbox.style.display = 'flex'; // Show lightbox
        lightboxImg.src = this.src; // Set lightbox image source
        lightboxImg.alt = this.alt; // Set lightbox image alt text
    });
});

// Function to close the lightbox
function closeLightbox() {
    lightbox.style.display = 'none'; // Hide lightbox
}
