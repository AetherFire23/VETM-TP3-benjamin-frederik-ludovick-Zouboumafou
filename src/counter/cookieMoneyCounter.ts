import monsieurState from "../appstate/appState.ts";

document.querySelector<HTMLButtonElement>('#cookie-button')!
    .addEventListener("click", onClick);

function onClick() {
    monsieurState.increaseMoney();
}

function renderCookieMoney() {
    let cookieCounterSpan = document.querySelector("#money-span");
    if (cookieCounterSpan) {
        cookieCounterSpan.innerHTML = monsieurState.cookieMoney.toString();
    }
}

function renderDonutDoughMoney() {
    let cookieCounterSpan = document.querySelector("#choco-money-span");
    if (cookieCounterSpan) {
        cookieCounterSpan.innerHTML = monsieurState.donutDoughMoney.toString();
    }
}


monsieurState.attach(renderCookieMoney)
monsieurState.attach(renderDonutDoughMoney)