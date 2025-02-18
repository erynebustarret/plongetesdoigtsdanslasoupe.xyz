// Récupérer toutes les images de la spirale
const spiralImages = document.querySelectorAll('.spiral-image');

// Ajouter un événement de survol pour chaque image
spiralImages.forEach(image => {
    image.addEventListener('mouseover', () => {
        const currentImage = image.style.backgroundImage;
        const newImage = currentImage === 'url("image1.png")' ? 'url("image2.png")' : 'url("image1.jpg")'; // Change ici selon ton besoin
        image.style.backgroundImage = newImage;
    });
});
