import monsieurState from "./appstate/appState.ts";

document.querySelector<HTMLButtonElement>('#cookie-button')!
    .addEventListener('click', (_) => {
        console.log("CLickO! ")
        monsieurState.setMoney = 69;
        console.log(monsieurState.getMoney)
    })