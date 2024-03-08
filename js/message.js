import { decodeMessage } from './encryption/encryption.js';
import { redirectToHome } from './navigation/navigation.js';

const createMessageButton = document.getElementById('create-message-button');
if (createMessageButton) {
    createMessageButton.addEventListener('click', function() {
        redirectToHome();
    });
}

window.addEventListener('DOMContentLoaded', function() {
    const hash = window.location.hash.substring(1);
    const decodedMessage = decodeMessage(hash);
    document.getElementById('secret-message').textContent = decodedMessage;
});