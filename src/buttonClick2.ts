import monsieurState from "./appstate/appState.ts";

document.querySelector<HTMLButtonElement>('#cookie-button')!
    .addEventListener("click", onClick);

function onClick() {
    console.log("CLick222222! ")
    monsieurState.setMoney = 420;
    console.log(monsieurState.getMoney)
}
