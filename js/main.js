import { encodeMessage } from './encryption/encryption.js';
import { displayShareLink, hideForm } from './ui/ui.js';
import { redirectToHome, redirectToMessage } from './navigation/navigation.js';

// Récupération de références aux éléments HTML nécessaires
const secretForm = document.getElementById('secret-form'); 
const shareUrlInput = document.getElementById('share-url'); 
const copyButton = document.getElementById('copy-button');

// Écouteur d'événement pour le soumission du formulaire
secretForm.addEventListener('submit', function(event) {
    event.preventDefault();

    // Récupération du message secret saisi par l'utilisateur
    const secretMessage = document.getElementById('secret-message').value;

    // Encodage du message secret
    const encodedMessage = encodeMessage(secretMessage);

    // Construction de l'URL partagée avec le message encodé
    const url = window.location.origin + '/message.html#' + encodedMessage;

    // Affichage du lien partagé sur la page
    displayShareLink(url);

    // Masquage du formulaire
    hideForm();
});

// Écouteur d'événement pour le clic sur le bouton de copie 
copyButton.addEventListener('click', function() {
    // Sélection du contenu du champ de saisie de l'URL partagée
    shareUrlInput.select();

    // Utilisation de l'API pour copier le texte
    navigator.clipboard.writeText(shareUrlInput.value)
        .then(() => {

            // Affichage d'une alerte indiquant que l'URL a été copiée avec succès
            alert('URL copied to clipboard!');
        })
        .catch((error) => {
            // En cas d'erreur affichage de l'erreur dans la console
            console.error('Failed to copy URL: ', error);
        });
});