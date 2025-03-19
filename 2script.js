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
            list: "Click sur les objets qui apparaissent, Étudies les éléments auquels ils renvoient",
            content: "Tentative de retranscription de mon processus créatif. J'aime beaucoup l'idée d'un sorte de vide poche à idées. Je réflechis constamment entourée de petit objets, je fais parfois des croquis mais peu, ils sont purement techniques. Ici, je me questionne sur mes chemins de réflexions plus que la façon dont je réflechis.  Ainsi, il me semble plus juste d'aborder ce travail comme un jeu, un paysage avec pleins de chemins et de neuds.",
            content:" Les différentes images viennent d'objets que j'ai personnellement glanés, puis scanés, ou des photographies avec mon tel. Ceci, auxquelles s'accumulent des références visuelles récoltées sur toutes sortes de plateforme (sources complètes dans la mesure du possible). ",
            footer:"(Soyez indulgents avec mes comptépences informatiques. J'apprends.)",
            footer:"Eryne Bustarret, 2025",
            
        },
        en: {
            title: "Dip your fingers in the soup",
            list: "Click on the links and images, Study the places to which they convey.",
            content: "This is a way to transcript my creative process. I really like the idea of a sort of vaccum pocket of ideas. I constantly think surrounded by my little found objects. Here, my reflexion is focused on my creating paths. Therefore, I think more this work as a game, a landscape made of many ways and knots. A tool a mediation to bring you closer.",
            content:" The different images come from objects I personnally glaned, than scaned, or photographs I took with my phone. This, to which are added visual, textual and musical references on various platforms. You'll find, if you look close enough, a biblio-sitography, that is to say a full referenced list of what I'm exhibing.",
            footer:"(Please be nice with my skills. I'm learning.)",
            footer:"Eryne Bustarret, 2025",
        }
      };

        
      document.getElementById("title").innerText = text[lang].title;
      document.getElementById("list").innerText = text[lang].list;
      document.getElementById("content").innerText = text[lang].content;
      document.getElementById("footer").innerText = text[lang].footer;
    }
