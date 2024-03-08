import { decodeMessage } from './encryption/encryption.js';
import { redirectToHome } from './navigation/navigation.js';

// Récupération de la référence au bouton "Create your secret message" 
const createMessageButton = document.getElementById('create-message-button');

// Vérification si le bouton existe
if (createMessageButton) {
    // Écouteur d'événement pour le clic sur le bouton
    createMessageButton.addEventListener('click', function() {
        // Redirection vers la page d'accueil (index.html)
        redirectToHome();
    });
}

// Écouteur d'événement lorsque le contenu de la page est chargé
window.addEventListener('DOMContentLoaded', function() {
    // Récupération du fragment(le message encodé)
    const hash = window.location.hash.substring(1);

    // Décodage du message
    const decodedMessage = decodeMessage(hash);

    // Affichage du message décodé 
    document.getElementById('secret-message').textContent = decodedMessage;
});