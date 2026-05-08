import appState from "./appstate/appState.ts";

document.querySelector<HTMLButtonElement>('#cookie-button')!
    .addEventListener('click', (_) => {
        console.log("CLickO! ")
        appState.setMoney = 69;
        console.log(appState.getMoney)
    })