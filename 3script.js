// Sélectionner l'image déclencheur et les images à afficher
const triggerImage = document.querySelector('.trigger-image');
const imagesToShow = document.querySelectorAll('.image-to-show');

// Fonction pour afficher/masquer les images
triggerImage.addEventListener('click', function() {
  imagesToShow.forEach(image => {
    // Alterner entre afficher/masquer les images à chaque clic
    if (image.classList.contains('hidden')) {
      image.classList.remove('hidden');
    } else {
      image.classList.add('hidden');
    }
  });
});

document.querySelector('.trigger-image').addEventListener('click', function() {
    const imagesToShow = document.querySelectorAll('.hidden-image-to-show');
    imagesToShow.forEach(image => {
        image.style.opacity = '1';
        image.style.visibility = 'visible';
        image.style.transition = 'opacity 0.3s ease, visibility 0.3s ease';
    });
});


const image = document.getElementById('movable-image');
let isDragging = false;
let startX, startY, offsetX = 0, offsetY = 0;

// Événements pour début et fin de glissement
image.addEventListener('mousedown', (e) => {
    isDragging = true;
    startX = e.clientX - offsetX;
    startY = e.clientY - offsetY;
});

document.addEventListener('mousemove', (e) => {
    if (isDragging) {
        offsetX = e.clientX - startX;
        offsetY = e.clientY - startY;
        // Appliquer uniquement le déplacement
        image.style.transform = `translate(${offsetX}px, ${offsetY}px)`;  // Déplacement de l'image
    }
});

document.addEventListener('mouseup', () => {
    isDragging = false;
});

// Ajout d'une rotation 3D au survol
image.addEventListener('mouseover', () => {
    image.style.transition = 'transform 1s';  // Rotation 3D fluide
    image.style.transform = `rotateY(360deg)`;  // Rotation sans affecter la position
});

image.addEventListener('mouseout', () => {
    image.style.transition = 'transform 1s';  // Rotation 3D fluide
    image.style.transform = `rotateY(0deg)`;  // Retour à l'état initial sans affecter la position
});
