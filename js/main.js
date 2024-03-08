import { encodeMessage } from './encryption/encryption.js';
import { displayShareLink, hideForm } from './ui/ui.js';
import { redirectToHome, redirectToMessage } from './navigation/navigation.js';

const secretForm = document.getElementById('secret-form');
const shareUrlInput = document.getElementById('share-url');
const copyButton = document.getElementById('copy-button');

secretForm.addEventListener('submit', function(event) {
    event.preventDefault();
    const secretMessage = document.getElementById('secret-message').value;
    const encodedMessage = encodeMessage(secretMessage);
    const url = window.location.origin + '/message.html#' + encodedMessage;
    displayShareLink(url); 
    hideForm(); 
});

copyButton.addEventListener('click', function() {
    shareUrlInput.select();
    navigator.clipboard.writeText(shareUrlInput.value)
        .then(() => {
            alert('URL copied to clipboard!');
        })
        .catch((error) => {
            console.error('Failed to copy URL: ', error);
        });
});