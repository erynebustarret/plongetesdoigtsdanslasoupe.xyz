// Sélectionner les éléments nécessaires
const explanationBox = document.getElementById('explanation-box');
const explanationContent = document.getElementById('explanation-content');

// Ajouter un événement au clic sur la boîte
explanationBox.addEventListener('click', () => {
    // Ouvrir ou fermer la boîte explicative en ajoutant ou retirant la classe 'open'
    explanationBox.classList.toggle('open');
});

    function changeLanguage(lang) {
      // Change l'attribut lang dans la balise <html>
      document.documentElement.lang = lang;

      // Change le contenu de la page en fonction de la langue
      const text = {
        fr: {
          title: "Plonge tes doigts dans la soupe",
          content: "ceci est en francais"
        },
        en: {
          title: "Dip your fingers in the soup",
          content: "This is in English"
        }
      };

      document.getElementById("title").innerText = text[lang].title;
      document.getElementById("content").innerText = text[lang].content;
    }
