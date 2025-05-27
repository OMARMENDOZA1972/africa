 document.addEventListener('DOMContentLoaded', () => {
            // Lógica para el lightbox (visor de imágenes)
            const sliderImages = document.querySelectorAll('.slider img');
            const lightboxOverlay = document.getElementById('lightboxOverlay');
            const lightboxImage = document.getElementById('lightboxImage');

            sliderImages.forEach(image => {
                image.addEventListener('click', () => {
                    lightboxImage.src = image.src;
                    lightboxOverlay.classList.add('active');
                });
            });

            lightboxOverlay.addEventListener('click', () => {
                lightboxOverlay.classList.remove('active');
            });
        }); 