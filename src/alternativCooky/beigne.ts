import appState from "../appstate/appState.ts";

document.addEventListener("DOMContentLoaded", () => {
    cookie()

})

function cookie() {
    console.log("cookie");
    appState.swapCookieByName("Normal");
    document.getElementById("cookie-button")!.className = "cookie-style";
    if (Math.floor(Math.random() * 8)===0) {//1 chance sur 8 d'avoir un oignon
        setTimeout(oignon, 10000);
    }
    else {
        setTimeout(donut, 10000);
    }
}


function donut() {
    console.log("donut");
    appState.swapCookieByName("Donut");
    document.getElementById("cookie-button")!.className = "beigne-style";
    setTimeout(cookie, 1000)
}


function oignon() {
    console.log("oignon")
    console.log("cookie")
    appState.swapCookieByName("Oignon");
    document.getElementById("cookie-button")!.className = "oignon-style";
    setTimeout(cookie, 1000)
}
