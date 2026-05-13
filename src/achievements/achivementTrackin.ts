/*
    If any currency is over 100; Show small screen.
 */

import appState from "../appstate/appState.ts";

appState.attach(rerender)
const monsieurModal = document.getElementById("modal-div")!;
const modalContent = document.getElementById("modal-content")!;
let wasMoneyAchivementShown = false;

function rerender() {
    handleShowTenModal();
}


function handleShowTenModal() {
    /*
    Exclude the life currency
 */
    const validCurrencies = appState.cookieCurrencies.filter(x => x.name !== "Oignon");

    if (validCurrencies.some(x => x.money > 10) && !wasMoneyAchivementShown) {
        wasMoneyAchivementShown = true;
        console.log("Over 10")

        modalContent.innerText = "Accumulation of wealth is a sin. (Achievement) "
        monsieurModal.style.display = "block";
        monsieurModal.style.opacity = "1";

        const expiresInMillis = 3000
        setTimeout(() => {

            monsieurModal.style.display = "none";
        }, expiresInMillis);

        for (let i = 0; i < 20; i++) {
            const nextTime = i * 25 + (expiresInMillis -500);
            setTimeout(() => {
                monsieurModal.style.opacity = String(Number(monsieurModal.style.opacity) - 0.2)
            }, nextTime);
        }
    }
}

