let counter = 0;
document.addEventListener('DOMContentLoaded', () => {
    const cookieButton = document.querySelector<HTMLButtonElement>('#cookie-button');
    const cookieCounter = document.querySelector<HTMLDivElement>('#counter')

    if (!cookieButton) return;
    if (!cookieCounter) return;

    cookieButton.addEventListener('click', (_) => {
        counter++;
        cookieCounter.innerText = counter.toString();
    });
});