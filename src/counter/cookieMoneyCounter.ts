import monsieurState from "../appstate/appState.ts";

document.querySelector<HTMLButtonElement>('#cookie-button')!
    .addEventListener("click", onClick);

function onClick() {
    monsieurState.increaseMoney();
}

function renderCookieMoney() {
    let cookieCounterSpan = document.querySelector("#money-span");
    if (cookieCounterSpan) {
        cookieCounterSpan.innerHTML = monsieurState.cookieCurrencies.find(x => x.name === "Normal")!.money.toString();
    }
}

function renderDonutDoughMoney() {
    let cookieCounterSpan = document.querySelector("#choco-money-span");
    if (cookieCounterSpan) {
        cookieCounterSpan.innerHTML = monsieurState.cookieCurrencies.find(x => x.name === "Donut")!.money.toString();
    }
}
function renderOignonDoughMoney() {
    let cookieCounterSpan = document.querySelector("#oignon-money-span");
    if (cookieCounterSpan) {
        cookieCounterSpan.innerHTML = monsieurState.cookieCurrencies.find(x=> x.name === "Oignon")!.money.toString();
    }
}


monsieurState.attach(renderCookieMoney)
monsieurState.attach(renderDonutDoughMoney)
monsieurState.attach(renderOignonDoughMoney)