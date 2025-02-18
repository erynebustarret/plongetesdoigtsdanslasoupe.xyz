// Sélectionner les éléments nécessaires
const explanationBox = document.getElementById('explanation-box');
const explanationContent = document.getElementById('explanation-content');

// Ajouter un événement au clic sur la boîte
explanationBox.addEventListener('click', () => {
    // Ouvrir ou fermer la boîte explicative en ajoutant ou retirant la classe 'open'
    explanationBox.classList.toggle('open');
});
