// Fonction pour encoder le message en Base64
export function encodeMessage(message) {
    return btoa(message);
}

// Fonction pour décoder le message depuis Base64
export function decodeMessage(encodedMessage) {
    return atob(encodedMessage);
}