export function displayShareLink(url) {
    document.getElementById('share-url').value = url;
    document.getElementById('share-link').style.display = 'block'; 
}

export function hideForm() {
    document.getElementById('secret-form').style.display = 'none';
}