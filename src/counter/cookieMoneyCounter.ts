import monsieurState from "../appstate/appState.ts";

document.querySelector<HTMLButtonElement>('#cookie-button')!
    .addEventListener("click", onClick);

function onClick() {
    monsieurState.increaseMoney();
}

function rerenderCount() {
    let cookieCounterSpan = document.querySelector("#money-span");
    if(cookieCounterSpan){
        cookieCounterSpan.innerHTML = monsieurState.cookieMoney.toString();
    }

}

monsieurState.attach(rerenderCount)