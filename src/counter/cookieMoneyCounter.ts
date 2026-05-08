import monsieurState from "../appstate/appState.ts";

document.querySelector<HTMLButtonElement>('#cookie-button')!
    .addEventListener("click", onClick);

function onClick() {
    monsieurState.cookieMoney += 1;
}

function rerenderCount() {
    let cookieCounterSpan = document.querySelector("#money-span");
    if(cookieCounterSpan){
        cookieCounterSpan.innerHTML = String(monsieurState.cookieMoney);
    }

}

monsieurState.attach(rerenderCount)