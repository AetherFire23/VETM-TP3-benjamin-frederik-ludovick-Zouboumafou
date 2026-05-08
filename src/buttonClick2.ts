import appState from "./appstate/appState.ts";

document.querySelector<HTMLButtonElement>('#cookie-button')!
    .addEventListener("click", onClick);

function onClick() {
    console.log("CLick222222! ")
    appState.setMoney = 420;
    console.log(appState.getMoney)
}

function rerenderCount() {
    console.log("papapapapapappapapap")
    document.getElementById("hp-div")!.innerText = "5";
}

appState.attach(rerenderCount)