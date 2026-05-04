/*
    Pour executer la fonction seulement quand tous les elements sont loaded, duh !
 */
document.addEventListener('DOMContentLoaded', setupObservableClickHandler);

/**
 * Gets all visual HTML Elements in the page relative to the cookie counter.
 * Throws if one of them is not found.
 */
function getCookieButtonElement() {
    const cookieButton = document.querySelector<HTMLButtonElement>('#cookie-button');
    if (!cookieButton) {
        throw new DOMException("All elements in the page must be accessible.")
    }
    return cookieButton;
}

function setupObservableClickHandler() {
    const cookieButton = getCookieButtonElement();

    cookieButton.addEventListener('click', (e) => {
        console.log("CLickO! ")
    })
}