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


<div id="pdf-viewer"></div>
  <div class="nav-buttons">
    <button id="prev">Précédent</button>
    <button id="next">Suivant</button>
  </div>

  <script src="https://cdnjs.cloudflare.com/ajax/libs/pdf.js/2.11.338/pdf.min.js"></script>
  <script>
    const pdfViewer = document.getElementById('pdf-viewer');
    const prevButton = document.getElementById('prev');
    const nextButton = document.getElementById('next');

    let pdfDoc = null;
    let currentPage = 1;
    let totalPages = 0;

    const loadPDF = (url) => {
      pdfjsLib.getDocument(url).promise.then(pdf => {
        pdfDoc = pdf;
        totalPages = pdf.numPages;
        renderPage(currentPage);
      });
    };

    const renderPage = (pageNum) => {
      pdfDoc.getPage(pageNum).then(page => {
        const canvas = document.createElement('canvas');
        const ctx = canvas.getContext('2d');
        const viewport = page.getViewport({ scale: 1 });
        canvas.height = viewport.height;
        canvas.width = viewport.width;

        pdfViewer.innerHTML = ''; // Clear previous page
        pdfViewer.appendChild(canvas);

        page.render({ canvasContext: ctx, viewport: viewport }).promise;
      });
    };

    prevButton.addEventListener('click', () => {
      if (currentPage > 1) {
        currentPage--;
        renderPage(currentPage);
      }
    });

    nextButton.addEventListener('click', () => {
      if (currentPage < totalPages) {
        currentPage++;
        renderPage(currentPage);
      }
    });

    // Charger ton premier PDF
    loadPDF('votre-fichier1.pdf');

const pdfFiles = ['fichier1.pdf', 'fichier2.pdf', 'fichier3.pdf'];  // Liste des fichiers PDF
let currentPDFIndex = 0;

const loadPDF = (index) => {
  const url = pdfFiles[index];
  pdfjsLib.getDocument(url).promise.then(pdf => {
    pdfDoc = pdf;
    totalPages = pdf.numPages;
    currentPage = 1;  // Réinitialiser à la première page du nouveau PDF
    renderPage(currentPage);
  });
};

prevButton.addEventListener('click', () => {
  if (currentPDFIndex > 0) {
    currentPDFIndex--;
    loadPDF(currentPDFIndex);
  }
});

nextButton.addEventListener('click', () => {
  if (currentPDFIndex < pdfFiles.length - 1) {
    currentPDFIndex++;
    loadPDF(currentPDFIndex);
  }
});

loadPDF(currentPDFIndex);  // Charger le premier fichier PDF au démarrage

