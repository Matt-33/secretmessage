export function displayShareLink(url) {
    // Met à jour la valeur de l'input avec l'URL 
    document.getElementById('share-url').value = url;
    // Affiche la partie contenant le lien de partage
    document.getElementById('share-link').style.display = 'block';
}

export function hideForm() {
    // Masque le formulaire de saisie du message secret
    document.getElementById('secret-form').style.display = 'none';
}