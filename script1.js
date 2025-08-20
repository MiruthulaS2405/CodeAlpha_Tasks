const galleryImages = document.querySelectorAll('.gallery img');
    const lightbox = document.getElementById('lightbox');
    const lightboxImg = document.getElementById('lightbox-img');
    let currentIndex = 0;
    galleryImages.forEach((img, index) => {
      img.addEventListener('click', () => {
        lightbox.style.display = 'flex';
        lightboxImg.src = img.src;
        currentIndex = index;
      });
    });
    function closeLightbox() {
      lightbox.style.display = 'none';
    }
    function changeSlide(step) {
      currentIndex += step;
      if (currentIndex < 0) currentIndex = galleryImages.length - 1;
      if (currentIndex >= galleryImages.length) currentIndex = 0;
      lightboxImg.src = galleryImages[currentIndex].src;
    }
    function filterImages(category) {
      galleryImages.forEach(img => {
        if (category === 'all' || img.dataset.category === category) {
          img.style.display = 'block';
        } else {
          img.style.display = 'none';
        }
      });
    }

