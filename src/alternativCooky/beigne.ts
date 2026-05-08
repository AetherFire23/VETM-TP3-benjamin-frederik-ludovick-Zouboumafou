import appState from "../appstate/appState.ts";

document.addEventListener("DOMContentLoaded", () => {
    showCookie()

})

function showCookie() {
    appState.swapCookieByName("Normal");
    document.getElementById("cookie-button")!.className = "cookie-style";
    setTimeout(showDonut, 2000)
}


function showDonut() {
    appState.swapCookieByName("Donut");
    document.getElementById("cookie-button")!.className = "beigne-style";
    setTimeout(showCookie, 2000)
}
