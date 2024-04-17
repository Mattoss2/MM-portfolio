document.addEventListener("DOMContentLoaded", function() {
  function openAllModals() {
    // Sélectionne toutes les modales et les ouvre
    document.querySelectorAll('.modal').forEach(modal => {
      modal.style.display = 'block';
      console.log('Modal opened:', modal.id); // Log pour déboguer l'ouverture de chaque modal
    });
  }

  function closeAllModals() {
    // Sélectionne toutes les modales et les ferme
    document.querySelectorAll('.modal').forEach(modal => {
      modal.style.display = 'none';
      console.log('Modal closed:', modal.id); // Log pour déboguer la fermeture de chaque modal
    });
  }

  // Ouverture de toutes les modales lorsque n'importe quelle skill-box est cliquée
  document.querySelectorAll('.skill-box').forEach(box => {
    box.addEventListener('click', openAllModals);
  });

  // Fermeture de toutes les modales lorsque le bouton de fermeture dans n'importe quelle modale est cliqué
  document.querySelectorAll('.closeModal').forEach(closeButton => {
    closeButton.addEventListener('click', function(event) {
      event.stopPropagation(); // Stop la propagation pour éviter les interactions indésirables
      closeAllModals(); // Ferme toutes les modales
    });
  });


  // Code pour le formulaire de contact
  var contactForm = document.getElementById('contact-form');
  contactForm.addEventListener('submit', function(event) {
    event.preventDefault();
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var message = document.getElementById('message').value;
    if(name && email && message) {
      console.log('Nom:', name, 'Email:', email, 'Message:', message);
      alert('Merci pour votre message!');
      contactForm.reset(); // Réinitialise le formulaire après l'envoi
    } else {
      alert('Veuillez remplir tous les champs.');
    }
  });
  var isTyping = false;

function startTypingEffect() {
    // Vérifie si l'effet de frappe est déjà en cours
    if (isTyping) return;
    isTyping = true;

    var typingElement = document.getElementById('typing');
    var typingText = "Suite à l'obtention d'une licence de langues j'ai décidé de me réorienter et de me lancer dans le monde de l'informatique, un monde qui m'a toujours intéressé en commençant par le développement web. " +
    "J'ai donc continué d'acquérir des compétences de mon côté comme des certifications en cybersécurité chez cisco ou mon titre rncp en développement web chez openclassrooms, me permettant de rendre mes compétences complémentaires et pouvoir évoluer dans ce domaine.";
    var i = 0;
    typingElement.textContent = ''; // Efface le contenu précédent

    function typeWriter() {
        if (i < typingText.length) {
            typingElement.textContent += typingText.charAt(i);
            i++;
            setTimeout(typeWriter, 100); // Ajustez pour la vitesse de frappe
        } else {
            isTyping = false; // Réinitialise le flag lorsque l'animation est terminée
        }
    }

    typeWriter();
  }

  // Activation de l'effet de frappe lors du clic sur le bouton
  var aboutToggle = document.getElementById('aboutToggle');
  var aboutContent = document.getElementById('aboutContent');

  aboutToggle.addEventListener('click', function() {
    if (aboutContent.style.display === "none" || aboutContent.style.display === "") {
        aboutContent.style.display = "block"; // Rend le contenu visible
        startTypingEffect(); // Déclenche l'effet de frappe
    } else {
        aboutContent.style.display = "none"; // Cache le contenu si le bouton est cliqué à nouveau
    }
  });

  // Code pour le défilement doux (smooth scrolling)
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      document.querySelector(this.getAttribute('href')).scrollIntoView({
        behavior: 'smooth'
      });
    });
  });
});